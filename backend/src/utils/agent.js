import { ChatGroq } from "@langchain/groq";
import {StateGraph,MessagesAnnotation } from "@langchain/langgraph";
import {ToolNode } from "@langchain/langgraph/prebuilt";
import { PromptTemplate } from "@langchain/core/prompts";
// import { ai_stock_suggestion_tool } from "./chatBotTools/ai_stock_suggestion.js";
// import { Market_news_tool } from "./chatBotTools/market_news.js";
// import { Risk_analysis_tool } from "./chatBotTools/risk_analysis.js";
import  {Portfolio_analysis_tool}  from "./chatBotTools/portfolio_analysis.js";
import { MemorySaver } from "@langchain/langgraph";

import dotenv from "dotenv";
dotenv.config();
const checkPointer = new MemorySaver();


//Tool list
const tools = [Portfolio_analysis_tool];
const toolNode = new ToolNode(tools);

/** ---------------------------------------------------------LLM initialization------------------------------------------------------------------------------------- */
//initialize main llm for response generation
const llm = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0, 
  }).bindTools(tools);
///initialize smaller llm for relevance checking and greeting response
const smallLLm = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0, 
  });

/** ---------------------------------------------------------Prompt to check relevance of user query------------------------------------------------------------------------------------- */
// Prompt template for output formatting
const promptForOutputFormatting = PromptTemplate.fromTemplate(`
You are a financial report formatter.

Your task is to take the following raw analysis text:
{text}

and beautify it for presentation in Markdown.

Guidelines:
- Convert *any tabular data* into **proper Markdown tables** (with | and --- headers).
- Add blank lines between sections for readability.
- Use emojis for section titles (📊, 💡, 📈, ⚠️, etc.).
- Keep alignment neat — no manual spaces or tabs.
- Return **only formatted Markdown**, no extra explanation.
`);


// Prompt template to check if user query is finance related, greeting, or non-finance
const promptToCheckRelevance = PromptTemplate.fromTemplate(`
You are a helpful and knowledgeable financial assistant. 
Your job is to classify the user's query into one of the following categories:

1. If the query is a casual greeting (e.g., "hi", "hello", "how are you"), respond only with "greeting".
2. If the query is related to finance, the stock market, portfolios, companies, or investments, respond only with "finance".
3. If the query is unrelated to finance or greetings, respond only with "non-finance".

User Query: {user_query}
`);

// Prompt template for greeting response
const promptToResponsedForGreet = PromptTemplate.fromTemplate(`
You are a friendly and engaging financial assistant. 
When the user sends a greeting, respond with a warm welcome message that encourages them to ask finance-related questions.

User Query: {user_query}
`);

/** ---------------------------------------------------------Graph Nodes/Functions------------------------------------------------------------------------------------- */


//output formatting function
async function formatOutput(state){
  const reply  = state.messages.at(-1).content;
  const formattedPrompt = await promptForOutputFormatting.format({ text: reply });
  console.log("Formatting output with prompt:", formattedPrompt);
  const res = await llm.invoke([
    { role: "system", content: formattedPrompt },
  ]);
  return res;
}


// Function to call the main LLM for generating responses
async function callModel(state) {
  console.log("Invoking LLM with state:");
  const reply = await llm.invoke(state.messages);
  return { messages: [...state.messages, reply] };
}

// default response for non-finance queries
function defaultResponse(state) {
  const userMessage = state.messages.at(-1).content;
  console.log("Non-finance query detected:");
  const reply = {
    role: "assistant",
    content:
      "📊 I’m specialized in finance, stock market, and investment-related topics. Please ask something in that area!",
  };
  return { messages: [...state.messages, reply] };
}
// greeting response function
async function greetingResponse(state) {
  const userMessage = state.messages.at(-1).content;
  console.log("Greeting detected:", userMessage);
  const formattedPrompt = await promptToResponsedForGreet.format({ user_query: userMessage });
  const res = await smallLLm.invoke([
    { role: "system", content: formattedPrompt },
  ]);

  return { messages: [...state.messages, res] };
}

// function to check user message for finance relevance
async function isRelevant(state) {
  const userMessage = state.messages.at(-1).content;
  console.log("Checking relevance of user message:", userMessage);
  const formattedPrompt = await promptToCheckRelevance.format({ user_query: userMessage });
  const res = await smallLLm.invoke([
    { role: "system", content: formattedPrompt },
    { role: "user", content: userMessage },
  ]);

  const output = res?.content?.trim().toLowerCase();

  if(output === "greeting") {
    console.log("Message is a greeting.");
    return "greeting";
  }
  if(output === "non-finance") {
    console.log("Message is not finance related.");
    return "default";
  }
  if(output === "finance") {
    console.log("Message is finance related.");
    return "agent";
  }
}
  

// function to decide if tools should be used
function shouldUseTools(state) {
  console.log("Inside shouldUseTools with state:", state);
  const lastMessage = state.messages[state.messages.length - 1];
  if(lastMessage.tool_calls && lastMessage.tool_calls.length > 0){
    console.log("Deciding to call tools...",);
    return 'tool_node';
  }
  return "formatOutput";
}

/** ---------------------------------------------------------Workflow Definition------------------------------------------------------------------------------------- */
const workFlow = new StateGraph(MessagesAnnotation)   
      .addNode("agent",callModel)
      .addNode("tool_node",toolNode)
      .addNode("default",defaultResponse)
      .addNode("greeting",greetingResponse)
      .addNode("formatOutput",formatOutput)

      .addConditionalEdges("__start__",isRelevant)
      .addConditionalEdges("agent",shouldUseTools)
      
      .addEdge("greeting","formatOutput")
      .addEdge("default","formatOutput")
      .addEdge("tool_node","agent")
      .addEdge("formatOutput","__end__")


/** ---------------------------------------------------------Compile Workflow------------------------------------------------------------------------------------- */
const app =  workFlow.compile({debug: true ,checkpointer: checkPointer});



export default app;
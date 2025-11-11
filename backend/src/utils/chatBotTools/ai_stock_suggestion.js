import { z } from "zod";
import { tool } from "@langchain/core/tools";

export const AI_stock_suggestion_tool = tool(
  // AI stock suggestion tool
  async (input,context) => {
    const userDetails = context.configurable.userDetails || {};
    const email_Id = userDetails.emailId || context.configurable.thread_id;
    const name = userDetails.name || "User";
  },
  {
    name: "AI_stock_suggestion_tool",
    description: "Provides stock suggestions.",
  }
);
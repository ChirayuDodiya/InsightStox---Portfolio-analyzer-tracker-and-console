# **Deliverable – 1**

Chart Paper & Ideation:

**Day zero thought for project:**

From Dalal Street to digital portfolios - India’s financial market is not just numbers—it’s the heartbeat of dreams, growth, and progress. In the World of stock market, most of investors who invest in stock market struggles with many problems like gathering and understanding the stock data, management and manipulation of investments they hold and analyzing the scattered information. Many investors are overwhelmed by complex data and are unable to derive meaningful conclusions, leading to confusion and suboptimal decision-making. Also, the absence of intuitive tools creates a gap in aligning investment strategies with financial goals. This lack of clarity and integration results in missed opportunities, and reduced confidence in managing personal investments.

**Formalization of the Solution:**

To solve these challenges, we come up with an idea to build a platform that brings all investment details together in one place. We want to build a system which helps investors track their portfolios in a simple and organized way. Which also provides clear insights, easy-to-read dashboards, and tools to analyze performance. We want to build platform designed to be secure, easy to use, and focused on helping investors save time, reduce confusion, and make better financial decisions.

**Platform Introduction:**

![](https://drive.google.com/uc?export=view&id=1BVzEIrAtxF6D76pE-7wDIwmCHNfI7LPq)

# **Analyze Smarter, Invest Better**

---

## **Chart Paper:**


![](https://drive.google.com/uc?export=view&id=1CPkmizEWxDHn_4IwG7uw_JosRzlPA63S)

---

## **Concept Poster:**


\- This section is about what is our basic conclusion about working forward from scratch till the integration of the platform.



![](https://drive.google.com/uc?export=view&id=1ewBfsvqhmvgKHrk4TW_dsI5jVW1Q6-wN)

---


# **Requirement Engineering:**
---
## **Stakeholders and End Users** 

### **END USERS**
**1. Individual Investors**


**Role**

These are the main users of the platform. They sign up (register), create their own investment portfolios, and keep track of the investment they own. They also use the platform to get AI-based suggestions that can guide their decisions about buying or selling assets. In short, they interact with almost every feature of the system to manage and grow their investments.

**Reason**

They are the primary target audience for whom the platform is built. The whole system is designed to make their investing easier, smarter, and more organized. Without these users, the platform does not exist and would serve no real purpose because there would be no one to use the tools, insights, or features provided. Their presence gives meaning to our platform.

### **STAKEHOLDERS**

**1. Development Team (Backend, Frontend, UI/UX, DBMS, SCRUM Master)**


**Role**

The development team consists of different groups such as backend developers, frontend developers, UI/UX designers, database developers and SCRUM master. Together, they are the builders of the platform.

**Reason**

They are identified because they are the core team that creates and maintains the entire platform where SCRUM master serves as process owner, developers serves as delivery owner. Without them, the system cannot be developed, improved, or kept running. They ensure that the platform grows over time, stays up-to-date, and continues to serve users effectively.


**2. Regulators / Compliance Authorities (e.g., SEBI, SEC, GDPR)**


**Role**

These are the “rule makers” of the financial world. They oversee compliance, transparency, and investor protection. Their guidelines and regulations influence how the platform must handle user data, display disclaimers, and provide advisory features. Including them ensures that the platform operates within legal boundaries, promotes trust, follows country-specific rules and reduces the risk of non-compliance penalties.

**Reason**

We included them because if our website does not follow these laws, it could get banned/fined or it could lead to legal issues and reduce user trust in the system. In short, regulations are important to keep our platform legal and trustworthy.


**3. API/Data Providers**


**Role**

These are the “data suppliers” for our website. They supply the stock market and financial data (e.g. prices, volumes, indices, historical data) needed by the platform. They ensure the accuracy, timeliness, and availability of information. Our website does not calculate these numbers on its own — it simply collects them from these providers.

**Reason**

They are stakeholders of the platform because our platform relies on their data for stock prices, company details, and market metrics. Their services ensure the platform can deliver real-time and accurate portfolio insights to users. That means the platform will not be useful to users in absence of them. That’s why they are very critical part of the system.





---

## **Elicitation Techniques**

### **1. Brainstorming**

**The Process**

The team held many brainstorming sessions, discussions, and carried out the process of identifying possible stakeholders. The guiding question which we discussed was:

 “Who will interact with the system directly or indirectly?”
In these sessions, we also shared our perspectives based on prior knowledge, research, and domain understanding. We reviewed the ideas and clarified to ensure everyone had a consistent understanding of the platform’s scope and objectives. We evaluated different user roles, possible interactions with the system, and other dependencies such as API/data providers and regulatory compliance requirements.

**Focus of the Discussion**

The discussion focused on different angles such as:
•	Who will use the platform daily?
•	Who will provide technical support or resources?
•	Who will ensure the platform runs legally and sustainably?
•	What will be feasible and what won’t?

**End Users and Stakeholders Identified:**

1) Individual Investors: Primarily investors who will use the platform to monitor, analyze, and gain insights into their portfolios. Advanced investors may rely on their own tools and may not prefer AI-based suggestions.
2) Development Team: Which directly interacts with the system and is responsible for designing, implementing, and maintaining the platform. They also ensure functionality, reliability, and usability.
3) API/Data Providers: As we discussed, we will require real time data, quality, availability, and integration for better analysis and services.
4) Regulators/Compliance Authorities: As they will ensure that the platform runs legally and adheres to regulations.


### **2. Interviews & Questionnaires with Potential Users**


**The Process**

The team carried out a basic study to understand what stock market investors really need. For this, we used two simple methods:
Interviews – The team talked directly with people who are already investing in stocks. Direct conversations with them provided information about their challenges, decision-making process, and preferences for portfolio management tools.
Questionnaires – A structured set of questions (survey via Google Forms) helped to collect more feedback from a group of people, which allowed the team to get more data about user needs and helped to validate things observed during interviews.
Focus of the Questions
In these discussions, investors who were already active in the stock market were asked a key question:
“What problems do you face while managing your investment portfolios?”


**Key Findings**

From their answers, the team discovered that investors often struggle with:
•	Handling too much complex data: Survey showed that investors face the problem due to large volume of market data and find it difficult to filter and interpret meaningful insights.
•	Understanding stock performance clearly: Even when data is available, investors often find it challenging to assess performance, volatility, and overall portfolio health.
•	Making confident decisions without guidance: Investors face uncertainty in making decisions without clear guidance or analysis.
•	Time Consumption: Survey also showed that almost half of the people find the entire process time consuming to manage their portfolio.
•	Half of the people shared that they are not that satisfied with the current methods they are using for investments.



Because of this, investors showed strong interest in:
•	AI-driven insights: Tool for analysis and suggestions that help users understand potential risks, diversification, and other important factors. 
•	Easy-to-understand: Dashboards, visualizations, and summaries that help users quickly understand portfolio status.

**End Users and Stakeholders Identified:**

1) Individual Investors: who are not much familiar with the stock market or not having much time to invest in it.
2) API/Data Providers: as users also want valuation of portfolio to change as per market scenario.
3) Regulators and compliance authorities: as users will trust the platform only if the content provided is official and certified by legal bodies.
















---


## **Functional, Non-Functional and Domain Requirements**

### **1. Functional Requirements (FRs)**

From elicitation done, we got an idea about what features should/must/can be present in our platform. The FRs are the services the system must provide which are listed below:
**•	User Authentication: Register, Login, Logout**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Brainstorming
**How Identified**

A fundamental requirement of the platform is secure user authentication, identified through analysis of existing systems, documentation, and brainstorming. This functionality is crucial to ensure account security and personalized access for users.
Additionally, brainstorming within the project team confirmed that without authentication, users cannot have a secure, personalized experience. 
Thus, Register, Login, and Logout were recognized as core features and are essential for both functional security and for delivering a reliable user experience.


**•	Stock Search: Search by Stock name.**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Brainstorming
3. 
**How Identified**

We checked existing platforms similar to our project. All of them let users search by stock name, so we saw that it is a common and important feature.
In our team discussion, we agreed that search by stock name makes the system simple for all users and serves as a useful feature.


**•	Real-time Price Tracking: Fetch live market data and update.**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Interviewing
3. Questionnaires
4. Brainstorming
5. 
**How Identified**

By reviewing other stock platforms, we noticed that all of them provide real-time updates on stock prices and portfolio values. This shows that users expect live information to make timely investment decisions.

Users mentioned that they want their portfolio to update automatically with current market prices, so they can track gains and losses without checking each stock manually.

During team discussions, we agreed that real-time tracking would make the platform more interactive and useful for users, helping them respond quickly to market changes.

Example: a user wants to see the updated value of their portfolio every few minutes during market hours. This scenario confirmed that real-time tracking is an essential feature.



**•	Watchlist Creation & Management: Create and maintain watchlists.**

**Elicitation Techniques Used:**
 
1. Analysis of Existing Systems 
2. Interviewing
3. Questionnaires
4. Brainstorming
   
**How Identified**

By reviewing other stock-tracking platforms, we observed that watchlists are a common feature. They allow users to keep an eye on potential investments and stocks separately from their main portfolios, showing that this feature is widely expected.

Users shared that they like to monitor stocks they are interested in before making a purchase. They emphasized that watchlists help them follow price changes, news, and performance without affecting their actual holdings.


During team discussions, we concluded that creating and maintaining watchlists is an essential feature to complement the portfolio, helping users make better investment decisions.


**•	Portfolio Creation & Management: Add/Remove stocks, track holdings**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Interviewing
3. Questionnaires
4. Brainstorming
5. 
**How Identified**

By reviewing other investment platforms, we noticed that most of them provide portfolio management as a main feature. This shows that users find it useful to keep all their stock details in one place, and it has become a standard expectation in such systems.

In surveys and interviews, users highlighted the need for a feature that allows them to add or remove stocks and track their holdings in a single place.

The above three ways of requirement elicitation concluded our discussion (brainstorming session) to keep this functionality.


**•	Visual Dashboard: Interactive charts, graphs, performance information**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Interviewing
3. Questionnaires
4. Brainstorming
   
**How Identified**

By reviewing other stock platforms, we observed that dashboards with charts and performance information are common. Users expect to see visual summaries of their portfolio and stock performance.
31% of people expressed that understanding detailed analysis is difficult and 45% of people agreed that a good and clear dashboard will help them to visualize their investment properly, which led us to understand that visually appealing and easy-to-read graphs are more suitable for presenting results.

In team discussions, we concluded that an interactive dashboard would improve usability and make the platform more engaging.

Example: a user wants to view a chart showing portfolio growth over the past month. This confirmed the need for a visual dashboard to support quick insights.



**•	Compare stocks: Compare stocks based on valid parameters**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Brainstorming
   
**How Identified**

During team discussions, we concluded that including a stock comparison module would help users analyze investments efficiently and make informed choices.

By Exploring the existing platforms, we got to know that this is also a common feature which generally helps users to compare and decide before investing.

For example, a user may want to compare some stocks they are thinking of investing in. These scenarios confirmed that a comparison feature would be good functionality to provide.


**•	AI-based portfolio suggestions: Recommendations, Risk alerts, and Portfolio optimization.**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Interviewing
3. Questionnaires
4. Brainstorming


**How Identified**

By reviewing other investment platforms, we noticed that some of them provide portfolio optimization features. These show that automated guidance is valuable for investors.

Articles and guides on investment strategies highlight the benefits of recommendations and risk alerts to improve decision-making and minimize losses.

45% of people expressed that they struggle due to lack of clarity in investment decisions, 61% of people from surveys and all the people from interviews expressed interest in getting suggestions for their portfolio, risk alerts, and advice to optimize their investments.

During team discussions, we focused on the fact that in this world where AI is evolving everywhere, it would be a great idea to safely and legally employ this AI utility as helpers for investments and thus, we concluded that AI-based portfolio suggestions would make the platform more helpful, interactive, and user-friendly.

Example: a user receives a recommendation to rebalance their portfolio or an alert when a stock’s risk level changes. This confirmed the need for AI-based guidance.


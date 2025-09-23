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
  
**How Identified**

We checked existing platforms similar to our project. All of them let users search by stock name, so we saw that it is a common and important feature.
In our team discussion, we agreed that search by stock name makes the system simple for all users and serves as a useful feature.


**•	Real-time Price Tracking: Fetch live market data and update.**

**Elicitation Techniques Used:**

1. Analysis of Existing Systems 
2. Interviewing
3. Questionnaires
4. Brainstorming

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


### **2. Non-Functional Requirements (NFRs)**
These describe the quality attributes of the system:

**1.	real-time updates (low latency for live data):** the platform must deliver live stock price and portfolio valuation updates with minimal (feasible) latency during market hours to ensure users always view current market conditions.
   
**Elicitation Techniques Used:**

 1. Questionnaires
 2. Interviewing
 3. Brainstorming
 4. Analysis of Existing Systems



**How Identified**

Through analysis of existing stock platforms, the team observed that investors rely on instant updates to make timely decisions. Questionnaires and interviews with potential users confirmed that delays in stock prices, portfolio values, or watchlist data would negatively affect decision-making.
During brainstorming sessions, the team concluded that low-latency real-time updates are necessary to meet user expectations and provide a responsive experience.


**2.	Scalability & Reliability:** The platform must scale to support growth in users, portfolios, and historical data without impacting performance. It should be reliable to cover consistent data processing, error handling, and recovery from failures, so that users can trust the system to deliver good performance.

**Elicitation Techniques Used:**

1. Brainstorming
   
**How Identified**	

These are two of the important pillars which help the platform to win user experience and these are necessary things to consider when building the platform which we discussed in the brainstorming sessions. 
Reliability refers to the operational capabilities of the platform and scalability refers to the maintainability with growing number of users and complexities. The goal should be to achieve them to the level which helps to build long term user adoption. 


**3.	Availability:**  The system must remain accessible and functional during NSE/BSE trading hours. Other than that, it must be available the entire day with minimal maintenance time.

**Elicitation Techniques Used:**

 1. Questionnaires
 2. Interviewing
 3. Analysis of Existing Systems

**How Identified**

System analysis showed that investors need constant access to their portfolios, watchlists, and live market data to make timely decisions.
Surveys and interviews confirmed that users expect the platform to be available most of the time, especially during trading hours, with minimal disruptions. This requirement directly affects the performance of the platform and that is why It is one of the necessary requirements to ensure. 


**4.	Security:** The platform must ensure that all user data is protected from unauthorized access. It must allow users to securely delete or withdraw their account and portfolio information (along with the consent they have provided) at any time.

**Elicitation Techniques Used:**

 1. Questionnaires
 2. Interviewing
 3. Brainstorming
 4. Analysis of Existing Systems

**How Identified**

Response from the questionnaires and interviews showed that the most common concern every user has is security of their data. 67% of people from the survey emphasized that data security is a must. 
We refer to the regulatory and data privacy documentation relevant here	 	which also suggested that privacy and security of the user data must be the	most important factor in the platform's integration process.


**5.	Usability:** The platform should have an intuitive interface that allows users to navigate easily. Clear UI, visualizations and guided explanations should minimize confusion and enhance the overall user experience.

**Elicitation Techniques Used:**

 1. Questionnaires
 2. Interviewing
 3. Brainstorming

**How Identified**

Many investors are not very experienced with technology and need a clear and simple interface to understand financial information. Surveys and interviews showed that presenting data with easy-to-read charts and visuals helps users to make better decisions.
Team discussions also revealed that complicated interfaces make it hard for users to know what actions to take. A simple and visual design improves usability, reduces confusion, and makes the platform more comfortable and effective for everyone.


**6.	Accuracy:**  The platform must ensure that all stock market data is sourced from reliable APIs and is accurate to use. AI-driven results should be accurate, consistent and free from errors to support informed decision-making.

**Elicitation Techniques Used:**

 1. Questionnaires
 2. Interviewing
 3. Brainstorming

**How Identified**

Questionnaires and interviews showed that 63% of people demanded that accuracy of the data sources and AI suggestions must be very high as this platform is going to provide important suggestions to the users and lack of accuracy can result in false information which can worsen the investment of users.
This way we got to know that it directly affects user’s trust, platform’s credibility and reputation. That is why it is one of the most necessary requirements to maintain.


### **3. Domain/Business Rules**

**1.	Real-Time Stock Data Integration & Compliance with API rules:** 
The system must integrate with NSE-approved data APIs to provide near real-time stock prices, and historical data which compiles stock exchange API rules.

**Elicitation Techniques Used:**

 1. Analysis of Existing Systems/Documentation.

**How Identified**

By reviewing existing stock platforms and their documentation, the team observed that APIs from stock exchanges have usage rules, including rate limits and licensing requirements. Analysis of these systems showed that exceeding limits can block access or violate compliance.
During team discussions, it was decided that our platform must follow these API rules to ensure uninterrupted access to market data. This confirmed the need to include API compliance as a domain requirement.



**2.	Adherence with financial standards:** All computations and performance metrics must follow recognized financial and legal standards.

**Elicitation Techniques Used:**

 1. Questionnaires
 2. Interviewing
 3. Brainstorming
 4. Analysis of Existing Systems/Documentation.

**How Identified**

Through brainstorming and reviewing similar platforms, the team noted that investors rely on common financial ratios and indicators to evaluate stocks.
Questionnaires and interviews with potential users confirmed that showing these metrics is critical for informed decision-making. Analysis of existing platforms demonstrated how standard indicators like P/E ratio, ROI, and market cap are commonly presented. Combining these observations, the team identified that supporting standard financial ratios and indicators is essential for the platform.


**3.	Compliance with Regulatory Bodies:** The platform must comply with rules and regulations set by financial authorities (e.g., SEBI) to ensure lawful and legal execution. This includes following disclosure norms, data handling policies, and restrictions on advisory practices. 

**Elicitation Techniques Used:**

 1. Interviewing
 2. Brainstorming
 3. Analysis of Existing Systems/Documentation.

**How Identified**

Interviews showed that user need the platform to follow the standard rules and norms announced by financial regulatory bodies like SEBI to ensure that what they are using is authorized and safe to use. 
By exploring the documentation of these regulatory bodies, we got to know that this requirement is also directly connected with legality and reputation of the platform that is the main factor behind user trust. Therefore, it concluded that this must be one of the important requirements.

---
## User Stories
---

### **User Story 1**

**Front of Card**	

As an unregistered user,
I want to register on the platform,
So that I can use the utilities of the application.	

**Back of Card**

Success:
- Fetch the details from the user and send a verification OTP.
- Validate the OTP given by the user.
- Valid user registered and referred to Login Page.

Failure:
- Display user already exists for existing user.
- Display “OTP invalid” in case of user entering invalid OTP.
- Display “OTP expired” in case the OTP is expired.


### **User Story 2**

**Front of Card**	

As an unregistered user,
I want to register directly from google registration,
So that I can register in a faster way.	

**Back of Card**

Success:
- Fetch the details from google authentication and validate it.
- Valid user registered and referred to Login Page.

Failure:
- Display user already exists for existing user.


### **User Story 3**

**Front of Card**	

As a registered user,
I want to login into the application,
So that I can access the application utilities.	

**Back of Card**

Success:
- Verify the credentials provided by the user.
- A valid user gets logged in and referred to the home page.

Failure:
- Display message according to the type of failure:
- “Incorrect Credentials.”
- “Unregistered user.”
- “Incorrect Password.”


### **User Story 4**

**Front of Card**	

As a registered user,
I want to login directly with Google login,
So that I can access the application utilities in directly 1 click.	

**Back of Card**

Success:
- Verify the credentials directly by google auth.
- A valid user gets logged in and referred to the home page.

Failure:
- Display message “Unregistered user” in case of user not registered.


### **User Story 5**

**Front of Card**	

As a registered user who has forgotten my password,
I want to request a password reset,
So that I can set a new password and regain access to my account.	

**Back of Card**

Success:
- Take email from the user and send OTP.
- Validate OTP and set the new Password provided by the user.

Failure:
- Display “User unregistered” if the user is not registered.
- Display “Invalid OTP” if the user has entered invalid OTP.
- Display “OTP expired” in case the OTP is expired.

### **User Story 6**

**Front of Card**

As a registered user,
I want to request a password reset,
So that I can set a new password to keep my password safe by updating.	

**Back of Card**

Success:
- Reset the Password and refer user to homepage

Failure:
- Display “old Password incorrect”.


### **User Story 7**

**Front of Card**	

As a registered user,
I want to securely log out from the platform,
So that I can ensure my account is safe when I am not using it.	

**Back of Card**

Success:
- Redirect the user to the login page.
- Display a confirmation message “You have been logged out successfully.”

Failure:
- If session termination fails, display “Logout unsuccessful. Please try again.”

  
### **User Story 8**

**Front of Card**	

As an Investor, 
I want the platform to reflect real-time stock data, 
so that I can make timely investment decisions.	

**Back of Card**

Success:
- Successful Real-Time Data Display (Market is Open)
- Final Closing Data Display (Market is Closed)

Failure:
- Display the last data available in case of data extraction failure with stating that it’s not the real time price and retry to fetch data.

### **User Story 9**

**Front of Card**	

As a registered user,
I want to search the stocks I want,
So that I can quickly find a specific stock to view its detailed information or add it to my portfolio.	

**Back of Card**

Success:
- displays a list of relevant stocks matching the user's query.

Failure:
- Display message “No results found” in case of result not found.
- In case of internal error try retrying the search on a given query.

  
### **User Story 10**

**Front of Card**	

As a user,
I want to maintain a watchlist of stocks I wanted,
So that I can track the stocks in which I am more interested.	

**Back of Card**

Success:
- Add the stocks the user has selected in the Watchlist.
- Display the stocks the user has in its watchlist to the user.

Failure:
- In case of empty watchlist access display “Watchlist is empty” and provide a search option.
- Already added stock should not allow add to watchlist option.


### **User Story 11**

**Front of Card**	

As a user,
I want to manage the stocks in my portfolio (add, edit, delete),
So that my performance analytics accurately reflect my real-world holdings.	

**Back of Card**

Success:
- The user can add, edit or delete stocks in his/her portfolio.
- On updating the portfolio its statistics metrics should also be updated.
- Prompt the user to confirm the stocks selected to delete.

Failure:
- Display “Invalid data” In case of anything that is not possible such as negative shares or any other problematic fields.
- Save the data in case of any network error.
- Should not be allowed to remove stock if its quantity is 0.


### **User Story 12**

**Front of Card**	

As a user,
I want to see a consolidated overview of my most important investment data on a single dashboard,
So that I can quickly assess my financial position and access key features without confusion.	

**Back of Card**

Success:
- Display the total portfolio value and easy to read visual analysis.
- There should be obvious and intuitive navigation to all major sections of the application.

Failure:
- The Dashboard should not crash in case of failure in loading some specific section, only that specific section should display error.
- New Users should not be shown an empty dashboard, It should show the functions to add stocks or portfolio.


### **User Story 13**

**Front of Card**	

As a user,
I want to select multiple stocks and compare their key performance metrics  side-by-side
So that I can make effective, data-driven investment decisions.	

**Back of Card**

Success:
- The User can select up to 3 stocks to compare on a dedicated comparison page.

Failure:
- If users try to navigate to comparison with less than 2 stocks then the system should show a clear message and give a search option.
- If the entered stock name is incorrect then accordingly a failure message must be displayed.


### **User Story 14**

**Front of Card**

As a user,
I want to receive suggestions and guidance on my stock allocation,
So that I can make strategic adjustments to better align my portfolio with my financial goals.	

**Back of Card**	

Success:
- Display the user's current asset allocation (e.g., 80% Tech, 20% Healthcare) directly beside a target allocation model that matches their risk profile.
- Display easy to understand suggestions such as: Your portfolio is heavily concentrated in the Technology sector. To align with a 'Moderate' profile, consider diversifying into other sectors like Financials or Industrials. To reach their specific goal.

Failure:
- When a user's risk profile is not available the system should prompt the user to Complete the risk Profile.
- When the user portfolio is empty it should display the user to add portfolio holdings to receive allocation insights.

  
### **User Story 15**

**Front of Card**	

As a user,
I want to see a visual breakdown of my portfolio’s diversification by sector, weightage etc.. and get suggestions to concentrate risks and rebalance my portfolio.
So that I can focus on risks and improve my portfolio growth.	

**Back of Card**	

Success:
- Display clear and interactive charts displaying portfolio allocation according to different categories.
- Display suggestions on concentrating the diversified portfolio to rebalance the portfolio.
- In the case of a well diversified portfolio display message to acknowledge the user about it.

Failure:
- In case of an empty portfolio it should prompt the user to add portfolio to analyze diversification.
- When Stock’s diversification data is unavailable it should be added to an uncategorized part of the chart.

  
### **User Story 16**

**Front of Card**	

As a user,
I want to get a clear assessment of my portfolio's overall risk and volatility, with data-driven suggestions for improvement,
So that I can make informed decisions to optimize my returns while managing my risk exposure.	

**Back of Card**

Success:
- The user is presented with a dedicated "Risk Analysis" dashboard that successfully visualizes risk and volatility assessment.
- The user is also presented with suggestions on actions to take.

Failure:
- If the user's portfolio is empty then the display prompts the user to build a portfolio.
- When data service for a specific metric fails, still load the dashboard with data unavailable messages.

  
### **User Story 17**

**Front of Card**	

As a user,
I want to see detailed performance of my portfolio,
So that I can understand how my investments are doing.	

**Back of Card**

Success:
- Detailed metrics (returns, gains/losses, trends) are shown.
- Data is clear and easy to understand.

Failure:
- If data is not available, show users “insufficient data” for proper performance analysis.

  
### **User Story 18**

**Front of Card**	

As a user,
I want to know if my portfolio is stable over short and long periods,
So that I can get suggestions if it is not stable.	

**Back of Card**

Success:
- Checks on portfolio performance over short and long periods are shown.
- Shows stability status clearly.
- Gives suggestions to improve if unstable.

Failure:
- Show error message: “Unable to calculate stability” and then guide for next step to be taken like if data is not available then ask for proper data.


### **User Story 19**

**Front of Card**

As a user,
I want the app to calculate taxation on stock sales (e.g. Short-Term Capital Gains (STCG) and Long-Term Capital Gains (LTCG), etc),
So that I know the tax for immediate sale or future sale.	

**Back of Card**	

Success:
- Shows tax for immediate sale and for sale after chosen period.

Failure:
- Show error if tax cannot be calculated due to missing data and ask the user to enter proper data.


### **User Story 20**

**Front of Card**	

As a regulatory authority,
I want the platform to provide disclaimers,
So that users understand investment risks.	

**Back of Card**	

Success:
- Disclaimer shown clearly before users begin interacting with the platform.
- Users acknowledge disclaimer and agree to all terms and conditions before proceeding.

Failure:
- Show warning and error if the user skips disclaimer acknowledgement or does not agree to terms and conditions.


### **User Story 21**

**Front of Card**	

As a data provider,
I want the platform to respect API rate limits,
So that my servers are not overloaded.	

**Back of Card**	

Success:
- Requests stay within allowed limits.
- All functionalities will work as they are supposed to work.

Failure:
- If a limit is crossed, the provider blocks or rejects requests.
- On reaching the limit, the currently running process will stop and users will be instructed to stop for a specific cooldown period due to overload of data. After that period of time as data can be fetched again, the user can start again.


### **User Story 22**

**Front of Card**	

As a user,
I want to see the specific data, sources, and reasoning behind every AI-generated recommendation,
So that I can verify the information, understand the context, and make a confident and well-informed decision.	

**Back of Card**	

Success:
- Display the reference and proof of all the recommendations that user got by AI

Failure:
- The system must not present a recommendation without an explanation or resources.

### **User Story 23**

**Front of Card**

As a user,
I want to filter the entire market of stocks based on a specific set of financial criteria,
So that I can discover new companies that match my personal investment strategy.	

**Back of Card**

Success:
- The system should display stocks according to a given query with some constraints such as in case of price fluctuates every second so the result should state that the list is as per a given time range so the user doesn’t make mistakes due to incorrect data.

Failure:
- When no stock matches the filter criteria then the system should prompt that there are no stock with given criteria.

---

## **POC for Sprint 1:**

### **1. Sprint Goal** 

The goal of Sprint 1 was to create the basic foundation of the InsightStox platform. The main focus was on designing (UI) and developing the initial pages of the application, including the Home Page, Login Page, and Registration Page. This sprint also aimed to build the backend for user authentication (login, register, logout) with proper database integration. 

At the same time, this sprint included research activities such as conducting interviews, surveys, and analyzing similar platforms. The purpose of these activities was to gather correct requirements and understand what users expect from such a platform. 

In summary, the goal was to make sure that both the technical structure (frontend + backend) and the requirement base (user needs) were ready for future sprints. 
 
### **2. Scope of POC (Features Implemented)**

During Sprint 1, the following features were included in the scope of the Proof of Concept: 

Frontend (UI/UX Design and Development): 

1. First, created UI designs (prototypes/mockups), and then implemented those designs as actual frontend code.  
2. Designed the Home Page showing the platform’s purpose and navigation. 
3. Designed the Login Page with input fields for username/email and password. 
4. Designed the Register Page for new users to create accounts. 

Backend (Server and Database): 

1. Implemented user registration – saving new user details in the database. 
2. Implemented user login – verifying user credentials and creating a login session. 
3. Implemented user logout – closing the session securely. 
4. Created and connected a database schema to store and manage user details. 
 
Research and Requirement Gathering: 

1. Conducted interviews with potential users to understand their needs and expectations. 
2. Carried out surveys to collect opinions about features users would like. 
3. Studied similar platforms to identify what features they provide and what improvements can be made in our platform. 
4. Collected and organized all findings to help in planning the next stages of development 
3. User Stories Delivered 

The following user stories were completed in Sprint 1: 

1. As a new user, I want to register on the platform, so that I can create an account and start using it. 

2. As a registered user, I want to log in securely, so that I can access my personal account and data. 

3. As a registered user, I want to securely log out from the platform, so that I can ensure my account is safe when I am not using it.
 

### **3. User Stories Delivered** 

The following user stories were completed in Sprint 1: 

1. As a new user, I want to register on the platform, so that I can create an account and start using it. 

2. As a registered user, I want to log in securely, so that I can access my personal account and data. 

3. As a registered user, I want to securely log out from the platform, so that I can ensure my account is safe when I am not using it.

 
### **4. Implementation Details (Tools Used)** 

UI & Frontend Implementation: 

1. Created clean and simple UI designs for the home page, login page and register page using Figma. 

2. Focused on making the design user-friendly and responsive using HTML, CSS, Java Script and ReactJS. 
 
 
Backend Implementation: 

1. Developed the database schema for storing user details securely in PostGreSQL. 

2. Coded the backend functionality for user registration, login, and logout using NodeJS. 

3. Ensured that login and logout sessions work correctly. 

Research Activities: 

1. Interviews were conducted with potential users to identify needs and challenges. 

2. Surveys Forms (Google Forms) were shared to collect feedback on what features users expect. 

3. Similar platforms were studied to find common features and possible improvements for InsightStox.

4. All results were documented and will guide the design of future sprints. 



### **5. Outcome of POC**

At the end of Sprint 1, the following outcomes were achieved: 

1. A working prototype of the Home Page, Login Page and Register Page was completed. 

2. The backend authentication system (login, register, logout) was successfully implemented. 

3. Valuable user insights were gathered from interviews, surveys, and individual research. 

4. The sprint validated both the technical feasibility (frontend + backend integration) and the user requirements for the platform. 
 


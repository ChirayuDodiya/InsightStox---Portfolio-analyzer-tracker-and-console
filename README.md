![InsightStox Logo](https://drive.google.com/uc?export=view&id=1BVzEIrAtxF6D76pE-7wDIwmCHNfI7LPq)

# InsightStox — Portfolio Analyzer, Tracker & Console

InsightStox is a web-based platform that helps investors track, manage, and analyze stock portfolios with AI-driven insights. The system combines real-time market data, personalized AI suggestions, portfolio visualization, and secure account management into a single, developer-friendly codebase.

---

## Demo / Overview
- **Core areas:** Portfolio management, Intelligent suggestions, User-centric insights  
- **Key user flows:** Register → Create portfolios → Add/Remove stocks → View dashboard & suggestions → Compare stocks  
- **Value:** Real-time monitoring, AI-backed recommendations, interactive visualizations, and secure authentication
---

## Tech Stack
- **Backend:** Node.js, Express.js  
- **Databases:** PostgreSQL (Neon), MongoDB  
- **Auth & Security:** JWT, bcrypt, secure cookies  
- **Utilities:** UAParser (device/browser fingerprinting)  
- **Testing:** Jest (unit tests)  
- **Dev Tools:** VS Code, Git, GitHub, pgAdmin, Postman, MongoDB Atlas
---

## ✨ My Contribution
- Implemented **JWT-based authentication** with secure cookie handling and bcrypt password hashing.  
- Built **active session tracking** across multiple devices, storing session meta (browser, OS, ip) in PostgreSQL.  
- Implemented **browser & OS fingerprinting** using UAParser and created a **security alert** system persisted to MongoDB.  
- Added **activity history logging** for key user actions (login, logout, suspicious activity).  
- Implemented controller → service → DB separation for maintainability.  
- Developed Jest unit tests for controllers, DB functions, and validation utilities.
- 
---

## Repo Structure (relevant)

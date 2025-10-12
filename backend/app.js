import express from "express";
import cookieParser from "cookie-parser";


const app = express();

app.use(express.json());
app.use(cookieParser())

import userRouter from "./src/routes/user.routes.js"
import dashBoardRouter from "./src/routes/dashBoard.routes.js"
app.use("/api/v1/users",userRouter)
app.use("/api/v1/dashboard",dashBoardRouter)
export { app };

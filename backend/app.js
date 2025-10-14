import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const allowedOrigins = [
    process.env.FRONTEND_LINK
];
const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // if using cookies or auth headers
  })
);
app.use(express.json());
app.use(cookieParser())

import userRouter from "./src/routes/user.routes.js"

app.use("/api/v1/users",userRouter)

export { app };

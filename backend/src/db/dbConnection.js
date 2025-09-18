import dotenv from "dotenv";
dotenv.config();

import { neon } from "@neondatabase/serverless";

let sql;
function connectDB() {
    try {
        sql = neon(process.env.DATABASE_URL);
        console.log("DB Connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}
export { sql };
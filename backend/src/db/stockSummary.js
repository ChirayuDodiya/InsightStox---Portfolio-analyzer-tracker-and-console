import { sql } from "./dbConnection.js";

export const getStockSummary = async (email) => {
    try {
        console.log("Fetching stock summary for email:", email);
        const result = await sql`SELECT * FROM "stock_summary" Where email=${email}`;
        return result;
    } catch (error) {
        console.log('Stock details error:', error);
        return null;
    }
};
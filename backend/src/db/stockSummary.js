import { sql } from "./dbConnection.js";

export const getStockSummary = async (email) => {
    try {
        const result = await sql`SELECT symbol,current_holding,yestarday_holding,spended_amount FROM "stock_summary" Where email=${email}`;
        return result;
    } catch (error) {
        console.log('Stock details error:', error);
        return null;
    }
};

export const updateStockSummary = async (email, symbol, newholding, current_price) => {
    try {
        const totalSpend = newholding * current_price;
        const result = await sql`
        INSERT INTO "stock_summary" (email, symbol, current_holding, spended_amount)
        VALUES (${email}, ${symbol}, ${newholding}, ${totalSpend})
        ON CONFLICT (email, symbol)
        DO UPDATE SET
            current_holding = "stock_summary".current_holding + ${newholding},
            spended_amount = "stock_summary".spended_amount + ${totalSpend}
        RETURNING symbol, current_holding, yesterday_holding, spended_amount;
        `;
        return result;
    } catch (error) {
        console.log('Error updating stock summary:', error);
        return null;
    }
};
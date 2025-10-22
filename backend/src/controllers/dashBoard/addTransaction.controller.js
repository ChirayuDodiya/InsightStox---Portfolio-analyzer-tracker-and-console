import { insertTransaction } from "../../db/insertTransaction.js";
import { updateStockSummary } from "../../db/stockSummary.js";

export const addTransaction = async (req, res) => {
    const { email, symbol, type, quantity,transaction_type } = req.body;
    if (!email || !symbol || !type || !quantity || !transaction_type) {
        return res.status(401).json({ success: false, message: "All fields are required" });
    }
    try {
        const insertResult = await insertTransaction(email, symbol, quantity, transaction_type, Date.now());
        if (!insertResult) {
            return res.status(500).json({ success: false, message: "Failed to add transaction" });
        }
        return res.status(200).json({ success: true, message: "Transaction added successfully" });
    }
    catch (error) {
        console.log('Add transaction error:', error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};
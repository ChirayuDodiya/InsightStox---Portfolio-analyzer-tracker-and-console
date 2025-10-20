import { getStockSummary } from "../../db/stockSummary.js";
import { getPrice } from "../../utils/getQuotes";
export const calculatePortfolio = async (req, res) => {
    const { email } = req.body;
    try {
        const stockSummary = await getStockSummary(email);
        if (!stockSummary || stockSummary.length === 0) {
            return res.status(404).json({ success: false, message: "No stock summary found for the user." });
        }
        const symbols = [...new Set(rows.map(r => r.symbol))];
        const quotes = await getPrice(symbols);
        if (!quotes) {
            return res.status(500).json({ success: false, message: "Failed to fetch stock prices." });
        }
        let priceData = {};
        for (const q of quotes) {
        if (q && q.symbol) {
            priceData[q.symbol] = {
            current: q.MarketPrice,
            yesterdayClose: q.close,
            currency: q.currency
            };
        }
        }
        let totalValuation = 0;
        let overallPL = 0;
        let todayPL = 0;
        for (const row of stockSummary) {
            const { symbol, current_holding, spended_amount, yesterday_holding } = row;
            const priceInfo = priceData[row.symbol];
            if (!priceInfo) continue;
            const currentValue = current_holding * data.current;
            const yesterdayValue = yesterday_holding * data.yesterdayClose;
            const overallProfit = currentValue - spended_amount;
            const todayProfit = currentValue - yesterdayValue;
            totalValuation += currentValue;
            overallPL += overallProfit;
            todayPL += todayProfit;
        }
        return res.status(200).json({
            success: true,
            totalValuation: totalValuation.toFixed(2),
            overallProfitLoss: overallPL.toFixed(2),
            todayProfitLoss: todayPL.toFixed(2),
        });
    } catch (error) {
        console.log('Portfolio calculation error:', error);
        return res.status(500).json({ success: false, message: "An error occurred while calculating the portfolio." });
    }
};

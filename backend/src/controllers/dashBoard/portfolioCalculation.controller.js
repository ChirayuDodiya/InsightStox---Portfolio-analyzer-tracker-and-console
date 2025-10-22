import { getStockSummary } from "../../db/stockSummary.js";
import { getPrice } from "../../utils/getQuotes.js";
import { stockPriceStore } from "../../utils/stockPriceStore.js";
export const calculatePortfolio = async (req, res) => {
    const { email } = req.body;
    try {
        const stockSummary = await getStockSummary(email);
        if (!stockSummary || stockSummary.length === 0) {
            return res.status(404).json({ success: false, message: "No stock summary found for the user." });
        }
        let priceData = stockPriceStore;
        let totalValuation = 0;
        let overallPL = 0;
        let todayPL = 0;
        let totalspending = 0;
        for (const row of stockSummary) {
            const { current_holding, spended_amount, yesterday_holding } = row;
            if(!priceData.get(row.symbol)){
                const q = await getPrice(row.symbol);
                if (!quotes) {
                    return res.status(500).json({ success: false, message: "Failed to fetch stock prices." });
                }
                priceData.add(row.symbol,{current: q.MarketPrice,
                yesterdayClose: q.close,
                currency: q.currency,
                expiresAt: Date.now()+60*1000});
            }
            const priceInfo = priceData.get(row.symbol);
            if (!priceInfo) continue;
            const currentValue = current_holding * data.current;
            const yesterdayValue = yesterday_holding * data.yesterdayClose;
            const overallProfit = currentValue - spended_amount;
            const todayProfit = currentValue - yesterdayValue;
            totalspending += spended_amount;
            totalValuation += currentValue;
            overallPL += overallProfit;
            todayPL += todayProfit;
        }
        return res.status(200).json({
            success: true,
            totalValuation: totalValuation.toFixed(2),
            overallProfitLoss: overallPL.toFixed(2),
            todayProfitLoss: todayPL.toFixed(2),
            ttodayProfitLosspercentage: ((todayPL / totalValuation) * 100).toFixed(2),
            overallProfitLosspercentage: ((overallPL / totalspending) * 100).toFixed(2)
        });
    } catch (error) {
        console.log('Portfolio calculation error:', error);
        return res.status(500).json({ success: false, message: "An error occurred while calculating the portfolio." });
    }
};

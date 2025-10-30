import { getStockSummary } from "../../db/stockSummary.js";
import { getPrice } from "../../utils/getQuotes.js";
import { stockPriceStore } from "../../utils/stockPriceStore.js";
export const calculatePortfolio = async (req, res) => {
    const { email } = req.user;
    try {
        const stockSummary = await getStockSummary(email);
        //console.log(stockSummary);
        if (!stockSummary || stockSummary.length === 0) {
            return res.status(404).json({ success: false, message: "No stock summary found for the user." });
        }
        let priceData = stockPriceStore;
        let totalValuation = 0;
        let overallPL = 0;
        let todayPL = 0;
        let totalspending = 0;
        for (const row of stockSummary) {
            const { current_holding, spended_amount, yestarday_holding } = row;
            if(!priceData.get(row.symbol)){
                const q = await getPrice(row.symbol);
                if (!q) {
                    return res.status(500).json({ success: false, message: "Failed to fetch stock prices." });
                }
                console.log(q);
                priceData.add(row.symbol,{current: q.MarketPrice||0,
                yesterdayClose: q.close||0,
                currency: q.currency,
                expiresAt: Date.now()+60*1000});
            }
            const data = priceData.get(row.symbol);
            if (!data) continue;
            const currentValue = current_holding * data.current;
            const yesterdayValue = yestarday_holding * data.yesterdayClose;
            const overallProfit = currentValue - spended_amount;
            const todayProfit = currentValue - yesterdayValue;
            console.log(data.yesterdayClose);
            totalspending += spended_amount;
            totalValuation += currentValue;
            overallPL += overallProfit;
            todayPL += todayProfit;
        }
        //console.log({totalValuation, overallPL, todayPL, totalspending});
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

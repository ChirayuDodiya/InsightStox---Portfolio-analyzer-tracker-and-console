import YahooFinance from "yahoo-finance2";
const yahooFinance = new YahooFinance()
export const getPrice = async (symbols) => {
    try {
        const result = await yahooFinance.quoteSummary(symbols, {
      modules: ["price", "summaryProfile"],
    });
        //console.log(result);

        return {
            symbol: result.price.symbol ?? null,
            MarketPrice: result.price.regularMarketPrice ?? 0,
            currency: result.price.currency ?? null,
            close: result.price.regularMarketPreviousClose ?? 0,
        };
    } catch (error) {
        console.log('Error fetching quotes:', error);
        return null;
    }
};
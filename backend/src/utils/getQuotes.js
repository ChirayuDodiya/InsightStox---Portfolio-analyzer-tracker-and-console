import yahooFinance from "yahoo-finance2";
export const getPrice = async (symbols) => {
    try {
        const result = await yahooFinance.quoteSummary(symbol, {
      modules: ["price", "summaryProfile"],
    });
        console.log(result);

        return result.map((item) => ({
            symbol: item.price.symbol ?? null,
            MarketPrice: item.price.regularMarketPrice ?? null,
            currency: item.price.currency ?? null,
            close: item.price.regularMarketPreviousClose ?? null,
        }));
    } catch (error) {
        console.log('Error fetching quotes:', error);
        return null;
    }
};
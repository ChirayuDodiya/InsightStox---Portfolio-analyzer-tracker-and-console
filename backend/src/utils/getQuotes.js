import yahooFinance from "yahoo-finance2";
export const getPrice = async (symbols) => {
    try {
        const result = await yahooFinance.quoteSummary(symbols, {
      modules: ["price", "summaryProfile"],
    });
        //console.log(result);

        return {
            symbol: result.price.symbol ?? null,
            MarketPrice: result.price.regularMarketPrice ?? null,
            currency: result.price.currency ?? null,
            close: result.price.regularMarketPreviousClose ?? null,
        };
    } catch (error) {
        console.log('Error fetching quotes:', error);
        return null;
    }
};
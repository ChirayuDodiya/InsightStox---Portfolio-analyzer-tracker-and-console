import yahooFinance from "yahoo-finance2";
export const getPrice = async (symbols) => {
    try {
        const result = await yahooFinance.quote(symbols);
        console.log(result);
        return result.map((item) => ({
            symbol: item.symbol ?? null,
            MarketPrice: item.regularMarketPrice ?? null,
            currency: item.currency ?? null,
            close: item.regularMarketPreviousClose ?? null,
        }));
    } catch (error) {
        console.log('Error fetching quotes:', error);
        return null;
    }
};
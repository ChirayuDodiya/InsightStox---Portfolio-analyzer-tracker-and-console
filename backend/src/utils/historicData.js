import yahooFinance from "yahoo-finance2";
export const getHistoricData = async (symbol, period1, period2, interval) => {
  try {
    const queryOptions = { period1, period2, interval };
    const result = await yahooFinance.historical(symbol, queryOptions);
    return result;
  } catch (error) {
    console.error("Error fetching historic data:", error);
    throw error;
  }
};
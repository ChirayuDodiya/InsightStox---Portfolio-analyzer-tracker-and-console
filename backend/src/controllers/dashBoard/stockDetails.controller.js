import YahooFinance from 'yahoo-finance2';
const yahooFinance = new YahooFinance()

const formatValue = (value, unit = '') => {
    if (typeof value === 'number') {
        // Simple conversion to fixed-point for cleaner display
        return `${value.toFixed(2)}${unit}`;
    }
    // Return original value if it's not a number (e.g., null, undefined, or string)
    return value; 
};

export const getFinancialDetails = async (req, res) => {
    const { ticker } = req.query; 

    if (!ticker) {
        return res.status(400).json({ success: false, message: 'Stock ticker is required.' });
    }

    const modules = [
        'price', 'summaryDetail', 'defaultKeyStatistics', 'financialData', 'balanceSheetHistoryQuarterly'
    ];

    try {
        const results = await yahooFinance.quoteSummary("TCS.NS", { modules });

        
        const stockData = {
            priceInfo: {
                currentPrice: results.price.regularMarketPrice,
                previousClose: results.price.regularMarketPreviousClose,
                dayLow: results.summaryDetail.dayLow,
                dayHigh: results.summaryDetail.dayHigh,
                volume: results.price.regularMarketVolume,
                marketCap: results.price.marketCap,
                change: results.price.regularMarketChange,
                changePercentage: results.price.regularMarketChangePercent,
                open: results.price.regularMarketOpen,
                fiftytwoWeekchange: results.defaultKeyStatistics['52WeekChange'],
            },

            fundamentals: {
                roceTTM: results.financialData.returnOnAssets, 
                roeTTM: results.financialData.returnOnEquity,
                peRatioTTM: results.summaryDetail.trailingPE,
                epsTTM: results.defaultKeyStatistics.trailingEps,
                pbRatio: results.summaryDetail.priceToBook,
                dividendYield: results.summaryDetail.dividendYield,
                // faceValue: results.summaryDetail.faceValue, //::TODO:: 
                bookValue: results.defaultKeyStatistics.bookValue,
                debtToEquity: results.financialData.debtToEquity,
            },

            // Financial Statements (TTM/MRQ data)
            financials: {
                // Income Statement
                revenueTTM: results.financialData.totalRevenue,
                revenuePerShare: results.financialData.revenuePerShare,
                grossProfitTTM: results.financialData.grossProfits,
                ebitda: results.financialData.ebitda,
                netIncome: results.financialData.netIncomeToShareholders,
                dilutedEPS: results.defaultKeyStatistics.dilutedEps,
                earningGrowthQuater: results.defaultKeyStatistics.earningsQuarterlyGrowth,

            },
            balenceSheet:{
                // Balance Sheet (MRQ) - Accessing the latest quarterly statement [0]
                totalCash: results.financialData.totalCash,
                totalCashPerShare: results.financialData.totalCashPerShare,
                totalDebt: results.financialData.totalDebt,
                deptToEquity: results.financialData.debtToEquity,
                currentRatioMRQ: results.financialData.currentRatio,
            },
            profitability:{
                // Profitability
                profitMargin: results.financialData.profitMargins,
                operatingMargin: results.financialData.operatingMargins,
                returnOnAssets: results.financialData.returnOnAssets,
                returnOnEquity: results.financialData.returnOnEquity,
            },
            cashFlow:{
                operatingCashFlow: results.financialData.operatingCashFlow,
                freeCashFlow: results.financialData.freeCashFlow,
            },
            fiscalInformation:{
                fiscalYearEnd : results.defaultKeyStatistics.nextFiscalYearEnd,
                MRQ: results.defaultKeyStatistics.mostRecentQuarter,
            }
        };

        // --- 3. Format Percentages (This section is now prone to errors if the value is null) ---
        // You MUST check for existence before multiplying, even with direct access!
        
        // // ROE
        if (stockData.fundamentals.roeTTM !== undefined && stockData.fundamentals.roeTTM !== null) {
            stockData.fundamentals.roeTTM = formatValue(stockData.fundamentals.roeTTM * 100, '%');
        }
        // Dividend Yield
        if (stockData.fundamentals.dividendYield !== undefined && stockData.fundamentals.dividendYield !== null) {
            stockData.fundamentals.dividendYield = formatValue(stockData.fundamentals.dividendYield * 100, '%');
        }
        // Profit Margin
        if (stockData.financials.profitMargin !== undefined && stockData.financials.profitMargin !== null) {
            stockData.financials.profitMargin = formatValue(stockData.financials.profitMargin * 100, '%');
        }
        // Operating Margin
        if (stockData.financials.operatingMargin !== undefined && stockData.financials.operatingMargin !== null) {
            stockData.financials.operatingMargins = formatValue(stockData.financials.operatingMargin * 100, '%');
        }

        // Send the clean, formatted data to the frontend
        console.log(stockData)
        return res.status(200).json({ success: true, data: stockData });

    } catch (error) {
        console.error(`Error fetching or processing data for ${ticker}:`, error.message);
        // This catch block handles both API failure AND the TypeError from direct access
        return res.status(500).json({ 
            success: false, 
            message: 'Failed to fetch or process stock details. Data may be missing or the ticker is invalid.', 
            error: error.message 
        });
    }
};
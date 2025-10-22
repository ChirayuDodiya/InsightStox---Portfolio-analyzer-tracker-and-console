import { getPrice } from "../utils/getQuotes.js";
import { sql } from "./dbConnection.js";
    export const insertTransaction = async (email, symbol, quantity, transaction_type, time) => {
        try {
            const result = await sql.begin(async (tx) => {
                const check = await tx`SELECT * FROM "stocks" WHERE symbol=${symbol}`;
                if(check.length===0){
                    const quoteSummary = await yahooFinance.quoteSummary(symbol, { modules: ['assetProfile', 'price'] });
                    if(!quoteSummary.price||!quoteSummary.assetProfile){
                        console.log('No data found for symbol:', symbol);   
                        return null;
                    }
                    const {
                    shortName,
                    longName,
                    exchange,
                    currency,
                    quoteType: type,
                    market: country,
                    } = quoteSummary.price;
                    const { sector } = quoteSummary.assetProfile;
                    await tx`INSERT INTO "stocks" (symbol,short_name,long_name,sector,currency,type,country,exchange,created_at) VALUES (${symbol},${shortName},${longName},${sector},${currency},${type},${country},${exchange},${time}) RETURNING *;`;
                }
                let price = await getPrice(symbol);
                price = price.MarketPrice;
                const insert = await tx`
                INSERT INTO "user_transactions" (email, symbol, quantity, price, transaction_type, transaction_date) VALUES (${email}, ${symbol}, ${quantity}, ${price}, ${transaction_type}, ${time})
                RETURNING *;
                `;
                const totalSpend = quantity * price;
                const update = await tx`
                        INSERT INTO "stock_summary" (email, symbol, current_holding, spended_amount)
                        VALUES (${email}, ${symbol}, ${quantity}, ${totalSpend})
                        ON CONFLICT (email, symbol)
                        DO UPDATE SET
                            current_holding = "stock_summary".current_holding + ${quantity},
                            spended_amount = "stock_summary".spended_amount + ${totalSpend}
                        RETURNING symbol, current_holding, yesterday_holding, spended_amount;
                        `;
                return {insert, update};
        });
        return result;
        } catch (error) {
            console.log('Error inserting transaction:', error);
            return null;
        }
    };
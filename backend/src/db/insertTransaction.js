import { getPrice } from "../utils/getQuotes.js";
import { sql } from "./dbConnection.js";
import yahooFinance from "yahoo-finance2";
    export const insertTransaction = async (email, symbol, quantity, transaction_type, time) => {
        try {
            if(transaction_type==='SELL'){                    
                const holding_check = await sql`SELECT current_holding FROM "stock_summary" WHERE email=${email} AND symbol=${symbol}`;
                if(holding_check.length===0 || holding_check[0].current_holding<quantity){  
                    return {success:false,message:"Insufficient holdings to sell."};
                }
            }
            if(transaction_type==='BUY'){
                const check = await sql`SELECT * FROM "stocks" WHERE symbol=${symbol}`;
                if(check.length===0){
                    const quoteSummary = await yahooFinance.quoteSummary(symbol, { modules: ['assetProfile', 'price'] });
                    console.log(quoteSummary)
                    if(!quoteSummary.price){
                        console.log('No data found for symbol:', symbol);   
                        return {success:false,message:"Unable to fetch stock details."};
                    }
                    const {
                    shortName,
                    longName,
                    exchange,
                    currency,
                    quoteType: type,
                    market: country,
                    } = quoteSummary.price;
                    const { sector } = quoteSummary.assetProfile||"N/A";
                    await sql`INSERT INTO "stocks" (symbol,short_name,long_name,sector,currency,type,country,exchange,created_at) VALUES (${symbol},${shortName},${longName},${sector},${currency},${type},${country},${exchange},${time}) RETURNING *;`;
                }
            }
            let price = await getPrice(symbol);
            price = price.MarketPrice;
            if(transaction_type==='SELL'){
                quantity = -quantity;
            }
            const totalSpend = quantity * price;
            const queries = [sql`
                INSERT INTO "user_transactions" (email, symbol, quantity, price, transaction_type, transaction_date) VALUES (${email}, ${symbol}, ${quantity}, ${price}, ${transaction_type}, ${time})
                RETURNING *;
                `,
                sql`
                    INSERT INTO "stock_summary" (email, symbol, current_holding, spended_amount)
                    VALUES (${email}, ${symbol}, ${quantity}, ${totalSpend})
                    ON CONFLICT (email, symbol)
                    DO UPDATE SET
                        current_holding = "stock_summary".current_holding + ${quantity},
                        spended_amount = "stock_summary".spended_amount + ${totalSpend}
                        WHERE "stock_summary".email=${email} AND "stock_summary".symbol=${symbol}
                    RETURNING symbol, current_holding, yestarday_holding, spended_amount;
            `];
            const [insert,update] = await sql.transaction(queries);
            return {success:true,insert, update};
        } catch (error) {
            console.log('Error inserting transaction:', error);
            return null;
        }
    };
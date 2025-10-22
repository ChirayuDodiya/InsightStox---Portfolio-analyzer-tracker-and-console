import yahooFinance from "yahoo-finance2";
import { mapStockData, starterStocks } from "../../utils/requiredMap.js";

export const starter = async(req,res)=>{
    try{
        let result = [];
        for(const symbol of starterStocks){
            result.push(await yahooFinance.quoteSummary(symbol, { modules: ["price","summaryProfile","financialData"] }))
        }
        result = result.map(mapStockData);
        return res.status(200).json({success:true,data:result});
    }catch(error){
        console.log('Starter stocks fetch error:',error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}
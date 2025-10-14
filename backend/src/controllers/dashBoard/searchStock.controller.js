import yahooFinance from 'yahoo-finance2'
import { mapStockData } from '../../utils/requiredMap.js';
import { getData } from '../../utils/getData.js';
export const searchStock = async (req,res)=>{
    const {query} = req.body;
    if(!query || query.length<1){
        return res.status(401).json({success:false,message:"Query is required"})
    }
    try{
        let symbols = await getData(query);
        if(!symbols){
            return res.status(404).json({success:false,message:"Stock not found"})
        }
        symbols = symbols.quotes.map(item=>item.symbol);
        let result = await yahooFinance.quote(symbols);
        result = result.map(mapStockData);
        return res.status(200).json({success:true,result})
    }catch(error){
        console.log('Stock search error:',error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}


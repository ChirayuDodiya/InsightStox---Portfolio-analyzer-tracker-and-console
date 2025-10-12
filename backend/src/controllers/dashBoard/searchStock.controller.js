import yahooFinance from 'yahoo-finance2'
import { mapStockData } from '../../utils/requiredMap.js';
export const searchStock = async (req,res)=>{
    const {query} = req.body;
    if(!query || query.length<1){
        return res.status(401).json({success:false,message:"Query is required"})
    }
    const searchOptions = {
        enableFuzzyQuery: true,
        quotesCount: 3,
        newsCount: 0
    }
    try{
        let symbols = await yahooFinance.search(query, searchOptions);
        if(symbols.length === 0){
            return res.status(404).json({success:false,message:"Stock not found"})
        }
        symbols = symbols.quotes.map((item)=>item.symbol);
        let result = await yahooFinance.quote(symbols);
        result = result.map(mapStockData);
        return res.status(200).json({success:true,result})
    }catch(error){
        console.log('Stock search error:',error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}


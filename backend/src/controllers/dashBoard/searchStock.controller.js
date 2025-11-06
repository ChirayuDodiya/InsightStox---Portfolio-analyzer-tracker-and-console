import YahooFinance from "yahoo-finance2";
const yahooFinance = new YahooFinance();
export const searchStock = async (req,res)=>{
    const {ticker} = req.query;
    if(!ticker || ticker.length<1){
        return res.status(401).json({success:false,message:"Query is required"})
    }
    try{
        let result = await yahooFinance.search(ticker,{enableFuzzyQuery: true,quotesCount: 10});
        if(!result){
            return res.status(404).json({success:false,message:"Stock not found"})
        }
        const suggestions = result.quotes.filter(stock => stock.symbol).map((stock) => {
            if(!stock.isYahooFinance) return;
            return {
                symbol: stock.symbol,
                longname: stock.longname,
                shortname: stock.shortname,
                exchange: stock.exchange,
                index: stock.index,
            }
        });
        return res.status(200).json({success:true,suggestions: suggestions});
    }catch(error){
        console.log('Stock search error:',error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}


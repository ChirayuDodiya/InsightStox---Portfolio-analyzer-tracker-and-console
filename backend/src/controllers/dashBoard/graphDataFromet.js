import { getHistoricData } from "../../utils/historicData.js";


const graphFormetData = (req,res) => {
  const {ticker} = req.body
  try{
    let rawData = getHistoricData(ticker,'01-01-2025',Date.now(),'1d');
    const dates = [];
    const closingPrices = [];

    rawData.forEach(day => {
      // Format the date to a 'YYYY-MM-DD' string
      dates.push(day.date.toISOString().split('T')[0]);
      closingPrices.push(day.close);
    });
    return res.status(200).json({
      x: dates,
      y: closingPrices,
      type: 'scatter',
      mode: 'lines',    
      name: `${ticker.toUpperCase()} Price`,
    }) 
  }catch(error){
    console.log("Error In GraphDataFrometCode: ",error)
    return res.status(500).json({success: false, message : error.message});
  }
}
export { graphFormetData };
export const starterStocks = ["TCS.NS", "RELIANCE.NS", "^NSEI", "INFY.NS", "HINDUNILVR.NS", "ICICIBANK.NS", "^BSESN", "SBIN.NS", "BHARTIARTL.NS", "ITC.NS"];
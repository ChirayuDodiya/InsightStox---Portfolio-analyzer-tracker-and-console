import { getHistoricData } from "../../utils/historicData.js";

// Make the function async
const graphFormetData = async (req, res) => {
  const { ticker } = req.query;

  if (!ticker) {
    return res.status(400).json({ success: false, message: "Ticker symbol is required." });
  }

  try {
    let endDate = Date.now();
    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);

    let rawData = await getHistoricData(ticker, startDate.getTime(), endDate, '1d');    
    // Check if rawData is an array before processing
    if (!Array.isArray(rawData)) {
        console.log("getHistoricData did not return an array:", rawData);
        return res.status(500).json({ success: false, message: "Failed to fetch valid data." });
    }

    const dates = [];
    const closingPrices = [];

    rawData.forEach(day => {
      dates.push(day.date.toISOString().split('T')[0]);
      closingPrices.push(day.close);
    });

    return res.status(200).json({
      x: dates,
      y: closingPrices,
      type: 'scatter',
      mode: 'lines',
      name: `${ticker.toUpperCase()} Price`,
    });
  } catch (error) {
    console.log("Error In GraphDataFrometCode: ", error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

export { graphFormetData };
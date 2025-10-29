import { Router } from "express";
import { graphFormetData } from "../controllers/dashBoard/graphDataFromet.js";
import { getNews,starter,searchStock, calculatePortfolio, addTransaction, showWatchlist, addToWatchlist, removeFromWatchlist, getStockAllocation, getMarketGainers, getMarketLosers, getMarketactiveStocks } from "../controllers/dashBoard/dashBoard.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/searchStock").get(searchStock);
router.route("/starter").get(starter);
router.route("/graph").get(graphFormetData);
router.route("/news/:query").get(getNews);
router.route("/Valuation").get(verifyToken,calculatePortfolio);
router.route("/addTransaction").post(verifyToken,addTransaction);
router.route("/displayWatchlist").get(verifyToken,showWatchlist);
router.route("/addToWatchlist").post(verifyToken,addToWatchlist);
router.route("/removeFromWatchlist").post(verifyToken,removeFromWatchlist);
router.route("/stockAllocation").get(verifyToken,getStockAllocation);
router.route("/marketGainers").get(getMarketGainers);
router.route("/marketActiveStocks").get(getMarketactiveStocks);
router.route("/marketLosers").get(getMarketLosers);
export default router;

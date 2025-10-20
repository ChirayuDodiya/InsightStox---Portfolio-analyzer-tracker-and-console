import { Router } from "express";
import { graphFormetData } from "../controllers/dashBoard/graphDataFromet.js";
import { getNews,starter,searchStock, calculatePortfolio } from "../controllers/dashBoard/dashBoard.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/searchStock").get(searchStock);
router.route("/starter").get(starter);
router.route("/graph").get(graphFormetData);
router.route("/news").get(getNews);
router.route("/Valuation").get(verifyToken,calculatePortfolio);
export default router;

import { Router } from "express";
import { searchStock } from "../controllers/dashBoard/searchStock.controller.js";
import { starter } from "../controllers/dashBoard/starterStocks.controller.js";
import { graphFormetData } from "../controllers/dashBoard/graphDataFromet.js";

const router = Router();

router.route("/searchStock").get(searchStock);
router.route("/starter").get(starter);
router.route("/graph").get(graphFormetData);
export default router;

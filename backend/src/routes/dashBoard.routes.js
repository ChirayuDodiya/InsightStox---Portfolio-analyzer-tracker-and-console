import { Router } from "express";
import { searchStock } from "../controllers/dashBoard/searchStock.controller.js";
import { starter } from "../controllers/dashBoard/starterStocks.controller.js";

const router = Router();

router.route("/searchStock").get(searchStock);
router.route("/starter").get(starter);
export default router;

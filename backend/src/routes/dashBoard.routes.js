import { Router } from "express";
import { graphFormetData } from "../controllers/dashBoard/graphDataFromet.js";
import { getNews,starter,searchStock } from "../controllers/dashBoard/dashBoard.controller.js";

const router = Router();

router.route("/searchStock").get(searchStock);
router.route("/starter").get(starter);
router.route("/graph").get(graphFormetData);
router.route("/news").get(getNews);
export default router;

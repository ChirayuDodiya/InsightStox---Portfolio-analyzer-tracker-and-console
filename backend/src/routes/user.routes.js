import { Router } from "express";
import { loginUser, logoutUser } from "../controllers/user/user.controller.js";
import { varifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/logout").post(varifyToken, logoutUser);

export default router;

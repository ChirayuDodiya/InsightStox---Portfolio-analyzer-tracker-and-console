import { Router } from "express";
import {
    loginUser,
    logoutUser,
    register,
    registerOtpGeneration,
} from "../controllers/user/user.controller.js";
import { varifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/logout").post(varifyToken, logoutUser);
router.route("/registerOtpGeneration").post(registerOtpGeneration);
router.route("/register").post(register);
export default router;

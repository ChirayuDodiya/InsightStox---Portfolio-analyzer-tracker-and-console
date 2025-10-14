import { Router } from "express";
import {
    loginUser,
    loginWithGoogle,
    logoutUser,
    register,
    registerOtpGeneration,
    updateProfileImageController,
    updateProfileInfoController,
    getProfile,
} from "../controllers/user/user.controller.js";
import { varifyToken } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/login").post(loginUser);
router.route("/logout").post(varifyToken, logoutUser);
router.route("/registerOtpGeneration").post(registerOtpGeneration);
router.route("/register").post(register);
router.route("/googleLogin").post(loginWithGoogle);
router.route("/updateProfileImage").patch(varifyToken, upload.single("profileImage"), updateProfileImageController);
router.route("/updateProfileInfo").patch(varifyToken, updateProfileInfoController);
router.route("/myProfile").get(varifyToken, getProfile);

export default router;

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
    registerWithGoogle,
    SendForgotPasswordOtp,
    VerifyOtpAndResetPassword,
    ResetPassword,
} from "../controllers/user/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/login").post(loginUser);
router.route("/logout").post(verifyToken, logoutUser);
router.route("/registerOtpGeneration").post(registerOtpGeneration);
router.route("/register").post(register);
router.route("/googleLogin").post(loginWithGoogle);
router.route("/updateProfileImage").patch(verifyToken, upload.single("profileImage"), updateProfileImageController);
router.route("/updateProfileInfo").patch(verifyToken, updateProfileInfoController);
router.route("/myProfile").get(verifyToken, getProfile);
router.route("/registerWithGoogle").post(registerWithGoogle);
router.route("/forgotPasswordOtpGgeneration").post(SendForgotPasswordOtp);
router.route("/verifyOtpAndReset").post(VerifyOtpAndResetPassword);
router.route("/resetpassword").post(ResetPassword);
export default router;

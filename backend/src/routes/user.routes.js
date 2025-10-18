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
    dataAndPrivacy,
    SendForgotPasswordOtp,
    VerifyOtpAndResetPassword,
    ResetPassword
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
router.route("/dataAndPrivacy").get(verifyToken, dataAndPrivacy);
router.route("/getEmailForgotPassword").post(SendForgotPasswordOtp);
router.route("/verifyOtpAndResetPassword").post(VerifyOtpAndResetPassword);
router.route("/resetPassword").post(verifyToken,ResetPassword);

export default router;
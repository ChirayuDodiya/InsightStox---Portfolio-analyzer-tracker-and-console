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
    ResetPassword,
    toggleAiSuggestionController,
} from "../controllers/user/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/login").post(loginUser);
router.route("/logout").post(verifyToken, logoutUser);
router.route("/registerOtpGeneration").post(registerOtpGeneration);
router.route("/register").post(register);
router.route("/googleLogin").post(loginWithGoogle);
router.route("/updateProfileInfo").patch(verifyToken, updateProfileInfoController);
router.route("/myProfile").get(verifyToken, getProfile);
router.route("/getDataAndPrivacy").get(verifyToken, dataAndPrivacy);
router.route("/getEmailForgotPassword").post(SendForgotPasswordOtp);
router.route("/verifyOtpAndResetPassword").post(VerifyOtpAndResetPassword);
router.route("/resetPassword").post(verifyToken, ResetPassword);
router.route("/updateProfileImage").patch(verifyToken, 
    (req, res) => {
    upload.single("profileImage")(req, res, (err) => {
        if (err) {
            return res
                .status(400)
                .json({ success: false, message: err.message });
        }
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid image.",
            });
        }
        updateProfileImageController(req, res);
    });
});
router.route("/toggleAiSuggestion").post(verifyToken, toggleAiSuggestionController);

export default router;

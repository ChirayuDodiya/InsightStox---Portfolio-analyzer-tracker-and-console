import { Router } from "express";
import {
    loginUser,
    loginWithGoogle,
    logoutUser,
    register,
    registerOtpGeneration,
    updateProfileImageController,
    updateProfileNameController,
    updateProfileInvestmentExperienceController,
    updateProfileRiskProfileController,
    updateProfileFinancialGoalsController,
    updateProfileInvestmentHorizonController,
    getProfile,
    registerWithGoogle,
    SendForgotPasswordOtp,
    VerifyOtp,
    setNewPassword,
    ResetPassword,
    dataAndPrivacy,
    toggleAiSuggestionController,
    createExcel,
    deleteAccount,
    getPreferencesAndPersonalisation,
    updateThemeController,
    updateDashboardLayoutController,
    sendUserQuery,
    sendUserSuggestion,
} from "../controllers/user/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyUserLoginStatus } from "../middlewares/verifyUserLoginStatus.middleware.js";

const router = Router();

router.route("/login").post(verifyUserLoginStatus,loginUser);
router.route("/logout").post(verifyToken, logoutUser);
router.route("/registerOtpGeneration").post(verifyUserLoginStatus,registerOtpGeneration);
router.route("/register").post(verifyUserLoginStatus,register);
router.route("/googleLogin").post(verifyUserLoginStatus,loginWithGoogle);
router.route("/updateProfileName").patch(verifyToken, updateProfileNameController);
router.route("/updateProfileInvestmentExperience").patch(verifyToken, updateProfileInvestmentExperienceController);
router.route("/updateProfileRiskProfile").patch(verifyToken, updateProfileRiskProfileController);
router.route("/updateProfileFinancialGoal").patch(verifyToken, updateProfileFinancialGoalsController)
router.route("/updateProfileInvestmentHorizon").patch(verifyToken, updateProfileInvestmentHorizonController);
router.route("/myProfile").get(verifyToken, getProfile);
router.route("/registerWithGoogle").post(registerWithGoogle);
router.route("/forgotPasswordOtpGeneration").post(SendForgotPasswordOtp);
router.route("/verifyOtp").post(VerifyOtp);
router.route("/setNewPassword").post(setNewPassword);
router.route("/resetpassword").post(ResetPassword);
router.route("/getDataAndPrivacy").get(verifyToken, dataAndPrivacy);
router.route("/getEmailForgotPassword").post(SendForgotPasswordOtp);
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
router.route("/downloadPortfolioData").get(verifyToken, createExcel);
router.route("/deleteAccount").get(verifyToken, deleteAccount, logoutUser);
router.route("/getPreferencesAndPersonalisation").get(verifyToken, getPreferencesAndPersonalisation);
router.route("/updateTheme").patch(verifyToken, updateThemeController);
router.route("/updateDashboardLayout").patch(verifyToken, updateDashboardLayoutController);
router.route("/sendUserQuery").post(verifyToken, sendUserQuery);
router.route("/sendUserSuggestion").post(verifyToken, sendUserSuggestion);

export default router;

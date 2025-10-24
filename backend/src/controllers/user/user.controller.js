import { loginUser } from "./login.controller.js";
import { logoutUser } from "./logout.controller.js";
import { registerOtpGeneration } from "./registerOtpGeneration.controller.js";
import { register } from "./verifyAndRegister.controller.js";
import { loginWithGoogle } from "./loginWithGoogle.controller.js";
import { updateProfileImageController } from "./updateProfileImage.controller.js";
import { updateProfileInfoController } from "./updateProfileInfo.controller.js";
import { getProfile } from "./getProfile.controller.js";
import { dataAndPrivacy } from "./dataAndPrivacy.controller.js";
import { toggleAiSuggestionController } from "./toggleAiSuggestion.controller.js";
import { SendForgotPasswordOtp, VerifyOtp, setNewPassword} from "./forgotPassword.controller.js";
import { ResetPassword } from "./resetPassword.controller.js";
import { registerWithGoogle } from "./registerWithGoogle.controller.js";
import { createExcel } from "./downloadPortfolioData.controller.js";
import { deleteAccount } from "./deleteAccount.controller.js";
import { getPreferencesAndPersonalisation } from "./getPreferencesAndPersonalisation.controller.js";
import { updatePreferencesAndPersonalisationController } from "./updatePreferencesAndPersonalisation.controller.js";
export {
    loginUser,
    logoutUser,
    registerOtpGeneration,
    register,
    loginWithGoogle,
    updateProfileImageController,
    updateProfileInfoController,
    getProfile,
    dataAndPrivacy,
    toggleAiSuggestionController,
    SendForgotPasswordOtp,
    VerifyOtp,
    setNewPassword,
    ResetPassword,
    registerWithGoogle,
    createExcel,
    deleteAccount,
    getPreferencesAndPersonalisation,
    updatePreferencesAndPersonalisationController,
};
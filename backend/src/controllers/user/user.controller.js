import { loginUser } from "./login.controller.js";
import { logoutUser } from "./logout.controller.js";
import { registerOtpGeneration } from "./registerOtpGeneration.controller.js";
import { register } from "./verifyAndRegister.controller.js";
import { loginWithGoogle } from "./loginWithGoogle.controller.js";
import { updateProfileImageController } from "./updateProfileImage.controller.js";
import { updateProfileInfoController } from "./updateProfileInfo.controller.js";
import { getProfile } from "./getProfile.controller.js";
import { dataAndPrivacy } from "./dataAndPrivacy.controller.js";
import { SendForgotPasswordOtp, VerifyOtpAndResetPassword } from "./forgotPassword.controller.js";
import { ResetPassword } from "./resetPassword.controller.js";
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
    SendForgotPasswordOtp,
    VerifyOtpAndResetPassword,
    ResetPassword,
};
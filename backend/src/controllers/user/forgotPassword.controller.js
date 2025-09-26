import { searchUserByEmail } from "../../db/findUser";
import { updatePassword } from "../../db/updatePassword";
import { checkEmailSyntax , checkPasswordSyntax} from "../../utils/checkUserSyntax";
import { transporter } from "../../utils/nodemailer";
import { otpStore } from "../../utils/registrationOtpStore";


const SendForgotPasswordOtp = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(401).json({success: false,message: "Email is required."});
    }
    if (!checkEmailSyntax(email)) {
        return res.status(401).json({success: false,message: "Please provide a valid email address."});
    }

    try {
        const userResult = searchUserByEmail(email);

        if (userResult.length === 0) {
            return res.status(401).json({success: false,message: "User not found with this email address."});
        }

        const otp = crypto.randomInt(100000, 999999).toString();
        const expiresAt = Date.now() + (10 * 60 * 1000); // 10 minutes

        otpStore.add(email, {otp,expiresAt});

        const mailOptions = {
            from: process.env.GOOGLE_USER_EMAIL,
            to: email,
            subject: "Your One-Time Password (OTP) for Insightstox",
            text: `Welcome to Insightstox!\n\nYour OTP for registration is: ${otp}\n\nThis OTP is valid for 5 minutes.`
        }
        
        await transporter.sendMail(mailOptions);

        return res.status(200).json({success: true,message: "OTP sent to your email address. Please check your inbox."});

    } catch (error) {
        console.error('Send forgot password OTP error:', error);
        return res.status(401).json({success: false,message: "Failed to send OTP. Please try again."});
    }
};

const VerifyOtpAndResetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.status(401).json({success: false,message: "Email, OTP, and new password are required."});
    }

    if (!checkPasswordSyntax(newPassword)) {
        return res.status(401).json({success: false,message: "New password must be at least according to the our conditoins characters long."});
    }

    try {
        const otpData = otpStore.get(email);

        if (!otpData) {
            return res.status(401).json({success: false,message: "OTP expired or invalid. Please request a new one."});
        }

        if (Date.now() > otpData.expiresAt) {
            otpStore.remove(email);
            return res.status(401).json({success: false, message: "OTP has expired. Please request a new one."});
        }

        if (otpData.otp !== otp) {
            return res.status(401).json({success: false,message: `Invalid OTP.`});
        }

        const userResult = searchUserByEmail(email)

        if (userResult.length === 0) {
            forgotPasswordOtpStore.remove(email);
            return res.status(401).json({success: false,message: "User not found."});
        }

        const user = userResult[0];

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await updatePassword(email, hashedPassword)

        otpStore.remove(email);

        return res.status(200).json({success: true,message: "Password reset successfully. You can now login with your new password."});

    } catch (error) {
        console.error('Verify OTP and reset password error:', error);
        return res.status(401).json({success: false,message: "Failed to reset password. Please try again."});
    }
};

export {SendForgotPasswordOtp, VerifyOtpAndResetPassword};
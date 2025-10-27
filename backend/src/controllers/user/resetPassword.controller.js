import { searchUserByEmail } from "../../db/findUser.js";
import { updatePassword } from "../../db/updatePassword.js";
import bcrypt from "bcrypt";
export const ResetPassword = async (req, res) => {
    const { password, newPassword } = req.body;
    const email = req.user.email;
    if ( !password || !newPassword) {
        return res.status(401).json({success: false, message: "Email, old password, and new password are required."});
    }

    try {
        const ispasswordValid = await bcrypt.compare(password, user.password);
        if (!ispasswordValid) {
            return res.status(401).json({success: false, message: "Current password is incorrect."});
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        const updatedPass = await updatePassword(email, hashedNewPassword);

        if (!updatedPass) {
            return res.status(500).json({success: false, message: "Database error. Please try again later."});
        }

        return res.status(200).json({success: true, message: "Password reset successfully."});

    } catch (error) {
        console.log('Password reset error:', error);
        return res.status(401).json({success: false, message: "Internal server error. Please try again."});
    }
};
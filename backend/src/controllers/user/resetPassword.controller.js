import { searchUserByEmail , updatePassword} from "../../db/findUser";

export const ResetPassword = async (req, res) => {
    const { email, password, newPassword } = req.body;
    
    if (!email || !password || !newPassword) {
        return res.status(401).json({success: false, message: "Email, old password, and new password are required."});
    }

    try {
        const userResult = searchUserByEmail(email);

        if (userResult.length === 0) {
            return res.status(401).json({success: false, message: "Unauthorized user"});
        }

        const user = userResult[0];

        const ispasswordValid = await bcrypt.compare(password, user.password);
        if (!ispasswordValid) {
            return res.status(401).json({success: false, message: "Current password is incorrect."});
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        await updatePassword(email, hashedNewPassword);

        return res.status(200).json({success: true, message: "Password reset successfully."});

    } catch (error) {
        console.error('Password reset error:', error);
        return res.status(401).json({success: false, message: "Internal server error. Please try again."});
    }
};
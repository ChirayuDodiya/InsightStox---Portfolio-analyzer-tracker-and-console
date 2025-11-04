import { deleteActiveSessionByToken } from "../../db/deleteActiveSession.js";

const logoutUser = async(req, res) => {
    try {
        const deleteActiveSessionStatus = await deleteActiveSessionByToken(req.cookies.token);

        if (!deleteActiveSessionStatus) {
            return res.status(500).json({ success: false, message: "Database error while logging out user" });
        }

        return res
            .clearCookie("token")
            .status(200)
            .json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { logoutUser };

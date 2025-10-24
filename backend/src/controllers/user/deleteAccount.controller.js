import { deleteUserByEmail } from "../../db/removeUser.js";
const deleteAccount = async (req, res) => {
    const response = await deleteUserByEmail(req.user.email);
    if (!response)
        return res
            .status(500)
            .json({
                success: false,
                message:
                    "Database error while deleting account. Please try again later",
            });
    return res
        .status(200)
        .json({ success: true, message: "Account deleted successfully" });
};

export { deleteAccount };

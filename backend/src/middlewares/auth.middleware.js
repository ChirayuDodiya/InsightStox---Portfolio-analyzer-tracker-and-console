import { searchUserByEmail } from "../db/findUser.js";
import jwt from "jsonwebtoken";

const varifyToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized request" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await searchUserByEmail(decoded.email);

        if (user.length == 0) {
            return res
                .status(401)
                .json({ success: false, message: "invalid token" });
        }
        req.user = user[0];
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

export { varifyToken };

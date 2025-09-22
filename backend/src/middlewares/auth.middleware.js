import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { searchUserByEmail } from "../db/searchUser.js";
import jwt from "jsonwebtoken";

const varifyToken = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            throw new apiError(401, "Unauthorized request");
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await searchUserByEmail(decoded.email);
        console.log(user);
        if (user.length == 0) {
            throw new apiError(401, "Invalid token");
        }
        res.user = user;
        next();
    } catch (error) {
        throw new apiError(401, error?.message || "Unauthorized request");
    }
});

export { varifyToken };

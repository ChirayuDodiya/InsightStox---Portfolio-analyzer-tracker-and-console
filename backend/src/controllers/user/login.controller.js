import { asyncHandler } from "../../utils/asyncHandler.js";
import { apiError } from "../../utils/apiError.js";
import { apiResponse } from "../../utils/apiResponse.js";
import jwt from "jsonwebtoken";
import { searchUserByEmail } from "../../db/findUser.js";
import bcrypt from "bcrypt";

const loginUser = asyncHandler(async (req, res) => {
    let { email, password } = req.body;
    email = email?.toLowerCase();
    if (!email || !password) {
         return res.status(400).json({ success: false, message: "Please provide email and password." });
    }

    const user = await searchUserByEmail(email);

    if (user.length == 0) {
        return res.status(400).json({ success: false, message: "User not registered." } );
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
        return res.status(400).json({ success: false, message: "Invalid password." });
    }

    const token = jwt.sign(
        { user: user[0].id, email: user[0].email },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE,
        }
    );

    return res
        .status(200)
        .cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxage: 24 * 60 * 60 * 1000,
        })
        .json(new apiResponse(200, { token }, `Logged in successfully`));
});

export { loginUser };

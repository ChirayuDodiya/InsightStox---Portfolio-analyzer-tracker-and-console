import jwt from "jsonwebtoken";
import { searchUserByEmail } from "../../db/findUser.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        email = email?.toLowerCase();
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password",
            });
        }

        const user = await searchUserByEmail(email);

        if(!user) {
            return res
                .status(500)
                .json({ success: false, message: "Database error. Please try again later" });
        }

        if (user.length == 0) {
            return res
                .status(400)
                .json({ success: false, message: "User is not registered" });
        }

        const isMatch = await bcrypt.compare(password, user[0].password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid user credentials" });
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
                maxAge: 24 * 60 * 60 * 1000,
            })
            .json({ success: true, message: "User logged in successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { loginUser };

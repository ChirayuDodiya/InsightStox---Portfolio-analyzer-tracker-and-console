import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { searchUserByEmail } from '../../db/findUser.js';
import { insertUser } from '../../db/insertUser.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const registerWithGoogle = async (req, res) => {
    const { credential } = req.body;
    if (!credential) {
        return res.status(401).json({ success: false, message: "Missing Google token" });
    }

    try {
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const { name, email, sub: googleId } = payload;

        const existingUser = await searchUserByEmail(email);

        if (existingUser.length > 0) {
            return res.status(401).json({ success: false, message: "User Already Exist!" });
        } else {
            const newUser = await insertUser({ name, email, Password:googleId });
            const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
            return res.status(200).json({ success: true, token });
        }
    } catch (error) {
        console.error("Google auth error:", error);
        res.status(401).json({ success: false, message: "Google authentication failed." });
    }
}

export { registerWithGoogle }; 

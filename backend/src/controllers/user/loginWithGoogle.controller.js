import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { searchUserByEmail } from '../../db/findUser.js';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const loginWithGoogle = async (req, res) => {
  const { id_token } = req.body; // The ID token from the frontend

  if (!id_token) {
    return res.status(400).json({ message: 'Missing Google ID token.' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    let { email } = payload;
    email = email.toLowerCase();
    let user = await searchUserByEmail(email);
    if (user.length === 0) {
      return res.status(401).json({ success: false, message: "User doesn't exist. Please register first." });
    }
    user = user[0];
    const token = jwt.sign(
      { user: user.id, email: user.email },
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
    console.log('Google login error:', error);
    res.status(401).json({ message: 'Invalid Google token.' });
  }
};
export { loginWithGoogle };
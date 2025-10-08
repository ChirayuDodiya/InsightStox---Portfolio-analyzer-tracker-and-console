import Jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { searchUserByEmail } from '../../db/findUser.js';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const loginWithGoogle = async (req, res) => {
  const { credential } = req.body; // The ID token from the frontend

  if (!credential) {
    return res.status(400).json({ message: 'Missing Google ID token.' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email } = payload;
    let user = await searchUserByEmail(email);
    if (user.length === 0) {
      return res.status(401).json({ success: false, message: "User doesn't exist. Please register first." });
    }
    user = user[0];
    const appToken = Jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' } 
    );
    res.status(200).json({
      message: 'Authentication successful!',
      token: appToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Google authentication error:', error);
    res.status(401).json({ message: 'Invalid Google token.' });
  }
};
export { loginWithGoogle };
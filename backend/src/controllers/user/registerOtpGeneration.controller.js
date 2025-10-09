import bcrypt from 'bcrypt'
import {transporter} from '../../utils/nodemailer.js';
import crypto from 'crypto';
import { otpStore } from '../../utils/registrationOtpStore.js';
import { searchUserByEmail } from '../../db/findUser.js';
import { checkUserSyntax } from '../../utils/checkUserSyntax.js';
const registerOtpGeneration = async (req, res)=>{
    let {name,email,password} = req.body;
    if(!name||!email||!password){
        return res.status(401).json({success: false,message: 'Missing Details'})
    }
    email=email.toLowerCase();
    try{
        const existinguser = await searchUserByEmail(email);
        if(existinguser.length>0){
            return res.status(401).json({success: false,message: "User Already exists"});
        }
        const validity = checkUserSyntax(req.body);
        if(!validity.success){
            return res.status(401).json({success: false,message: validity.message});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const otp = crypto.randomInt(100000, 999999).toString();
        const expirationTime = Date.now()+5*60*1000;


        otpStore.add(email, {
            name,
            hashedPassword,
            otp,
            expiresAt: expirationTime,
        });
        const mailOptions = {
            from: process.env.GOOGLE_USER_EMAIL,
            to: email,
            subject: "Your One-Time Password (OTP) for Insightstox",
            html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>InsightStox OTP</title>
  <style>
   body {
      margin: 0;
      padding: 0;
      background-color: #0a0a0a;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      width: 100%;
      margin: 40px auto;
      background: #111111;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #1db954;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
    }
    .header {
      background: linear-gradient(135deg, #0f0f0f, #1db95420);
      text-align: center;
      padding: 30px 20px;
    }
    .header img {
      max-width: 160px;
      height: auto;
    }
    .content {
      padding: 40px 30px;
      color: #ffffff;
      text-align: center;
    }
    .content h1 {
      color: #1db954;
      font-size: 26px;
      margin-bottom: 15px;
      font-weight: 600;
    }
    .content p {
      font-size: 16px;
      line-height: 1.7;
      color: #cccccc;
      margin: 12px 0;
    }
    .otp-box {
      display: inline-block;
      background: #1db954;
      color: #000000;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 10px;
      padding: 18px 35px;
      border-radius: 12px;
      margin: 25px 0;
      box-shadow: 0 4px 12px rgba(29, 185, 84, 0.4);
    }
    .note {
      font-size: 14px;
      color: #999999;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      padding: 25px 20px;
      font-size: 13px;
      color: #888888;
      background-color: #0c0c0c;
      border-top: 1px solid #1db95440;
    }
    .footer a {
      color: #1db954;
      text-decoration: none;
    }

    /* 📱 Responsive styles */
    @media only screen and (max-width: 480px) {
      .content {
        padding: 25px 15px;
      }
      .content h1 {
        font-size: 22px !important;
      }
      .otp-box {
        font-size: 24px !important;
        padding: 14px 20px !important;
        letter-spacing: 6px !important;
      }
      .content p {
        font-size: 14px !important;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="cid:insightstoxlogo" alt="InsightStox Logo">
    </div>

    <!-- Content -->
    <div class="content">
      <h1>Your Secure OTP</h1>
      <p>Use the following One-Time Password (OTP) to complete your sign-in or verification process.  
      This code is valid for the next <strong>5 minutes</strong>.</p>
      
      <!-- OTP Display -->
      <div class="otp-box">
        ${otp}
      </div>

      <p class="note">If you didn’t request this code, please ignore this email or contact our support team.</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>© 2025 InsightStox. All rights reserved.</p>
      <p><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a></p>
    </div>
  </div>
</body>
</html>
`,
            attachments: [
                {
                    filename: "website_logo.png", // Name of the file
                    path: "./src/utils/asset/website_logo.png", // Path in your backend
                    cid: "insightstoxlogo", // Same cid as in <img src="cid:insightstoxlogo">
                },
            ],
        };
        await transporter.sendMail(mailOptions)
        return res.status(200).json({success: true});
    } catch(error){
        res.status(401).json({success: false,message: error.message})
    }
}

export { registerOtpGeneration };
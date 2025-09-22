import bcrypt from 'bcryptjs'
import {transporter} from '../../utils/nodemailer.js';
import crypto from 'crypto';
import { otpStore } from '../../utils/registrationOtpStore.js';
import { searchUserByEmail } from '../../db/findUser.js';
import { checkUserSyntax } from '../../utils/checkUserSyntax.js';
const registerOtpGeneration = async (req, res)=>{
    let {name,email,password} = req.body;
    if(!name||!email||!password){
        return res.json({success: false,message: 'Missing Details'})
    }
    email=email.toLowerCase();
    try{
        const existinguser = await searchUserByEmail(email);
        if(existinguser.length>0){
            return res.json({success: false,message: "User Already exists"});
        }
        const validity = checkUserSyntax(req.body);
        if(!validity.success){
            return res.json({success: false,message: validity.message});
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
            text: `Welcome to Insightstox!\n\nYour OTP for registration is: ${otp}\n\nThis OTP is valid for 5 minutes.`
        }
        await transporter.sendMail(mailOptions)
        return res.json({success: true});
    } catch(error){
        res.json({success: false,message: error.message})
    }
}

export { registerOtpGeneration };
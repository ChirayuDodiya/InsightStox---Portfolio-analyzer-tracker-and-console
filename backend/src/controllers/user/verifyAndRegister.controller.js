import { insertUser } from '../../db/insertUser.js';
import jwt from 'jsonwebtoken';
import { otpStore } from '../../utils/registrationOtpStore.js';
export const register = async (req,res)=>{
    let {email,otp} = req.body;
    if(!email||!otp){
        return res.status(401).json({success: false,message: 'No OTP found'})
    }
    email=email.toLowerCase();
    try{
        const record = otpStore.get(email);
        if(!record){
            return res.status(401).json({success: false,message: 'OTP Expired or invalid user'});
        }
        if(record.expiresAt<Date.now()){
            otpStore.remove(email);
            return res.status(401).json({success: false,message: 'OTP has been expired'})
        }
        if(record.otp!==otp){
            return res.status(401).json({success: false,message: 'Invalid OTP'})
        }
        const user = await insertUser({name:record.name,email,Password:record.hashedPassword});
        otpStore.remove(email);
        const token = jwt.sign({id:user.id,email:user.email}, process.env.Jwt_secret,{expiresIn: '7d'})
        res.cookie('token',token,{
            httponly: true,
            secure: process.env.Node_Env=='Production',
            sameSite: process.env.Node_Env=="Production"?'none':'strict',
            maxAge: 7*24*60*60*1000
        })
        return res.status(200).json({success: true,userID:user.id,message: 'User registered successfully'})
    } catch(error){
        console.log('User registration error:',error);
        return res.status(401).json({success: false,message: error.message})
    }
}
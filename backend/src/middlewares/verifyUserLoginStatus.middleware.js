import { getActiveSessionByToken } from "../db/getActiveSession.js";

const verifyUserLoginStatus = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        
        if (!token) {
            return next();
        }

        const activeSession = await getActiveSessionByToken(token);
        
        if(!activeSession) {
            return res.status(500).json({ success: false, message: "Database error while authenticating token" });
        }

        if(activeSession.length == 0) {
            return next();
        }

        return res.status(200).json({ success: true, message: "User is already logged in" });
    } 
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { verifyUserLoginStatus };

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import google_logo from "../assets/google_logo.svg";
import InputField from "./InputField.jsx";
import PasswordInputField from "./PasswordInputField.jsx";
import  {checkPasswordStrength,validateEmail,} from "../utils/validation.js";

const LoginForm = ({ toggleForm, resetFormStates: parentResetFormStates }) => {
/*----------------------------------- State Variables-----------------------------------------------------------*/
    const navigate = useNavigate();
    const [isForgotPassword, setIsForgotPassword] = useState(() => {
      return sessionStorage.getItem("forgotpassword") === "true";
    });
   
    const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [areAllFieldsValid, setAreAllFieldsValid] = useState(false);
    const [timer, setTimer] = useState(30);
    const [forgotUserExists, setForgotUserExists] = useState(false);
    const [forgotOtpvarified, setForgotOtpvarified] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);
    const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

/*----------------------------------- Functions----------------------------------------------------------------- */
    // Function to toggle forgot password state and update sessionStorage
    const toggleForgotPassword = () => {
      setIsForgotPassword(prev => {
        const newVal = !prev;
        sessionStorage.setItem("forgotpassword", newVal); // update sessionStorage
        return newVal;
      });
    };
    // Function to reset form states
      const handleForgotPasswordInputToggle = (email) => {
        if (email === "") {
          alert("Email is required");
        } else {
          setIsOtpSubmitted(!isOtpSubmitted);
        } 
      };
      //function to reset all form states
      function resetFormStates(){
        setEmail("");
        setPassword("");
        setOtp("");
        setPasswordError("");
        setEmailError("");
        setTitleError("");
        setIsOtpSubmitted(false);
        setForgotUserExists(false);
        // Also call parent reset
        if (parentResetFormStates) parentResetFormStates();
    }
/*-----------------------------------Google login handlers----------------------------------------------------------- */
// Function to handle Google login
      const handleGoogleLogin = async (tokenResponse) => {
        try{
          const res = await axios.post(import.meta.env.VITE_BACKEND_LINK + "/api/v1/users/googleLogin",
            {access_token: tokenResponse.access_token},
            {
    withCredentials: true,  // <-- must include this
  }
          );
          navigate("/Dashboard");
        }catch(err){  
          console.log("Google login error:", err.response.data.message);
          if(err.response.data.message)
            setTitleError("User already exists with this email. Please login");
        }finally {
          setGoogleLoginLoading(false);
        }
      }
    // Google login hook
      const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => handleGoogleLogin(tokenResponse),
        onError: () => {
          setTitleError('Google login failed');
        }
      });
/*----------------------------------- login handlers-------------------------------------------------------------------------- */
// Function to handle login
    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/login", {email : email, password : password});
            console.log("✅ Logged in successfully:", res.data);
            navigate("/Dashboard");
        } catch (err) {
            if(err.response.data.message)
                setTitleError(err.response.data.message);
            console.error("❌ Login error:", err.response.data.message);
        }finally {
            setIsLoading(false);
        }
    }

/*----------------------------------- Forgot password handlers------------------------------------------------------------------- */
// Function to handle sending OTP for forgot password
const handleSendOtpForForgotPassword = async () => {
    setIsLoading(true);
  try{
    const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/forgotPasswordOtpGeneration", {email : email});
    console.log("✅ OTP sent successfully:", res.data);
    setForgotUserExists(true);
    setTimer(30);
  }catch(err){
    setTitleError(err.response.data.message);
    setForgotUserExists(false);
    console.error("❌ OTP send error:", err.response.data.message);
  }finally{
    setIsLoading(false);
  }
};

// Function to handle OTP verification for forgot password
const handleOtpverificationForForgotPassword = async () => {
    setIsLoading(true);
try{
  const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/verifyOtp", {email : email, otp: otp});
   console.log("✅ OTP verified successfully:", res.data.message);
  setForgotOtpvarified(true);
  setResetPassword(true);
} catch(err) {
   setTitleError(err.response.data.message);
     console.error("❌ OTP verification error:", err.response.data.message);
}finally{
    setIsLoading(false);
}
};

// Function to handle resetting password
const handleResetPassword = async () => {
    setIsLoading(true);
    try{
        const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/setNewPassword", {email : email, newPassword : newPassword});
        console.log("✅ Password reset successful:", res.data);
        navigate("/Dashboard");
    } catch (err) {
      if(err.response.data.message){
        setTitleError(err.response.data.message);
        console.error("❌ Password reset error:", err.response.data.message);
      }
    }finally {
      setIsLoading(false);
    }
  };

/*----------------------------------- Use Effects ------------------------------------------------------------*/
  //useEffect for enabling/disabling submit button
useEffect(() => {
    if(isForgotPassword){
      setAreAllFieldsValid(email.trim() !== "");
    }else{
        const isValid = email.trim() !== "" && password.trim() !== "" && emailError === "";
        setAreAllFieldsValid(isValid);
    }
  }, [email, password, emailError, isForgotPassword]);

    //useEffect for newpassword error message validation
useEffect(() => {
    if (newPassword.trim() === "") {
          setNewPasswordError(""); // default message
        } else {
          setNewPasswordError(checkPasswordStrength(newPassword));
        }
    }, [newPassword]);

    //useEffect for password error message validation
useEffect(() => {
    if (password.trim()==="") {
      setPasswordError(""); // default message
    } else {
      setPasswordError(checkPasswordStrength(password));
    }
   }, [password]);

   //useEffect for email error message validation
useEffect(() => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && !validateEmail(trimmedEmail)) {
      setEmailError("Invalid email format");
   } else {
      setEmailError("");
   }
  }, [email]);

  //useEffect for OTP resend timer
useEffect(() => {
      if(timer <= 0)return;
    const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [timer]);
/*----------------------------------- JSX --------------------------------------------------------------------- */
return (
        <>
          <div className="title-text">
            <h1>{isForgotPassword ? 'Reset your password' : 'Login to your account'}</h1>
          </div>


          <form className="form" style={{gap : isForgotPassword ? '0.5rem' : '0rem' }} onSubmit={(e)=>e.preventDefault()}>
            {/* Email Field */}
            <InputField htmlFor="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" labelVal="Email" styleVal={{ display: forgotUserExists ? 'none':'block' }}/>
            <p className="email-error error" style={{ display: isOtpSubmitted && forgotUserExists ? 'none' : 'block' }}>{emailError}</p>
            <div className="forgot-password" >
                <a onClick={() => {toggleForgotPassword();resetFormStates();}} style={{display: isForgotPassword ? 'none' : 'block'}} >Forgot?</a>
            </div>

            {/* Password Field */}
            <PasswordInputField htmlFor={forgotOtpvarified ? "newPassword" : "password"} type="password" value={forgotOtpvarified ? newPassword : password}  onChange={(e) => forgotOtpvarified ? setNewPassword(e.target.value) : setPassword(e.target.value)} id={forgotOtpvarified ? 'newPassword' : 'password'}  placeholder={forgotOtpvarified ?"Enter your newPassword" : "Enter your password"} labelVal="Password" styleVal={{display: (isForgotPassword && !forgotOtpvarified) ? 'none' : 'block'}}/>
            
            {/* OTP Field */}
            <InputField htmlFor="otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} id="otp" placeholder="Enter the OTP" labelVal="OTP" styleVal={{ display: isOtpSubmitted && forgotUserExists && !forgotOtpvarified ? 'block' : 'none' }} />

            {/* Buttons */}
            {/* Login Button */}
            {!isForgotPassword && (<button type="submit" disabled={!areAllFieldsValid} className="submit loading" style={{display:'flex', opacity: areAllFieldsValid ? 1 : 0.5, cursor: areAllFieldsValid ? 'pointer' : 'not-allowed'}} onClick={() => {handleLogin()}}>{isLoading ? <><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : "Login"}</button>)}
            
            {/*Send/verify OTP */}
            {isForgotPassword && !forgotOtpvarified && (<button type="submit" disabled={!areAllFieldsValid} className="submit loading" style={{display: 'flex', opacity: areAllFieldsValid ? 1 : 0.5, cursor: areAllFieldsValid ? 'pointer' : 'not-allowed'}}  onClick= {()=>{setTitleError(""); if(isOtpSubmitted && forgotUserExists ){handleOtpverificationForForgotPassword() } else { handleForgotPasswordInputToggle();handleSendOtpForForgotPassword();}}}>{isLoading ? <><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : <>{isOtpSubmitted && forgotUserExists ? 'Verify OTP' : 'Send OTP'}</>}</button>)}

            {/* New Password Error Message */}
            {resetPassword && <p style={{ display : "block" }} className="pass-error error">{newPasswordError}</p>}

            {/* Resend OTP Button */}
            {isOtpSubmitted && forgotUserExists && !forgotOtpvarified && (<button type="submit" className="resubmit" disabled = {timer!==0} style = {{opacity: timer===0 ? 1 : 0.5, cursor: timer===0 ? 'pointer' : 'not-allowed',display: "block"}} onClick={() => { setTitleError("");handleSendOtpForForgotPassword();}}>Resend</button>)}

            {/* Reset Password Button */}
            {forgotOtpvarified && (<button type="submit" className="resubmit resetpass loading" disabled = {newPasswordError!==""} style={{display: "flex",opacity: newPasswordError!=="" ? 0.5 : 1,cursor: newPasswordError!=="" ? 'not-allowed' : 'pointer'}} onClick={() => {handleResetPassword();}}>{isLoading ?<><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : "Reset Password"}</button>)}

            {/* Google Login Button */}
            {!isForgotPassword && (<button type="button" className="google-btn loading" onClick = {()=>{googleLogin();setGoogleLoginLoading(true);}} style={{display: "flex"}} >
                {googleLoginLoading ?<><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : <><img src={google_logo} alt="Google logo" className="google-logo" />
                <span>Continue with Google</span></>}
            </button>)}

            {/* Auth Links */}
            <p className="auth-text" style={{display: isForgotPassword ? 'none' : 'block'}}>Don't have an account ?<a onClick={() => {toggleForm();setTitleError("");resetFormStates()}} style={{ cursor: 'pointer' }}>Sign up</a></p>
            {isForgotPassword && (<p className="auth-text">Remembered your password ?<a onClick={()=>{toggleForgotPassword();setTitleError("");resetFormStates()}} style={{ cursor: 'pointer' }}>Login</a></p>)}
            
            {/* OTP Timer */}
            {isOtpSubmitted && forgotUserExists && !forgotOtpvarified && (<p className="text-center" style={{ display: 'block' }}>{`Didn’t receive the OTP? Resend in ${timer}s`}</p>)}

            {/* Global error message */}
            <p className="title-error">{titleError}</p>
          </form>
        </>
);
};

export default LoginForm;
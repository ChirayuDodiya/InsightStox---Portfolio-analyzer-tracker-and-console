import React, { useEffect, useState } from "react";
import "./auth.css";
import { GoogleLogin } from "@react-oauth/google";
import bg_img from "../assets/dark-mode-login-bg.png";
import LogoDark from "../assets/LogoDark.png";
import google_logo from "../assets/google_logo.svg";
import { InputField } from "../components/InputField.jsx";
import { PasswordInputField } from "../components/PasswordInputField.jsx";
import 'primeicons/primeicons.css';
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  {checkPasswordStrength,validateNameStrength,validateEmail} from "../components/authFunctions.jsx";

export const Auth = () => {
   const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(() => {
  return sessionStorage.getItem("isLogin") === "false" ? false : true;
});
const [isForgotPassword, setIsForgotPassword] = useState(() => {
  return sessionStorage.getItem("forgotpassword") === "true";
});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [areAllFieldsValid, setAreAllFieldsValid] = useState(false);
  const [timer, setTimer] = useState(30);
  const [forgotUserExists, setForgotUserExists] = useState(false);
  const [forgotOtpvarified, setForgotOtpvarified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  function resetFormStates(){
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setOtp("");
    setNameError("");
    setPasswordError("");
    setEmailError("");
    setConfirmPasswordError("");
    setTitleError("");
    setIsOtpSubmitted(false);
    setIsOtpSent(false);
    setForgotUserExists(false);
  }
const handleGoogleLogin = async (tokenResponse) => {
  try{
    const res = await axios.post(import.meta.env.VITE_BACKEND_LINK + "/api/v1/users/googleLogin", {
      access_token: tokenResponse.access_token,
    });
    navigate("/Dashboard");
  }catch(err){  
    console.log("Google login error:", err.response.data.message);
    setTitleError(err.response.data.message);
  }
}
const googleLogin = useGoogleLogin({
  onSuccess: (tokenResponse) => handleGoogleLogin(tokenResponse),
  onError: () => {
    setTitleError('Google login failed');
  }
});
React.useEffect(() => {
  if(isLogin)
  {
    if(isForgotPassword)
    {
      setAreAllFieldsValid(email !== "");
      return;
    }
    if(email !== "" && password !== "" && emailError === "")
      setAreAllFieldsValid(true);
    else
      setAreAllFieldsValid(false);
  }
  else{
    if(isOtpSent)
    {
      setTitleError("");  
      if(otp !== "")
        setAreAllFieldsValid(true);
      else
        setAreAllFieldsValid(false);
    }
    else
    {
      if(email !== "" && password !== "" && name !== "" && confirmPassword !== "" && password === confirmPassword && passwordError === "" && nameError === "" && emailError === "")
        setAreAllFieldsValid(true);
      else
        setAreAllFieldsValid(false);
    }
  
  }
},[email, password, name, confirmPassword, otp,passwordError,nameError,emailError,isLogin,isOtpSent,isForgotPassword]);


const handleLogin = async () => {
    try {
        const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/login", {email : email, password : password});
        console.log("Logged in successfully");
        setIsLoading(false);
        navigate("/Dashboard");
    } catch (err) {
      if(err.response.data.message){
        setTitleError(err.response.data.message);
        setIsLoading(false);
        return;
      }
       console.log("Login error:", err.response.data.message);
       setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!newPassword) {
      setNewPasswordError(""); // default message
    } else {
      setNewPasswordError(checkPasswordStrength(newPassword));
    }
  }, [newPassword]);
  //useEffect for error message validation
  React.useEffect(() => {
    if (name && !validateNameStrength(name)) {
      setNameError("Name should not contain numbers or special characters");
    } else {
      setNameError("");
    }
  }, [name]);

  React.useEffect(() => {
    if (!password) {
      setPasswordError(""); // default message
    } else {
      setPasswordError(checkPasswordStrength(password));
    }
   }, [password]);

   React.useEffect(() => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
   }, [confirmPassword, password]);

   React.useEffect(() => {
    if (email && !validateEmail(email)) {
      setEmailError("Invalid email format");
   } else {
      setEmailError("");
   }
  }, [email]);

   const handleOtpGeneration = async () => {
    try {
        setAreAllFieldsValid(false);
        const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/registerOtpGeneration", {email : email, name: name, password : password});
        console.log("OTP generation successful");
        setAreAllFieldsValid(true);
        setIsOtpSent(!isOtpSent);
        setTimer(30);
         setIsLoading(false);

    } catch (err) {
      if(err.response.data.message === "User Already exists"){
        setTitleError("User already exists. Please login.");
        setIsLoading(false);
        return;
      }
       console.log("OTP generation error:", err.response.data.message);
        setIsLoading(false);
    }
  };
  const handleResetPassword = async () => {
    // console.log(email, newPassword);
    try {
        const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/setNewPassword", {email : email, newPassword : newPassword});
        console.log("Password reset successful");
        setIsLoading(false);
        navigate("/Dashboard");

    } catch (err) {
      if(err.response.data.message){
        setTitleError(err.response.data.message);
      }
      setIsLoading(false);
    }
  };
  const handleResendOtpGeneration = async () => {
    try {
        const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/registerOtpGeneration", {email : email, name: name, password : password});
        console.log("OTP resend successful");
        setIsLoading(false);
        setTimer(30);
    } catch (err) {
       console.log("OTP resend error:", err.response.data.message);
       setIsLoading(false);
    }
  };
  const handleOtpverificationForForgotPassword = async () => {
    try{
      const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/verifyOtp", {email : email, otp: otp});
      console.log("OTP verified for forgot password:", res.data.message);
      setForgotOtpvarified(true);
      setResetPassword(true);
      setIsLoading(false);
    } catch(err) {
       setIsLoading(false);
       setTitleError(err.response.data.message);
      console.log("OTP verification error:", err.response.data.message);
    }
  };
  const handleSendOtpForForgotPassword = async () => {
    try{
      const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/forgotPasswordOtpGeneration", {email : email});
      console.log(res);
      setForgotUserExists(true);
      setIsLoading(false);
      setTimer(30);
      // console.log("OTP sent for forgot password");
    }catch(err){
      setTitleError(err.response.data.message);
      setForgotUserExists(false);
      setIsLoading(false);
      console.log("OTP send error for forgot password:", err.response.data.message);
    }
  }

  // const 

  const handleRegister = async () => {
   try {
     const res = await axios.post(import.meta.env.VITE_BACKEND_LINK+"/api/v1/users/register", {email : email, otp: otp});
     console.log("Registered successfully");
     setIsOtpSent(!isOtpSent);
     setIsLoading(false);
        navigate("/Dashboard");
    } catch (err) {
      if(err.response.data.message){
        setTitleError(err.response.data.message);
        setIsLoading(false);
        return;
      }
       console.log("Register error:", err.response.data.message);
        setIsLoading(false);
    }
  };
  useEffect(() => {
    if(timer <= 0)
        return;
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
 const toggleForm = () => {
  setIsLogin(prev => {
    const newVal = !prev;
    sessionStorage.setItem("isLogin", newVal);  // update sessionStorage
    return newVal;
  });
  setIsOtpSent(false);
};

const toggleForgotPassword = () => {
  setIsForgotPassword(prev => {
    const newVal = !prev;
    sessionStorage.setItem("forgotpassword", newVal); // update sessionStorage
    return newVal;
  });
};
  
  const handleForgotPasswordInputToggle = (email) => {
    if (email === "") {
      alert("Email is required");
    } else {
      setIsOtpSubmitted(!isOtpSubmitted);
    } 
  };



  const renderForm = () => {
    if (isLogin) {
      return (
        <>
          <div className="title-text">
            <h1>{isForgotPassword ? 'Reset your password' : 'Login to your account'}</h1>
          </div>
          <form className="form" style={{gap : isForgotPassword ? '0.5rem' : '0rem' }}>
            <InputField htmlFor="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" labelVal="Email" styleVal={{ display: forgotUserExists ? 'none':'block' }}/>

              <p className="email-error error" style={{ display: isOtpSent ? 'none' : 'block' }}>{emailError}</p>
              <div className="forgot-password" >
                <a onClick={() => {toggleForgotPassword();resetFormStates();}} style={{display: isForgotPassword ? 'none' : 'block'}} >Forgot?</a>
              </div>
            <PasswordInputField htmlFor="password" type="password" value={forgotOtpvarified ? newPassword : password}   onChange={(e) => forgotOtpvarified ? setNewPassword(e.target.value) : setPassword(e.target.value)} id={forgotOtpvarified ? 'newPassword' : 'password'}  placeholder={forgotOtpvarified ?"Enter your newPassword" : "Enter your password"} labelVal="Password" styleVal={{display: (isForgotPassword && !forgotOtpvarified) ? 'none' : 'block'}}/>
            <InputField htmlFor="otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} id="otp" placeholder="Enter the OTP" labelVal="OTP" styleVal={{ display: isOtpSubmitted && forgotUserExists && !forgotOtpvarified ? 'block' : 'none' }} />

            <button type="submit" disabled={!areAllFieldsValid} className="submit_forget_pass loading" style={{display: isForgotPassword ? 'none' : 'flex', opacity: areAllFieldsValid ? 1 : 0.5, cursor: areAllFieldsValid ? 'pointer' : 'not-allowed'}} onClick={(e) => {e.preventDefault();handleLogin();setIsLoading(true);}}>{isLoading ? <><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : "Login"}</button>
            <button type="submit" disabled={!areAllFieldsValid} className="submit loading"style={{display: isForgotPassword && !forgotOtpvarified ? 'flex' : 'none', opacity: areAllFieldsValid ? 1 : 0.5, cursor: areAllFieldsValid ? 'pointer' : 'not-allowed'}}  onClick= {(e)=>{e.preventDefault();setIsLoading(true);setTitleError(""); if(isOtpSubmitted && forgotUserExists ){ handleOtpverificationForForgotPassword() } else { handleForgotPasswordInputToggle();handleSendOtpForForgotPassword();}}}>{isLoading ? <><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : <>{isOtpSubmitted && forgotUserExists ? 'Verify OTP' : 'Send OTP'}</>}</button>
            <p style={{ display : resetPassword ? 'block' : 'none'}} className="pass-error error">{newPasswordError}</p>
            <button type="submit" className="resubmit" disabled = {timer!==0} style = {{opacity: timer===0 ? 1 : 0.5, cursor: timer===0 ? 'pointer' : 'not-allowed',display: isOtpSubmitted && forgotUserExists && !forgotOtpvarified ? 'block' : 'none'}} onClick={(e) => {e.preventDefault(); setTitleError("");handleSendOtpForForgotPassword();}}>Resend</button>
            <button type="submit" className="resubmit resetpass loading" disabled = {newPasswordError!==""} style={{display: forgotOtpvarified ? 'flex' : 'none',opacity: newPasswordError!=="" ? 0.5 : 1,cursor: newPasswordError!=="" ? 'not-allowed' : 'pointer'}} onClick={(e) => {e.preventDefault(); handleResetPassword();setIsLoading(true)}}>{isLoading ?<><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : "Reset Password"}</button>
            <button type="button" className="google-btn" onClick = {googleLogin}style={{display: isForgotPassword ? 'none' : 'flex'}} >
                <img src={google_logo} alt="Google logo" className="google-logo" />
                <span>Continue with Google</span>
            </button>

            <p className="auth-text" style={{display: isForgotPassword ? 'none' : 'block'}}>
              Don't have an account ?
              <a onClick={() => {toggleForm();setTitleError("");resetFormStates()}} style={{ cursor: 'pointer' }}>Sign up</a>
            </p>
            {isForgotPassword && (
        <p className="auth-text">
          Remembered your password ?
          <a onClick={()=>{toggleForgotPassword();setTitleError("");resetFormStates()}} style={{ cursor: 'pointer' }}>Login</a>
        </p>
      )}
      <p className="text-center" style={{display : isOtpSubmitted && forgotUserExists && !forgotOtpvarified ? 'block' : 'none'}}>{`Didn’t receive the OTP? Resend in ${timer}s`}</p>
      <p className="title-error">{titleError}</p>
          </form>
        </>
      );
    } else {
      return (
        <>
          <div className="title-text">
            <h1>{isOtpSent ? 'Check your email for the OTP' : 'Create your account'}</h1>
          </div>
          <form className="form" style={{ gap: isOtpSent ? '0.3rem' : '0rem' }}>
        <InputField htmlFor="name" type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your full name" labelVal="Full Name" styleVal={{ display: isOtpSent ? 'none' : 'block' }} />
          <p style={{ display: isOtpSent ? 'none' : 'block' }} className="name-error error">{nameError}</p>
        <InputField htmlFor="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" labelVal="Email" styleVal={{ display: isOtpSent ? 'none' : 'block' }} />
          <p style={{ display: isOtpSent ? 'none' : 'block' }} className="email-error error">{emailError}</p>
        <PasswordInputField htmlFor="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password" labelVal="Password" styleVal={{ display: isOtpSent ? 'none' : 'block' }} />
          <p style={{ display: isOtpSent ? 'none' : 'block' }} className="pass-error error">{passwordError}</p>
        <PasswordInputField htmlFor="confirmPassword" type="password" value={confirmPassword} onPaste={(e) => e.preventDefault()} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" placeholder="Confirm your password" labelVal="Confirm Password" styleVal={{ display: isOtpSent ? 'none' : 'block' }} />
          <p style={{ display: isOtpSent ? 'none' : 'block' }} className="confirm-pass-error error">{confirmPasswordError}</p>
        <InputField htmlFor="otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} id="otp" placeholder="Enter the OTP" labelVal="OTP" styleVal={{ display: isOtpSent ? 'block' : 'none' }} />

        <button type="submit" disabled={!areAllFieldsValid} className="submit loading" style = {{opacity: areAllFieldsValid ? 1 : 0.5, cursor: areAllFieldsValid ? 'pointer' : 'not-allowed'}} onClick={(e) => {e.preventDefault();setIsLoading(true);setTitleError(""); (isOtpSent ? handleRegister() : handleOtpGeneration()); }}>{isLoading ? <><i className="pi pi-spin pi-spinner spin"></i><span>Processing...</span></> : <>{isOtpSent ? 'Verify OTP' : 'Sign Up'}</>}</button>
        <button type="submit" className="resubmit" disabled = {timer!==0} style = {{opacity: timer===0 ? 1 : 0.5, cursor: timer===0 ? 'pointer' : 'not-allowed',display: isOtpSent ? 'block' : 'none'}} onClick={(e) => {e.preventDefault(); setTitleError("");handleResendOtpGeneration();}}>Resend</button>

        <p className="auth-text">
          Already have an account ?
          <a onClick={() => {toggleForm();setTitleError("");resetFormStates();}} style={{ cursor: 'pointer' }}>Login</a>
        </p>
        <p className="text-center" style={{display : isOtpSent ? 'block' : 'none'}}>{`Didn’t receive the OTP? Resend in ${timer}s`}</p>
        <p className="title-error">{titleError}</p>
          </form>
        </>
      );
    }
  };
  return (
    <div className="container">
      <div className="auth_main_div px-0 py-0">
       <Link to ="/">
         <button className="backToHome"  onClick={() => {sessionStorage.removeItem("isLogin");sessionStorage.removeItem("forgotpassword");resetFormStates();}}>← Back to Home</button>
         </Link>
        <div className="left_inner_div">
         
          <div className="back_img_div">
            <img src={bg_img} alt="Background img" />
          </div>
          <div className="tagline-div text-black">
            <h2>
              Analyze Smarter,
              <br />
              Invest Better.
            </h2>
          </div>
        </div>

        <div className="right_inner_div">
          <div className="logo">
            <img src={LogoDark} alt="Dark Mode Logo" />
          </div>
          <div className="auth_form">
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

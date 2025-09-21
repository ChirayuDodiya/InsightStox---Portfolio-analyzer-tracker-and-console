import React, { useState } from "react";
import "./auth.css";
import bg_img from "../assets/dark-mode-login-bg.png";
import LogoDark from "../assets/LogoDark.png";
import google_logo from "../assets/google_logo.svg";
import { InputField } from "../components/InputField.jsx";
import { PasswordInputField } from "../components/PasswordInputField.jsx";
import 'primeicons/primeicons.css';
export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [submittedforgot, setsubmittedforgot] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setSubmitted(false)
  };
  const toggleForgotPassword = () => {
    setforgotpassword(!forgotpassword);
  }
  const changeInputBoxes = () => {
    if (email === "" || password === "" || name === "" || confirmPassword === "") {
      alert("All fields are required");
    } else if (password !== confirmPassword) {
      alert("password and confirm password should be same");
    } else {
      setSubmitted(!submitted); 
    }
  };
  const changeforgotInputBoxes = () => {
    if (email === "") {
      alert("Email is required");
    } else {
      setsubmittedforgot(!submittedforgot);
    } 
  };
  const renderForm = () => {
    if (isLogin) {
      return (
        <>
          <div className="title-text">
            <h1>{forgotpassword?'Reset your password':'Login to your account'}</h1>
          </div>
          <form>
            <InputField htmlFor="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" labelVal="Email" styleVal={{ display: submittedforgot ? 'none':'block' }}/>
            <a className="forgot-password" onClick={toggleForgotPassword} style={{ cursor: 'pointer', display: forgotpassword?'none':'block'}} >Forgot?</a>
            <PasswordInputField htmlFor="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password" labelVal="Password" styleVal={{display: forgotpassword?'none':'block'}}/>
            <InputField htmlFor="otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} id="otp" placeholder="Enter the OTP" labelVal="OTP" styleVal={{ display: submittedforgot ? 'block' : 'none' }} />

            <button type="submit" className="submit" style={{display: forgotpassword?'none':'block'}}>Login</button>
            <button type="submit" className="submit" onClick={submitted ? null : changeforgotInputBoxes} style={{display: forgotpassword?'block':'none'}}>{submittedforgot?'Verify OTP': 'Send OTP'}</button>
            <button type="submit" className="resubmit" onClick={submitted ? null : changeforgotInputBoxes} style={{display: submittedforgot ? 'block' : 'none'}}>Resend</button>
            <button type="button" className="google-btn" style={{display: forgotpassword ?'none':'flex'}}>
              <img src={google_logo} alt="google logo"  />
              Continue with Google
            </button>

            <p className="auth-text" style={{display: forgotpassword?'none':'block'}}>
              Don't have an account ?
              <a onClick={toggleForm} style={{ cursor: 'pointer' }}>Sign up</a>
            </p>
          </form>
        </>
      );
    } else {
      return (
        <>
          <div className="title-text">
            <h1>{submitted ? 'Check your email for the OTP' : 'Create your account'}</h1>
          </div>
          <form>
            <InputField htmlFor="name" type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your full name" labelVal="Full Name" styleVal={{ display: submitted ? 'none' : 'block' }} />
            <InputField htmlFor="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" labelVal="Email" styleVal={{ display: submitted ? 'none' : 'block' }} />
            <PasswordInputField htmlFor="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password" labelVal="Password" styleVal={{ display: submitted ? 'none' : 'block' }} />
            <PasswordInputField htmlFor="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" placeholder="Confirm your password" labelVal="Confirm Password" styleVal={{ display: submitted ? 'none' : 'block' }} />
            <InputField htmlFor="otp" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} id="otp" placeholder="Enter the OTP" labelVal="OTP" styleVal={{ display: submitted ? 'block' : 'none' }} />
      
            <button type="submit" className="submit" onClick={submitted ? null : changeInputBoxes}>{submitted ? 'Verify OTP' : 'Sign Up'}</button>
            <button type="submit" className="resubmit" onClick={submitted ? null : changeInputBoxes} style={{display: submitted ? 'block' : 'none'}}>Resend</button>
    

            <p className="auth-text">
              Already have an account ?
              <a onClick={toggleForm} style={{ cursor: 'pointer' }}>Login</a>
            </p>
          </form>
        </>
      );
    }
  };
  return (
    <div className="container">
      <div className="auth_main_div px-0 py-0">
        <div className="left_inner_div">
         <button className="backToHome" >← Back to Home</button>
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

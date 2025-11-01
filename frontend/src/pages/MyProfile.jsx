import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../pages/MyProfile.css";
import "primeicons/primeicons.css";
import { checkPasswordStrength, validateNameStrength } from "../utils/validation.js";
import Navbar from "../components/Navbar.jsx";
import profileImg from "../assets/profileicon.svg";
import GoToArrow from "../assets/routeicon.svg";
import GoogleLogo from "../assets/google_logo.svg";
import Footer from '../components/Footer.jsx';
import { Sidebar } from "../components/Sidebar.jsx";


export const MyProfile = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        profimg: "",
        investmentExp: "",
        riskProfile: "",
        InvHorizon: "",
        FinGoal: ""
    });
    const [darkMode, setDarkMode] = useState(true);
    const fileInputRef = useRef(null);
    const [isEditingInfo, setIsEditingInfo] = useState(false);
    const [isEditingPass, setIsEditingPass] = useState(false);
    const [editedName, setEditedName] = useState("");
    const [currPass, setCurrPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    axios.defaults.withCredentials = true;

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const res = await axios.get(import.meta.env.VITE_BACKEND_LINK + "/api/v1/users/myProfile",
                    {
                        withCredentials: true,
                    }
                );
                console.log("Fetched successfully:", res.data);

                const user = res.data?.data;

                if (user) {
                    setUserInfo({
                        name: user.name,
                        email: user.email,
                        profimg: user.profileImage,
                        investmentExp: user.investmentExperience,
                        riskProfile: user.riskProfile,
                        InvHorizon: user.investmentHorizon,
                        FinGoal: user.financialGoals
                    });
                } else {
                    console.warn("User data not found in response:", res.data);
                }
            } catch (err) {
                console.error("Error fetching user info:", err.response?.data?.message || err.message);
            }
        };
        getUserInfo();
    }, []);


    const handlePicChange = (event) => {
        const filePath = event.target.files[0];
        if (filePath && filePath.type.startsWith("image/")) {
            setUserInfo((prev) => ({
                ...prev,
                profimg: URL.createObjectURL(filePath)
            }));
        }
        else {
            alert("Invalid file, Please select a valid file!")
        }
    };

    useEffect(() => {
        const trimmedName = editedName.trim();
        if (trimmedName && !validateNameStrength(trimmedName)) {
            setNameError("Name should not contain numbers or special characters");
        } else {
            setNameError("");
        }
    }, [editedName]);

    useEffect(() => {
        const trimmedPassword = newPass.trim();
        if (!trimmedPassword) {
            setPasswordError("");
        } else {
            setPasswordError(checkPasswordStrength(trimmedPassword));
        }
    }, [newPass]);

    useEffect(() => {
        if (newPass && confirmPass && newPass !== confirmPass) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    }, [confirmPass, newPass]);


    const handleButtonClick = () => fileInputRef.current.click();

    const handleEditInfo = () => {
        setEditedName(userInfo.name);
        setIsEditingInfo(true);
    };
    const handleCancelInfo = () => setIsEditingInfo(false);

    const handleEditPass = () => setIsEditingPass(true);

    const handleCancelPass = () => {
        setIsEditingPass(false);
        setCurrPass("");
        setNewPass("");
        setConfirmPass("");
    }

    const handleSaveInfo = async () => {

        const testName = validateNameStrength(editedName);

        if (testName) {
            setUserInfo((prev) => ({
                ...prev,
                name: editedName
            }));
            setIsEditingInfo(false);
        }
        else {
            alert("Invalid Name!");
        }

    };

    const handleSavePass = async () => {
        if (confirmPass !== newPass) {
            console.log("new password and confirm password does not match!")
        }

        else {
            try {
                const res = await axios.post(import.meta.env.VITE_BACKEND_LINK + "/api/v1/users/resetpassword", { email: userInfo.email, password: currPass, newPassword: newPass }, { withCredentials: true });
                console.log("Password changed succesfully!");
                setIsEditingPass(false);
                setCurrPass("");
                setNewPass("");
                setConfirmPass("");
            } catch (err) {
                if (err.response.data.message)
                    console.error("Error:", err.response.data.message);
            }
        }
    }

    return (
        <div className="myPage">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} pageType="myprofile"
                profileData={{ name: userInfo.name, email: userInfo.email, profileImage: userInfo.profimg }} />

            <div className="Container">

                <Sidebar primaryData={{ name: userInfo.name, email: userInfo.email, profileImage: userInfo.profimg }} />

                <main className="MainContent">
                    <h2 className="PersProfile"> Your personal profile </h2>
                    <div className="ProfilePic">
                        <label>Profile photo</label>
                        <div className="PicSection">
                            <img className="PicPlaceholder" src={userInfo.profimg ? userInfo.profimg : profileImg} alt="Profile Pic" />
                            <input type="file" ref={fileInputRef} accept="image/*" style={{ display: "none" }} onChange={handlePicChange} />
                            <button className="ChangePhoto" value="Change Photo" onClick={handleButtonClick}>Change Photo</button>
                        </div>
                    </div>

                    <div className="Information">
                        {/* to be changed via checking the condition */}
                        <div className="InfRow1">
                            <div className="InfHeader">
                                <label>
                                    Name
                                </label>
                                {!isEditingInfo && <button className="EditDetails" value="Edit" onClick={handleEditInfo}>Edit</button>}
                            </div>

                            <div className="InfValue">
                                {isEditingInfo ? (
                                    <div className="nameWrap">
                                        <input
                                            type="text"
                                            value={editedName}
                                            onChange={(e) => setEditedName(e.target.value)}
                                        />
                                        <p style={{ display: editedName ? 'block' : 'none' }} className="name-error error">{nameError}</p>
                                    </div>
                                ) : (
                                    <span>{userInfo.name}</span>
                                )}
                            </div>
                        </div>

                        {isEditingInfo && (
                            <div className="SaveCancelBtns">
                                <button className="SaveBtn" value="Save Changes" onClick={handleSaveInfo}>Save changes</button>
                                <button className="CancelBtn" value="Cancel" onClick={handleCancelInfo}>Cancel</button>
                            </div>
                        )}
                        <hr />

                        <div className="InfRow2">
                            <label>Email address</label>
                            <div className="InfValue">
                                <span>{userInfo.email}</span>
                            </div>
                        </div>
                        <hr />

                        {/* to be changed via checking the condition */}

                        <div className="InfRow5">
                            <div className="InfHeader">
                                <label>
                                    Password
                                </label>
                                {!isEditingPass && <button className="EditDetails" value="Edit" onClick={handleEditPass}> Edit </button>}
                            </div>

                            <div className="InfValue">
                                {isEditingPass ? (
                                    <div className="Handler">
                                        <div className="PasswordEditFields">
                                            <div className="CurrPass">
                                                <input
                                                    type={showPassword1 ? "text" : "password"}
                                                    placeholder="Current password"
                                                    value={currPass}
                                                    onChange={(e) => setCurrPass(e.target.value)}
                                                />
                                                <a className="password-toggle1" onClick={() => setShowPassword1(!showPassword1)}>
                                                    <span className="eye-symbol">
                                                        <i className={`pi ${showPassword1 ? "pi-eye-slash" : "pi-eye"}`}></i>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="NewPass">
                                                <input
                                                    type={showPassword2 ? "text" : "password"}
                                                    placeholder="New password"
                                                    value={newPass}
                                                    onChange={(e) => setNewPass(e.target.value)}
                                                />
                                                <a className="password-toggle2" onClick={() => setShowPassword2(!showPassword2)}>
                                                    <span className="eye-symbol">
                                                        <i className={`pi ${showPassword2 ? "pi-eye-slash" : "pi-eye"}`}></i>
                                                    </span>
                                                </a>
                                                <p style={{ display: newPass ? 'block' : 'none' }} className="pass-error error">{passwordError}</p>
                                            </div>
                                            <div className="ConfPass">
                                                <input
                                                    type={showPassword3 ? "text" : "password"}
                                                    placeholder="Confirm password"
                                                    value={confirmPass}
                                                    onChange={(e) => setConfirmPass(e.target.value)}
                                                />
                                                <a className="password-toggle3" onClick={() => setShowPassword3(!showPassword3)}>
                                                    <span className="eye-symbol">
                                                        <i className={`pi ${showPassword3 ? "pi-eye-slash" : "pi-eye"}`}></i>
                                                    </span>
                                                </a>
                                                <p style={{ display: confirmPass ? 'block' : 'none' }} className="confirm-pass-error error">{confirmPasswordError}</p>
                                            </div>
                                        </div>
                                        <div className="SaveCancelBtns">
                                            <button className="SaveBtn" val="Save Changes" onClick={handleSavePass}> Save changes</button>
                                            <button className="CancelBtn" val="Cancel" onClick={handleCancelPass}> Cancel </button>
                                        </div>
                                    </div>
                                ) : (
                                    <span>**********</span>
                                )}
                            </div>
                        </div>
                        <hr />

                        {/*<div className="InfRow5">
                            <label>Password
                                <button className="EditDetails" val="Edit" />
                            </label>
                            <div className="InfValue">
                                <span>**********</span>
                            </div>
                        </div>
                        */}

                        <div className="InfRow4">
                            <label>Linked accounts</label>
                            <div className="LinkedBox">
                                <img src={GoogleLogo} alt="Google Logo" />
                                <div className="InsideBox">
                                    <span className="ServiceName">Google</span>
                                    <span className="AccName">Ayush Dhamecha</span>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <h2 className="InvProfile"> Your investment profile </h2>
                        <span className="AIspan"> This field helps us to provide you better suggestions.</span>
                        <div className="InfRow3">
                            <div className="InvExp">
                                <label>Investment Experience</label>
                                <div className="InfValueDropDown1">
                                    <select className="InvExpList" value={userInfo.investmentExp} onChange={(e) => setUserInfo((prev) => ({
                                        ...prev,
                                        investmentExp: e.target.value
                                    }))}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <img className="g1" src={GoToArrow} alt="go-to" />
                                </div>
                                <hr />
                            </div>
                            <div className="RiskProfile">
                                <label>Risk Profile</label>
                                <div className="InfValueDropDown2">
                                    <select className="RiskProfList" value={userInfo.riskProfile} onChange={(e) => setUserInfo((prev) => ({
                                        ...prev,
                                        riskProfile: e.target.value
                                    }))}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="Low - Conservative">Low - Conservative</option>
                                        <option value="Medium - Moderate">Medium - Moderate</option>
                                        <option value="High - Aggressive">High - Aggressive</option>
                                    </select>
                                    <img className="g2" src={GoToArrow} alt="go-to" />
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="InfRow6">
                            <div className="FinGoals">
                                <label>Financial Goals</label>
                                <div className="InfValueDropDown3">
                                    <select className="FinGoalList" value={userInfo.FinGoal} onChange={(e) => setUserInfo((prev) => ({
                                        ...prev,
                                        FinGoal: e.target.value
                                    }))}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="Primary growth">Primary growth</option>
                                        <option value="Income generation">Income generation</option>
                                        <option value="Balanced growth & income">Balanced growth & income</option>
                                    </select>
                                    <img className="g1" src={GoToArrow} alt="go-to" />
                                </div>
                                <hr />
                            </div>
                            <div className="InvHorizon">
                                <label>Investment Horizon</label>
                                <div className="InfValueDropDown4">
                                    <select className="InvHorizonList" value={userInfo.InvHorizon} onChange={(e) => setUserInfo((prev) => ({
                                        ...prev,
                                        InvHorizon: e.target.value
                                    }))}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="Short-term (1-3 years)">Short-term (1-3 years)</option>
                                        <option value="Medium-term (3-10 years)">Medium-term (3-10 years)</option>
                                        <option value="Long-term (10+ years)">Long-term (10+ years)</option>
                                    </select>
                                    <img className="g2" src={GoToArrow} alt="go-to" />
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </main>
            </div >
            <div className="footer-div">
                <Footer darkMode={darkMode}
                    navigationLinks={[
                        { text: "Portfolio", href: "#" },
                        { text: "AI Insigths", href: "#" },
                        { text: "Wacthlist", href: "#" },
                        { text: "Compare Stocks", href: "#" },

                    ]}
                    legalLinks={[
                        { text: "Privacy Policy", href: "#privacy" },
                        { text: "Terms Of Service", href: "#terms" },
                        { text: "Contact Us", href: "#contact" },
                    ]} />
            </div>
        </div >
    );
};


import React, { useState } from "react";
import "../pages/MyProfile.css";
import Navbar from "../components/Navbar.jsx";
import profileImg from "../assets/profileicon.svg";
import GoToArrow from "../assets/routeicon.svg";
import GoogleLogo from "../assets/google_logo.svg";
import ButtonDiv from "../components/ButtonDiv";
import Footer from '../components/Footer.jsx';
import { Sidebar } from "../components/Sidebar.jsx";

export const MyProfile = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [investmentExp, setInvestmentExp] = useState("");
    const [riskProfile, setRiskProfile] = useState("");
    return (
        <div className="Page">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} pageType="dashboard"
            profileData={{ name: "Ayush Dhamecha", email: "ma**@gmail.com"}} />

            <div className="Container">
                
                <Sidebar primaryData={{ name: "Ayush Dhamecha", email: "ma**@gmail.com"}} />

                <main className="MainContent">
                    <h1>Your Profile
                        <button className="EditDetails" value="">Edit</button>    
                    </h1> 
                    <div className="ProfilePic">
                        <label>Profile photo</label>
                        <img className="PicPlaceholder" src={profileImg} alt="Profile Pic" />
                    </div>

                    <div className="Information">
                        <div className="InfRow1">
                            <label>Name</label>
                            <div className="InfValue">
                                <span>Ayush Dhamecha</span>
                            </div>
                        </div>
                        <hr />

                        <div className="InfRow2">
                            <label>Email address</label>
                            <div className="InfValue">
                                <span>managethisstuff@gmail.com</span>
                            </div>
                        </div>
                        <hr />

                        <div className="InfRow3">
                            <div className="InvExp">
                                <label>Investment Experience</label>
                                <div className="InfValueDropDown1">
                                    <select className="InvExpList" value={investmentExp} onChange={(e) => setInvestmentExp(e.target.value)}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                    <img className="g1" src={GoToArrow} alt="go-to" />
                                </div>
                            </div>
                            <div className="RiskProfile">
                                <label>Risk Profile</label>
                                <div className="InfValueDropDown2">
                                    <select className="RiskProfList" value={riskProfile} onChange={(e) => setRiskProfile(e.target.value)}>
                                        <option value="" disabled>Select an option</option>
                                        <option value="Conservative">Conservative</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="Aggressive">Aggressive</option>
                                    </select>
                                    <img className="g2" src={GoToArrow} alt="go-to" />
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="InfRow5">
                            <label>Password</label>
                            <div className="InfValue">
                                <span>**********</span>
                            </div>
                        </div>
                        <hr/>
                        <div className="InfRow4">
                            <label>Linked accounts</label>
                            <div className="LinkedBox">
                                <img src={GoogleLogo} alt="Google Logo" />
                                <span className="ServiceName">Google</span>
                                <span className="AccName">Ayush Dhamecha</span>
                                <ButtonDiv className="Disconnect" val="Disconnect" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
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
        </div>
    );
};


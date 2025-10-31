import React, { useState,useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import ButtonDiv from "./ButtonDiv.jsx";
import web_logo_without_bg_darkmode from "../assets/web_logo_without_bg_darkmode.png";
import web_logo_without_bg_lightmode from "../assets/web_logo_without_bg_lightmode.png";
import themetoggledark from "../assets/themetoggledark.svg";
import profileicon from "../assets/profileicon.svg";
import routeicon from "../assets/routeicon.svg";
import exiticon from "../assets/exiticon.svg";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
// import tailwind from "tailwindcss/tailwind.css";
const Navbar = ({ darkMode, setDarkMode, pageType, profileData = {} }) => {

  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleProfileClick = () => setIsProfileOpen(true);
  const handleProfileClose = () => setIsProfileOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 1100 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [isMenuOpen]);
  return (
    <>
      {pageType === "dashboard" && isProfileOpen && (
        <div className="profileoverlay" onClick={handleProfileClose}></div>
      )}
      {isMenuOpen && <div className="profileoverlay" onClick={toggleMenu}></div>}
      <div className="navbar">
        <div className="left_btn logo">
          <a href="#"> <img src={darkMode? web_logo_without_bg_darkmode: web_logo_without_bg_lightmode} alt="Logo" /> </a>
        </div>

        <div className="center_btn">
          {pageType === "home" ? (
            <>
              <a className="navbar_btn" href="#feature">Features</a>
              <a className="navbar_btn" href="#HowItWorks">How it Works?</a>
              <a className="navbar_btn" href="#FAQs">FAQs</a>
            </>
          ) : (
            <>
              <a className="navbar_btn" href="#">Dashboard</a>
              <a className="navbar_btn" href="#">Portfolio</a>
              <a className="navbar_btn" href="#">AI Insights</a>
              <a className="navbar_btn" href="#">Compare Stocks</a>
              <a className="navbar_btn" href="#">Watchlist</a>
            </>
          )}
        </div>

        <div className="right_btn">

          {pageType === "home" && (
            <Link to="/auth" onClick={() => {sessionStorage.setItem("isLogin", "true");
                                              sessionStorage.setItem("forgotpassword", "false");}}>
              <ButtonDiv className="login_btn" val="Log In" />
            </Link>
          )}

          {pageType === "dashboard" && (
            <div className="profile_btn">
              <button onClick={handleProfileClick}>
                <img src={profileicon} alt="Profile" />
              </button>
            </div>
          )}

          <div className="toggle_btn">
            <button style = {{display : "none"}}onClick={() => setDarkMode(!darkMode)}>
              <img src={themetoggledark} alt="Toggle Theme" />
            </button>
          </div>
          <i className="menu_toggle pi pi-bars" onClick={toggleMenu}> 
          </i>
        </div>
      </div>
           {isMenuOpen && (
        <div className="mobile_menu ">
          {pageType === "home" ? (
            <div className="menuoptions">
              <ul>
                 <Link to="/auth" onClick={() => {sessionStorage.setItem("isLogin", "true");
                                              sessionStorage.setItem("forgotpassword", "false");}}>
                <li>Log In</li>
                </Link>
                <a href="#feature"><li>Features</li></a>
                <a href="#HowItWorks"><li>How it Works?</li></a>
                <a href="#FAQs"><li className="lastli">FAQs</li></a>
              </ul>
            </div>
          ) : (
            <div className="menuoptions">
              <ul>
              <a href="#"><li>Dashboard </li></a>
              <a href="#"><li>Portfolio</li></a>
              <a href="#"><li>AI Insights</li></a>
              <a href="#"><li>Compare Stocks</li></a>
              <a href="#"><li className="lastli">Watchlist</li></a>
             </ul>
              </div>
          )}
        </div>
      )}
      {pageType === "dashboard" && isProfileOpen && (
        <div className="profilepopup">
          <div className="popupheading">
            <img src={profileicon} alt="Profile" />
            <div className="name-email">
              <h3>{profileData.name}</h3>
              <span>{profileData.email}</span>
            </div>
          </div>
          <div className="popupoptions">
            <ul>
              <li onClick={() => handleNavigation("/myprofile")}>My Profile <img src={routeicon} alt="" /></li>
              <li>Manage <img src={routeicon} alt="" /></li>
              <li>Help & Support <img src={routeicon} alt="" /></li>
              <li className="lastli">Log Out <img src={exiticon} alt="" /></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

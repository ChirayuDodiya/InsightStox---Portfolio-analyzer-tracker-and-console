import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import web_logo_without_bg_darkmode from '../assets/web_logo_without_bg_darkmode.png';
import web_logo_without_bg_lightmode from '../assets/web_logo_without_bg_lightmode.png';
import './Dashboard.css';
import 'primeicons/primeicons.css';
import DashboardHeader from '../components/Dashboard-Header.jsx';
import profileicon from '../assets/profileicon.svg';
import themetoggledark from '../assets/themetoggledark.svg';
import routeicon from '../assets/routeicon.svg';
import exiticon from '../assets/exiticon.svg';
export const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isprofileopen, setIsProfileOpen] = useState(false);
  const handleprofileclick = () => setIsProfileOpen(true);
  const handleprofileclose = () => setIsProfileOpen(false);
  return (
    <>
          {isprofileopen && (<div className="profileoverlay" onClick={handleprofileclose}></div>)}
    <div className="dashboard-container">
        <div className="navbar">
          <div className="left_btn logo">
            <a href="#"><img src={darkMode==true ? web_logo_without_bg_darkmode : web_logo_without_bg_lightmode} alt="logo without background" /></a>
          </div>

          <div className="center_btn">
            <a className=" navbar_btn" href="#">Dashboard</a>
            <a className=" navbar_btn" href="#">Portfolio</a>
            <a className=" navbar_btn" href="#">AI Insigths</a>
            <a className=" navbar_btn" href="#">Compare Stocks</a>
            <a className=" navbar_btn" href="#">Watchlist</a>

          </div>

          <div className="right_btn">
            <div className="profile_btn "> <button onClick={handleprofileclick}> <img src={profileicon} alt="profileicon" /></button></div>
           
            <div className="toggle_btn "> <button> <img src={themetoggledark} alt="themetoggle" /></button> </div>
          </div>
        </div>
         {isprofileopen && (
          <div className="profilepopup">
              <div className="popupheading">
                <img src={profileicon} alt="profileicon" />
                <div className="name-email">
                  <h3>Ayush Damecha</h3>
                  <span>ma**@gmail.com</span>
                </div>
              </div>
              <div className="popupoptions">
                <ul>
                  <li>My Profile <img src={routeicon}></img></li>
                  <li>Manage <img src={routeicon}></img></li>
                  <li>Help & Support <img src={routeicon}></img></li>
                  <li>Log Out <img src={exiticon}></img></li>
                </ul>
              </div>
          </div>

      )}
      <DashboardHeader darkMode={darkMode}  />
      
      <div className="dashboard-content">
        <div className="welcomediv"></div>
        <div className="portfoliodiv"></div>
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
        ]}/>
      </div>
      
    </div>
    </>
  );
};

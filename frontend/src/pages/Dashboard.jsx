import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import ButtonDiv from '../components/ButtonDiv.jsx';
import web_logo_without_bg_darkmode from '../assets/web_logo_without_bg_darkmode.png';
import web_logo_without_bg_lightmode from '../assets/web_logo_without_bg_lightmode.png';
import './Dashboard.css';
import 'primeicons/primeicons.css';
import DashboardHeader from '../components/Dashboard-Header.jsx';

export const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
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
            <div className="profile_btn navbar_btn"> <button><span class=" user-icon pi pi-user"></span>
            </button></div>
          </div>
        </div>
      <DashboardHeader darkMode={darkMode}  />
      <div className="dashboard-content">

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
  );
};

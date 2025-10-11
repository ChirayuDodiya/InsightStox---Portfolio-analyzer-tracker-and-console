import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import ButtonDiv from '../components/ButtonDiv.jsx';
import StockDisplay from '../components/StockDisplay.jsx';
import web_logo_without_bg_darkmode from '../assets/web_logo_without_bg_darkmode.png';
import web_logo_without_bg_lightmode from '../assets/web_logo_without_bg_lightmode.png';
import './Dashboard.css';
import 'primeicons/primeicons.css';


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
        <div className="dashboard-header">
          <div className="trending-stocks">
            <StockDisplay />
          </div>
          <div className="searchbar">
            <i className="pi pi-search search-icon"></i>
           <input type="text" className="search-input" placeholder="Search for a Stock (e.g., RELIANCE.NS, TATA MOTORS)"/>
             
          </div>
        </div>
      <div className="dashboard-content">

      </div>
      <div className="footer-div">
        <Footer darkMode={darkMode} />
      </div>
      
    </div>
  );
};

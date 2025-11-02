import React, { useState } from 'react';
import './Dashboard-Header.css';
import growthicon from '../assets/growthicon.svg';
import historyicon from '../assets/historyicon.svg';

const DashboardHeader = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleFocus = () => setIsSearchActive(true);
  const handleClose = () => setIsSearchActive(false);

  return (
    <>
      {isSearchActive && <div className="overlay" onClick={handleClose}></div>}

      <div className="dashboard-header">  
        <div className="d-stock-display-container">
          <div className="d-stock-info">
            <div className="d-stock-header">
              <span className="d-stock-name">NIFTY 50</span>
              <span className="d-stock-exchange">NSE</span>
            </div>
            <div className="d-stock-details">
              <span className="d-stock-price">
                25,237.05
                <span className="d-change-icon negative pi pi-arrow-down"></span>
              </span>
              <span className="d-stock-change negative">
                <span className="d-change-text">-96.55 (-0.38%)</span>
              </span>
            </div>
          </div>

          <span className="divider">|</span> 

          <div className="d-stock-info">
            <div className="d-stock-header">
              <span className="d-stock-name">NIFTY BANK</span>
              <span className="d-stock-exchange">NSE</span>
            </div>
            <div className="d-stock-details">
              <span className="d-stock-price">
                55,458.85
                <span className="d-change-icon negative pi pi-arrow-down"></span>
              </span>
              <span className="d-stock-change negative">
                <span className="d-change-text">-268.60 (-0.48%)</span>
              </span>
            </div>
          </div>

          <span className="divider">|</span> 

          <div className="d-stock-info">
            <div className="d-stock-header">
              <span className="d-stock-name">SENSEX</span>
              <span className="d-stock-exchange">BSE</span>
            </div>
            <div className="d-stock-details">
              <span className="d-stock-price">
                82,626.23
                <span className="d-change-icon negative pi pi-arrow-down"></span>
              </span>
              <span className="d-stock-change negative">
                <span className="d-change-text">-347.73 (-0.42%)</span>
              </span>
            </div>
          </div>
        </div>

        <div className="searchbar">
          <i className="pi pi-search search-icon"></i>
          <input type="text"className="search-input"placeholder="Search for a Stock (e.g., RELIANCE.NS, TATA MOTORS)"onFocus={handleFocus}/>
        </div>
      </div>

      {isSearchActive && (
        <div className="search-popup">
          <div className="search-popup-header">
            <i className="pi pi-search popup-search-icon"></i>
            <input type="text"className="popup-search-input"placeholder="Search for a Stock (e.g., RELIANCE.NS, TATA MOTORS)"autoFocus/>
          </div>
          <div className="search-results">
            <ul>
              <li><img src={historyicon}></img>Tata Investment Corporation Ltd.</li>
              <li><img src={historyicon}></img>Five Star Senior Living Inc.</li>
            </ul>
            <h4>Popular Stocks</h4>
            <ul>
              <li><img src={growthicon}></img>ITI Ltd.</li>
              <li><img src={growthicon}></img>Tata Motors Ltd.</li>
              <li><img src={growthicon}></img>SBI Gold Fund</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;

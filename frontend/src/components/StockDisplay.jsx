import React from 'react';
import './StockDisplay.css';

const StockDisplay = () => {
  return (
    <div className="stock-display-container">
      <div className="stock-item">
        <div className="stock-info">
          <div className="stock-header">
            <span className="stock-name">NIFTY 50</span>
            <span className="stock-exchange">NSE</span>
          </div>
          <div className="stock-details">
            <span className="stock-price">25,237.05<span className="change-icon negative pi pi-arrow-down"></span>
            </span>
            <span className="stock-change negative">
              <span className="change-text">-96.55 (-0.38%)</span>
            </span>
          </div>
        </div>
      </div>
      <span class="divider" >|</span> 
      <div className="stock-item">
        <div className="stock-info">
          <div className="stock-header">
            <span className="stock-name">NIFTY BANK</span>
            <span className="stock-exchange">NSE</span>
          </div>
          <div className="stock-details">
            <span className="stock-price">55,458.85<span className="change-icon negative pi pi-arrow-down"></span></span>
            <span className="stock-change negative">
              <span className="change-text">-268.60 (-0.48%)</span>
            </span>
          </div>
        </div>
      </div>
      <span class="divider" >|</span> 

      <div className="stock-item">
        <div className="stock-info">
          <div className="stock-header">
            <span className="stock-name">SENSEX</span>
            <span className="stock-exchange">BSE</span>
          </div>
          <div className="stock-details">
            <span className="stock-price">82,626.23<span className="change-icon negative pi pi-arrow-down"></span></span>
            <span className="stock-change negative">
              <span className="change-text">-347.73 (-0.42%)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDisplay;

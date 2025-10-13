import React from 'react'
import './WelcomeInvestor.css'
import evaluation_icon from '../../assets/evaluation-icon.png'
import totalvalue_icon from '../../assets/totalvalue-icon.png'
import gain_icon from '../../assets/gain-icon.png'
import overallgraph_icon from '../../assets/overallgraph-icon.png'

const PortfolioCard = ({ icon, title, value, details, valueColor }) => {
  return (
    <div className="portfolio-card">
      <img src={icon} alt="" className="card-icon" />
      <p className="card-title">{title}</p>
      <p className={`card-value ${valueColor}`}>{value}</p>
      {details && <p className={`card-details ${valueColor}`}>{details}</p>}
    </div>
  );
};

const TrendingStocks = () => {
  const stocksData = [
    { name: 'ADANIPOWER', nse: 'NSE', price: '146.25', change: '-2.75 (-1.85%)', isUp: false },
    { name: 'IDEA', nse: 'NSE', price: '8.02', change: '-0.66 (-7.60%)', isUp: false },
    { name: 'RELIANCE', nse: 'NSE', price: '1377.60', change: '3.20 (0.18%)', isUp: true },
    { name: 'TATAMOTORS', nse: 'NSE', price: '672.90', change: '8.00 (1.25%)', isUp: true },
    { name: 'URBANCO', nse: 'NSE', price: '171.63', change: '1.20 (0.70%)', isUp: true },
    { name: 'TCS', nse: 'NSE', price: '2899.10', change: '-58.30 (-1.97%)', isUp: false },
    { name: 'TATAGOLD', nse: 'NSE', price: '11.08', change: '0.01 (0.09%)', isUp: true },
  ];

  return (
    <div className="trending-stocks-container">
      <h3 className="trending-title">Trending Stocks</h3>
      <div className="stocks-list">
        {stocksData.map((stock, index) => (
          <div key={index} className="trending-stock-item">{/*index is the array index (used for unique key)*/}
            <div className="stock-info">
              <p className="stock-name">{stock.name}</p>
              <p className="stock-nse">{stock.nse}</p>
            </div>
            <div className="stock-details">
              <p className={`stock-price ${stock.isUp ? 'text-positive' : 'text-negative'}`}>
                {stock.price} {stock.isUp ? '↑' : '↓'}
              </p>
              <p className={`stock-change ${stock.isUp ? 'text-positive' : 'text-negative'}`}>{stock.change}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="see-more-link">See More →</a>
    </div>
  );
};

const WelcomeInvestor = () => {
    const cardData = [
        { icon: totalvalue_icon, title: 'Total Portfolio Value', value: '₹1,50,420.55' },
        { icon: gain_icon, title: "Today's Gain/Loss", value: '+ ₹1,245.30', details: '(+0.83%)', valueColor: 'text-positive' },
        { icon: overallgraph_icon, title: 'Overall Gain/Loss', value: '- ₹25,420.55', details: '(+19.5%)', valueColor: 'text-negative' },
        { icon: evaluation_icon, title: 'Portfolio Risk', value: 'Moderate', valueColor: 'text-neutral' },
    ];

    return (
        <div className="page-container">
          
            <div className="dashboard-wrapper">
                <div className="main-content">
                    <div className="welcome-header">
                        <h1>Welcome back, <strong>Investor!</strong></h1>
                        <p>Here's your portfolio overview for today.</p>
                    </div>
                    <div className="portfolio-grid">
                        {cardData.map((card, index) => <PortfolioCard key={index} {...card} />)}
                    </div>
                </div>
                <aside className="sidebar">
                    <TrendingStocks />
                </aside>
            </div>
        </div>
    );
};

export default WelcomeInvestor;
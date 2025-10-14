import React from 'react';
import './MarketMovers.css';
import tata_icon from '../../assets/tata-icon.png'

const StockListItem = ({ name, exchange, price, change, percentage, isGainer }) => {
  const changeColorClass = isGainer ? 'gainer' : 'loser';
  return (
    <div className="stock-item">
      <div className="stock-info">
        <p className="stock-name">{name}</p>
        <p className="stock-exchange">{exchange}</p>
      </div>
      <div className="stock-stats">
        <p className={`stock-price ${changeColorClass}`}>{price}</p>
        <div className={`stock-change ${changeColorClass}`}>
          <span>{isGainer ? '↑' : '↓'}</span> {change} ({percentage}%)
        </div>
      </div>
    </div>
  );
};

const BusinessGroupCard = ({ logo, name, stockCount }) => (
  <div className="group-card">
    {/* Use a placeholder or actual image path */}
    <img src={logo} alt={`${name} logo`} className="group-logo" />
    <p className="group-name">{name}</p>
    <p className="group-stock-count">{stockCount} stocks</p>
  </div>
);


const MarketNewsItem = ({ headline, time }) => (
  <div className="news-item">
    <p className="news-headline">{headline}</p>
    <p className="news-time">{time}</p>
  </div>
);

const MarketMovers = () => {
  // Dummy data
  const gainersData = [
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '+268.60', percentage: '+0.48' },
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '+268.60', percentage: '+0.48' },
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '+268.60', percentage: '+0.48' },
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '+268.60', percentage: '+0.48' },
  ];

  const losersData = [
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '-268.60', percentage: '-0.48' },
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '-268.60', percentage: '-0.48' },
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '-268.60', percentage: '-0.48' },
    { name: 'NIFTY BANK', exchange: 'NSE', price: '55,458.85', change: '-268.60', percentage: '-0.48' },
  ];

  const businessGroupsData = [
     { logo: tata_icon, name: 'TATA', stockCount: 15 },
     { logo: tata_icon, name: 'Reliance', stockCount: 8 },
     { logo: tata_icon, name: 'Adani', stockCount: 9 },
     { logo: tata_icon, name: 'Mahindra', stockCount: 7 },
     { logo: tata_icon, name: 'Bajaj', stockCount: 11 },
     { logo: tata_icon, name: 'Aditya Birla', stockCount: 8 },
  ];

  const marketNewsData = [
    { headline: 'RBI keeps repo rate unchanged, GDP forecast raised.', time: '1 hour ago' },
    { headline: 'RBI keeps repo rate unchanged, GDP forecast raised.', time: '1 hour ago' },
  ];

  return (
    <div className="market-movers-container">
      <div className="header">
        <h2 className="header-title">Market Movers</h2>
        <a href="#" className="see-more-link">See More →</a>
      </div>

      <div className="main-grid">
        <div className="content-card">
          <h3 className="content-title gainer">Gainers</h3>
          <div>
            {gainersData.map((stock, index) => (
              <StockListItem key={index} {...stock} isGainer />
            ))}
          </div>
        </div>

        <div className="content-card">
          <h3 className="content-title loser">Losers</h3>
          <div>
            {losersData.map((stock, index) => (
              <StockListItem key={index} {...stock} isGainer={false} />
            ))}
          </div>
        </div>
      </div>

      <div className="main-grid">
        <div className="content-card">
          <h3 className="content-title">Top Business Groups</h3>
          <div className="groups-grid">
            {businessGroupsData.map((group, index) => (
              <BusinessGroupCard key={index} {...group} />
            ))}
          </div>
          <a href="#" className="see-more-link">See More →</a>
        </div>

        <div className="content-card">
          <h3 className="content-title">Market News</h3>
          <div>
            {marketNewsData.map((news, index) => (
              <MarketNewsItem key={index} {...news} />
            ))}
          </div>
          <a href="#" className="see-more-link">See More →</a>
        </div>
      </div>
    </div>
  );
};

export default MarketMovers;
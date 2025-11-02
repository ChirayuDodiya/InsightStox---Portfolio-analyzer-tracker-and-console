import React from "react";
import "./MyHoldings.css";

const holdings = [
  { stock: "TCS", quantity: 5, avgPrice: 3200, currentPrice: 3450, value: 17250 },
  { stock: "Reliance", quantity: 10, avgPrice: 2300, currentPrice: 2250, value: 22500 },
  { stock: "HDFC Bank", quantity: 15, avgPrice: 1550, currentPrice: 1620, value: 24300 },
  { stock: "Infosys", quantity: 8, avgPrice: 1400, currentPrice: 1320, value: 10560 },
  { stock: "ITC", quantity: 20, avgPrice: 450, currentPrice: 480, value: 9600 },
];

const MyHoldings = () => {
  return (
    <div>
      <div className="card holdings-card">
        <h2>My Holdings</h2>
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Avg. Price</th>
              <th>Current Price</th>
              <th>Value(₹)</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((item, index) => (
              <tr key={index}>
                <td>{item.stock}</td>
                <td>{item.quantity}</td>
                <td>{item.avgPrice.toLocaleString()}</td>
                <td>{item.currentPrice.toLocaleString()}</td>
                <td>{item.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="see-more">See More →</p>
      </div>
    </div>
  );
};

export default MyHoldings;

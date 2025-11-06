import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { color: '#FFFFFF' },
    },
    title: {
      display: true,
      text: 'Portfolio Performance (Last 30 Days)',
      color: '#00C853',
      font: { size: 22, weight: 'bold' },
    },
  },
  scales: {
    x: {
      ticks: { color: '#A1A1AA' },
      grid: { display:false },
    },
    y: {
      ticks: {
        color: '#A1A1AA',
        callback: (value) => value.toLocaleString(),
      },
      grid: { color: '#3F3F46' },
    },
  },
};

export default function PortfolioChart() {
  // Chart data state
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Portfolio Value ($)',
        data: [],
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        tension: 0.4,
        fill: false,
      },
    ],
  });

  // Error state
  const [error, setError] = useState(null);

  // Backend authentication check is disabled for static demo
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // axios.defaults.withCredentials = true;

  // This function is commented out (requires backend)
  /*
  const checkAuthStatus = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_BACKEND_LINK + "/api/v1/users/myProfile", {
        withCredentials: true,
      });
      if (res.data && res.data.data?.email) {
        setIsAuthenticated(true);
        console.log("User authenticated:", res.data.data.email);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Authentication failed:", err.response?.data?.message || err.message);
      setIsAuthenticated(false);
    }
  };
  */

  // Static mock data (last 30 days)
  const fetchPortfolioData = async () => {
    try {
      setError(null);

      // Backend API call commented out for static demo
      /*
      const res = await axios.get(import.meta.env.VITE_BACKEND_LINK + "/api/v1/dashboard/portfolioGraph", {
        withCredentials: true,
      });
      const labels = Array.isArray(res.data.dates) ? res.data.dates : [];
      const data = Array.isArray(res.data.values) ? res.data.values : [];
      */

      // Use static mock data
      const labels = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      });

      const data = [
        0, 10700, 10820, 10950, 10800, 10980, 11050, 11200, 11120, 11300,
        11400, 11550, 11620, 11700, 0, 11850, 11900, 12000, 12150, 12200,
        12100, 12300, 12450, 12500, 12600, 12750, 12820, 12900, 13000, 13150,
      ];

      setChartData((prev) => ({
        ...prev,
        labels,
        datasets: [
          {
            ...prev.datasets[0],
            data,
            label: 'Portfolio Value ($)',
          },
        ],
      }));

      console.log('Static portfolio chart data loaded successfully');
    } catch (e) {
      console.error('Failed to fetch static data:', e);
      setError('Failed to load portfolio performance data.');
    }
  };

  // On mount, just load static data
  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '8px' }}>
      {/* <h2 style={{ color: '#22C55E', textAlign: 'center', marginBottom: '20px' }}>
        Portfolio Performanc
      </h2> */}

      {/* Error Display */}
      {error && (
        <div style={{ color: '#EF4444', marginBottom: '10px', textAlign: 'center' }}>
          {error}
        </div>
      )}

      {/* Chart Section */}
      <div style={{ height: '400px' }}>
        {!error && <Line options={options} data={chartData} />}
      </div>
    </div>
  );
}

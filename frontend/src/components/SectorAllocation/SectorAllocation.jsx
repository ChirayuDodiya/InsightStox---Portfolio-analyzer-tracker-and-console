import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './SectorAllocation.css';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const sampleDataSets = [
  {
    labels: ['IT & Tech', 'Banking & Finance', 'Energy', 'FMCG (ITC)', 'Startups (Zomato)'],
    dataPoints: [33.2, 36.7, 20.1, 7.1, 2.9],
  },
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Sector Allocation',
      color: '#F4F4F5',
      font: {
        size: 26,
        weight: 'bold',
        family: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
      },
      padding: { bottom: 30 },
    },
    legend: {
      position: 'bottom',
      labels: {
        color: '#A1A1AA',
        font: { size: 14 },
        padding: 20,
        boxWidth: 15,
        usePointStyle: true,
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#09090B',
      borderColor: '#00C853',
      borderWidth: 1,
      titleColor: '#F4F4F5',
      bodyColor: '#A1A1AA',
      padding: 10,
      cornerRadius: 4,
      callbacks: {
        label: function (context) {
          let label = context.label || '';
          if (label) label += ': ';
          if (context.parsed !== null) label += context.parsed + '%';
          return label;
        },
      },
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
};

const generateDynamicColors = (numColors) => {
  const colors = ['#22C55E', '#16A34A', '#15803D', '#4ADE80', '#86EFAC', '#14532D', '#166534'];
  return Array.from({ length: numColors }, (_, i) => colors[i % colors.length]);
};

const formatDataForChart = (dataSet) => ({
  labels: dataSet.labels,
  datasets: [
    {
      label: '% Allocation',
      data: dataSet.values,
      backgroundColor: generateDynamicColors(dataSet.values.length),
      borderColor: '#18181B',
      borderWidth: 4,
      hoverOffset: 25,
      cutout: '60%',
    },
  ],
});

export default function SectorAllocationChart() {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAllocationData = async () => {
    setLoading(true);
    setError('');

    try {
      // ✅ Fetch with Axios, including cookies for authentication
      const response = await axios.get('http://localhost:8000/api/v1/dashboard/stockAllocation', {
        withCredentials: true, // ensures cookies are sent (for login session)
      });

      const apiData = response.data;

      if (!apiData.labels || !apiData.values) {
        throw new Error('Invalid data format from backend');
      }

      setChartData(formatDataForChart(apiData));
    } catch (err) {
      console.error('Error fetching allocation data:', err);

      if (err.response && err.response.status === 401) {
        setError('You must be logged in to view this data.');
      } else {
        setError('Failed to fetch allocation data. Showing sample.');
      }

      setChartData(formatDataForChart(sampleDataSets[0])); // fallback to sample
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllocationData();
  }, []);

  if (loading) {
    return <div className="loading-container">Loading Allocation Data...</div>;
  }

  return (
    <div className="sector-allocation-container">
      {error && <p className="error-text">{error}</p>}
      <div className="chart-wrapper">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}

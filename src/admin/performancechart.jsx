// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register the Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Title);

const PerformanceChart = () => {
  // Define the data and configuration for the chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "",
        data: [4.0, 4.5, 4.2, 4.4, 4.8, 5.0],
        borderColor: "#35AD0A",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.4, // Curve of the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Rating Distribution",
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Months",
        },
      },
      y: {
        title: {
          display: false,
          text: "Sales ($)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PerformanceChart;

import { Line } from "react-chartjs-2";
// import analyticsframe from "../assets/Rectangle 1776.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import bground from "../../public/assets/lightbg.png";
import WorldAnalyticsMap from "../components/WorldAnalyticsMap";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const labels = [
    "2025-04-10",
    "2025-04-11",
    "2025-04-12",
    "2025-04-13",
    "2025-04-14",
    "2025-04-15",
    "2025-04-16",
    "2025-04-17",
  ];

  // Fixed: Ensure all datasets have 8 data points to match 8 labels
  const data = {
    labels,
    datasets: [
      {
        label: "@orylans",
        data: [20, 300, 400, 800, 300, 300, 500, 600],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#3B82F6",
        pointBorderWidth: 2,
        fill: false,
      },
      {
        label: "@Saekolove",
        data: [20, 500, 800, 200, 600, 800, 300, 200],
        borderColor: "#22C55E",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#22C55E",
        pointBorderWidth: 2,
        fill: false,
      },
      {
        label: "@Ory",
        data: [20, 800, 200, 100, 600, 800, 750, 700],
        borderColor: "#06B6D4",
        backgroundColor: "rgba(6, 182, 212, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#06B6D4",
        pointBorderWidth: 2,
        fill: false,
      },
      {
        label: "@Orylann",
        data: [40, 300, 200, 400, 600, 800, 200, 100],
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#EF4444",
        pointBorderWidth: 2,
        fill: false,
      },
      {
        label: "@Vikii",
        data: [30, 500, 700, 600, 500, 400, 350, 300],
        borderColor: "#EC4899",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointBackgroundColor: "#EC4899",
        pointBorderWidth: 2,
        fill: false,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
      background: {
        color: "transparent",
      },
    },
    scales: {
      y: {
      
        beginAtZero: true,
        max:800,
        // If you want specific ticks, uncomment and use the following:
        ticks: {
          stepSize: 200,
          min: 0,
          max: 800,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

  const stats = [
    {
      label: "My Deeplinks",
      value: "5/25",
      change: "Active Links",
    },
    {
      label: "Shield Protection",
      value: "4/5",
      change: "Protected Links",
    },
    {
      label: "April analytics",
      value: "7.889",
      change: "Visitors in April 2025",
    },
    {
      label: "All Time Analytics",
      value: "7.889",
      change: "Total Visitors",
    },
  ];

  return (
    <div className="w-full max-w-[1300px] mx-auto p-2 md:p-4">
      <div
        className="bg-white rounded-[32px] p-4 md:p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${bground})` }}
      >
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-[36px] font-bold mb-2 text-black">Overview</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-2xl p-4"
            >
              <h3 className="text-[20px] font-medium mb-2 text-[#3C3C3C]">
                {stat.label}
              </h3>
              <p className="text-[64px] font-semibold text-[#3C3C3C] text-center">
                {stat.value}
              </p>
              <p className="text-[16px] font-normal text-[#3C3C3C] mt-2 text-center">
                {stat.change}
              </p>
            </div>
          ))}
        </div>
        {/* Map Section */}
        <div className="relative bg-[#f1f8f4 rounded-2xl p-4 md:p-6">
          <WorldAnalyticsMap />
        </div>
        {/* Graph Section */}
        <div className="relative bg-[#f1f8f4] rounded-2xl p-4 md:p-6 overflow-hidden border border-[#7cc5a1]">
          {/* Chart Frame as background
          <img
            src={analyticsframe}
            alt="Analytics Frame"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            style={{ borderRadius: "1rem" }}
          /> */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  7,889{" "}
                  <span className="text-xl font-medium text-gray-600">
                    Visitors
                  </span>
                </h3>
                <p className="text-sm text-black">
                  Visits on your deeplinks from 2025-03-18 00:00 to 2025-04-17
                  23:59 (UTC)
                </p>
              </div>
              <select className="mt-2 md:mt-0 bg-[#c7efdb] px-4 py-2 rounded-full text-sm border border-gray-200">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 24 Hours</option>
              </select>
            </div>
            <div className="w-full h-[300px]">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

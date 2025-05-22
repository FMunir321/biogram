import { Line } from 'react-chartjs-2';
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
import bground from "../assets/lightbg.png";

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
  const labels = ['Mar 18', 'Mar 25', 'Apr 1', 'Apr 8', 'Apr 15', 'Apr 17'];

  const data = {
    labels,
    datasets: [
      {
        label: 'anyshare',
        data: [1200, 1900, 2400, 2800, 3100, 3300],
        borderColor: '#3B82F6',
        tension: 0.4,
      },
      {
        label: '@oneshare',
        data: [800, 1500, 1800, 2200, 2600, 2900],
        borderColor: '#22C55E',
        tension: 0.4,
      },
      {
        label: '@cry',
        data: [600, 900, 1200, 1100, 900, 800],
        borderColor: '#06B6D4',
        tension: 0.4,
      },
      {
        label: '@cryshare',
        data: [400, 800, 1000, 1400, 1600, 1800],
        borderColor: '#EF4444',
        tension: 0.4,
      },
      {
        label: '@waki',
        data: [200, 500, 700, 600, 500, 400],
        borderColor: '#EC4899',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'start' as const,
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
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
              <h3 className="text-[20px] font-medium mb-2 text-[#3C3C3C]">{stat.label}</h3>
              <p className="text-[64px] font-semibold text-[#3C3C3C] text-center">{stat.value}</p>
              <p className="text-[16px] font-normal text-[#3C3C3C] mt-2 text-center">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Graph Section */}
        <div className="bg-[#f1f8f4] rounded-2xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Growth Overview</h3>
              <p className="text-sm text-gray-600">7,889 Total Visitors</p>
            </div>
            <select className="mt-2 md:mt-0 bg-white px-4 py-2 rounded-full text-sm border border-gray-200">
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
  );
};

export default Analytics;

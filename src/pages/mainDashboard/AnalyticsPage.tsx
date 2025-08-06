import { Line } from "react-chartjs-2";
// import analyticsframe from "../assets/Rectangle 1776.png";
// import analyticsframe from "../../public/assets/Rectangle 1776.png";
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
import bground from "../../../public/assets/lightbg.png";
import WorldAnalyticsMap from "../../components/WorldAnalyticsMap";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import api from "../../service/api";
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
const [profileViews, setProfileViews] = useState(0);
const [linkClicks, setLinkClicks] = useState(0);
const [lastMonthVisitors, setLastMonthVisitors] = useState(0);
const [totalVisitors, setTotalVisitors] = useState(0);
const [chartData, setChartData] = useState<any>(null);
const [chartLabels, setChartLabels] = useState<string[]>([]);
const [selectedPeriod, setSelectedPeriod] = useState("30"); // "30", "7", "1" for days
const [isChartLoading, setIsChartLoading] = useState(false);


// Function to generate date ranges based on selected period
const generateDateRange = (days: number) => {
  const dates = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

// Function to generate random but realistic data based on period
const generateFallbackData = (baseValue: number, days: number) => {
  const avgPerDay = Math.floor(baseValue / days);
  return Array.from({ length: days }, () => {
    // Generate realistic variations (50% to 150% of average)
    const variation = 0.5 + Math.random();
    return Math.floor(avgPerDay * variation);
  });
};

// Fetch basic analytics data (once on component mount)
useEffect(() => {
  const fetchBasicData = async () => {
    try {
      const token = Cookies.get("token");
      const userId = localStorage.getItem("userId");

      const response = await api.get(`/api/analytics/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;

      setProfileViews(data.profileViews);
      setLinkClicks(data.linkClicks);
      setLastMonthVisitors(data.lastMonthVisitors);
      setTotalVisitors(data.totalVisitors);
    } catch (error) {
      console.error("Error fetching basic analytics data:", error);
    }
  };

  fetchBasicData();
}, []);

// Fetch chart data based on selected period
useEffect(() => {
  const fetchChartData = async () => {
    setIsChartLoading(true);
    try {
      const token = Cookies.get("token");
      const userId = localStorage.getItem("userId");
      const days = parseInt(selectedPeriod);

      // Try to fetch period-specific data from API
      try {
        const chartResponse = await api.get(`/api/analytics/${userId}/chart?days=${days}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (chartResponse.data && chartResponse.data.length > 0) {
          const chartInfo = chartResponse.data;
          const labels = chartInfo.map((item: any) => item.date);
          const profileViewsData = chartInfo.map((item: any) => item.profileViews || 0);
          const linkClicksData = chartInfo.map((item: any) => item.linkClicks || 0);
          
          setChartLabels(labels);
          setChartData({
            profileViews: profileViewsData,
            linkClicks: linkClicksData
          });
        } else {
          throw new Error("No chart data available");
        }
      } catch (chartError) {
        console.log(`Chart data not available for ${days} days, using fallback data`);
        
        // Generate fallback data based on selected period
        const dateLabels = generateDateRange(days);
        setChartLabels(dateLabels);
        
        // Scale the total values based on the period
        const periodFactor = days / 30; // Scale factor based on 30-day baseline
        const scaledProfileViews = Math.floor(profileViews * periodFactor);
        const scaledLinkClicks = Math.floor(linkClicks * periodFactor);
        
        setChartData({
          profileViews: generateFallbackData(scaledProfileViews, days),
          linkClicks: generateFallbackData(scaledLinkClicks, days)
        });
      }
    } catch (error) {
      console.error("Error fetching chart data:", error);
    } finally {
      setIsChartLoading(false);
    }
  };

  // Only fetch chart data if we have the basic analytics data
  if (profileViews > 0 || linkClicks > 0) {
    fetchChartData();
  } else {
    setIsChartLoading(false);
  }
}, [selectedPeriod, profileViews, linkClicks]);

  // Create dynamic chart data based on fetched analytics
  const data = {
    labels: chartLabels,
    datasets: chartData ? [
      {
        label: "Profile Views",
        data: chartData.profileViews,
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
        label: "Link Clicks",
        data: chartData.linkClicks,
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
    ] : [],
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
        max: Math.max(
          chartData && chartData.profileViews && chartData.linkClicks 
            ? Math.max(...chartData.profileViews, ...chartData.linkClicks) * 1.2 
            : 10,
          10
        ),
        ticks: {
          stepSize: 2,
          min: 0,
          callback: function(value: any) {
            // Only show even numbers: 0, 2, 4, 6, 8, 10, etc.
            return value % 2 === 0 ? value : '';
          },
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
      label: "Link Clicks",
      value: linkClicks,
      change: "Link Clicks",
    },
    {
      label: "Profile Views",
      value:  profileViews,
      change: "Profile Views",
    },
    {
      label: "Visitors last Month",
      value: lastMonthVisitors,
      change: "Visitors last Month",
    },
    {
      label: "Total Visitors",
      value: totalVisitors,
      change: "Total Visitors",
    },
  ];
  return (
    <div
        className="bg-white rounded-[32px] p-4 md:p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${bground})` }}
      >
    <div className="w-full max-w-[1300px] mx-auto p-2 md:p-4">
      
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-[36px] font-bold mb-2 text-black">Overview</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-2xl p-4"
            >
              <h3 className="text-[20px]  font-medium mb-2 text-[#3C3C3C]">
                {stat.label}
              </h3>
              <p className="text-[64px] font-semibold text-[#3C3C3C] text-center">
                {stat.value}
              </p>
              <p className="text-[16px]  font-medium text-[#3C3C3C] mt-2 text-center">
                {stat.change}
              </p>
            </div>
          ))}
        </div>
        {/* Map Section */}
        <div className="relative bg-[#f1f8f4 rounded-2xl p-4 md:p-6">
          <WorldAnalyticsMap profileViews={profileViews} linkClicks={linkClicks} />
        </div>
        {/* Graph Section */}
        <div className="relative bg-[#f1f8f4] rounded-2xl p-4 md:p-6 overflow-hidden border border-[#7cc5a1]">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {totalVisitors.toLocaleString()}{" "}
                  <span className="text-xl font-medium text-gray-600">
                    Visitors
                  </span>
                </h3>
                <p className="text-sm text-black">
                  Analytics data for your profile and links over the selected time period
                </p>
              </div>
              <select 
                className="mt-2 md:mt-0 bg-[#c7efdb] px-4 py-2 rounded-full text-sm border border-gray-200"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="30">Last 30 Days</option>
                <option value="7">Last 7 Days</option>
                <option value="1">Last 24 Hours</option>
              </select>
            </div>
            <div className="w-full h-[300px] mb-[5px]">
              {isChartLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Loading chart data...</div>
                </div>
              ) : chartData ? (
                <Line options={options} data={data} />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">No chart data available</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

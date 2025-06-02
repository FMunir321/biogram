import { useState } from "react";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<
    "today" | "yesterday" | "this-week"
  >("today");

  // Sample notification data
  const notifications = [
    {
      id: 1,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/assets/Sam.jpg",
    },
    {
      id: 2,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/assets/Sam.jpg",
    },
    {
      id: 3,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/assets/Sam.jpg",
    },
    {
      id: 4,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/assets/Sam.jpg",
    },
    {
      id: 5,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/assets/Sam.jpg",
    },
  ];

  return (
    <div className="w-full max-w-[1300px] mx-auto p-2">
      <div className="bg-white rounded-[32px] p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[36px] font-bold text-black mb-4">
            Notifications
          </h1>

          {/* Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeTab === "today"
                    ? "bg-gradient-to-r from-[#7ecfa7] to-[#578e71] text-white"
                    : "border-1 border-[#7ecfa7] bg-[#dff3e9] text-gray-600 hover:bg-pink-100"
                }`}
            >
              Today
            </button>
            <button
              onClick={() => setActiveTab("yesterday")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeTab === "yesterday"
                    ? "bg-gradient-to-r from-[#7ecfa7] to-[#578e71] text-white"
                    : "border-1 border-[#7ecfa7] bg-[#dff3e9] text-gray-600 hover:bg-pink-100"
                }`}
            >
              Yesterday
            </button>
            <button
              onClick={() => setActiveTab("this-week")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeTab === "this-week"
                    ? "bg-gradient-to-r from-[#7ecfa7] to-[#578e71] text-white"
                    : "border-1 border-[#7ecfa7] bg-[#dff3e9] text-gray-600 hover:bg-pink-100"
                }`}
            >
              This week
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-2">
          <h1 className="text-[24px] text-black font-medium">List</h1>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] hover:from-[#c1e4d3] hover:to-[#b0d8c5] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={notification.avatar}
                  alt={notification.name}
                  className="w-[110px] h-[110px] rounded-full object-cover"
                />
                <div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[36px] font-bold text-black">
                      {notification.name}
                    </span>
                    <span className="text-[16px] font-normal text-black">
                      {notification.username}
                    </span>
                    <p className="text-[16px] font-normal text-black">
                      {notification.message}
                    </p>
                  </div>
                </div>
              </div>
              <span className="text-[20px] font-medium text-black">
                {notification.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

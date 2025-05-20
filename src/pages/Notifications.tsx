import { useState } from 'react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'yesterday' | 'this-week'>('today');

  // Sample notification data
  const notifications = [
    {
      id: 1,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/src/assets/aleximage.png"
    },
    {
      id: 2,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/src/assets/aleximage.png"
    },
    {
      id: 3,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/src/assets/aleximage.png"
    },
    {
      id: 4,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/src/assets/aleximage.png"
    },
    {
      id: 5,
      name: "SAM",
      username: "@samkeer",
      message: "And 1000 others just joined biogram",
      date: "Jun 21",
      avatar: "/src/assets/aleximage.png"
    }
  ];

  return (
    <div className="w-full max-w-[1300px] mx-auto p-2">
      <div className="bg-white rounded-[32px] p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Notifications</h1>
          
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === 'today' 
                  ? 'bg-[#98e6c3] text-white' 
                  : 'bg-pink-50 text-gray-600 hover:bg-pink-100'}`}
            >
              Today
            </button>
            <button
              onClick={() => setActiveTab('yesterday')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === 'yesterday' 
                  ? 'bg-[#98e6c3] text-white' 
                  : 'bg-pink-50 text-gray-600 hover:bg-pink-100'}`}
            >
              Yesterday
            </button>
            <button
              onClick={() => setActiveTab('this-week')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === 'this-week' 
                  ? 'bg-[#98e6c3] text-white' 
                  : 'bg-pink-50 text-gray-600 hover:bg-pink-100'}`}
            >
              This week
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-2">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] hover:from-[#c1e4d3] hover:to-[#b0d8c5] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={notification.avatar}
                  alt={notification.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{notification.name}</span>
                    <span className="text-gray-500 text-sm">{notification.username}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{notification.message}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{notification.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications; 
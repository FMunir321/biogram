import React from 'react';
import imagww from '../assets/AppleMusic.png';

const BiogramShoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Less stress. More results. <br />
            <span className="text-black">Start scheduling smarter today!</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Tired of the daily hassle of posting? Our Social Planner makes scheduling a breeze—plan, optimize, and auto-post your content across platforms, all in one place. Stay consistent, save hours every week, and grow your online presence effortlessly.
          </p>
          <div className="mt-8">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full transition-all">
              Get Started For free
            </button>
          </div>
        </div>

        {/* Right Content - Calendar and Image */}
        <div className="relative flex justify-center">
          <div className="bg-green-100 p-6 rounded-2xl shadow-md w-72">
            <div className="text-center text-lg font-semibold mb-4 text-green-900">
              June 2025
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day}>{day}</div>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                <div
                  key={date}
                  className={`py-2 rounded-full ${
                    date === 20
                      ? 'bg-orange-400 text-white font-bold cursor-pointer'
                      : 'hover:bg-green-200 cursor-pointer'
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
          {/* Overlay Image */}
          <img
            src={imagww}
            alt="profile"
            className="absolute -right-8 top-16 w-24 h-24 rounded-xl shadow-lg border-4 border-white object-cover"
          />
        </div>
      </div>

      {/* Dropdown Button */}
      <div className="absolute bottom-6 right-6 z-10">
        <button className="bg-green-200 hover:bg-green-300 text-green-900 font-medium py-2 px-4 rounded-md shadow">
          For Peoples
        </button>
      </div>
    </div>
  );
};

export default BiogramShoutPage;
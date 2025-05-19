import React from 'react';
import profileImage from '../assets/Proof.png';
import logo from '../assets/Biogramlogo.png'

const BiogramShoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Biogram Text */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <img 
          src={logo} 
          alt="Biogram Logo" 
          className="h-8 sm:h-10 md:h-12 w-auto" 
        />
      </div>

      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 mt-16">
        {/* Left Content - No changes as requested */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Less stress. <span className="text-3xl md:text-4xl font-bold text-black">More results.</span>
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Start scheduling smarter today!
          </h1>
          
          <p className="mt-6 text-gray-700 text-base sm:text-lg">
            Tired of the daily hassle of posting? Our Social Planner makes scheduling a breeze—plan, optimize, and auto-post your content across platforms, all in one place. Stay consistent, save hours every week, and grow your online presence effortlessly.
          </p>
          <div className="mt-8">
            <button className="bg-gradient-to-r from-green-300 to-green-500 hover:from-green-400 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all">
              Get Started For free
            </button>
          </div>
        </div>

        {/* Right Content - Adjusted profile image positioning */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="bg-[#e1f2e8] p-4 sm:p-6 rounded-2xl shadow-md w-72">
            <div className="text-center text-base sm:text-lg font-semibold mb-4 text-green-900">
              June 2025
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day}>{day}</div>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                <div
                  key={date}
                  className={`py-2 rounded-full text-sm transition-all ${
                    date === 19
                      ? "bg-orange-500 text-white font-bold cursor-pointer"
                      : "hover:bg-green-200 cursor-pointer"
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>

          {/* Adjusted Profile Image */}
          <img
            src={profileImage}
            alt="profile"
            className="absolute w-[180px] h-[250px] rounded-xl shadow-lg border-4 border-white object-cover"
            style={{ 
              bottom: "34px", 
              right: "-120px",
              transform: "rotate(-10deg)",
              zIndex: 10
            }}
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












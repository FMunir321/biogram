import React from 'react';
import profileImage from '../../public/assets/Proof.png';
import logo from '../../public/assets/loginlogo.png';

const BiogramShoutPage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white min-h-screen px-4 relative flex items-center justify-center">
      {/* Logo Positioned Absolutely */}
      <img
      src={logo}
      alt="Biogram Logo"
      className="absolute top-4 left-4 w-[160px] h-auto object-contain z-30"
      />


      <div className="max-w-[1280px] w-full flex flex-col xl:flex-row gap-10 items-center z-10 my-10 mt-20 box-border">
        {/* LEFT SECTION */}
        <div className="flex-1">
          <h1 className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[80px] font-extrabold text-black text-center xl:text-left leading-tight">
            Less stress. <span className="block">More results.</span>
          </h1>
          <h2 className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[80px] font-extrabold text-black text-center xl:text-left leading-tight">
            Start scheduling smarter today!
          </h2>

          <p className="mt-6 text-black text-[16px] md:text-[24px] font-medium text-center xl:text-left px-2">
            Tired of the daily hassle of posting? Our Social Planner makes scheduling a breeze—plan, optimize, and auto-post your content across platforms, all in one place. Stay consistent, save hours every week, and grow your online presence effortlessly.
          </p>

          <div className="mt-8 text-center xl:text-left">
            <button className="text-[16px] md:text-[20px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] hover:from-[#53886C] hover:to-[#7ECFA7] text-white font-semibold py-3 px-8 rounded-full transition-all">
              Get Started For Free
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 relative flex justify-center xl:justify-end">
          <div className="bg-[#e1f2e8] p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-[500px] h-[500px] overflow-hidden">
            {/* Calendar Header */}
            <div className="text-center text-base sm:text-lg font-semibold mb-4 text-white bg-gradient-to-r from-[#7ECFA7] to-[#53886C] py-4 rounded-2xl relative">
              <select className='absolute left-4 top-7 -translate-y-1/2 rotate-90 text-white bg-transparent border-none outline-none' />
              June 2025
              <select className='absolute right-4 top-8 -translate-y-1/2 -rotate-90 text-white bg-transparent border-none outline-none' />
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-3 text-center text-sm font-medium mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white aspect-square flex items-center justify-center rounded-[10px] text-xs sm:text-sm"
                >
                  {day}
                </div>
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

          {/* Profile Image */}
          <img
            src={profileImage}
            alt="profile"
            className="absolute hidden sm:block w-[180px] h-[250px] rounded-xl shadow-lg border-4 border-white object-cover"
            style={{
              bottom: "34px",
              right: "-45px",
              transform: "rotate(-10deg)",
              zIndex: 5
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BiogramShoutPage;
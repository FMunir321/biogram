import { useState } from "react";
import world from "../../public/assets/world.png";
import { Link } from "react-router-dom";
import map from "../../public/assets/Vector.png";
import Instagram from "../../public/assets/Instagram.png";
import TikTok from "../../public/assets/TikTok.png";
import franceFlag from "../../public/assets/france.png";
import usaFlag from "../../public/assets/united states.png";

export default function RealTimeAnalyticsHero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white p-4 flex flex-col justify-between overflow-hidden">
      {/* Background World Image */}
      <img src={world} alt="world" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0" />

      {/* Floating Elements Container (Visible only on md+) */}
      <div className="absolute inset-0 z-10">
        {/* 8.5M Card */}
        <div className="absolute top-[6%] left-[4%] bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-md shadow-lg min-w-[100px] sm:min-w-[140px]">
          <p className="font-bold text-white text-lg sm:text-2xl leading-none">8.5M</p>
          <p className="text-xs text-white/90 leading-none">Profile View</p>
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow">+40%</span>
        </div>

        {/* 80K Card */}
        <div className="absolute top-[6%] right-[10%] bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-md shadow-lg min-w-[90px] sm:min-w-[120px]">
          <p className="font-bold text-white text-lg sm:text-2xl leading-none">80K</p>
          <p className="text-xs text-white/90 leading-none">Links Click</p>
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow">+3.5%</span>
        </div>

        {/* Instagram Card */}
        <div
          className="hidden md:flex absolute items-center gap-4 text-white px-4 sm:px-6 py-4 rounded-[20px] shadow-lg"
          style={{
            width: "90vw",
            maxWidth: "536px",
            height: "110px",
            top: "28vh",
            left: "8vw",
            borderRadius: "20px",
            boxShadow: "0px 0px 20.2px 0px #00000040",
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(21.2px)",
            WebkitBackdropFilter: "blur(21.2px)",
          }}
        >
          <img src={Instagram} alt="Instagram" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow" />
          <div className="flex flex-col justify-center">
            <span className="font-semibold text-base sm:text-lg leading-tight">Instagram</span>
            <span className="text-xs text-white/80">@AlexJames</span>
          </div>
          <div className="flex-1 flex justify-end">
            <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow text-white">502K Clicks</span>
          </div>
        </div>

        {/* TikTok Card */}
        <div
          className="hidden md:flex absolute items-center gap-4 text-white px-4 sm:px-6 py-4 rounded-[20px] shadow-lg"
          style={{
            width: "90vw",
            maxWidth: "536px",
            height: "110px",
            top: "40vh",
            left: "8vw",
            borderRadius: "20px",
            boxShadow: "0px 0px 20.2px 0px #00000040",
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(21.2px)",
            WebkitBackdropFilter: "blur(21.2px)",
          }}
        >
          <img src={TikTok} alt="TikTok" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow" />
          <div className="flex flex-col justify-center">
            <span className="font-semibold text-base sm:text-lg leading-tight">Tiktok</span>
            <span className="text-xs text-white/80">@AlexJames</span>
          </div>
          <div className="flex-1 flex justify-end">
            <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow text-white">1.5M Clicks</span>
          </div>
        </div>

        {/* Location Stats Card */}
        <div className="absolute top-[22%] right-[2%] w-[90vw] max-w-xs sm:max-w-sm md:max-w-xs bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-md border border-white/10 shadow-lg overflow-hidden">
          <img src={map} alt="World Map" className="w-full h-16 sm:h-20 object-contain mb-2 sm:mb-3" />
          <div className="flex justify-between text-xs font-semibold mb-2 border-b border-white/20 pb-1">
            <span>List</span>
            <span>Country</span>
            <span>City</span>
          </div>
          <div className="space-y-2">
            {/* America */}
            <div className="flex items-center justify-between text-xs bg-white/10 rounded-lg px-2 py-1">
              <span className="flex items-center gap-2">
                <img src={usaFlag} alt="USA Flag" className="w-5 h-5 rounded-full border border-white/30" />
                <span className="font-medium">America</span>
              </span>
              <span className="text-white/80 font-semibold">800K View</span>
            </div>
            {/* Los Angeles */}
            <div className="flex items-center justify-between text-xs bg-white/10 rounded-lg px-2 py-1">
              <span className="flex items-center gap-2">
                <img src={usaFlag} alt="USA Flag" className="w-5 h-5 rounded-full border border-white/30" />
                <span className="font-medium">Los Angeles</span>
              </span>
              <span className="text-white/80 font-semibold">50K View</span>
            </div>
            {/* Paris */}
            <div className="flex items-center justify-between text-xs bg-white/10 rounded-lg px-2 py-1">
              <span className="flex items-center gap-2">
                <img src={franceFlag} alt="France Flag" className="w-5 h-5 rounded-full border border-white/30" />
                <span className="font-medium">Paris</span>
              </span>
              <span className="text-white/80 font-semibold">10K View</span>
            </div>
          </div>
        </div>

        {/* Percentage Labels */}
        <div className="absolute top-[10%] left-[30%] text-xs font-semibold hidden sm:block">Europe (10%)</div>
        <div className="absolute top-[20%] right-[15%] text-xs font-semibold hidden sm:block">Asia (40%)</div>
        <div className="absolute top-[35%] left-[15%] text-xs font-semibold hidden sm:block">Africa (05%)</div>
        <div className="absolute top-[5%] right-[45%] text-xs font-semibold hidden sm:block">America (10%)</div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto mt-auto flex flex-col items-center text-center md:text-left sm:mb-20 mb-20 md:mb-10">
        {/* Text Content */}
        <div className="w-full order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto md:mx-0">
            <span className="text-white block">Know your audience,</span>
            <span className="text-white block">grow your reach at no cost</span>
          </h1>
          <div className="w-full max-w-3xl mx-auto md:mx-0 mt-4">
            <p className="text-sm sm:text-md md:text-lg text-white/90">
              With Biogram, your profile is always online and lightning fast. Get detailed, real-time analytics showing where your clicks come from whether it’s hundreds or millions.
            </p>
          </div>
        </div>

        {/* Input and Button */}
        <div className="w-full order-2 flex flex-col sm:flex-row justify-center md:justify-start mt-6 gap-3">
          <div className="flex w-full max-w-md md:max-w-lg overflow-hidden rounded-full bg-white h-[50px] sm:h-[60px] shadow-lg">
            <input
              type="text"
              placeholder="Biogram/your name"
              className="flex-grow px-4 sm:px-6 text-black outline-none placeholder-gray-500 text-sm bg-transparent"
            />
            <button className="px-6 sm:px-8 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] hover:from-[#4a725f] hover:to-[#98e6c3] font-semibold transition text-sm border-l border-gray-300 whitespace-nowrap rounded-full text-white">
              Signup Free
            </button>
          </div>
        </div>
      </div>

      {/* For People Button with Dropdown */}
      <div className="fixed bottom-4 right-4 z-30">
        <div
          className="bg-green-200 py-1 px-4 rounded-lg text-black shadow-sm cursor-pointer flex items-center gap-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          For Peoples
          <svg
            className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isDropdownOpen && (
          <div className="absolute bottom-full right-0 mb-2 w-48 bg-green-200 rounded-lg shadow-lg overflow-hidden">
            <div className="py-1">
              <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400">Personal</Link>
              <Link to="/started" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400">Business</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

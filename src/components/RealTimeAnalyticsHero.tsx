import { useState } from "react";
import world from "../assets/world.png";
// import mapPlaceholder from "../assets/map-placeholder.png";
// import instagramIcon from "../assets/instagram.svg";
// import tiktokIcon from "../assets/tiktok.svg";

export default function RealTimeAnalyticsHero() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white p-4 flex flex-col justify-between overflow-hidden">
        {/* Background World Image */}
        <img src={world} alt="world" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0" />
        
        {/* Floating Elements Container (Visible only on md+) */}
        <div className="absolute inset-0 hidden md:block z-10">
            {/* 8.5M Card */}
            <div className="absolute top-[10%] left-[10%] bg-white/20 p-4 rounded-xl backdrop-blur-md">
                <p className="font-bold text-white text-2xl">8.5M</p>
                <p className="text-xs text-white/90">Profile View</p>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">+2.4%</span>
            </div>

            {/* 80K Card */}
            <div className="absolute top-[10%] right-[25%] bg-white/20 p-4 rounded-xl backdrop-blur-md">
                <p className="font-bold text-white text-2xl">80K</p>
                <p className="text-xs text-white/90">Links Click</p>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">+3.5%</span>
            </div>

            {/* Instagram/Tiktok Card */}
            <div className="absolute top-[18%] left-[35%] bg-white/20 p-3 rounded-xl backdrop-blur-md space-y-2">
                <div className="flex items-center gap-3">
                    {/* <img src={instagramIcon} alt="Instagram" className="w-8 h-8" /> */}
                    <div>
                        <p className="font-medium">Instagram</p>
                        <p className="text-xs text-white/80">@alex.jones</p>
                    </div>
                    <p className="ml-auto text-xs">512K Clicks</p>
                </div>
                <div className="flex items-center gap-3">
                     {/* <img src={tiktokIcon} alt="Tiktok" className="w-8 h-8" /> */}
                     <div>
                        <p className="font-medium">Tiktok</p>
                        <p className="text-xs text-white/80">@alex.jones</p>
                    </div>
                    <p className="ml-auto text-xs">1.5M Clicks</p>
                </div>
            </div>

            {/* Location Stats Card */}
            <div className="absolute top-[25%] right-[5%] bg-white/20 p-4 rounded-xl backdrop-blur-md w-60">
                {/* <img src={mapPlaceholder} alt="World Map" className="w-full h-20 object-contain mb-3" /> */}
                <div className="flex justify-between text-xs font-medium mb-2 border-b border-white/20 pb-1">
                    <span>List</span>
                    <span>Country</span>
                    <span>City</span>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                         <span role="img" aria-label="USA Flag">🇺🇸</span> America <span className="text-white/70">10M view</span>
                    </div>
                     <div className="flex items-center justify-between text-xs">
                         <span role="img" aria-label="USA Flag">🇺🇸</span> Los Angeles <span className="text-white/70">100K view</span>
                    </div>
                     <div className="flex items-center justify-between text-xs">
                         <span role="img" aria-label="France Flag">🇫🇷</span> Paris <span className="text-white/70">2M view</span>
                    </div>
                </div>
            </div>

            {/* Percentage Labels */}
             <div className="absolute top-[10%] left-[30%] text-xs">Europe (10%)</div>
             <div className="absolute top-[20%] right-[15%] text-xs">Asia (40%)</div>
             <div className="absolute top-[35%] left-[15%] text-xs">Africa (05%)</div>
             <div className="absolute top-[5%] right-[45%] text-xs">America (10%)</div>
        </div>

        {/* Main Content Area - Flex container to push input down */}
        <div className="relative z-20 w-full max-w-7xl mx-auto mt-auto flex flex-col items-center text-center md:text-left sm:mb-20 mb-20 md:mb-10">
            {/* Text Content */}
            <div className="w-full order-1 ">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl mx-auto md:mx-0">
                    <span className="text-white block">Real time global analytics, for free</span>
                </h1>
                <div className="w-full max-w-3xl mx-auto md:mx-0 mt-4">
                    <p className="text-md md:text-lg text-white/90">
                        Biogram makes sure your profile is accessible worldwide, providing seamless access whether you receive hundreds or millions of clicks. We keep everything running smoothly and slow you where your profile is being viewed, giving you all the analytics you need.
                    </p>
                </div>
            </div>

            {/* Input and Button */}
            <div className="w-full order-2 flex justify-center md:justify-start ">
                 <div className="flex w-full max-w-md md:max-w-lg overflow-hidden rounded-full bg-white h-[60px]">
                    <input
                      type="text"
                      placeholder="Biogram/your name"
                      className="flex-grow px-6 text-black outline-none placeholder-gray-500 text-sm"
                    />
                    <button className="px-8 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] hover:from-[#4a725f] hover:to-[#98e6c3] font-semibold transition text-sm border-l border-gray-300 whitespace-nowrap rounded-full">
                      Signup
                    </button>
                 </div>
            </div>
        </div>

        {/* For People Dropdown (Fixed) */}
        <div className="fixed bottom-6 right-6 z-30">
            <div
                className="bg-white/70 py-1 px-4 rounded-lg text-black shadow-sm cursor-pointer flex items-center gap-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                For People
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
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                    </div>
                </div>
            )}
        </div>
    </section>
  );
}

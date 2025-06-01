import React, { useState } from "react";
import earth from "../../public/assets/Earth.png";
import lightbg from "../../public/assets/lightbg.png";
import { Link } from "react-router-dom";

const GoGreenSection: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section className="w-full px-6 py-8 bg-white flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img src={lightbg} alt="background" className="w-full h-full object-cover" />
      </div>
      
      {/* Left Side (Text) */}
      <div className="max-w-xl">
        <h4 className="text-green-600 font-bold text-lg mb-2">Go Green</h4>
        
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Leave the business cards behind.<br />
          Networking is evolving and <span className="text-green-600">linkme</span> is leading the way.
        </h1>
        
        <p className="text-gray-700 mb-4">
          Get a free digital business card when you download linkme.
        </p>
        <p className="text-gray-700 mb-4">
          Every Day, 27 million business cards are printed.
        </p>
        <p className="text-gray-700 mb-6">
          Requiring the cutting down of 7 million trees annually.
        </p>
        
        <p className="font-semibold text-gray-800 mb-8">
          Help me a difference
        </p>

        {/* Signup Button */}
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="bg-gradient-to-b from-green-400 to-green-800 text-white px-6 py-3 rounded-full font-semibold">
            Signup Free
          </button>

          {/* Dropdown */}

          <div className="fixed bottom-6 right-6 z-30">
            <div
                className="bg-green-200 py-1 px-4 rounded-lg text-black shadow-sm cursor-pointer flex items-center gap-2"
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
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-green-200 rounded-lg shadow-lg overflow-hidden">
                    <div className="py-1">
                    <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400">Personal</Link>
                    <Link to="/started" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400">Business</Link>
                    </div>
                </div>
            )}
        </div>
        </div>
      </div>

      {/* Right Side (Earth + Info Box) */}
      <div className="relative w-full max-w-sm">
  {/* Info Box */}
  <div
    className="
      absolute 
      -top-8 
      left-1/2 
      -translate-x-1/2 
      sm:left-6 sm:translate-x-0 
      md:-left-20 
      lg:-left-16
      bg-green-600 
      text-white 
      p-3 lg:p-4 
      rounded-md 
      shadow-md 
      text-center 
      w-11/12 sm:w-56
    "
  >
    <h2 className="text-xl sm:text-2xl font-bold">7 million</h2>
    <p className="text-[10px] sm:text-xs mt-1 leading-snug">
      trees can be saved each year by switching to a digital business card.
    </p>
  </div>




        {/* Earth Image */}
        <div className="relative">
          <img 
            src={earth} // 🔥 Make sure to replace this with your actual Earth image path
            alt="Earth" 
            className="w-full object-cover rounded-full"
          />

          {/* Zero Waste Text */}
          <div className="absolute top-10 right-0 transform rotate-12">
            <span className="text-green-600 font-bold text-lg">Zero Waste</span>
          </div>

          {/* Eco Friendly Text */}
          <div className="absolute bottom-10 left-0 transform -rotate-90">
            <span className="text-green-600 font-bold text-lg">Eco Friendly</span>
          </div>

          {/* 88% Box */}
          <div className="absolute bottom-0 right-0 bg-white p-3 rounded-md shadow-md w-32 text-center">
            <h2 className="text-green-600 text-2xl font-bold">88%</h2>
            <p className="text-xs text-gray-700 mt-1">Of business cards are thrown away within a week.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default GoGreenSection;

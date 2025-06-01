import { useState } from "react";
// import DropDown from "./DropDown";
import bground from "../../public/assets/Rectangle67.png";
import { Link } from "react-router-dom";
import AnalyticsImage from "../../public/assets/Analytics 2.png";
import LogoStartNow from "./LogoStartNow";

const Started = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bground}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20">
        {/* Logo */}
        <LogoStartNow />

        {/* Main Section */}
        <main className="flex flex-col-reverse lg:flex-row items-center justify-between pl-6 mt-12 lg:mt-20 gap-10">
          {/* Left Text */}
          <section className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-black font-poppins leading-tight">
              Reach Millions.
              <br className="hidden sm:block" />
              Your Business, Our Platform.
            </h1>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-[500px] mx-auto lg:mx-0 font-poppins">
              Over 200 million people have a Biogram profile. Unlock your
              business's potential with Biogram's <strong>cutting-edge</strong>{" "}
              marketing tools and ad solutions, designed to elevate your
              business.
            </p>
            <Link to="/startnow">
              <button className="w-full sm:w-[280px] px-6 py-3 sm:py-4 rounded-full text-white text-lg sm:text-xl font-semibold shadow-lg bg-gradient-to-r from-[#7ECFA7] to-[#53886C] hover:opacity-90 transition mx-auto block">
                Get Started
              </button>
            </Link>
          </section>

          {/* Right Image Card */}
          <section className="w-full lg:w-1/2">
            <div className="bg-white shadow-lg rounded-3xl overflow-hidden border-t border-b border-l border-gray-200">
              <img
                src={AnalyticsImage}
                alt="Analytics"
                className="w-full h-full object-cover"
              />
            </div>
            {/* For Business Button with Dropdown */}
            <div className="relative flex flex-col items-end my-[50px] mr-5">
              <div
                className="w-[189px] h-[48px] rounded-[10px] border border-black cursor-pointer flex items-center justify-between px-4 text-black font-poppins font-normal text-[20px] leading-[100%] tracking-[0%] bg-gradient-to-r from-[#7ECFA780] to-[#53886C80] backdrop-blur-[20.2px] shadow-sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                For Business
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute bottom-[50px] right-0 w-[189px] rounded-[10px] border border-black bg-gradient-to-r from-[#7ECFA780] to-[#53886C80] backdrop-blur-[20.2px] shadow-lg overflow-hidden z-50">
                  <div className="py-1">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-black font-poppins hover:bg-[#7ECFA7]/70"
                    >
                      For People
                    </Link>
                    <Link
                      to="/started"
                      className="block px-4 py-2 text-sm text-black font-poppins hover:bg-[#7ECFA7]/70"
                    >
                      Business
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Started;

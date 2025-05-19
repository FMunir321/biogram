import { Button } from "../components/ui/button";
import DropDown from "./DropDown";
import bground from "../assets/Rectangle67.png";
import logo from "../assets/Biogramlogo.png";
import { Link } from "react-router-dom";
import AnalyticsImage from "../assets/Analytics 2.png";

const Started = () => {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bground}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center w-full px-6 md:px-12 pt-6 md:pt-8">
          <img src={logo} alt="logo" className="w-[120px] md:w-auto" />
          <Link to="/startnow">
            <button className="w-[140px] md:w-[168px] h-[44px] md:h-[48px] rounded-[10px] text-white text-sm md:text-base font-medium shadow bg-gradient-to-r from-[#7ECFA7] to-[#53886C] hover:opacity-90 transition">
              Start Now
            </button>
          </Link>
        </div>

        {/* Main Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 mt-12 lg:mt-20 gap-10">
          {/* Left Text */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold leading-tight text-black font-poppins">
              Reach Millions.
              <br />
              Your Business,
              <br />
              Our Platform.
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-[500px] mx-auto lg:mx-0 font-poppins">
              Over 200 million people have a Biogram profile. Unlock your
              business's potential with Biogram's <strong>cutting-edge</strong>{" "}
              marketing tools and ad solutions, designed to elevate your
              business.
            </p>
            <Link to="/startnow">
              <button className="w-full sm:w-[280px] h-[56px] sm:h-[64px] rounded-full text-white text-lg md:text-xl font-semibold shadow-lg bg-gradient-to-r from-[#7ECFA7] to-[#53886C] hover:opacity-90 transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Right Image Card */}
          <div className="w-full lg:w-[50%] rounded-[40px] bg-white shadow-2xl overflow-hidden">
            <img
              src={AnalyticsImage}
              alt="Analytics"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* DropDown */}
        <div className="flex justify-end mt-8 px-6  z-50">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Started;

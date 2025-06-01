import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "../../public/assets/Biogramlogo2.png";
import { FiChevronDown } from "react-icons/fi";

const StartNow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#98e6c3] to-[#4a725f] flex flex-col items-center px-4 pt-16">
      {/* Top bar */}
      <div className="w-full flex justify-between items-center px-4 sm:px-6 mb-6 fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-[#98e6c3] to-[#4a725f]">
        <Link to="/">
          <img src={logo} alt="Biogram Logo" className="h-10 sm:h-12 mt-10" />
        </Link>
        <Link to="/maindashboard">
          <Button className="bg-white hover:bg-white/90 font-medium py-6 px-8 rounded-md text-sm cursor-pointer mt-2">
            <p className="bg-gradient-to-r from-[#7ECFA7] to-[#53886C] bg-clip-text text-transparent text-xl">
              Start Now
            </p>
          </Button>
        </Link>
      </div>

      {/* Main text content */}
      <div className="text-center max-w-4xl px-2 mt-10">
        <h2 className="text-3xl sm:text-5xl lg:text-8xl font-bold text-white">
          Apply to start
        </h2>
        <h3 className="text-xl sm:text-3xl lg:text-7xl font-bold text-white mt-3">
          Advertising on Biogram
        </h3>
        <p className="text-white/90 text-sm sm:text-base mt-4">
          Due to high demand, Biogram ads is now an exclusive, invitation-only
          program. If your business meets our select criteria, our team will
          directly contact you with further instructions. We value your interest
          and anticipate a potential partnership.
        </p>
      </div>

      {/* Form Section */}
      <form className="w-full max-w-2xl mt-8 px-4 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl text-2xl"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl text-2xl"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl text-2xl"
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full p-3 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl text-2xl"
        />

        {/* Country Select */}
        <div className="relative">
          <select
            className="w-full appearance-none p-3 pr-10 rounded-md bg-white/20 text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl text-2xl"
            defaultValue="Country"
          >
            <option className="text-black" value="Country">
              Country
            </option>
            <option className="text-black" value="us">
              United States
            </option>
            <option className="text-black" value="uk">
              United Kingdom
            </option>
            <option className="text-black" value="ca">
              Canada
            </option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none" size={24} />
        </div>

        {/* Monthly Budget Select */}
        <div className="relative">
          <select
            className="w-full appearance-none p-3 pr-10 rounded-md bg-white/20 text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl text-2xl"
            defaultValue="Monthly Ad Budget"
          >
            <option className="text-black" value="Monthly Ad Budget">
              Monthly Ad Budget
            </option>
            <option className="text-black" value="1000">
              $1,000 - $5,000
            </option>
            <option className="text-black" value="5000">
              $5,000 - $10,000
            </option>
            <option className="text-black" value="10000">
              $10,000+
            </option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none" size={24} />
        </div>

        {/* Centered Button */}
        <div className="pt-2 flex justify-center items-center">
          <Link to="/maindashboard" className="w-full max-w-md">
            <Button className="w-full bg-white hover:bg-white/90 font-medium py-8 rounded-full">
              <p className="text-xl bg-gradient-to-r from-[#7ECFA7] to-[#53886C] bg-clip-text text-transparent">
                Get Started
              </p>
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default StartNow;

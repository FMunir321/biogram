import { Button } from "../components/ui/button";
import Dashboard from "./Dashboard";
import DropDown from "./DropDown";
import bground from "../assets/lightbg.png";
import LogoStartNow from "./LogoStartNow";
import { Link } from "react-router-dom";

const Started = () => {
  return (
    <div className="relative min-h-screen bg-white ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bground}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <LogoStartNow />

        <div className="container max-w-screen-xl mx-auto px-4 xl:px-16 flex flex-col xl:flex-row items-center xl:justify-between gap-12 xl:h-screen">
          
          {/* Left Content */}
          <div className="w-full text-center xl:text-left space-y-6 mx-auto">
            <h1 className="text-5xl sm:text-4xl xl:text-7xl font-bold leading-tight text-black">
              Reach Millions. <br />
              Your <span className="text-black">Business</span>, <br />
              Our Platform.
            </h1>
            <p className="text-gray-600 text-base xl:text-lg max-w-xl mx-auto xl:mx-0">
              Over 200 million people have a Biogram profile. Unlock your business's potential with
              Biogram cutting edge marketing tools and ad solutions, designed to elevate your business.
            </p>
            <Link to="/startnow">
              <Button className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-base sm:text-lg px-40 py-8 rounded-full ml-10">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-full xl:w-[520px] relative">
            <Dashboard />
            <div className="absolute bottom-[-10px]">
              <div className="absolute top-full mt-1 left-[480px]">
                <DropDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;

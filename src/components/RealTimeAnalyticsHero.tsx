import { useState } from "react";
import world from "../../public/assets/world.png";
import { Link, useNavigate } from "react-router-dom";
import map from "../../public/assets/Vector.png";
import Instagram from "../../public/assets/Instagram.png";
import TikTok from "../../public/assets/TikTok.png";
import franceFlag from "../../public/assets/france.png";
import usaFlag from "../../public/assets/united states.png";

export default function RealTimeAnalyticsHero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSignup = () => {
    try {
      navigate('/signup', { state: { username: username.trim() } });
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to regular navigation if state passing fails
      navigate('/signup');
    }
  };

  return (
    <section className=" min-h-screen bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white p-4 flex flex-col justify-between overflow-x-hidden">
      <div className="relative max-w-[1280px] mx-auto ">
        {" "}
        {/* Background World Image */}
        <img
          src={world}
          alt="world"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
        />
        {/* Floating Elements Container (Visible only on md+) */}
        <div className="absolute inset-0 z-10">
          {/* 8.5M Card */}
          <div className="absolute top-[6%] left-[5%] bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-md shadow-lg min-w-[100px] sm:min-w-[140px]">
            <p className="font-bold text-white text-lg sm:text-2xl leading-none">
              8.5M
            </p>
            <p className="text-xs text-white/90 leading-none">Profile View</p>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow">
              +40%
            </span>
          </div>

          {/* 80K Card */}
          <div className="absolute top-[2%] right-[30%] bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-md shadow-lg min-w-[90px] sm:min-w-[120px]">
            <p className="font-bold text-white text-lg sm:text-2xl leading-none">
              80K
            </p>
            <p className="text-xs text-white/90 leading-none">Links Click</p>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow">
              +3.5%
            </span>
          </div>

          {/* Percentage Labels */}
          <div className="absolute top-[30%] left-[30%] text-xs font-semibold hidden sm:block">
            Europe (10%)
          </div>
          <div className="absolute top-[12%] right-[32%] text-xs font-semibold hidden sm:block">
            Asia (40%)
          </div>
          <div className="absolute top-[35%] left-[15%] text-xs font-semibold hidden md:block">
            Africa (05%)
          </div>
          <div className="absolute top-[5%] left-[20%] text-xs font-semibold hidden sm:block">
            America (10%)
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-[300px] px-4 md:ml-[90px] gap-8">
            <div>
              {/* Instagram & Tiktok Card */}
              <div className=" flex flex-col gap-5 lg:gap-0 md:ml-[50px]">
                {/* Instagram Card */}
                <div className=" flex justify-between items-center gap-4 text-white px-4 sm:px-6 py-4 rounded-[20px] lg:w-[400px] xl:w-[450px] shadow-2xl h-[110px] bg-white/20">
                  <div className="flex flex-row items-center gap-4">
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="font-semibold text-base sm:text-lg leading-tight">
                        Instagram
                      </span>
                      <span className="text-xs text-white/80">@AlexJames</span>
                    </div>
                  </div>

                  <div className="">
                    <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow text-white">
                      502K Clicks
                    </span>
                  </div>
                </div>

                {/* TikTok Card */}
                <div className=" flex lg:ml-[30%] lg:mt-[-30px] justify-between items-center gap-4 text-white px-4 sm:px-6 py-4 rounded-[20px] lg:w-[400px] xl:w-[450px] shadow-2xl h-[110px] bg-white/30">
                  <div className="flex flex-row items-center gap-4">
                    <img
                      src={TikTok}
                      alt="TikTok"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="font-semibold text-base sm:text-lg leading-tight">
                        Tiktok
                      </span>
                      <span className="text-xs text-white/80">@AlexJames </span>
                    </div>
                  </div>

                  <div className="">
                    <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow text-white">
                      1.5M Clicks
                    </span>
                  </div>
                </div>
              </div>
              {/* Main Content Area */}
              <div className="  w-full flex flex-col md:text-left ">
                <h1 className="text-[25px] sm:text-[40px] lg:text-[64px] font-extrabold leading-tight max-w-4xl">
                  <span className="text-white block">Know your audience,</span>
                  <span className="text-white block">
                    grow your reach at no cost
                  </span>
                </h1>
              </div>
            </div>
            {/* Location Stats Card */}
            <div className="w-[90vw] 2xl:mr-[100px] max-w-xs sm:max-w-sm md:max-w-xs bg-white/20 p-3 rounded-xl shadow-lg overflow-hidden">
              <img
                src={map}
                alt="World Map"
                className="w-full object-contain mb-3"
              />
              <div className="flex justify-between text-[16px] md:text[20px] font-medium ">
                <span>List</span>
                <div className="flex flex-row gap-5">
                  <span>Country</span>
                  <span>City</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-5">
                {/* America */}
                <div className="flex items-center gap-5 bg-white/20 rounded-lg px-2 py-3">
                  <img src={usaFlag} alt="USA Flag" className=" rounded-full" />
                  <div>
                    <p className="text-[16px] md:text[20px] font-semibold">America</p>
                    <p className="text-[10px] font-medium">800K View</p>
                  </div>
                </div>

                {/* Los Angeles */}
                <div className="flex items-center gap-5 bg-white/20 rounded-lg px-2 py-3">
                  <img src={usaFlag} alt="USA Flag" className=" rounded-full" />
                  <div>
                    <p className="text-[16px] md:text[20px] font-semibold">Los Angeles</p>
                    <p className="text-[10px] font-medium">50K View</p>
                  </div>
                </div>

                {/* Paris */}
                <div className="flex items-center gap-5 bg-white/20 rounded-lg px-2 py-3">
                  <img
                    src={franceFlag}
                    alt="USA Flag"
                    className=" rounded-full"
                  />
                  <div>
                    <p className="text-[16px] md:text[20px] font-semibold">Paris</p>
                    <p className="text-[10px] font-medium">10K View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-20 text-center lg:text-left">
            <p className="text-[16px] md:text[24px] font-medium text-white mt-4">
              With Biogram, your profile is always online and lightning fast.
              Get detailed, real-time analytics showing where your clicks come
              from whether it's hundreds or millions.
            </p>

            <div className="mt-5 w-full flex flex-col sm:flex-row  mx-auto lg:mx-0 gap-3 md:max-w-lg">
              <div className="flex w-full overflow-hidden rounded-full bg-white h-[50px] sm:h-[60px] shadow-lg relative">
                <input
                  type="text"
                  placeholder="Biogram/your name"
                  value={username}
                  onChange={handleUsernameChange}
                  className="flex-grow px-4 sm:px-6 text-black outline-none placeholder-gray-500 text-sm bg-transparent w-full h-full border-none focus:ring-0 focus:outline-none"
                  style={{ WebkitAppearance: 'none' }}
                />
                <button 
                  onClick={handleSignup}
                  type="button"
                  className="text-[16px] md:text[20px] px-6 sm:px-8 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] hover:from-[#4a725f] hover:to-[#98e6c3] font-semibold transition text-sm border-l border-gray-300 whitespace-nowrap rounded-full text-white cursor-pointer relative z-10 h-full"
                >
                  Signup Free
                </button>
              </div>
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
          {isDropdownOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-48 bg-green-200 rounded-lg shadow-lg overflow-hidden">
              <div className="py-1">
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400"
                >
                  Personal
                </Link>
                <Link
                  to="/started"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400"
                >
                  Business
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

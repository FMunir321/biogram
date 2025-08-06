import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import map from "../../../../public/assets/Vector.png";
import Instagram from "../../../../public/assets/Instagram.png";
import TikTok from "../../../../public/assets/TikTok.png";
import franceFlag from "../../../../public/assets/france.png";
import usaFlag from "../../../../public/assets/united states.png";

// Use direct path for public assets
const world = "/assets/world.png";

export default function RealTimeAnalyticsHero({ name, handleNameInput, handleButtonInput }: { name: string, handleNameInput: (name: string) => void, handleButtonInput: (name: string) => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white sm:p-4 flex flex-col justify-between overflow-x-hidden">
       {/* Background World Image */}
       <img
          src={world}
          alt="world"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
        />
      <div className="relative max-w-[1280px] w-[98%] mx-auto z-10">
        {" "}
        {/* Background World Image */}
      
        {/* Floating Elements Container (Visible only on md+) */}
        <div className="absolute inset-0 z-10">
          {/* 8.5M Card */}
          <motion.div 
            className="absolute top-[6%] left-[5%] bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-md shadow-lg min-w-[100px] sm:min-w-[140px]"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.p 
              className="font-bold text-white text-lg sm:text-2xl leading-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              8.5M
            </motion.p>
            <motion.p 
              className="text-xs text-white/90 leading-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Profile View
            </motion.p>
            <motion.span 
              className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 10, -10, 0]
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                opacity: { duration: 0.5, delay: 1.5 },
                scale: { duration: 0.5, delay: 1.5, type: "spring", stiffness: 200 },
                rotate: { duration: 2, repeat: Infinity, repeatDelay: 3 }
              }}
            >
              +40%
            </motion.span>
          </motion.div>

          {/* 80K Card */}
          <motion.div 
            className="absolute top-[2%] right-[30%] bg-white/20 p-3 sm:p-4 rounded-xl backdrop-blur-md shadow-lg min-w-[90px] sm:min-w-[120px]"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.p 
              className="font-bold text-white text-lg sm:text-2xl leading-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              80K
            </motion.p>
            <motion.p 
              className="text-xs text-white/90 leading-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Links Click
            </motion.p>
            <motion.span 
              className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold shadow"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 10, -10, 0]
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                opacity: { duration: 0.5, delay: 1.7 },
                scale: { duration: 0.5, delay: 1.7, type: "spring", stiffness: 200 },
                rotate: { duration: 2, repeat: Infinity, repeatDelay: 4 }
              }}
            >
              +3.5%
            </motion.span>
          </motion.div>

          {/* Percentage Labels */}
          <motion.div 
            className="absolute top-[30%] left-[30%] text-xs font-semibold hidden sm:block"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Europe (10%)
          </motion.div>
          <motion.div 
            className="absolute top-[12%] right-[32%] text-xs font-semibold hidden sm:block"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            Asia (40%)
          </motion.div>
          <motion.div 
            className="absolute top-[35%] left-[15%] text-xs font-semibold hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            Africa (05%)
          </motion.div>
          <motion.div 
            className="absolute top-[5%] left-[20%] text-xs font-semibold hidden sm:block"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          >
            America (10%)
          </motion.div>
        </div>
        <div >
          <div className="flex flex-col lg:flex-row items-center justify-between mt-[300px] px-4 md:ml-[90px] gap-8">
            <div>
              {/* Instagram & Tiktok Card */}
              <motion.div 
                className=" flex flex-col mx-auto gap-5 lg:gap-0 md:ml-[50px]"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {/* Instagram Card */}
                <motion.div 
                  className=" flex justify-between items-center gap-4 text-white px-4 sm:px-6 py-4 rounded-[20px] w-full sm:w-auto lg:w-[400px] xl:w-[450px] shadow-2xl h-[110px] bg-white/20"
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-row items-center gap-4">
                    <motion.img
                      src={Instagram}
                      alt="Instagram"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow"
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    />
                    <div className="flex flex-col justify-center">
                      <motion.span 
                        className="font-semibold text-base sm:text-lg leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                      >
                        Instagram
                      </motion.span>
                      <motion.span 
                        className="text-xs text-white/80"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 1.9 }}
                      >
                        @AlexJames
                      </motion.span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 2.1 }}
                  >
                    <span className="bg-white/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap font-semibold shadow text-white">
                      502K Clicks
                    </span>
                  </motion.div>
                </motion.div>

                {/* TikTok Card */}
                <motion.div 
                  className=" flex lg:ml-[30%] lg:mt-[-30px] justify-between items-center gap-4 text-white px-4 sm:px-6 py-4 rounded-[20px] w-full sm:w-auto lg:w-[400px] xl:w-[450px] shadow-2xl h-[110px] bg-white/30"
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-row items-center gap-4">
                    <motion.img
                      src={TikTok}
                      alt="TikTok"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow"
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                    />
                    <div className="flex flex-col justify-center">
                      <motion.span 
                        className="font-semibold text-base sm:text-lg leading-tight"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 1.9 }}
                      >
                        Tiktok
                      </motion.span>
                      <motion.span 
                        className="text-xs text-white/80"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 2.1 }}
                      >
                        @AlexJames 
                      </motion.span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 2.3 }}
                  >
                    <span className="bg-white/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap font-semibold shadow text-white">
                      1.5M Clicks
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* Main Content Area */}
              <motion.div 
                className="  w-full flex flex-col md:text-left "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.h1 
                  className="text-[25px] sm:text-[40px] lg:text-[64px] font-extrabold leading-tight max-w-4xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.span 
                    className="text-white block"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Know your audience,
                  </motion.span>
                  <motion.span 
                    className="text-white block"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    grow your reach at no cost
                  </motion.span>
                </motion.h1>
              </motion.div>
            </div>
            {/* Location Stats Card */}
            <motion.div 
              className="w-[90vw] 2xl:mr-[100px] max-w-xs sm:max-w-sm md:max-w-xs bg-white/20 p-3 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.img
                src={map}
                alt="World Map"
                className="w-full object-contain mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 2 }}
              />
              <motion.div 
                className="flex justify-between text-[16px] md:text[20px] font-medium "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <span>List</span>
                <div className="flex flex-row gap-5">
                  <span>Country</span>
                  <span>City</span>
                </div>
              </motion.div>
              <div className="flex flex-col gap-3 mt-5">
                {/* America */}
                <motion.div 
                  className="flex items-center gap-5 bg-white/20 rounded-lg px-2 py-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.img 
                    src={usaFlag} 
                    alt="USA Flag" 
                    className=" rounded-full"
                    initial={{ rotate: -360, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 2.6 }}
                  />
                  <div>
                    <motion.p 
                      className="text-[16px] md:text[20px] font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 2.8 }}
                    >
                      America
                    </motion.p>
                    <motion.p 
                      className="text-[10px] font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 3 }}
                    >
                      800K View
                    </motion.p>
                  </div>
                </motion.div>

                {/* Los Angeles */}
                <motion.div 
                  className="flex items-center gap-5 bg-white/20 rounded-lg px-2 py-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.img 
                    src={usaFlag} 
                    alt="USA Flag" 
                    className=" rounded-full"
                    initial={{ rotate: -360, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                  />
                  <div>
                    <motion.p 
                      className="text-[16px] md:text[20px] font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 3 }}
                    >
                      Los Angeles
                    </motion.p>
                    <motion.p 
                      className="text-[10px] font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 3.2 }}
                    >
                      50K View
                    </motion.p>
                  </div>
                </motion.div>

                {/* Paris */}
                <motion.div 
                  className="flex items-center gap-5 bg-white/20 rounded-lg px-2 py-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.img
                    src={franceFlag}
                    alt="France Flag"
                    className=" rounded-full"
                    initial={{ rotate: -360, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 3 }}
                  />
                  <div>
                    <motion.p 
                      className="text-[16px] md:text[20px] font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 3.2 }}
                    >
                      Paris
                    </motion.p>
                    <motion.p 
                      className="text-[10px] font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 3.4 }}
                    >
                      10K View
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="px-4 md:px-20 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.p 
              className="text-[16px] md:text[24px] font-medium text-white mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              With Biogram, your profile is always online and lightning fast.
              Get detailed, real-time analytics showing where your clicks come
              from whether it's hundreds or millions.
            </motion.p>

            <motion.div 
              className="m-5  w-full flex flex-col sm:flex-row  mx-auto lg:mx-0 gap-3 md:max-w-lg relative z-20"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <motion.div 
                className="flex w-full overflow-hidden rounded-full bg-white h-[50px] sm:h-[60px] shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
              >
                <motion.input
                  type="text"
                  value={name}
                  placeholder="Biogram/your name"
                  onChange={(e) => {
                    handleNameInput(e.target.value);
                  }}
                  className="flex-grow px-4 sm:px-6 text-black outline-none placeholder-gray-500 text-sm bg-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                />
                <motion.button 
                  onClick={() => {
                    handleButtonInput(name);
                  }} 
                  className="text-[14px] md:text[20px] px-6 sm:px-8  py-2 bg-gradient-to-r from-[#53886C] to-[#98e6c3] hover:from-[#4a725f] hover:to-[#98e6c3] font-semibold transition text-sm border-l border-gray-300 whitespace-nowrap rounded-r-full text-white cursor-pointer min-w-[120px ]"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Signup Free
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* For People Button with Dropdown */}
        <div className="hidden fixed bottom-4 right-4 z-30">
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

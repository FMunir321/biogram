import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../public/assets/Proof.png';
import logo from '../../public/assets/loginlogo.png';
import { useNavigate } from 'react-router-dom';
const BiogramShoutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1280px] mx-auto min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Biogram Text */}

      {/* Logo Positioned Absolutely */}


      <motion.img
        src={logo}
        alt="Biogram Logo"
        className="absolute top-8 left-8 w-[200px] h-auto object-contain z-30"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
      />

      <div className="max-w-6xl w-full flex flex-col xl:flex-row gap-10 items-center z-10 mt-25">
        {/* Left Content - No changes as requested */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[80px]  font-extrabold text-black text-center xl:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Less stress.
            </motion.span>{" "}
            <motion.span
              className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[80px] font-extrabold text-black text-center xl:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              More results.
            </motion.span>
          </motion.h1>
          <motion.h1
            className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[80px]  font-extrabold text-black text-center xl:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Start scheduling smarter today!
          </motion.h1>

          <motion.p
            className="mt-6 text-black text-[16px] md:text[24px] font-medium text-center xl:text-left px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Tired of the daily hassle of posting? Our Social Planner makes scheduling a breeze—plan, optimize, and auto-post your content across platforms, all in one place. Stay consistent, save hours every week, and grow your online presence effortlessly.
          </motion.p>
          <motion.div
            className="mt-8 text-center xl:text-left"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.button
              onClick={() => navigate('/signup')}
              className="text-[16px] md:text[24px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] hover:from-[#53886C] hover:to-[#7ECFA7] text-white font-semibold py-3 px-8 rounded-full transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started For free
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Adjusted profile image positioning */}
        <motion.div
          className="relative flex justify-center md:justify-end sm:-ml-[100px] lg:-ml-[50px]"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="bg-[#e1f2e8] p-4 sm:p-6 rounded-2xl shadow-md w-full sm:w-[500px] h-[500px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >

            <motion.div
              className="text-center text-base sm:text-lg font-semibold mb-4 text-white bg-gradient-to-r from-[#7ECFA7] to-[#53886C] py-4 rounded-2xl relative"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <select className='absolute left-4 top-7 -translate-y-1/2 rotate-90 text-white bg-transparent border-none outline-none' />
              June 2025
              <select className='absolute right-4 top-8 -translate-y-1/2 -rotate-90 text-white bg-transparent border-none outline-none' />
            </motion.div>

            <motion.div
              className="grid grid-cols-7 gap-8 text-center text-sm font-medium mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                <motion.div
                  key={day}
                  className='bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white w-full sm:w-[55px] sm:h-[54px] aspect-square flex items-center justify-center rounded-[5px] sm:rounded-[10px] text-xs sm:text-sm'
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {day}
                </motion.div>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((date, index) => (
                <motion.div
                  key={date}
                  className={`py-2 rounded-full text-sm transition-all ${date === 19
                    ? "bg-orange-500 text-white font-bold cursor-pointer"
                    : "hover:bg-green-200 cursor-pointer"
                    }`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, delay: 2.1 + index * 0.05 }}
                  whileHover={{ scale: 1.2, backgroundColor: date === 19 ? "#f97316" : "#bbf7d0" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {date}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Adjusted Profile Image */}
          <motion.img
            src={profileImage}
            alt="profile"
            className="absolute hidden sm:block w-[180px] h-[250px] rounded-xl shadow-lg border-4 border-white object-cover"
            style={{
              bottom: "34px",
              right: "-100px",
              zIndex: 10
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -50,
              x: 50,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: -10,
              x: 0,
              y: 0
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1,
              delay: 1.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              scale: 1.05,
              rotate: -5,
              y: -10,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </div>

      {/* Dropdown Button */}

    </div>
  );
};

export default BiogramShoutPage;
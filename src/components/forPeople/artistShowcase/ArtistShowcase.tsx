<<<<<<< HEAD
import { motion } from "framer-motion";
=======
import { useEffect, useRef } from "react";
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
import redjersy from "../../../../public/assets/redjersy.png";
import Mobilefram from "../../../../public/assets/realtimeanalytics/mobilefram.png";
import Mobileframesm from "../../../../public/assets/realtimeanalytics/mobileframesm.png";
import Tickets from "../../../../public/assets/realtimeanalytics/tickets.png";
import Products from "../../../../public/assets/realtimeanalytics/products.png";
import Musicbg from "../../../../public/assets/realtimeanalytics/musicbg.png";
import Appointment from "../../../../public/assets/realtimeanalytics/appoinment.png";
import Sweet from "../../../../public/assets/realtimeanalytics/sweet.png";
import Stream from "../../../../public/assets/realtimeanalytics/stream.png";
import Music from "../../../../public/assets/realtimeanalytics/music.png";
import Photshoot from "../../../../public/assets/realtimeanalytics/photshoot.png";
import Videoshoot from "../../../../public/assets/realtimeanalytics/videoshoot.png";
import FacebookImage from "../../../../public/assets/Facebook.png";
import InstagramImage from "../../../../public/assets/Instagram.png";
import TwitterImage from "../../../../public/assets/twitter.png";
import TiktokImage from "../../../../public/assets/TikTok.png";
import WhatsappImage from "../../../../public/assets/Whatsapp.png";

// Animation variants
const popIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 12, stiffness: 120 }
  }
};

const slide = {
  fromTop: {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  },
  fromLeft: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  },
  fromRight: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }
};

const pulse = {
  hidden: { scale: 1 },
  visible: { 
    scale: 1.03,
    transition: { 
      duration: 1.8, 
      repeat: Infinity, 
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

const ArtistShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0; // Loop back to start
        }
      }, 20); // Speed control (lower number = faster scroll)

      // Cleanup interval on component unmount
      return () => clearInterval(scrollInterval);
    }
  }, []);

  const socialIcons = [
    { src: FacebookImage, alt: "Facebook" },
    { src: InstagramImage, alt: "Instagram" },
    { src: TwitterImage, alt: "Twitter" },
    { src: TiktokImage, alt: "TikTok" },
    { src: WhatsappImage, alt: "Whatsapp" },
  ];

  return (
<<<<<<< HEAD
    <div className="container p-5 mx-auto">
      {/* First Row */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex flex-col lg:flex-row gap-4 my-5"
      >
        {/* Tour Dates Section */}
        <motion.div 
          variants={pulse}
          className="flex flex-col md:flex-row shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl lg:w-[60%]"
        >
=======
    <>
      {/* Horizontal Scrollable Sections */}
      <div
        ref={scrollRef}
        className="container p-5 overflow-x-auto scroll-smooth whitespace-nowrap gap-4 my-5"
      >
        {/* Tour Dates and Artist Card */}
        <div className="inline-flex flex-col md:flex-row shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl mr-4 lg:w-[60%] lg:h-[422px] xl:h-full">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
          <div className="md:w-[50%]">
            <motion.p 
              variants={popIn}
              className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[20px] font-semibold px-4 py-2 rounded-r-full"
            >
              Coming Soon: Add your Tickets
            </motion.p>
            
            <div className="pl-5">
<<<<<<< HEAD
              <motion.h1 
                variants={slide.fromTop}
                className="text-[40px] my-8 font-extrabold text-black"
              >
                Tour Dates
              </motion.h1>

              <div className="flex flex-col items-center gap-4">
                {/* First Tour Card */}
                <motion.div 
                  variants={slide.fromLeft}
                  className="self-start flex flex-row items-center"
                >
=======
              <h1 className="text-[20px] md:text-[40px] my-8 lg:my-1 xl:my-15 font-extrabold text-black">
                Tour Dates
              </h1>
              <div className="flex flex-col items-center gap-4">
                <div className="self-start flex flex-row items-center">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <div className="border w-[250px] border-[#7ecfa7] rounded-[20px] px-5 bg-[#d8e8e0]">
                    <div className="flex flex-row items-center justify-between border-b border-dotted border-[#3A3A3A]">
                      <p className="text-[20px] font-medium text-[#2D2D2D]">
                        <span className="text-[40px] font-bold">21 </span>jun 2025
                      </p>
                      <p className="text-[15px] font-medium text-[#2D2D2D] mt-[-30px] mr-[-12px]">
                        8PM
                      </p>
                    </div>
                    <p className="text-[20px] font-medium text-[#2D2D2D]">
                      Kaseya Center
                    </p>
                    <p className="text-[14px] font-normal text-[#2D2D2D]">
                      Miami, FL
                    </p>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    variants={popIn}
                    className="max-w-[81px] -ml-[30px] h-[30px] text-center bg-gradient-to-r from-[#7ECFA7] to-[#53886C] py-1 px-2 rounded-2xl text-white text-[13px]"
                  >
                    Tickets
<<<<<<< HEAD
                  </motion.div>
                </motion.div>

                {/* Second Tour Card */}
                <motion.div 
                  variants={slide.fromRight}
                  className="md:self-end flex flex-row items-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    variants={popIn}
                    className="z-10 max-w-[81px] -mr-[30px] h-[30px] text-center bg-gradient-to-r from-[#7ECFA7] to-[#53886C] py-1 px-2 rounded-2xl text-white text-[13px]"
                  >
                    Tickets
                  </motion.div>
=======
                  </div>
                </div>
                <div className="md:self-end flex flex-row items-center">
                  <div className="z-10 max-w-[81px] -mr-[30px] h-[30px] text-center bg-gradient-to-r from-[#7ECFA7] to-[#53886C] py-1 px-2 rounded-2xl text-white text-[13px]">
                    Tickets
                  </div>
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <div className="z-2 border w-[250px] border-[#7ecfa7] rounded-[20px] px-5 bg-[#d8e8e0]">
                    <div className="flex flex-row items-center justify-between border-b border-dotted border-[#3A3A3A] ml-[20px]">
                      <p className="text-[20px] font-medium text-[#2D2D2D]">
                        <span className="text-[40px] font-bold">26 </span>jun 2025
                      </p>
                      <p className="text-[15px] font-medium text-[#2D2D2D] mt-[-30px] mr-[-12px]">
                        10PM
                      </p>
                    </div>
                    <p className="text-[20px] font-medium text-[#2D2D2D] ml-[20px]">
                      T-Mobile Arena
                    </p>
                    <p className="text-[14px] font-normal text-[#2D2D2D] ml-[20px]">
                      Las Vegas
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <div className="px-5 md:w-[50%] mt-5 lg:mt-[53px]">
            <motion.div 
              variants={pulse}
              className="relative w-full flex justify-center items-center"
            >
=======
          <div className="px-5 md:w-[50%] mt-5 lg:mt-[53px] xl:mt-[65px]">
            <div className="relative w-full flex justify-center items-center">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
              <img
                src={Tickets}
                alt="Mobile Frame"
                className="w-[97%] h-[90%] rounded-t-[56px] object-cover shadow-md"
              />
              <img
                src={Mobilefram}
                alt="Content"
                className="absolute w-full object-cover top-[-15px]"
              />
              <div className="absolute bottom-[2%] w-[80%]">
<<<<<<< HEAD
                <motion.h3 
                  variants={slide.fromTop}
                  className="text-white text-[32px] font-extrabold"
                >
=======
                <h3 className="text-white text-[32px] font-extrabold">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  Chan Ja HO
                </motion.h3>
                <motion.p 
                  variants={slide.fromTop}
                  className="text-white text-[14px]"
                >
                  June 21, 2025
                </motion.p>
                <div className="flex flex-row gap-2 mt-2">
                  {socialIcons.map((icon, idx) => (
                    <motion.div
                      key={idx}
                      variants={popIn}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-[30px] p-1 flex items-center justify-center"
                      style={{
                        background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                      }}
                    >
                      <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
<<<<<<< HEAD
        </motion.div>

        {/* Products Section */}
        <motion.div 
          variants={pulse}
          className="flex flex-col lg:w-[40%] bg-[#e4f4ec] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl"
        >
          <motion.p 
            variants={popIn}
            className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[20px] font-semibold px-4 py-2 rounded-r-full"
          >
            Coming Soon: Sell Products & Services
          </motion.p>

          <div className="flex flex-row justify-between h-full mt-5 relative">
            <div className="z-10 md:w-[40%] ml-[50px] flex flex-col justify-center items-center -mr-[300px]">
              <div className="flex flex-col gap-4 pl-[30px] w-[280px]">
                <motion.div 
                  variants={slide.fromLeft}
                  className="flex flex-row items-center bg-white shadow-md rounded-lg"
                >
=======
        </div>

        {/* Products Card */}
        <div className="inline-flex flex-col lg:w-[40%] lg:h-[422px] xl:h-full bg-[#e4f4ec] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl mr-4">
          <p className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[16px] md:text-[20px] font-semibold px-4 py-2 rounded-r-full">
            Coming Soon: Sell Products & Services
          </p>
          <div className="flex flex-row justify-between h-full xl:h-[464px] 2xl:h-[578px] mt-5 relative">
            <div className="z-10 md:w-[40%] ml-[50px] flex flex-col justify-center items-center -mr-[300px]">
              <div className="flex flex-col gap-4 pl-[30px] w-[280px]">
                <div className="flex flex-row items-center bg-white shadow-md rounded-lg">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <div>
                    <img
                      src={redjersy}
                      alt="Artist"
                      className="w-[100px] h-[80px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="rounded-lg px-5 bg-white">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">Red jersey</p>
                    <p className="text-[16px] font-normal text-[#2D2D2D]">250.00$</p>
                  </div>
<<<<<<< HEAD
                </motion.div>

                <motion.div 
                  variants={slide.fromLeft}
                  className="flex flex-row items-center bg-white shadow-md rounded-lg"
                >
=======
                </div>
                <div className="flex flex-row items-center bg-white shadow-md rounded-lg">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <div>
                    <img
                      src={Sweet}
                      alt="Artist"
                      className="w-[100px] h-[80px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="rounded-lg px-5 bg-white">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">Sweet Package</p>
                    <p className="text-[16px] font-normal text-[#2D2D2D]">150.00$</p>
                  </div>
                </motion.div>
              </div>
            </div>
<<<<<<< HEAD

            <div className="px-5 md:w-[60%] self-end">
              <motion.div 
                variants={pulse}
                className="relative self-end w-full flex justify-center items-center"
              >
=======
            <div className="px-5 md:w-[60%] xl:mt-[65px] self-end">
              <div className="relative self-end w-full flex justify-center items-center">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                <img
                  src={Products}
                  alt="Mobile Frame"
                  className="w-[97%] h-[90%] rounded-t-[50px] object-cover shadow-md"
                />
                <img
                  src={Mobileframesm}
                  alt="Content"
                  className="absolute w-full object-cover top-[-7px]"
                />
                <div className="absolute bottom-[2%] w-[80%]">
<<<<<<< HEAD
                  <motion.h3 
                    variants={slide.fromTop}
                    className="text-white text-[32px] font-extrabold"
                  >
=======
                  <h3 className="text-white text-[32px] font-extrabold">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                    Michal James
                  </motion.h3>
                  <motion.p 
                    variants={slide.fromTop}
                    className="text-white text-[14px]"
                  >
                    @ MJames123.com
                  </motion.p>
                  <div className="flex flex-row gap-2 mt-2">
                    {socialIcons.map((icon, idx) => (
                      <motion.div
                        key={idx}
                        variants={popIn}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-[30px] p-1 flex items-center justify-center"
                        style={{
                          background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                        }}
                      >
                        <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>
      </motion.div>

      {/* Second Row */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex flex-col lg:flex-row gap-4 my-5"
      >
        {/* Music Section */}
        <motion.div 
          variants={pulse}
          className="flex flex-col lg:w-[40%] bg-[#e4f4ec] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl"
        >
          <motion.p 
            variants={popIn}
            className="mt-5 max-w-[300px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[20px] font-semibold px-4 py-2 rounded-r-full"
          >
            Add Your Music
          </motion.p>

          <div className="flex flex-row justify-between mt-5 xl:mt-11 items-center relative">
            <div className="z-10 -mr-25 w-[60%]">
              <div className="flex flex-col gap-4 pl-2">
                <motion.div 
                  variants={slide.fromLeft}
                  className="flex flex-row items-center bg-white shadow-md rounded-full"
                >
=======
        </div>

        {/* Music Card */}
        <div className="inline-flex flex-col lg:w-[40%] h-[430px] bg-[#e4f4ec] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl mr-4">
          <p className="mt-5 max-w-[300px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[16px] md:text-[20px] font-semibold px-4 py-2 rounded-r-full">
            Add Your Music
          </p>
          <div className="flex flex-row justify-between mt-5 lg:mt-0 xl:mt-11 items-center relative">
            <div className="z-10 -mr-25 w-[60%]">
              <div className="flex flex-col gap-4 pl-2">
                <div className="flex flex-row items-center bg-white shadow-md rounded-full">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <div>
                    <img
                      src={Stream}
                      alt="Artist"
                      className="w-[52px] h-[50px] object-cover rounded-full"
                    />
                  </div>
                  <div className="px-1">
                    <p className="text-[14px] font-normal text-[#2D2D2D]">
                      Stream "Hype" on all platforms!
                    </p>
                  </div>
<<<<<<< HEAD
                </motion.div>

                <motion.div 
                  variants={slide.fromLeft}
                  className="border border-[#4278ef] rounded-xl mt-9"
                >
=======
                </div>
                <div className="border border-[#4278ef] rounded-xl mt-9">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <img
                    src={Music}
                    alt="Artist"
                    className="w-[280px] object-cover rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
<<<<<<< HEAD

            <div className="px-5 md:w-[60%]">
              <motion.div 
                variants={pulse}
                className="relative w-full flex justify-center items-center"
              >
=======
            <div className="px-5 md:w-[60%] lg:mt-[65px]">
              <div className="relative w-full flex justify-center items-center">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                <img
                  src={Musicbg}
                  alt="Mobile Frame"
                  className="w-[97%] h-[90%] rounded-t-[56px] object-cover shadow-md"
                />
                <img
                  src={Mobileframesm}
                  alt="Content"
                  className="absolute w-full object-cover top-[-7px]"
                />
                <div className="absolute bottom-[2%] w-[80%]">
<<<<<<< HEAD
                  <motion.h3 
                    variants={slide.fromTop}
                    className="text-white text-[32px] font-extrabold"
                  >
=======
                  <h3 className="text-white text-[32px] font-extrabold">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                    Arcangel
                  </motion.h3>
                  <motion.p 
                    variants={slide.fromTop}
                    className="text-white text-[14px]"
                  >
                    @ Arcangel.com
                  </motion.p>
                  <div className="flex flex-row gap-2 mt-2">
                    {socialIcons.map((icon, idx) => (
                      <motion.div
                        key={idx}
                        variants={popIn}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-[30px] p-1 flex items-center justify-center"
                        style={{
                          background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                        }}
                      >
                        <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Appointment Section */}
        <motion.div 
          variants={pulse}
          className="flex flex-col lg:w-[60%] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl"
        >
          <motion.p 
            variants={popIn}
            className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[20px] font-semibold px-4 py-2 rounded-r-full"
          >
            Coming Soon: Appointment Scheduler
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-5 relative">
            <div className="px-5 md:w-[50%]">
              <motion.div 
                variants={pulse}
                className="relative w-full flex justify-center items-center"
              >
=======
        {/* Appointment Scheduler Card */}
        <div className="inline-flex flex-col lg:w-[60%] h-[430px] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl">
          <p className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[16px] md:text-[20px] font-semibold px-4 py-2 rounded-r-full">
            Coming Soon: Appointment Scheduler
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-5 lg:mt-0 relative">
            <div className="px-5 md:w-[50%] lg:mt-[65px]">
              <div className="relative w-full flex justify-center items-center">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                <img
                  src={Appointment}
                  alt="Mobile Frame"
                  className="w-[97%] h-[90%] rounded-t-[56px] object-cover shadow-md"
                />
                <img
                  src={Mobilefram}
                  alt="Content"
                  className="absolute w-full object-cover top-[-12px]"
                />
                <div className="absolute bottom-[2%] w-[80%]">
<<<<<<< HEAD
                  <motion.h3 
                    variants={slide.fromTop}
                    className="text-white text-[24px] font-extrabold"
                  >
=======
                  <h3 className="text-white text-[16px] md:text-[24px] font-extrabold">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                    Max James
                  </motion.h3>
                  <motion.p 
                    variants={slide.fromTop}
                    className="text-white text-[14px]"
                  >
                    June 21, 2025
                  </motion.p>
                  <div className="flex flex-row gap-2 mt-2">
                    {socialIcons.map((icon, idx) => (
                      <motion.div
                        key={idx}
                        variants={popIn}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-[30px] p-1 flex items-center justify-center"
                        style={{
                          background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                        }}
                      >
                        <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
<<<<<<< HEAD
            
            <div className="p-3">
              <div className="flex flex-col gap-4 pl-2">
                <motion.div 
                  variants={slide.fromRight}
                  className="relative"
                >
=======
            <div className="p-3">
              <div className="flex flex-col gap-4 pl-2">
                <div className="relative">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <img
                    src={Photshoot}
                    alt="Artist"
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 right-0 p-2 text-white">
<<<<<<< HEAD
                    <p className="text-[24px] font-bold">Photoshoot in miami</p>
                    <p className="text-[14px] font-normal text-right">2 Hours -$500</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={slide.fromRight}
                  className="relative"
                >
=======
                    <p className="text-[16px] md:text-[24px] font-bold">Photoshoot in Miami</p>
                    <p className="text-[12px] md:text-[14px] font-normal text-right">2 Hours -$500</p>
                  </div>
                </div>
                <div className="relative">
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  <img
                    src={Videoshoot}
                    alt="Artist"
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute top-0 left-0 p-2 text-white">
<<<<<<< HEAD
                    <p className="text-[24px] font-bold">Video Shoot in miami</p>
                    <p className="text-[14px] font-normal">2 Hours -$1999</p>
=======
                    <p className="text-[16px] md:text-[24px] font-bold">Video Shoot in Miami</p>
                    <p className="text-[12px] md:text-[14px] font-normal">2 Hours -$1999</p>
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>
      </motion.div>
    </div>
=======
        </div>
      </div>
    </>
>>>>>>> 6cfbf11a3d22c22090878b00cc81a4742639b2e2
  );
};

export default ArtistShowcase;
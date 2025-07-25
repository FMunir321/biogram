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
import TwitterImage from "../../../../public/assets/Twitter.png";
import TiktokImage from "../../../../public/assets/TikTok.png";
import WhatsappImage from "../../../../public/assets/Whatsapp.png";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const slideFromTop: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ArtistShowcase = () => {
  const socialIcons = [
    { src: FacebookImage, alt: "Facebook" },
    { src: InstagramImage, alt: "Instagram" },
    { src: TwitterImage, alt: "Twitter" },
    { src: TiktokImage, alt: "TikTok" },
    { src: WhatsappImage, alt: "Whatsapp" },
  ];

  return (
    <div className="overflow-hidden"> {/* Added overflow-hidden to prevent scrollbar */}
      <div className="container flex flex-col lg:flex-row flex-wrap gap-4 p-5 mx-auto my-5 box-border w-full">
        {/* First Row - Tour Dates Card */}
        <div className="flex flex-col md:flex-row shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl gap-9 md:gap-0 lg:w-[57%] lg:h-[422px] xl:h-full w-full">
          <div className="md:w-[50%]">
            <motion.p
              variants={slideFromTop} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[16px] md:text-[20px] font-semibold px-4 py-2 rounded-r-full"
            >
               Add your Tickets
            </motion.p>

            <div className="pl-5">
              <h1 className="text-[20px] md:text[30px] md:text-[40px] my-8 lg:my-1 xl:my-15 font-extrabold text-black">
                Tour Dates
              </h1>

              <div className="flex flex-col items-center gap-4">
                <motion.div
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  className="self-start flex flex-row items-center"
                >
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
                  <div className="max-w-[81px] -ml-[30px] h-[30px] text-center bg-gradient-to-r from-[#7ECFA7] to-[#53886C] py-1 px-2 rounded-2xl text-white text-[13px]">
                    Tickets
                  </div>
                </motion.div>

                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  className="md:self-end flex flex-row items-center"
                >
                  <div className="z-10 max-w-[81px] -mr-[30px] h-[30px] text-center bg-gradient-to-r from-[#7ECFA7] to-[#53886C] py-1 px-2 rounded-2xl text-white text-[13px]">
                    Tickets
                  </div>
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
          <div className="px-5 md:w-[50%] mt-5 lg:mt-[53px] xl:mt-[65px]">
            <div className="relative w-full flex justify-center items-center">
              <motion.img
                variants={slideFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                src={Tickets}
                alt="Mobile Frame"
                className="w-[97%] h-[90%] rounded-t-[56px] object-cover shadow-md"
              />

              <motion.img
                variants={slideFromBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                src={Mobilefram}
                alt="Content"
                className="absolute w-full object-cover top-[-23px] md:top-[-6px] xl:top-[-15px]"
              />
              <div className="absolute bottom-[2%] w-[80%]">
                <motion.h3
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }} 
                  className="text-white text-[32px] font-extrabold"
                >
                  Chan Ja HO
                </motion.h3>
                <motion.p
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }} 
                  className="text-white text-[14px]"
                >
                  June 21, 2025
                </motion.p>
                <motion.div
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }} 
                  className="flex flex-row gap-2 mt-2"
                >
                  {socialIcons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="rounded-[30px] flex items-center justify-center"
                      style={{
                        background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                      }}
                    >
                      <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* First Row - Products Card */}
        <div className="flex flex-col lg:w-[40%] lg:h-[422px] xl:h-full bg-[#e4f4ec] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl w-full">
          <motion.p
            variants={slideFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} 
            className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[16px] md:text-[20px] font-semibold px-4 py-2 rounded-r-full"
          >
           Sell Products & Services
          </motion.p>
          <div className="flex flex-row justify-between h-full xl:h-[464px] 2xl:h-[578px] mt-5 relative">
            <div className="z-10 md:w-[40%] ml-[50px] flex flex-col justify-center items-center -mr-[300px]">
              <div className="flex flex-col gap-4 pl-[30px] w-[280px]">
                <motion.div
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }} 
                  className="flex flex-row items-center bg-white shadow-md rounded-lg"
                >
                  <div>
                    <img
                      src={redjersy}
                      alt="Artist"
                      className="w-[100px] h-[80px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="rounded-lg px-5 bg-white">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">
                      Red jersey
                    </p>
                    <p className="text-[16px] font-normal text-[#2D2D2D]">
                      250.00$
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }} 
                  className="flex flex-row items-center bg-white shadow-md rounded-lg"
                >
                  <div>
                    <img
                      src={Sweet}
                      alt="Artist"
                      className="w-[100px] h-[80px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="rounded-lg px-5 bg-white">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">
                      Red jersey
                    </p>
                    <p className="text-[16px] font-normal text-[#2D2D2D]">
                      250.00$
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="px-5 md:w-[60%] xl:mt-[65px] self-end">
              <div className="relative self-end w-full flex justify-center items-center">
                <motion.img
                  variants={slideFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  src={Products}
                  alt="Mobile Frame"
                  className="w-[97%] h-[90%] rounded-t-[50px] 2xl:rounded-t-[56px] object-cover shadow-md"
                />

                <motion.img
                  variants={slideFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  src={Mobileframesm}
                  alt="Content"
                  className="absolute w-full object-cover top-[-5px] md:top-[-8px] lg:top-[-1px] xl:top-[-7px]"
                />
                <div className="absolute bottom-[2%] w-[80%]">
                  <motion.h3
                    variants={slideFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }} 
                    className="text-white text-[32px] font-extrabold"
                  >
                    Michal James
                  </motion.h3>
                  <motion.p
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }} 
                    className="text-white text-[14px]"
                  >
                    @ MJames123.com
                  </motion.p>
                  <div className="flex flex-row gap-2 mt-2">
                    {socialIcons.map((icon, idx) => (
                      <div
                        key={idx}
                        className="rounded-[30px] flex items-center justify-center"
                        style={{
                          background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                        }}
                      >
                        <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="container flex flex-col lg:flex-row flex-wrap items-center gap-4 p-5 mx-auto my-5 box-border w-full">
        {/* Music Player Card */}
        <div className="flex flex-col lg:w-[37%] h-full bg-[#e4f4ec] shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl w-full">
          <motion.p
            variants={slideFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="mt-5 max-w-[300px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[16px] md:text-[20px] font-semibold px-4 py-2 rounded-r-full"
          >
            Add Your Music
          </motion.p>
          <div className="flex flex-row justify-between mt-5 lg:mt-0 xl:mt-11 items-center relative">
            <div className="z-10 -mr-25 w-[60%]">
              <div className="flex flex-col gap-4 pl-2">
                <motion.div
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex flex-row items-center bg-white shadow-md rounded-full"
                >
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
                </motion.div>

                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  className="border border-[#4278ef] rounded-xl mt-9"
                >
                  <img
                    src={Music}
                    alt="Artist"
                    className="w-[280px] object-cover rounded-xl"
                  />
                </motion.div>
              </div>
            </div>

            <div className="px-5 md:w-[60%] lg:mt-[65px]">
              <div className="relative w-full flex justify-center items-center">
                <motion.img
                  variants={slideFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  src={Musicbg}
                  alt="Mobile Frame"
                  className="w-[97%] h-[90%] rounded-t-[40px] xl:rounded-t-[56px] object-cover shadow-md"
                />

                <motion.img
                  variants={slideFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  src={Mobileframesm}
                  alt="Content"
                  className="absolute w-full object-cover top-[0px] 2xl:top-[-7px]"
                />
                <div className="absolute bottom-[2%] w-[80%]">
                  <motion.h3
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-white text-[32px] font-extrabold"
                  >
                    Arcangel
                  </motion.h3>
                  <motion.p
                    variants={slideFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-white text-[14px]"
                  >
                    @ Arcangel.com
                  </motion.p>
                  <motion.div
                    variants={slideFromBottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-row gap-2 mt-2"
                  >
                    {socialIcons.map((icon, idx) => (
                      <div
                        key={idx}
                        className="rounded-[30px] flex items-center justify-center"
                        style={{
                          background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                        }}
                      >
                        <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Scheduler Card */}
        <div className="flex flex-col lg:w-[60%] h-full shadow-[0px_0px_20.2px_0px_#00000040] rounded-2xl w-full">
          <motion.p
            variants={slideFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="mt-5 max-w-[500px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-[16px] md:text-[20px] font-semibold px-4 py-2 rounded-r-full"
          >
             Appointment Scheduler
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-5 lg:mt-0 relative">
            <div className="px-5 md:w-[50%] lg:mt-[65px]">
              <div className="relative w-full flex justify-center items-center">
                <motion.img
                  variants={slideFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  src={Appointment}
                  alt="Mobile Frame"
                  className="w-[97%] h-[90%] 2xl:rounded-t-[56px] object-cover shadow-md"
                />

                <motion.img
                  variants={slideFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  src={Mobilefram}
                  alt="Content"
                  className="absolute w-full object-cover top-[-7px] sm:top-[-8px] md:top-[-13px] lg:top-[-9px] xl:top-[-12px]"
                />
                <div className="absolute bottom-[2%] w-[80%]">
                  <motion.h3
                    variants={slideFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-white text-[16px] md:text[24px] font-extrabold"
                  >
                    Max James
                  </motion.h3>
                  <motion.p
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-white text-[12px] md:text-[14px]"
                  >
                    June 21, 2025
                  </motion.p>
                  <motion.div
                    variants={slideFromTop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-row gap-2 mt-2"
                  >
                    {socialIcons.map((icon, idx) => (
                      <div
                        key={idx}
                        className="rounded-[30px] flex items-center justify-center"
                        style={{
                          background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                        }}
                      >
                        <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex flex-col gap-4 pl-2">
                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  className="relative"
                >
                  <img
                    src={Photshoot}
                    alt="Artist"
                    className="object-cover rounded-xl w-full"
                  />
                  <div className="absolute bottom-0 right-0 p-2 text-white">
                    <p className="text-[16px] md:text[24px] font-bold">Photoshoot in miami</p>
                    <p className="text-[12px] md:text-[14px] font-normal text-right">2 Hours -$500</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={slideFromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  className="relative"
                >
                  <img
                    src={Videoshoot}
                    alt="Artist"
                    className="object-cover rounded-xl w-full"
                  />
                  <div className="absolute top-0 left-0 p-2 text-white">
                    <p className="text-[16px] md:text[24px] font-bold">Video Shoot in miami</p>
                    <p className="text-[12px] md:text-[14px] font-normal">2 Hours -$1999</p>
                  </div> 
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistShowcase;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import mock2 from "../../../../public/assets/good.png";
import mock3 from "../../../../public/assets/mock2.png";
import avatar from "../../../../public/assets/mock3.png";
import { FaInstagram, FaYoutube, FaTiktok, FaSpotify, FaTwitter } from "react-icons/fa";
import mock5 from "../../../../public/assets/fire.png";
import { motion } from "framer-motion";

const ProfileCard = () => {
  const handleFirstCardClick = () => {
    const firstCard = document.getElementById("first-card");
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: "smooth", inline: "center" });
    } else {
      console.error("Element not found!");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const slideVariants = {
    initial: { x: 0 },
    animate: {
      x: [-10, -30, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialButtonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="hidden lg:block">
      <motion.div
        className="max-w-[1280px] mx-auto bg-white py-16 px-6 md:px-12 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold max-w-2xl"
          variants={cardVariants}
        >
          Design Your Link That's Truly You
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 mt-4 max-w-xl"
          variants={cardVariants}
        >
          With endless styles, colors, and layouts, you can create a Link with
          biogram that matches your vibe and brand perfectly. Show your
          individuality. Stand out in every click
        </motion.p>

        {/* Preview Cards */}
        <motion.div 
          className="relative mt-16 flex flex-col md:flex-row justify-center items-center w-full max-w-3xl"
          variants={slideVariants}
          initial="initial"
          animate="animate"
        >
          {/* Background Cards */}
          <motion.div 
            className="absolute -left-40 mb-[500px] hover:cursor-pointer" 
            id="first-card" 
            onClick={handleFirstCardClick}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute -left-16 w-80 h-[500px] bg-black rounded-lg">
              <Avatar className="w-48 h-[370px] mx-auto mt-5 ml-5">
                <AvatarImage src={mock2} alt="Alex James" />
              </Avatar>
              <h3 className="text-xl font-bold -mt-16">Alex James</h3>
              <p className="text-sm text-gray-300">@AlexLinks</p>

              <div className="mt-4 flex gap-4 justify-center">
                {[
                  { Icon: FaInstagram, color: "#E1306C" },
                  { Icon: FaTwitter, color: "#1DA1F2" },
                  { Icon: FaSpotify, color: "#1DB954" },
                ].map(({ Icon, color }, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white transition-colors shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon style={{ color }} size={22} />
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className="mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-4 py-1">
                  Continue profile
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -left-16 w-80 h-[550px] bg-black rounded-lg border border-red-500"
            variants={cardVariants}
            whileHover="hover"
          >
            <Avatar className="w-20 h-20 rounded-full mx-auto mt-10">
              <AvatarImage src={avatar} alt="Alex James" />
            </Avatar>
            <h3 className="text-xl font-bold text-white">Alex James</h3>
            <p className="text-sm text-gray-300">@AlexLinks</p>
            <div className="mt-4 flex flex-col gap-2 w-[300px] mx-auto">
              {[
                { label: "Instagram" },
                { label: "Twitter" },
                { label: "Spotify" },
              ].map(({ label }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center gap-3 w-full h-12 rounded-full border border-white/30 bg-transparent hover:bg-white/10 transition-colors px-4"
                  variants={socialButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="text-white text-sm">{label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-4 py-1">
                Continue profile
              </Button>
            </motion.div>
            <div className="mt-4 flex gap-4 justify-center">
              {[
                { Icon: FaInstagram, color: "#E1306C" },
                { Icon: FaTwitter, color: "#1DA1F2" },
                { Icon: FaSpotify, color: "#1DB954" },
              ].map(({ Icon, color }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white transition-colors shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon style={{ color }} size={22} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -15 }}
          >
            <Card className="z-50 md:w-110 bg-black text-white rounded-2xl shadow-xl relative">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src={avatar} alt="Alex James" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <h3 className="text-xl font-bold">Alex James</h3>
                  <p className="text-sm text-gray-300">@AlexLinks</p>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button className="mt-2 bg-pink-500 text-white rounded-full text-sm px-4 py-1">
                      Share profile
                    </Button>
                  </motion.div>

                  {/* Social Icons Row with Transparent Rectangles */}
                  <div className="mt-4 flex flex-col gap-2 w-full">
                    {[
                      { Icon: FaInstagram, label: "Instagram" },
                      { Icon: FaTwitter, label: "Twitter" },
                      { Icon: FaSpotify, label: "Spotify" },
                      { Icon: FaYoutube, label: "YouTube" },
                      { Icon: FaTiktok, label: "TikTok" },
                    ].map(({ Icon, label }, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 w-full h-12 rounded-full border border-white/30 bg-transparent hover:bg-white/10 transition-colors px-4"
                        variants={socialButtonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Icon className="text-white" size={20} />
                        <span className="text-white text-sm">{label}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-5 gap-10">
                    {[
                      "/theme1.png",
                      "/theme2.png",
                      "/theme3.png",
                      "/theme4.png",
                      "/theme5.png",
                    ].map((_, idx) => {
                      const bgColors = [
                        "bg-pink-500",
                        "bg-green-500",
                        "bg-yellow-400",
                        "bg-red-500",
                        "bg-blue-500",
                      ];
                      return (
                        <motion.div
                          key={idx}
                          className={`w-10 h-10 scale-150 rounded-md border-2 border-transparent hover:border-pink-400 cursor-pointer flex items-center justify-center ${bgColors[idx]}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <img
                            src={avatar}
                            alt={`theme-${idx}`}
                            className="w-10 h-10"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right BG */}
          <motion.div 
            className="absolute right-0 z-10"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative mt-16 flex justify-center items-center w-full max-w-3xl">
              {/* Background Cards */}
              <div className="absolute -left-48 mb-[630px]">
                <div className="absolute -left-32 w-80 h-[860px] rounded-lg">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <img
                      src={mock5}
                      alt="bg4"
                      className="rounded-2xl shadow-lg h-[570px]"
                    />
                  </motion.div>
                  <Avatar className="w-50 h-96 mx-auto -mt-[490px] mr-5">
                    <AvatarImage src={mock3} alt="Alex James" />
                  </Avatar>

                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-10 py-8">
                      Continue profile
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute right-0 z-0"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute -left-48 w-80 h-[530px] bg-pink-500 rounded-lg border border-red-500b -mt-[260px]">
              <Avatar className="w-52 h-90 rounded-full mx-auto ">
                <AvatarImage src={mock3} alt="Alex James" />
              </Avatar>
              <h3 className="text-xl font-bold">Alex James</h3>
              <p className="text-sm text-gray-300">@AlexLinks</p>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className=" bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-4 py-1">
                  Continue profile
                </Button>
              </motion.div>
              <div className=" flex gap-4 justify-center">
                {[
                  { Icon: FaInstagram, color: "#E1306C" },
                  { Icon: FaTwitter, color: "#1DA1F2" },
                  { Icon: FaSpotify, color: "#1DB954" },
                ].map(({ Icon, color }, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white transition-colors shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon style={{ color }} size={22} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
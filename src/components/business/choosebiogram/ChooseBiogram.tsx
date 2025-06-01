import React from "react";
import { motion } from "framer-motion";
import user1 from "../../../../public/assets/Rectangle79.jpg";
import user2 from "../../../../public/assets/Rectangle80.jpg";
import user3 from "../../../../public/assets/Rectangle77.jpg";
import user4 from "../../../../public/assets/Rectangle76.jpg";
import user5 from "../../../../public/assets/Rectangle78.jpg";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const people = [
  {
    name: "Eliza",
    tag: "@elizaSocial.com",
    role: "Flush",
    imagePath: user1,
    rotation: "",
  },
  {
    name: "Chan Ja HO",
    tag: "@chan567james.com",
    role: "Blogger",
    imagePath: user3,
    rotation: "",
  },
  {
    name: "Sara James",
    tag: "@sara123james.com",
    role: "Designer",
    imagePath: user4,
    rotation: "",
  },
  {
    name: "James Max",
    tag: "@james555.com",
    role: "Actor",
    imagePath: user5,
    rotation: "",
  },
  {
    name: "Alex",
    tag: "@alexcraft.com",
    role: "Slicer",
    imagePath: user2,
    rotation: "",
  },
];

const socialColors = [
  "#E1306C", // Instagram
  "#1877F3", // Facebook
  "#1DA1F2", // Twitter
  "#25D366", // Whatsapp
  "#000000", // TikTok
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const ChooseBiogram: React.FC = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-visible max-w-[1280px] mx-auto">
      <div className="max-w-7xl mx-auto relative z-20 text-center lg:text-left">
        {/* Heading */}
        <h2 className="text-[32px] sm:text-[45px] md:text-[80px] lg:text-[100px] lg:leading-[106.56px] font-extrabold font-poppins text-black max-w-[921px]">
          Connect Smarter <br /> with Biogram
        </h2>

        <p className="text-[16px] md:text[20px] leading-[20px] font-medium font-poppins text-gray-700 max-w-[1072px] my-5 lg:my-12">
          Whether you're an individual or a growing enterprise, Biogram helps
          you turn everyday digital interactions into lasting relationships and
          real-world results.
        </p>

        {/* Cards Section */}
        <div className="overflow-x-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            }}
          >
            {[...people, ...people].map((person, index) => (
              <motion.div
                key={index}
                className={`w-60 h-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden relative border-4 border-white flex-shrink-0 ${person.rotation}`}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 12px 32px 0 rgba(0,0,0,0.18)",
                  zIndex: 2,
                }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {/* Role Ribbon */}
                <div
                  className="absolute top-0 left-0 px-4 py-2 text-white font-semibold text-sm rounded-br-2xl z-10"
                  style={{
                    background:
                      "linear-gradient(90deg, #98e6c3 0%, #4a725f 100%)",
                    borderTopLeftRadius: "1.5rem",
                    letterSpacing: "1px",
                  }}
                >
                  {person.role}
                </div>

                {/* Card Image */}
                <div className="w-full h-1/2 flex items-center justify-center overflow-hidden rounded-t-3xl bg-white">
                  <img
                    src={person.imagePath}
                    alt={person.name}
                    className="max-h-full max-w-full object-cover"
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>

                {/* Info */}
                <div className="p-4 text-left bg-gradient-to-r from-[#98e6c3] to-[#4a725f] bg-opacity-90 h-1/2 flex flex-col justify-end rounded-b-3xl">
                  <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow">
                    {person.name}
                  </h3>
                  <p className="text-md text-white font-medium mb-3 drop-shadow">
                    {person.tag}
                  </p>
                  <div className="flex gap-2 mt-auto">
                    {[FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaTiktok].map((Icon, i) => (
                      <span
                        key={i}
                        className="bg-white rounded-full p-1.5 shadow flex items-center justify-center"
                        style={{ color: socialColors[i] }}
                      >
                        <Icon size={20} />
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseBiogram;

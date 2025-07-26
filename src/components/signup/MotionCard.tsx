import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const socialColors = [
  "#E1306C", // Instagram
  "#1877F3", // Facebook
  "#1DA1F2", // Twitter
  "#25D366", // Whatsapp
  "#000000", // TikTok
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

interface Person {
  name: string;
  tag: string;
  role: string;
  imagePath: string;
  rotation?: string;
  followers?: string; // Optional: for follower count
}

interface MotionCardsProps {
  people: Person[];
  reverseDirection?: boolean;
}

const MotionCards: React.FC<MotionCardsProps> = ({ people, reverseDirection = false }) => {
  const animationDirection = reverseDirection
    ? ["-50%", "0%"] // ✅ scroll from top to bottom
    : ["0%", "-50%"]; // 🔁 default bottom to top

  return (
    <div className="overflow-hidden h-[100vh]">
      <motion.div
        className="flex flex-col gap-6 w-80 mx-auto"
        animate={{ y: animationDirection }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 28,
          ease: "linear",
        }}
      >
        {[...people, ...people].map((person, index) => (
          <motion.div
            key={index}
            className={`w-72 h-[360px] rounded-3xl overflow-hidden relative border-4 border-white shadow-lg flex-shrink-0 ${person.rotation}`}
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
            {/* Full background image */}
            <img
              src={person.imagePath}
              alt={person.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-40" />

            {/* Info Overlay */}
            <div className="absolute bottom-0 w-full p-4 z-10 text-center">
              <h3 className="text-xl font-extrabold text-white drop-shadow">
                {person.name}
              </h3>
              <p className="text-sm text-white font-medium drop-shadow">
                {person.tag}
              </p>

              <div className="flex justify-center gap-2 mt-3">
                {[FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp, FaTiktok].map(
                  (Icon, i) => (
                    <span
                      key={i}
                      className="bg-white rounded-full p-1.5 shadow flex items-center justify-center"
                      style={{ color: socialColors[i] }}
                    >
                      <Icon size={18} />
                    </span>
                  )
                )}
              </div>

              {/* Followers Count */}
              {person.followers && (
                <div className="text-white text-xs font-semibold mt-3">
                  <span className="text-white">{person.followers}</span>{" "}
                  <span className="opacity-70">Total Followers</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionCards;

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const socialIcons = [
  { Icon: FaFacebookF, color: "#1877F3" }, // Facebook
  { Icon: FaInstagram, color: "#E1306C" }, // Instagram
  { Icon: FaTwitter, color: "#1DA1F2" }, // Twitter
  { Icon: FaTiktok, color: "#000000" }, // TikTok
  { Icon: FaWhatsapp, color: "#25D366" }, // Whatsapp
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
  reverse?: boolean;
  reverseDirection?: boolean;
}

const MotionCards: React.FC<MotionCardsProps> = ({ people, reverse = false, reverseDirection = false }) => {
  const orderedPeople = reverse ? [...people].reverse() : people;
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
        {[...orderedPeople, ...orderedPeople].map((person, index) => (
          <motion.div
            key={index}
            className={`w-72 h-[360px] rounded-t-full rounded-b-sm overflow-hidden relative border-4 border-white shadow-lg flex-shrink-0 ${person.rotation}`}
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

            {/* Dark gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Profile Info - Centered with larger text */}
            <div className="absolute inset-x-0 bottom-0 w-full p-6 z-10 text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold text-white mb-1">
                {person.name}
              </h2>
              <p className="text-base text-white/90 font-medium mb-6">
                @ {person.tag}
              </p>

              {/* Social Icons - Spaced out in a row */}
              <div className="flex justify-center gap-3 mt-2 w-full">
                {socialIcons.map(({ Icon, color }, i) => (
                  <div
                    key={i}
                    className="rounded-full p-2.5 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={20} color="white" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MotionCards;

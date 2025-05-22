// PhoneMockup.tsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface PhoneMockupProps {
  image: string;
  name: string;
  username: string;
  className?: string; // for custom placement
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ image, name, username, className }) => (
  <div className={`w-[200px] h-[350px] rounded-[32px] bg-black shadow-2xl relative overflow-hidden border-4 border-gray-200 flex flex-col ${className}`}>
    {/* Notch */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-20 flex items-center justify-center">
      <div className="w-8 h-2 bg-gray-800 rounded-full" />
    </div>
    {/* Image */}
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-10">
      <h3 className="text-white text-lg font-bold leading-tight">{name}</h3>
      <p className="text-white/80 text-xs mb-2">@{username}</p>
      <div className="flex space-x-2">
        <FaFacebookF className="text-[#1877F3] bg-white rounded-full p-1" size={22} />
        <FaInstagram className="text-[#E1306C] bg-white rounded-full p-1" size={22} />
        <FaTwitter className="text-[#1DA1F2] bg-white rounded-full p-1" size={22} />
        <FaTiktok className="text-black bg-white rounded-full p-1" size={22} />
        <FaWhatsapp className="text-[#25D366] bg-white rounded-full p-1" size={22} />
      </div>
    </div>
  </div>
);

export default PhoneMockup;
import { Button } from "@/components/ui/button";
import {
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";
import mock2 from "../../../public/assets/good.png";

interface TemplateOneProps {
  isPreview?: boolean;
}

const TemplateOne = ({ isPreview = false }: TemplateOneProps) => {
  const name = "Alex James";
  const username = "@Alexjames";

  const socialIcons = [
    { Icon: FaInstagram, color: "#E1306C" },
    { Icon: FaTwitter, color: "#1DA1F2" },
    { Icon: FaSpotify, color: "#1DB954" },
    { Icon: FaTiktok, color: "#000000" },
    { Icon: FaTwitter, color: "#25D366" }, // WhatsApp green
  ];

  return (
    <div className={`${isPreview ? 'w-80 h-[600px]' : 'w-80 h-[600px]'} bg-black rounded-3xl transition-all duration-300 relative border-4 border-blue-500 ${isPreview ? 'p-6' : 'p-4'} flex flex-col`}>
      {/* Top tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-white/10 rounded-full p-1">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Photos
          </button>
          <button className="text-white px-4 py-2 rounded-full text-sm">
            Videos
          </button>
        </div>
      </div>

      {/* Character Image - Full body */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={mock2}
          alt={name}
          className={`${isPreview ? 'w-64' : 'w-48'} h-[300px] object-contain`}
        />
      </div>

      {/* Bottom section with name, username, social icons and button */}
      <div className="mt-auto space-y-4">
        <div className="text-center">
          <h3 className={`${isPreview ? 'text-2xl' : 'text-lg'} font-bold text-white`}>{name}</h3>
          <p className="text-gray-300 text-sm">{username}</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center">
          {socialIcons.map(({ Icon, color }, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${isPreview ? 'w-12 h-12' : 'w-10 h-10'} rounded-full bg-white shadow-lg`}
            >
              <Icon style={{ color }} size={isPreview ? 20 : 16} />
            </div>
          ))}
        </div>

        {/* Share Button */}
        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-8 py-3 font-semibold text-lg shadow-lg">
            Share profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;

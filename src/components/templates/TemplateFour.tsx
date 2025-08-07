import { Button } from "@/components/ui/button";
import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import mock2 from "../../../public/assets/good.png";

interface TemplateFourProps {
  isPreview?: boolean;
}

const TemplateFour = ({ isPreview = false }: TemplateFourProps) => {
  const name = "Alex James";
  const username = "@Alexjames";

  const socialIcons = [
    { Icon: FaInstagram, color: "#E1306C" },
    { Icon: FaInstagram, color: "#1877F2" }, // Facebook
    { Icon: FaTwitter, color: "#1DA1F2" },
    { Icon: FaTiktok, color: "#000000" },
    { Icon: FaTwitter, color: "#25D366" }, // WhatsApp
  ];

  return (
    <div className={`${isPreview ? 'w-80 h-[600px]' : 'w-80 h-[500px]'} rounded-3xl transition-all duration-300 relative overflow-hidden p-[2px] bg-gradient-to-r from-orange-500 to-pink-500`}>
      <div className="w-full h-full bg-black rounded-3xl relative overflow-hidden">
        {/* Fire background pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('../../../public/assets/fire.png')] bg-cover bg-center opacity-30"></div>
        
        <div className={`relative z-10 flex flex-col h-full ${isPreview ? 'p-6' : 'p-4'}`}>
          {/* Top section with name, username and tabs */}
          <div className="flex flex-col">
            <div className="text-left mb-4">
              <h3 className={`${isPreview ? 'text-2xl' : 'text-xl'} font-bold text-white`}>{name}</h3>
              <p className="text-gray-300 text-xs">{username}</p>
            </div>
            
            {/* Navigation Tabs */}
            <div className="flex bg-white/10 rounded-full p-1 mb-6">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Shots
              </button>
              <button className="text-white px-4 py-2 rounded-full text-sm">
                Media
              </button>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex flex-1">
            {/* Left side - Social Media Icons */}
            <div className="flex flex-col gap-4 justify-center">
              {socialIcons.map(({ Icon, color }, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center ${isPreview ? 'w-12 h-12' : 'w-10 h-10'} rounded-full bg-white shadow-lg`}
                >
                  <Icon style={{ color }} size={isPreview ? 20 : 16} />
                </div>
              ))}
            </div>

            {/* Right side - Character Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={mock2}
                alt="Character"
                className={`${isPreview ? 'w-48' : 'w-36'} h-auto object-contain`}
              />
            </div>
          </div>

          {/* Bottom - Share Button */}
          <div className="mt-1">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full py-3 font-semibold text-lg">
              Share profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateFour;

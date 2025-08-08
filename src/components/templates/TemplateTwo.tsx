import { Button } from "@/components/ui/button";
import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import mock2 from "../../../public/assets/good.png";

interface TemplateTwoProps {
  isPreview?: boolean;
}

const TemplateTwo = ({ isPreview = false }: TemplateTwoProps) => {
  const name = "Alex James";
  const username = "@Alexjames";

  const socialIcons = [
    { Icon: FaInstagram, color: "#1877F2" }, // Facebook blue
    { Icon: FaInstagram, color: "#E1306C" }, // Instagram
    { Icon: FaTwitter, color: "#1DA1F2" }, // Twitter
    { Icon: FaTiktok, color: "#000000" }, // TikTok
    { Icon: FaTwitter, color: "#25D366" }, // WhatsApp green
  ];

  const navigationButtons = [
    { label: "Photos", active: true },
    { label: "Videos", active: false },
    { label: "Messsage", active: false },
  ];

  return (
    <div className={`${isPreview ? 'w-80 h-[600px]' : 'w-80 h-[540px]'} rounded-3xl relative overflow-hidden`} 
         style={{
           background: 'linear-gradient(45deg, #ff6b35, #f7931e, #ff6b6b, #ee5a24, #ff9ff3, #f368e0, #a55eea)',
           padding: isPreview ? '3px' : '2px'
         }}>
      <div className="w-full h-full bg-black rounded-3xl relative" 
           style={{
             backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: isPreview ? '50px 50px, 30px 30px, 40px 40px' : '30px 30px, 20px 20px, 25px 25px'
           }}>
        <div className={`${isPreview ? 'p-6' : 'p-4'} flex flex-col h-full`}>
          {/* Character Image at top */}
          <div className="flex justify-center">
            <img
              src={mock2}
              alt={name}
              className={`${isPreview ? 'w-32' : 'w-24'} h-auto object-contain`}
            />
          </div>

          {/* Name and Username */}
          <div className="text-center mb-3">
            <h3 className={`${isPreview ? 'text-2xl' : 'text-lg'} font-bold text-white mb-1`}>{name}</h3>
            <p className="text-gray-300 text-sm">{username}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-3 mb-6">
            {navigationButtons.map(({ label, active }, index) => (
              <button
                key={index}
                className={`w-full ${isPreview ? 'py-3 px-4 text-sm' : 'py-2 px-3 text-xs'} rounded-lg font-medium shadow-lg transition-all ${
                  active 
                    ? 'bg-white text-black' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center mb-6">
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
          <div className="mt-auto">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg py-3 font-semibold text-lg shadow-lg">
              Share profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;

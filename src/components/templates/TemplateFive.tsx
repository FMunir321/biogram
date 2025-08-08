import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import mock2 from "../../../public/assets/good.png";

interface TemplateFiveProps {
  isPreview?: boolean;
}

const TemplateFive = ({ isPreview = false }: TemplateFiveProps) => {
  const name = "Alex James";
  const username = "@Alexjames";

  const socialIcons = [
    { Icon: FaFacebookF, color: "#1877F2" }, // Facebook
    { Icon: FaInstagram, color: "#E1306C" }, // Instagram
    { Icon: FaTwitter, color: "#1DA1F2" },   // Twitter
    { Icon: FaTiktok, color: "#000000" },    // TikTok
    { Icon: FaWhatsapp, color: "#25D366" },  // WhatsApp
  ];

  return (
    <div className={`${isPreview ? 'w-80 h-[600px]' : 'w-[320px] h-auto'} rounded-3xl p-[2px] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 shadow-xl`}>
      <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative p-5">
        {/* Character Image */}
        <div className="flex justify-center mb-8">
          <img
            src={mock2}
            alt="Character"
            className={`${isPreview ? 'w-56 h-56' : 'w-32 h-32'} object-contain rounded-full border-4 border-white mb-4`}
          />
        </div>

        {/* Name and Username */}
        <div className="text-center text-white mb-8">
          <h2 className={`${isPreview ? 'text-2xl' : 'text-xl'} font-bold`}>{name}</h2>
          <p className="text-sm text-gray-400">{username}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 bg-black rounded-full p-1 mb-8 border border-gray-700 w-fit mx-auto">
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs px-4 py-1.5 rounded-full font-semibold">
            Shots
          </button>
          <button className="bg-white text-black text-xs px-4 py-1.5 rounded-full font-semibold">
            Media
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">
          {socialIcons.map(({ Icon, color }, idx) => (
            <div
              key={idx}
              className={`${isPreview ? 'w-12 h-12' : 'w-10 h-10'} bg-white flex items-center justify-center rounded-full shadow-md`}
            >
              <Icon size={isPreview ? 20 : 18} style={{ color }} />
            </div>
          ))}
        </div>

        {/* Share Profile Button */}
        <button className="bg-gradient-to-r from-orange-400 to-pink-500 w-full py-2.5 rounded-full text-white font-semibold text-sm shadow-md">
          Share profile
        </button>
      </div>
    </div>
  );
};

export default TemplateFive;

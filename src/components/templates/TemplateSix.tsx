import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import mock2 from "../../../public/assets/good.png";

interface TemplateSixProps {
  isPreview?: boolean;
}

const TemplateSix = ({ isPreview = false }: TemplateSixProps) => {
  const name = "Alex James";
  const username = "@AlexJames";

  const socialIcons = [FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp];

  return (
    <div className={`${isPreview ? 'w-80 h-[600px]' : 'w-[320px] h-[470px]'} rounded-3xl overflow-hidden relative p-[2px] bg-gradient-to-br from-orange-500 via-red-500 to-purple-500`}>
      <div className="w-full h-full bg-black rounded-3xl relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/path-to-your-background.jpg')",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative z-10 p-6 flex flex-col h-full text-white">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
              <p className="text-sm text-gray-300">{username}</p>
            </div>
            <img
              src={mock2}
              alt="Avatar"
              className="w-20 h-20 object-cover rounded-full border-2 border-white"
            />
          </div>

          {/* Photos */}
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2">Photos</h4>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-white/30 rounded-full border border-white"
                ></div>
              ))}
            </div>
          </div>

          {/* Videos */}
          <div className="mb-6">
            <h4 className="text-md font-semibold mb-2">Videos</h4>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-white/30 rounded-full border border-white"
                ></div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center mb-6">
            {socialIcons.map((Icon, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white"
              >
                <Icon className="text-black" size={20} />
              </div>
            ))}
          </div>

          {/* Share Button */}
          <div className="mt-auto">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full py-3 font-semibold text-lg">
              Share profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSix;

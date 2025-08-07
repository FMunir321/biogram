import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import avatar from "../../../public/assets/mock3.png";

interface TemplateThreeProps {
  isPreview?: boolean;
}

const TemplateThree = ({ isPreview = false }: TemplateThreeProps) => {
  const name = "Alex James";
  const username = "@AlexLinks";

  const socialLinks = [
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: FaTwitter, label: "Twitter" },
    { Icon: FaSpotify, label: "Spotify" },
    { Icon: FaYoutube, label: "YouTube" },
    { Icon: FaTiktok, label: "TikTok" },
  ];

  const themes = [
    "theme1.png",
    "theme2.png", 
    "theme3.png",
    "theme4.png",
    "theme5.png",
  ];

  const bgColors = [
    "bg-pink-500",
    "bg-green-500",
    "bg-yellow-400",
    "bg-red-500",
    "bg-blue-500",
  ];

  return (
    <Card className={`${isPreview ? 'w-80 h-[600px]' : 'w-[320px]'} bg-black text-white rounded-3xl shadow-xl overflow-hidden`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>

          {/* Name */}
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-300">{username}</p>

          {/* Share Button */}
          <Button className="mt-3 w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full py-2 text-sm font-semibold">
            Share profile
          </Button>

          {/* Social Links */}
          <div className="mt-5 flex flex-col gap-2 w-full">
            {socialLinks.map(({ Icon, label }, index) => (
              <div
                key={index}
                className="flex items-center gap-3 w-full h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors px-4"
              >
                <Icon className="text-white" size={20} />
                <span className="text-sm text-white">{label}</span>
              </div>
            ))}
          </div>

          {/* Theme Options */}
          <div className="mt-6 grid grid-cols-5 gap-4">
            {themes.map((theme, idx) => (
              <div
                key={idx}
                className={`w-9 h-9 rounded-md border-2 border-transparent hover:border-pink-400 cursor-pointer flex items-center justify-center ${bgColors[idx]}`}
              >
                <img
                  src={avatar}
                  alt={`theme-${theme}`}
                  className="w-9 h-9 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateThree;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import mock2 from "../../public/assets/good.png";
import mock3 from "../../public/assets/mock2.png";

import avatar from "../../public/assets/mock3.png";

import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import mock5 from "../../public/assets/fire.png";

const ProfileCard = () => {
  return (
    <div className="hidden lg:block">
      <div className="max-w-[1280px] mx-auto bg-white py-16 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
          Design Your Link That’s Truly You
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl">
          With endless styles, colors, and layouts, you can create a Link with
          biogram that matches your vibe and brand perfectly. Show your
          individuality. Stand out in every click
        </p>

        {/* Preview Cards */}
        <div className=" relative mt-16 flex flex-col md:flex-row justify-center items-center w-full max-w-3xl">
          {/* Background Cards */}
          <div className="absolute -left-40 mb-[500px]">
            <div className="absolute -left-16 w-80 h-[500px] bg-black rounded-lg">
              <Avatar className="w-48 h-[370px] mx-auto mt-5 ml-5">
                <AvatarImage src={mock2} alt="Alex James" />
              </Avatar>
              <h3 className="text-xl font-bold -mt-16">Alex James</h3>
              <p className="text-sm text-gray-300">@AlexLinks</p>

              <div className="mt-4 flex gap-4 justify-center">
                {[
                  { Icon: FaInstagram, color: "#E1306C" },
                  { Icon: FaTwitter, color: "#1DA1F2" },
                  { Icon: FaSpotify, color: "#1DB954" },
                ].map(({ Icon, color }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white transition-colors shadow-md"
                  >
                    <Icon style={{ color }} size={22} />
                  </div>
                ))}
              </div>
              <Button className="mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-4 py-1">
                Continue profile
              </Button>
            </div>
          </div>
          <div className="absolute -left-16 w-80 h-[550px] bg-black rounded-lg border border-red-500">
            <Avatar className="w-20 h-20 rounded-full mx-auto mt-10">
              <AvatarImage src={avatar} alt="Alex James" />
            </Avatar>
            <h3 className="text-xl font-bold text-white">Alex James</h3>
            <p className="text-sm text-gray-300">@AlexLinks</p>
            <div className="mt-4 flex flex-col gap-2 w-[300px] mx-auto">
              {[
                { label: "Instagram" },
                { label: "Twitter" },
                { label: "Spotify" },
              ].map(({ label }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 w-full h-12 rounded-full border border-white/30 bg-transparent hover:bg-white/10 transition-colors px-4"
                >
                  <span className="text-white text-sm">{label}</span>
                </div>
              ))}
            </div>
            <Button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-4 py-1">
              Continue profile
            </Button>
            <div className="mt-4 flex gap-4 justify-center">
              {[
                { Icon: FaInstagram, color: "#E1306C" },
                { Icon: FaTwitter, color: "#1DA1F2" },
                { Icon: FaSpotify, color: "#1DB954" },
              ].map(({ Icon, color }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white transition-colors shadow-md"
                >
                  <Icon style={{ color }} size={22} />
                </div>
              ))}
            </div>
          </div>

          {/* Main Card */}
          <Card className="z-50 md:w-110 bg-black text-white rounded-2xl shadow-xl relative">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={avatar} alt="Alex James" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">Alex James</h3>
                <p className="text-sm text-gray-300">@AlexLinks</p>
                <Button className="mt-2 bg-pink-500 text-white rounded-full text-sm px-4 py-1">
                  Share profile
                </Button>

                {/* Social Icons Row with Transparent Rectangles */}
                {/* Social Icons Row with Transparent Rectangles */}
                <div className="mt-4 flex flex-col gap-2 w-full">
                  {[
                    { Icon: FaInstagram, label: "Instagram" },
                    { Icon: FaTwitter, label: "Twitter" },
                    { Icon: FaSpotify, label: "Spotify" },
                    { Icon: FaYoutube, label: "YouTube" },
                    { Icon: FaTiktok, label: "TikTok" },
                  ].map(({ Icon, label }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 w-full h-12 rounded-full border border-white/30 bg-transparent hover:bg-white/10 transition-colors px-4"
                    >
                      <Icon className="text-white" size={20} />
                      <span className="text-white text-sm">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-5 gap-10">
                  {[
                    "/theme1.png",
                    "/theme2.png",
                    "/theme3.png",
                    "/theme4.png",
                    "/theme5.png",
                  ].map((_, idx) => {
                    const bgColors = [
                      "bg-pink-500",
                      "bg-green-500",
                      "bg-yellow-400",
                      "bg-red-500",
                      "bg-blue-500",
                    ];
                    return (
                      <div
                        key={idx}
                        className={`w-10 h-10 scale-150  rounded-md border-2 border-transparent hover:border-pink-400 cursor-pointer flex items-center justify-center ${bgColors[idx]}`}
                      >
                        <img
                          src={avatar}
                          alt={`theme-${idx}`}
                          className="w-10 h-10"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right BG */}
          <div className="absolute right-0 z-10">
            <div className="relative mt-16 flex justify-center items-center w-full max-w-3xl">
              {/* Background Cards */}
              <div className="absolute -left-48 mb-[630px]">
                <div className="absolute -left-32 w-80 h-[860px] rounded-lg">
                  <img
                    src={mock5}
                    alt="bg4"
                    className="rounded-2xl shadow-lg h-[570px]"
                  />
                  <Avatar className="w-50 h-96 mx-auto -mt-[490px] mr-5">
                    <AvatarImage src={mock3} alt="Alex James" />
                  </Avatar>

                  <Button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-10 py-8">
                    Continue profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 z-0">
            <div className="absolute -left-48 w-80 h-[530px] bg-pink-500 rounded-lg border border-red-500b -mt-[260px]">
              <Avatar className="w-52 h-90 rounded-full mx-auto ">
                <AvatarImage src={mock3} alt="Alex James" />
              </Avatar>
              <h3 className="text-xl font-bold">Alex James</h3>
              <p className="text-sm text-gray-300">@AlexLinks</p>

              <Button className=" bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm px-4 py-1">
                Continue profile
              </Button>
              <div className=" flex gap-4 justify-center">
                {[
                  { Icon: FaInstagram, color: "#E1306C" },
                  { Icon: FaTwitter, color: "#1DA1F2" },
                  { Icon: FaSpotify, color: "#1DB954" },
                ].map(({ Icon, color }, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white transition-colors shadow-md"
                  >
                    <Icon style={{ color }} size={22} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

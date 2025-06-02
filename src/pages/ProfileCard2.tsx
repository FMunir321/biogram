// ProfileCard.jsx
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import mock2 from "../../public/assets/good.png";
import mock3 from "../../public/assets/mock2.png";
import avatar from "../../public/assets/mock3.png";
import mock5 from "../../public/assets/fire.png";

import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";

import "./styles.css";

const ProfileCard = () => {
  return (
    <div id="app">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper"
      >
        {[mock2, mock3, mock5].map((_imgSrc, index) => (
          <SwiperSlide key={index}>
            {index == 0 ? (
              <Card className="w-110 bg-black text-white rounded-2xl shadow-xl relative">
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
            ) : (
              <Card className="w-110 bg-red-500 text-white rounded-2xl shadow-xl relative">
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
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProfileCard;

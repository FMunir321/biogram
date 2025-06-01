import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import facebookimage from "../../public/assets/Facebook.png";
import instagramimage from "../../public/assets/Instagram.png";
import twitterimage from "../../public/assets/Twitter.png";
import tiktokimage from "../../public/assets/TikTok.png";
import whatsappimage from "../../public/assets/Whatsapp.png";
import linkedinimage from "../../public/assets/Linkedin.png";
import skypeimage from "../../public/assets/Skype.png";
import applemusicimage from "../../public/assets/AppleMusic.png";
import soundcloudimage from "../../public/assets/Soundcloud.png";
import spotifyimage from "../../public/assets/Spotify.png";
import alexjamesimage from "../../public/assets/aleximage.png";
import Dropdown from "../../public/assets/dropdown.png";

import rightsideemojiimage from "../../public/assets/rightsidegoldenicon.png";
import { useState } from "react";
import AddSocialMediapopup from "../components/popup/AddSocialMediapopup";

const AddSocialMedia = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] p-4 md:p-6 flex flex-col lg:flex-row items-center justify-center gap-2">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-2">
        <div className="mb-4 md:mb-8">
          <h1 className="text-[25px] sm:text-[40px] lg:text-[64px] font-semibold text-white mb-2 md:mb-4 leading-tight">
            <span className="block">Add your social</span>
            <span className="block">media</span>
          </h1>
          <p className="text-[16px] md:text[24px] text-medium text-white">
            Connect your online presence in one place
          </p>
        </div>

        <div className="flex mb-4 gap-2 w-full p-2 py-5 rounded-full bg-white text-black text-[20px] font-medium">
          <Input
            type="text"
            placeholder="Search Platforms"
            className="text-[20px] font-medium border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
          />
          <Button className="rounded-full bg-[linear-gradient(to_right,_#98e6c3,_#4a725f)] text-white md:px-8 md:py-5 whitespace-nowrap mr-3">
            Search
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Social Networks Card */}
          <Card
            className="px-4 h-auto min-h-0 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
            }}
          >
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-[18px] md:text[24px] md:text-[32px] font-semibold text-white">
                Social Networks
              </h2>

              <img
                src={Dropdown}
                alt="Alex James Character"
                className=" object-contain"
              />
            </div>
            <div className="flex gap-1">
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={facebookimage}
                  alt="Facebook"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={instagramimage}
                  alt="Instagram"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={twitterimage}
                  alt="Twitter"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={tiktokimage} alt="TikTok" className="w-full h-full" />
              </div>
            </div>
          </Card>

          <Card
            className="px-4 h-auto min-h-0 bg-[#FFFFFF40] backdrop-blur-xl rounded-[20px] border-none w-full"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[18px] md:text[24px] md:text-[32px] font-semibold text-white">
                Business
              </h2>
              <img
                src={Dropdown}
                alt="Alex James Character"
                className=" object-contain"
              />
            </div>
            <div className="flex gap-1 mb-2">
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={whatsappimage}
                  alt="WhatsApp"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={linkedinimage}
                  alt="LinkedIn"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={skypeimage} alt="Skype" className="w-full h-full" />
              </div>
            </div>
          </Card>

          {/* Music Card */}
          <Card
            className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-auto min-h-0"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[18px] md:text[24px] md:text-[32px] font-semibold text-white">
                Music
              </h2>
              <img
                src={Dropdown}
                alt="Alex James Character"
                className=" object-contain"
              />
            </div>
            <div className="flex gap-1 mb-2">
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={applemusicimage}
                  alt="Apple Music"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={soundcloudimage}
                  alt="Soundcloud"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={spotifyimage}
                  alt="Spotify"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>

          <Card
            className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-auto min-h-0"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
            }}
          >
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-[18px] md:text[24px] md:text-[32px] font-semibold text-white">
                Payment
              </h2>
              <img
                src={Dropdown}
                alt="Alex James Character"
                className=" object-contain"
              />
            </div>
          </Card>

          <Card
            className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-auto min-h-0"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Gaming
              </h2>
              <img
                src={Dropdown}
                alt="Alex James Character"
                className=" object-contain"
              />
            </div>
          </Card>

          <Card
            className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[100px]"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Lifestyle
              </h2>
              <img
                src={Dropdown}
                alt="Alex James Character"
                className=" object-contain"
              />
            </div>
          </Card>
        </div>

        <Button
          className="w-full mt-4 md:mt-6 bg-white text-black text-[18px] md:text[24px] md:text-[36px] py-10 rounded-[50px] hover:bg-white hover:text-black cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
        >
          Continue
        </Button>

        {/* Popup Component */}
        <AddSocialMediapopup
          icon={facebookimage}
          platformName="Facebook"
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </div>

      {/* Right Preview Section */}
      <div
        className="p-[2px] rounded-[32px] w-full lg:w-[800px]"
        style={{
          background:
            "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div
          className="p-4 rounded-[30px] bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)]"
          style={{
            boxShadow: "0px 0px 20.2px 0px #00000040",
            backdropFilter: "blur(21.2px)",
            minHeight: "857px",
          }}
        >
          <div className="bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] rounded-[32px]  md:h-[857px] relative overflow-hidden">
            {/* Top Tabs */}
            <div className="flex items-end justify-end p-4 min-w-[238px]">
              <div
                className="p-[2px] rounded-full inline-block"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
                }}
              >
                <div
                  className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-1 w-full h-full"
                  style={{
                    backgroundClip: "padding-box",
                    // Optional: add a solid background if you want to hide the gradient behind the content
                    // background: "rgba(255,255,255,0.2)",
                  }}
                >
                  <button
                    className="px-4 md:px-6 py-3 rounded-full text-white text-[20px] font-normal"
                    style={{
                      background:
                        "linear-gradient(97.29deg, #7ECFA7 13.65%, #53886C 90.87%)",
                    }}
                  >
                    Shots
                  </button>
                  <button className="px-4 md:px-6 py-1.5 text-white text-[20px] font-normal hover:bg-white/10">
                    Media
                  </button>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-4 relative">
              {/* Mobile Layout - Only visible on sm screens */}
              <div className="flex flex-col md:hidden w-full">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Alex James
                  </h2>
                  <p className="text-lg text-white/90">@Alexjames</p>
                </div>

                <div className="flex flex-col gap-4 mb-6 w-full">
                  <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-4 h-[200px] w-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={rightsideemojiimage}
                        alt="Right Side Emoji"
                        className="w-[64px] h-[64px]"
                      />
                      <p className="text-white text-base">No shouts</p>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-4 h-[200px] w-full flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={rightsideemojiimage}
                        alt="Right Side Emoji"
                        className="w-[64px] h-[64px]"
                      />
                      <p className="text-white text-base">No shouts</p>
                    </div>
                  </div>
                </div>

                <div className="w-full mb-6">
                  <div className="bg-[#FFFFFF40] rounded-2xl p-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      No shouts yet!
                    </h3>
                    <p className="text-white/90 text-xs">
                      Shouts posted by alex james will appear here
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <img
                    src={alexjamesimage}
                    alt="Alex James Character"
                    className="h-[300px] object-contain"
                  />
                </div>
              </div>

              {/* Desktop Layout - Hidden on sm, visible on md and up */}
              <div className="hidden md:block relative">
                <div className="relative z-10">
                  <h2 className="text-5xl font-bold text-white mb-1">
                    Alex James
                  </h2>
                  <p className="text-xl text-white/90 mb-6">@Alexjames</p>

                  <div className="space-y-4 max-w-[242px]">
                    <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <img
                          src={rightsideemojiimage}
                          alt="Right Side Emoji"
                          className="w-[88px] h-[88px]"
                        />
                        <p className="text-white text-lg">No shouts</p>
                      </div>
                    </div>

                    <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <img
                          src={rightsideemojiimage}
                          alt="Right Side Emoji"
                          className="w-[88px] h-[88px]"
                        />
                        <p className="text-white text-lg">No shouts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Character Image for Desktop */}
                <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
                  <img
                    src={alexjamesimage}
                    alt="Alex James Character"
                    className="h-[100%]"
                  />
                </div>

                {/* Desktop Bottom Card - Below character image */}
                <div className="px-2 mt-[50px]">
                  <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-white to-transparent">
                    <div className="rounded-xl bg-[#699683] text-white px-4 py-2 text-center">
                      <h3 className="text-[40px] font-bold text-white mb-1">
                        No shouts yet!
                      </h3>
                      <p className="text-white/90 text-[20px] font-normal">
                        Shouts posted by alex james will appear here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSocialMedia;

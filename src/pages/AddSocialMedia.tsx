import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";
import facebookimage from "../assets/Facebook.png";
import instagramimage from "../assets/Instagram.png";
import twitterimage from "../assets/Twitter.png";
import tiktokimage from "../assets/TikTok.png";
import whatsappimage from "../assets/Whatsapp.png";
import linkedinimage from "../assets/Linkedin.png";
import skypeimage from "../assets/Skype.png";
import applemusicimage from "../assets/AppleMusic.png";
import soundcloudimage from "../assets/Soundcloud.png";
import spotifyimage from "../assets/Spotify.png";
import alexjamesimage from "../assets/aleximage.png";
import rightsideemojiimage from "../assets/rightsidegoldenicon.png";
import { useState } from "react"
import AddSocialMediapopup from "../components/popup/AddSocialMediapopup"

const AddSocialMedia = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(to_bottom_right,_#FF6200,_#FF00EE)] p-4 md:p-6 flex flex-col lg:flex-row items-center justify-center gap-2">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-2">
        <div className="mb-4 md:mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight">
            <span className="block">Add your social</span>
            <span className="block">media</span>
          </h1>
          <p className="text-base md:text-xl text-white">
            Connect your online presence in one place
          </p>
        </div>

        <div className="relative mb-4 md:mb-6  md:px-0">
          <Input
            type="text"
            placeholder="Search Platforms"
            className="w-full md:w-[736px] lg:w-[500px] xl:w-[920px] p-8  rounded-full bg-white text-black"
          />
          <Button
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(to_right,_#FF00EE,_#FF6200)] text-white md:px-8 md:py-3"
          >
            Search
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Social Networks Card */}
          <Card className="p-4 md:p-6 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[150px]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">Social Networks</h2>
              <Button variant="ghost" className="text-white hover:bg-white/10 p-2 h-auto">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex gap-1">
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={facebookimage} alt="Facebook" className="w-full h-full" />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={instagramimage} alt="Instagram" className="w-full h-full" />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={twitterimage} alt="Twitter" className="w-full h-full" />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={tiktokimage} alt="TikTok" className="w-full h-full" />
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-[#FFFFFF40] backdrop-blur-xl rounded-[20px] border-none w-full h-[150px]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">Business</h2>
              <Button variant="ghost" className="text-white hover:bg-white/10 p-2 h-auto">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex gap-1">
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={whatsappimage} alt="WhatsApp" className="w-full h-full" />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={linkedinimage} alt="LinkedIn" className="w-full h-full" />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={skypeimage} alt="Skype" className="w-full h-full" />
              </div>
            </div>
          </Card>

          {/* Music Card */}
          <Card className="p-4 md:p-6 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[150px]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">Music</h2>
              <Button variant="ghost" className="text-white hover:bg-white/10 p-2 h-auto">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex gap-1">
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={applemusicimage} alt="Apple Music" className="w-full h-full" />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={soundcloudimage} alt="Soundcloud" className="w-full h-full" />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img src={spotifyimage} alt="Spotify" className="w-full h-full" />
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[150px]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">Payment</h2>
              <Button variant="ghost" className="text-white hover:bg-white/10 p-2 h-auto">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
          </Card>
         
          <Card className="p-4 md:p-6 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[150px]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">Gaming</h2>
              <Button variant="ghost" className="text-white hover:bg-white/10 p-2 h-auto">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[150px]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white">Lifestyle</h2>
              <Button variant="ghost" className="text-white p-2 h-auto">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>
          </Card>
        </div>

        <Button
        className="w-full mt-4 md:mt-6 bg-white text-black p-2 rounded-[50px] hover:bg-white hover:text-black cursor-pointer"
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
       <div className="w-full lg:w-[800px] p-4">
        <div className="bg-[linear-gradient(to_bottom_right,_#FF6200,_#FF00EE)] rounded-[32px]  md:h-[857px] relative overflow-hidden">
          {/* Top Tabs */}
          <div className="flex items-end justify-end p-4">
            <div className="inline-flex bg-[#FF518F] rounded-full p-1">
              <button className="px-4 md:px-6 py-1.5 rounded-full bg-[#FF1F77] text-white text-sm font-medium">
                Shots
              </button>
              <button className="px-4 md:px-6 py-1.5 text-white text-sm font-medium hover:bg-white/10">
                Media
              </button>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-4 relative">
            {/* Mobile Layout - Only visible on sm screens */}
            <div className="flex flex-col md:hidden w-full">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-1">Alex James</h2>
                <p className="text-lg text-white/90">@Alexjames</p>
              </div>

              <div className="flex flex-col gap-4 mb-6 w-full">
                <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-4 h-[200px] w-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <img src={rightsideemojiimage} alt="Right Side Emoji" className="w-[64px] h-[64px]" />
                    <p className="text-white text-base">No shouts</p>
                  </div>
                </div>

                <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-4 h-[200px] w-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <img src={rightsideemojiimage} alt="Right Side Emoji" className="w-[64px] h-[64px]" />
                    <p className="text-white text-base">No shouts</p>
                  </div>
                </div>
              </div>

              <div className="w-full mb-6">
                <div className="bg-[#FFFFFF40] rounded-2xl p-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">No shouts yet!</h3>
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
                <h2 className="text-5xl font-bold text-white mb-1">Alex James</h2>
                <p className="text-xl text-white/90 mb-6">@Alexjames</p>

                <div className="space-y-4 max-w-[242px]">
                  <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <img src={rightsideemojiimage} alt="Right Side Emoji" className="w-[88px] h-[88px]" />
                      <p className="text-white text-lg">No shouts</p>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <img src={rightsideemojiimage} alt="Right Side Emoji" className="w-[88px] h-[88px]" />
                      <p className="text-white text-lg">No shouts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Character Image for Desktop */}
              <div className="absolute right-[-20px] bottom-[10px] h-[90%] z-0 top-[9px]">
                <img 
                  src={alexjamesimage} 
                  alt="Alex James Character" 
                  className=" object-contain h-[653px]"
                />
              </div>

              {/* Desktop Bottom Card - Below character image */}
              <div className="px-2 mt-[60px]">
                <div className="bg-[#FFFFFF40] rounded-2xl p-6 text-center max-w-[569px] mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-1">No shouts yet!</h3>
                  <p className="text-white/90 text-sm">
                    Shouts posted by alex james will appear here
                  </p>
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
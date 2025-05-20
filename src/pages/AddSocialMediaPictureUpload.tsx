import { Button } from "../components/ui/button";
import alexjamesimage from "../assets/aleximage.png";
import rightsideemojiimage from "../assets/rightsidegoldenicon.png";
import camerapicture from "../assets/camerapic.png";
import { Link } from "react-router-dom";

const AddSocialMediaPictureUpload = () => {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] p-4 md:p-6 flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-[960px] min-h-[850px] rounded-[32px] p-8 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Welcome<br />
            Alex!
          </h1>

          <p className="text-base md:text-xl text-white mb-2 text-center">
            Let's personalize your linkme profile
          </p>
          <p className="text-base md:text-xl text-white font-bold mb-8">
            Add your profile Picture
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-[200px] h-[200px] bg-white/30 rounded-full flex items-center justify-center">
              <img src={camerapicture} alt="Camera Icon" className="w-[80px] h-[80px]" />
            </div>

            <Button className="bg-white text-black p-2 px-8 rounded-[50px] hover:bg-white/90 text-lg font-semibold">
              Upload Picture
            </Button>
          </div>
        </div>
      </div>

      {/* Right Preview Section */}
      <div className="w-full lg:w-[800px] p-7">
        <div className="bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] rounded-[32px] md:h-[857px] relative overflow-hidden">
          {/* Top Tabs */}
          <div className="flex items-end justify-end p-4">
            <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-1">
              <button className="px-4 md:px-6 py-1.5 rounded-full bg-[#98e6c3] text-white text-sm font-medium">
                Shots
              </button>
              <button className="px-4 md:px-6 py-1.5 text-white text-sm font-medium hover:bg-white/10">
                Media
              </button>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-4 relative">
            {/* Mobile Layout */}
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

            {/* Desktop Layout */}
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

              <div className="absolute right-[-20px] bottom-[10px] h-[90%] z-0 top-[9px]">
                <img 
                  src={alexjamesimage} 
                  alt="Alex James Character" 
                  className="object-contain h-[653px]"
                />
              </div>

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

      <div className="fixed bottom-0 left-0 right-0 p-2 flex flex-col md:flex-row items-center justify-center gap-4 bg-transparent">
        <Button className="bg-white/20 text-white p-6 rounded-[50px] hover:bg-white/30 text-lg font-semibold w-full md:w-[300px] cursor-pointer">
          Back
        </Button>
        <Link to="/maindashboard">
        <Button className="bg-white text-black p-6 rounded-[50px] hover:bg-white/90 text-lg font-semibold w-full md:w-[300px] cursor-pointer">
          Finish Setup
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddSocialMediaPictureUpload;





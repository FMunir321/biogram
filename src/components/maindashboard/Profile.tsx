import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import characterImg from "/assets/aleximage.png";
import { useState } from "react";
import bground from "/assets/lightbg.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"shouts" | "media">("shouts");

  return (
    <div className="overflow-x-hidden">
      <div className="w-full max-w-[1400px] px-5 py-6 mx-auto">
        <div className="w-full max-w-[1400px] px-2 md:px-4 py-6 mx-auto bg-[#ddf0e7] border border-[#7ecfa7] rounded-2xl overflow-hidden">
          <div
            className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[32px] p-4 md:p-6 relative min-h-[500px] bg-cover bg-center flex flex-col md:flex-row justify-between w-full"
            style={{ backgroundImage: `url(${bground})` }}
          >
            {/* Left Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start py-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                <div className="text-center sm:text-left">
                  <h1 className="text-[25px] sm:text-[40px] lg:text-[64px] font-bold text-[#010101]">Alex James</h1>
                  <p className="text-[18px] md:text-[24px] lg:text-[32px] text-[#010101]">@Alexjames</p>
                </div>
              </div>

              {/* Centered Content */}
              <div className="flex-grow flex flex-col justify-center items-center text-center">
                <h2 className="text-[25px] sm:text-[40px] lg:text-[64px] font-bold text-black mb-2">
                  No shouts yet!
                </h2>
                <p className="text-[13px] md:text-[16px] text-black mb-6">
                  Shouts posted by Alex James will appear here
                </p>
              </div>

              {/* Footer Button */}
              <Link to="/profilemaindashboard">
                <Button className="bg-white hover:bg-gray-50 text-black font-medium rounded-full px-6 md:px-8 py-3 md:py-5 text-[36px] md:text-base cursor-pointer">
                  Create Your Profile
                </Button>
              </Link>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-between mt-6 md:mt-0">
              {/* Tabs */}
              <div className="bg-white p-2 rounded-full w-fit self-end">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("shouts")}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition ${activeTab === "shouts"
                      ? "bg-[#98e6c3] text-white"
                      : "bg-white text-gray-900"
                      }`}
                  >
                    Shouts
                  </button>
                  <button
                    onClick={() => setActiveTab("media")}
                    className={`px-4 py-1 rounded-full text-sm font-medium transition ${activeTab === "media"
                      ? "bg-[#98e6c3] text-white"
                      : "bg-white text-gray-900"
                      }`}
                  >
                    Media
                  </button>
                </div>
              </div>

              {/* Character Image */}
              <div className="mt-6 md:mt-auto">
                <img
                  src={characterImg}
                  alt="3D Character"
                  className="w-[160px] lg:w-[240px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

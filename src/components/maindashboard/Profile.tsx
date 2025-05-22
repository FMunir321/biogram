import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import characterImg from "../../assets/aleximage.png";
import { useState } from "react";
import bground from "../../assets/lightbg.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"shouts" | "media">("shouts");

  return (
    <div className="w-full max-w-[1400px] px-4 md:px-8 py-6 bg-[#ddf0e7] border-1 rounded-2xl mx-5 border-[#7ecfa7]">
      {/* Background image applied via inline style */}
      <div
        className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[32px] p-4 md:p-6 relative min-h-[500px] bg-cover bg-center flex flex-col md:flex-row justify-between"
        style={{ backgroundImage: `url(${bground})` }}
      >
        <div className="flex flex-col justify-between px-4 py-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h1 className="text-[64px] font-bold text-[#010101]">Alex James</h1>
              <p className="text-[32px] text-normal text-[#010101]">@Alexjames</p>
            </div>
          </div>

          {/* Content (Centered between header and footer) */}
          <div className="flex-grow flex flex-col justify-center items-center text-center">
            <h2 className="text-[40px] font-bold text-black mb-2">
              No shouts yet!
            </h2>
            <p className="text-[20px] text-black mb-6">
              Shouts posted by Alex James will appear here
            </p>
          </div>

          {/* Footer */}

          <Link to="/profilemaindashboard">
            <Button className="bg-white hover:bg-gray-50 text-black font-medium rounded-full px-6 md:px-8 py-3 md:py-5 text-[36px] md:text-base cursor-pointer">
              Create Your Profile
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-end w-fit">
          {/* Tabs */}
          <div className="bg-white p-2 rounded-full w-fit">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("shouts")}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === "shouts"
                    ? "bg-[#98e6c3] text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                Shouts
              </button>
              <button
                onClick={() => setActiveTab("media")}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === "media"
                    ? "bg-[#98e6c3] text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                Media
              </button>
            </div>
          </div>
          {/* Character Image */}
          <div className="bottom-0 right-0 z-0">
            <img
              src={characterImg}
              alt="3D Character"
              className="w-[160px] md:w-[240px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

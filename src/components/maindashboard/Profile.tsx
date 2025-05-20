import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import characterImg from "../../assets/aleximage.png";
import { useState } from "react";
import bground from "../../assets/lightbg.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'shouts' | 'media'>('shouts');

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-6">
      {/* Background image applied via inline style */}
      <div
        className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[32px] p-4 md:p-6 relative min-h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bground})` }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900">Alex James</h1>
            <p className="text-gray-600">@Alexjames</p>
          </div>

          {/* Tabs */}
          <div className="bg-white p-2 rounded-full w-fit">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('shouts')}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === 'shouts'
                    ? 'bg-[#98e6c3] text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                Shouts
              </button>
              <button
                onClick={() => setActiveTab('media')}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === 'media'
                    ? 'bg-[#98e6c3] text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                Media
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center mt-16 md:mt-32">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No shouts yet!</h2>
          <p className="text-gray-600 text-sm mb-6">
            Shouts posted by Alex James will appear here
          </p>
          <Link to="/profilemaindashboard">
            <Button className="bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base cursor-pointer">
              Create Your Profile
            </Button>
          </Link>
        </div>

        {/* Character Image */}
        <div className="absolute bottom-0 right-0 z-0">
          <img
            src={characterImg}
            alt="3D Character"
            className="w-[160px] md:w-[240px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

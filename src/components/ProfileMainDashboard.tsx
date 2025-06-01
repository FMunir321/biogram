import React from "react";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import alexjamesimage from "../../public/assets/aleximage.png";

const socialIcons = [
  { icon: <FaYoutube />, color: "text-red-500", name: "YouTube" },
  { icon: <FaTwitter />, color: "text-blue-400", name: "Twitter" },
  { icon: <FaTiktok />, color: "text-black", name: "TikTok" },
  { icon: <FaInstagram />, color: "text-pink-500", name: "Instagram" },
  { icon: <FaWhatsapp />, color: "text-green-500", name: "WhatsApp" },
];

const ProfileMainDashboard: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-screen p-4 lg:p-6 bg-white">
      {/* Left Card - Profile Section */}
      <div className="w-full lg:w-[50%]  flex-shrink-0">
        <div className="rounded-3xl border border-[#7ecfa7] bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] shadow-2xl w-full h-[870px] flex flex-col p-4 md:p-6">
          {/* Top Section: Name, Username, Tabs, Paragraphs, Image */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-0 md:p-4 pb-0">
            {/* Left: Info */}
            <div className="flex-1 flex flex-col items-start justify-start order-2 md:order-1">
              <h1 className="text-2xl md:text-3xl font-bold whitespace-nowrap">Alex James</h1>
              <p className="text-sm md:text-base text-gray-700">@Alexjames</p>
              
              <Tabs defaultValue="shots" className="w-full mb-4 mt-4">
                <TabsList className="flex gap-2 bg-gray-100 rounded-full p-1 w-fit mb-4">
                  <TabsTrigger
                    value="shots"
                    className="px-4 py-1 rounded-full text-sm data-[state=active]:bg-[#98e6c3] data-[state=active]:text-white"
                  >
                    Shots
                  </TabsTrigger>
                  <TabsTrigger
                    value="media"
                    className="px-4 py-1 rounded-full text-sm data-[state=active]:bg-[#98e6c3] data-[state=active]:text-white"
                  >
                    Media
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="shots" />
                <TabsContent value="media" />
              </Tabs>
              
              <div className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                <p>
                  Interact with the name, username, bio, and other profile elements on the left to open dynamic sidebars and edit them.
                </p>
                <p>
                  Interact with the name, username, bio, and other profile elements on the left to open dynamic sidebars and edit them.
                </p>
                <p>
                  Interact with the name, username, bio, and other profile elements on the left to open dynamic sidebars and edit them.
                </p>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="flex items-center justify-center md:justify-end order-1 md:order-2 w-full md:w-auto -mt-4 md:mt-0">
              <img 
                src={alexjamesimage} 
                alt="Alex James" 
                className="w-32 h-32 lg:w-auto lg:h-auto max-w-[160%] -mr-0 lg:-mr-[83px] drop-shadow-xl" 
              />
            </div>
          </div>
          
          {/* Bottom Section: Social Icons and Share Button */}
          <div className="flex flex-col items-center justify-center gap-4 mt-6 md:mt-8 px-0 md:px-4">
            <div className="flex justify-center gap-4 w-full mb-2">
              {socialIcons.map((s, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`text-2xl md:text-3xl ${s.color} hover:scale-110 transition`}
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <Button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white rounded-full shadow-lg hover:opacity-90 transition">
              Share profile
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section - Scrollable Templates */}
      <div className="flex-1 overflow-y-auto pr-0 lg:pr-2">
        <div className="flex flex-col gap-4 md:gap-6 pb-10">
          <h2 className="text-2xl font-bold sticky top-0 bg-white z-10 py-4 col-span-full">Templates</h2>
          
          {/* Template Card 1 */}
          <div className="rounded-3xl bg-black max-w-[380px] h-full p-4 md:p-6 text-white flex flex-col">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2 md:gap-0">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">Alex James</h1>
                <p className="text-gray-300 -mt-1 mb-2 text-sm md:text-base">@Alexjames</p>
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm md:text-base px-5 py-2 rounded-full font-semibold shadow-lg w-full md:w-auto">
                Share profile
              </button>
            </div>
            
            {/* Paragraphs */}
            <div className="space-y-2 mb-4 text-sm md:text-base">
              <p>
                Interact with the name, username, bio, and other profile elements on the left to open dynamic sidebars and edit them.
              </p>
              <p>
                Interact with the name, username, bio, and other profile elements on the left to open dynamic sidebars and edit them.
              </p>
            </div>
            
            {/* Social Icons + Image Row */}
            <div className="flex flex-col md:flex-row flex-1 w-full gap-4">
              {/* Social Buttons */}
              <div className="flex flex-col gap-3 flex-1">
                <a href="#" className="flex items-center gap-3 w-full p-3 rounded-full border-2 border-white text-white text-base font-medium transition hover:bg-white/10">
                  <span className="bg-blue-600 rounded-full p-1"><FaFacebook className="text-xl" /></span> Facebook
                </a>
                <a href="#" className="flex items-center gap-3 w-full p-3 rounded-full border-2 border-white text-white text-base font-medium transition hover:bg-white/10">
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full p-1"><FaInstagram className="text-xl" /></span> Instagram
                </a>
                <a href="#" className="flex items-center gap-3 w-full p-3 rounded-full border-2 border-white text-white text-base font-medium transition hover:bg-white/10">
                  <span className="bg-blue-400 rounded-full p-1"><FaTwitter className="text-xl" /></span> Twitter
                </a>
                <a href="#" className="flex items-center gap-3 w-full p-3 rounded-full border-2 border-white text-white text-base font-medium transition hover:bg-white/10">
                  <span className="bg-black rounded-full p-1"><FaTiktok className="text-xl" /></span> TikTok
                </a>
                <a href="#" className="flex items-center gap-3 w-full p-3 rounded-full border-2 border-white text-white text-base font-medium transition hover:bg-white/10">
                  <span className="bg-green-500 rounded-full p-1"><FaWhatsapp className="text-xl" /></span> Whatsapp
                </a>
              </div>
              
              {/* Image */}
              <div className="flex items-center justify-center md:justify-end">
                <img 
                  src={alexjamesimage} 
                  alt="Alex James" 
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 drop-shadow-xl" 
                />
              </div>
            </div>
            
            {/* Template Variants */}
            <div className="flex gap-2 mt-4 p-2 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500">
              {[1, 2, 3, 4].map((variant) => (
                <div
                  key={variant}
                  className="w-12 h-12 rounded-lg bg-black flex items-center justify-center cursor-pointer hover:opacity-90 transition"
                >
                  <img
                    src={alexjamesimage}
                    alt={`Template ${variant}`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Template Card 2 */}
          <div
            className="max-w-[380px] rounded-3xl border-2 border-pink-500 bg-[#4d2c0c] w-full h-full flex flex-col overflow-hidden"
            style={{
              backgroundImage: `url('/assets/flame-bg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '500px'
            }}
          >
            {/* Top Section: Name, Username, Tabs */}
            <div className="p-6 pb-0 flex flex-col gap-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">Alex James</h1>
              <p className="text-white/80 -mt-1 mb-2 text-sm md:text-base">@Alexjames</p>
              <div className="flex gap-2">
                <div className="flex gap-2 bg-white rounded-full p-1 w-fit">
                  <button className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-white font-semibold text-sm">Shots</button>
                  <button className="px-4 py-1 rounded-full text-gray-700 font-semibold text-sm">Media</button>
                </div>
              </div>
            </div>
            
            {/* Social Icons and Profile Image */}
            <div className="flex flex-1 flex-col md:flex-row items-end justify-between px-6 pt-4 gap-4">
              {/* Social Icons */}
              <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1 w-full md:w-auto justify-center md:justify-start">
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white text-2xl shadow-lg"><FaInstagram /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl shadow-lg"><FaFacebook /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 text-white text-2xl shadow-lg"><FaTwitter /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-2xl shadow-lg"><FaTiktok /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl shadow-lg"><FaWhatsapp /></a>
              </div>
              
              {/* Profile Image */}
              <div className="flex-1 flex items-end justify-center md:justify-end order-1 md:order-2">
                <img
                  src={alexjamesimage}
                  alt="Alex James"
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Share Button */}
            <div className="p-6 pt-0 md:pt-4 flex flex-col justify-end">
              <button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-white rounded-full shadow-lg hover:opacity-90 transition">
                Share profile
              </button>
            </div>
          </div>

          {/* Template Card 3 */}
          {/* <div
            className="relative rounded-3xl border-2 border-pink-500 bg-gradient-to-br from-[#7a3c0f] via-[#a83279] to-[#42275a] w-full h-full flex flex-col items-center"
            style={{ minHeight: '400px' }}
          >
            
            <div className="flex justify-center mt-8">
              <img
                src={alexjamesimage}
                alt="Alex James"
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
              />
            </div>
            
           
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">Alex James</h1>
              <p className="text-white/80 -mt-1 mb-2 text-sm md:text-base">@Alexjames</p>
            </div>
            
           
            <div className="flex gap-2 bg-white rounded-full p-1 w-fit mx-auto mb-6">
              <button className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-white font-semibold text-sm">Shots</button>
              <button className="px-4 py-1 rounded-full text-gray-700 font-semibold text-sm">Media</button>
            </div>
             
           
            <div className="flex justify-center gap-3 mb-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl shadow-lg"><FaFacebook /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 text-white text-xl shadow-lg"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white text-xl shadow-lg"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-xl shadow-lg"><FaTiktok /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white text-xl shadow-lg"><FaWhatsapp /></a>
            </div>
            
            <div className="w-full px-6 mt-auto mb-6">
              <button className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-500 text-white rounded-full shadow-lg hover:opacity-90 transition">
                Share profile
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileMainDashboard;
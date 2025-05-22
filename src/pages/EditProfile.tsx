import { useState, useRef } from "react";
import characterImg from "../assets/aleximage.png";
import CustomLinksTab from "../components/CustomLinksTab";
import bground from "../assets/lightbg.png";

const EditProfile = () => {
  const [isCustomLinksOpen, setIsCustomLinksOpen] = useState(false);
  const [uploadedImg, setUploadedImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sections = [
    {
      heading: "Link",
      title: "Custom Links",
      subtitle: "Link section",
      image: "/src/assets/Link.png",
      onClick: () => setIsCustomLinksOpen(true),
    },
    {
      heading: "Streaming",
      title: "Spotify",
      subtitle: "Music section",
      image: "/src/assets/Spotify.png",
    },
    {
      heading: "E commerce",
      title: "New Merch",
      subtitle: "Merch section",
      image: "/src/assets/Shopingbag.png",
    },
  ];
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImg(imageUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const imageToShow = uploadedImg || characterImg;

  return (
    <div className="w-full max-w-[1300px] mx-auto p-2">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div
          className="bg-white rounded-[32px] p-4"
          style={{
            backgroundImage: `url(${bground})`,
            backgroundSize: "cover",
          }}
        >
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-[24px] p-4">
            <div className="text-center">
              <div className="relative w-[120px] h-[120px] mx-auto mb-4">
                <img
                  src={imageToShow}
                  alt="Profile character"
                  className="w-full h-full object-cover rounded-full"
                />
                <button
                  onClick={handleUploadClick}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">+</span>
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
              <h1 className="text-xl font-bold mb-1">Alex James</h1>
              <p className="text-gray-600 text-sm">@Alexjames</p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {/* Content Section (Mobile) */}
            <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-[16px] p-4">
              <h3 className="font-semibold mb-3">Add Content</h3>
              <div className="space-y-3">
                {/* Custom Links */}
                <div
                  className="bg-white rounded-xl p-3 flex items-center justify-between cursor-pointer"
                  onClick={() => setIsCustomLinksOpen(true)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      🔗
                    </div>
                    <div>
                      <p className="font-medium">Custom Links</p>
                      <p className="text-sm text-gray-500">Link section</p>
                    </div>
                  </div>
                  <button className="text-2xl font-bold text-gray-500">
                    +
                  </button>
                </div>

                {/* Spotify */}
                <div className="bg-white rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <img
                        src="/src/assets/Spotify.png"
                        alt="Spotify"
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Spotify</p>
                      <p className="text-sm text-gray-500">Music section</p>
                    </div>
                  </div>
                  <button className="text-2xl font-bold text-gray-500">
                    +
                  </button>
                </div>

                {/* New Merch */}
                <div className="bg-white rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      🛍️
                    </div>
                    <div>
                      <p className="font-medium">New Merch</p>
                      <p className="text-sm text-gray-500">Merch section</p>
                    </div>
                  </div>
                  <button className="text-2xl font-bold text-gray-500">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div
        className="hidden md:block h-screen overflow-hidden rounded-[32px] p-6"
        style={{
          backgroundImage: `url(${bground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col">
          <div className="flex flex-row gap-20 w-full">
            {/* Left Side - Profile Image */}
            <div className="sticky top-6 flex-shrink-0 max-w-[300px] h-[550px] bg-[#dff3e9] border-2 rounded-[24px] border-[#7ecfa7]">
              <div className="relative w-full h-full bg-gradient-to-b from-[#e6f8f0] to-[#e6f8f0] rounded-[24px] p-6">
                <div>
                  <h1 className="text-2xl font-bold">Alex James</h1>
                  <p className="text-gray-600 text-sm">@Alexjames</p>
                </div>

                <img
                  src={imageToShow}
                  alt="Profile character"
                  className="w-full h-[400px] object-contain mt-4"
                />

                <button
                  onClick={handleUploadClick}
                  className="w-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-4 pb-2 rounded-full font-medium text-center cursor-pointer"
                >
                  Add Photo
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
            </div>

            {/* Right Side - Add Content */}
            <div className="flex-1 pb-6">
              <h2 className="text-xl font-semibold mb-4">Add Content</h2>
              <p className="text-gray-600 text-sm mb-6">
                Interact with the menu elements below. Let's first create
                profile elements on the left to open dynamic support page and
                set them.
              </p>

              <div className="flex flex-col space-y-4">
                {sections.map((section, index) => (
                  <div>
                    <h1>{section.heading}</h1>
                  <div
                    key={index}
                    className="w-full flex items-center justify-between bg-gradient-to-r from-[#98e6c3] to-[#4a725f] p-4 rounded-xl border shadow-sm cursor-pointer hover:bg-gray-50"
                    onClick={section.onClick}
                  >
                    
                    <div className="flex items-center gap-3">
                      <img
                        src={section.image}
                        alt={section.title}
                      />

                      <div>
                        <h3 className="font-medium text-white">
                          {section.title}
                        </h3>
                        <p className="text-sm text-white/90">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                    <button className="text-2xl font-bold text-white hover:text-gray-700">
                      +
                    </button>
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Links Tab */}
      <CustomLinksTab
        isOpen={isCustomLinksOpen}
        onClose={() => setIsCustomLinksOpen(false)}
      />
    </div>
  );
};

export default EditProfile;

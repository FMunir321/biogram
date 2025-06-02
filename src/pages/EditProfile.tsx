import { useState, useRef } from "react";
import characterImg from "../../public/assets/aleximage.png";
import CustomLinksTab from "../components/CustomLinksTab";
import bground from "../../public/assets/lightbg.png";
import Greaterthen from "../../public/assets/greaterthen.png";
import Thumbnail from "../../public/assets/edit-profile/thumbnail.svg";
import Call from "../../public/assets/edit-profile/call.svg";
import Map from "../../public/assets/edit-profile/map.svg";
import Mail from "../../public/assets/edit-profile/mail.svg";
import { Input } from "@/components/ui/input";
import * as Dialog from "@radix-ui/react-dialog";

const colors = [
  "#7ecfa7", "#548a6e", "#f87171", "#fbbf24", "#34d399",
  "#60a5fa", "#a78bfa", "#f472b6", "#c084fc", "#fb923c",
  "#4ade80", "#facc15", "#3b82f6"
];

const EditProfile = () => {
  const [isCustomLinksOpen, setIsCustomLinksOpen] = useState(false);
  const [uploadedImg, setUploadedImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isBioEnabled, setIsBioEnabled] = useState(false);
  const [featureLinkToggle, setFeatureLinkToggle] = useState(false);
  const [merchToggle, setMerchToggle] = useState(false);
  const [galleryToggle, setGalleryToggle] = useState(false);
  const [contactToggle, setContactToggle] = useState(false);
  const [shoutsToggle, setShoutsToggle] = useState(false);
  const [isBigThumbnailOpen, setIsBigThumbnailOpen] = useState(false);
  const [isaddMultiLink, setIsAddMultiLink] = useState(false);
  const [isaddMerch, setIsAddMerch] = useState(false);
  const [activeTab, setActiveTab] = useState('Solid');
  const [selectedColor, setSelectedColor] = useState("");
  const sections = [
    {
      heading: "Link",
      title: "Custom Links",
      subtitle: "Link section",
      image: "/assets/Link.png",
      onClick: () => setIsCustomLinksOpen(true),
    },
    {
      heading: "Streaming",
      title: "Spotify",
      subtitle: "Music section",
      image: "/assets/Spotify.png",
    },
    {
      heading: "E commerce",
      title: "New Merch",
      subtitle: "Merch section",
      image: "/assets/Shopingbag.png",
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
      <div className="hidden">
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
        className="rounded-[32px] p-6"
        style={{
          backgroundImage: `url(${bground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-5 2xl:gap-20 w-full">
          {/* Left Side - Profile Image */}
          {/* add this css below div for scroll bar  max-h-[calc(100vh-48px)] */}
          <div className="flex flex-col gap-4 md:w-[500px] h-auto md:h-full md:max-h-[calc(100vh-48px)] md:overflow-y-auto pr-2">

            {/* Add photo card */}
            <div className="bg-[#dff3e9]/60 border-1 rounded-[24px] border-[#7ecfa7]">
              <div className="rounded-[24px] p-6">
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
                  className="w-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-2 pb-2 rounded-full font-medium text-center cursor-pointer"
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

            {/* Bio card */}
            <div className="bg-[#dff3e9]/60 border-1 rounded-[24px] border-[#7ecfa7]">
              <div className="">
                <div className="flex items-center justify-between rounded-[24px] p-6">
                  <label

                    className="text-[32px] font-bold text-black"
                  >
                    Bio
                  </label>
                  <label

                    className="relative cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={isBioEnabled}
                      onChange={() => setIsBioEnabled(!isBioEnabled)}
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${isBioEnabled ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${isBioEnabled
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pb-6 px-6">
                  <p className="text-[16px] font-normal text-black">
                    Add Bio to your profile
                  </p>
                  <img
                    src={Greaterthen}
                    alt="greater than"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Featured Links card*/}
            <div className="bg-[#dff3e9]/60 border border-[#7ecfa7] rounded-[24px]">
              <div className="rounded-[24px] p-6">
                {/* Toggle Header */}

                <div className="flex items-center justify-between rounded-[24px]">
                  <label

                    className="text-[32px] font-bold text-black"
                  >
                    Featured Links
                  </label>
                  <label

                    className="relative cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={featureLinkToggle}
                      onChange={() => setFeatureLinkToggle(!featureLinkToggle)}
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${featureLinkToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${featureLinkToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>

                {/* Big Thumbnail Section */}
                <div className="m-2 py-6 px-4 rounded-lg flex flex-col w-full items-center justify-center bg-gradient-to-r from-[#7ecfa7] to-[#53886c]" onClick={() => setIsBigThumbnailOpen(true)}>
                  <img
                    src={Thumbnail}
                    alt="Big Thumbnail"
                    className="object-contain h-20 mb-2"
                  />
                  <p className="text-[16px] font-normal text-white">
                    Add Big Thumbnail link
                  </p>
                </div>

                {/* Small Thumbnail Grid */}
                <div className="flex flex-col md:flex-row w-full gap-4 m-2">
                  {[1, 2].map((_, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (idx === 0) {
                          setIsAddMultiLink(true);
                        }
                        else {
                          setIsAddMerch(true);
                        }
                      }}
                      className="flex-1 py-6 px-4 rounded-lg flex flex-col items-center justify-center bg-gradient-to-r from-[#7ecfa7] to-[#53886c]"
                    >
                      <img
                        src={Thumbnail}
                        alt={`Small Thumbnail ${idx + 1}`}
                        className="object-contain h-16 mb-2"
                      />
                      <p className="text-[16px] font-normal text-white text-center">
                        Add Small Thumbnail link
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleUploadClick}
                  className="w-full mx-2 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-2 pb-2 rounded-full font-medium text-center cursor-pointer"
                >
                  + Add No Thumbnail link
                </button>
              </div>
            </div>

            {/* Merch card */}
            <div className="bg-[#dff3e9]/60 border-1 rounded-[24px] border-[#7ecfa7]">
              <div className="">
                <div className="flex items-center justify-between rounded-[24px] p-6">
                  <label

                    className="text-[32px] font-bold text-black"
                  >
                    Merch (0 Items)
                  </label>
                  <label

                    className="relative cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={merchToggle}
                      onChange={() => setMerchToggle(!merchToggle)}
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${merchToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${merchToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between pb-6 px-6">
                  <p className="text-[16px] font-normal text-[#EA00FF]">
                    Manage Merch
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery card */}
            <div className="bg-[#dff3e9]/60 border border-[#7ecfa7] rounded-[24px]">
              <div className="rounded-[24px] p-6">
                {/* Toggle Header */}
                <div className="flex items-center justify-between rounded-[24px]">
                  <label

                    className="text-[32px] font-bold text-black"
                  >
                    Gallery
                  </label>
                  <label

                    className="relative cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={galleryToggle}
                      onChange={() => setGalleryToggle(!galleryToggle)}
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${galleryToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${galleryToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between mb-5">
                  <p className="text-[16px] font-normal text-black">
                    Add Bio to your profile
                  </p>
                </div>
                {/* Small Thumbnail Grid */}
                <div className="flex flex-col md:flex-row w-[50%] gap-4 m-2">
                  <div className="flex-1 py-6 px-4 rounded-lg flex flex-col items-center justify-center bg-gradient-to-r from-[#7ecfa7] to-[#53886c]">
                    <img
                      src={Thumbnail}
                      alt={`Small Thumbnail `}
                      className="object-contain h-16 mb-2"
                    />
                    <p className="text-[16px] font-normal text-white text-center">
                      Add Small Thumbnail link
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info card */}
            <div className="bg-[#dff3e9]/60 border border-[#7ecfa7] rounded-[24px]">
              <div className="rounded-[24px] p-6">
                {/* Toggle Header */}
                <div className="flex items-center justify-between rounded-[24px]">
                  <label

                    className="text-[32px] font-bold text-black"
                  >
                    Contact info
                  </label>
                  <label

                    className="relative cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={contactToggle}
                      onChange={() => setContactToggle(!contactToggle)}
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${contactToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${contactToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <div className="flex items-center justify-center w-full space-x-4">
                    <img
                      src={Call}
                      alt="Profile character"
                      className="object-contain" // Adjust size as needed
                    />
                    <Input
                      type="text"
                      placeholder=""
                      className="flex-1 bg-[#c2e2d2] px-2 py-4 text-[24px] font-medium !border-[#6fb793] rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                    />
                  </div>

                  <div className="flex items-center justify-center w-full space-x-4">
                    <img
                      src={Map}
                      alt="Profile character"
                      className="object-contain" // Adjust size as needed
                    />
                    <Input
                      type="text"
                      placeholder=""
                      className="flex-1 bg-[#c2e2d2] px-2 py-4 text-[24px] font-medium !border-[#6fb793] rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                    />
                  </div>

                  <div className="flex items-center justify-center w-full space-x-4">
                    <img
                      src={Mail}
                      alt="Profile character"
                      className="object-contain" // Adjust size as needed
                    />
                    <Input
                      type="text"
                      placeholder=""
                      className="flex-1 bg-[#c2e2d2] px-2 py-4 text-[24px] font-medium !border-[#6fb793] rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                    />
                  </div>

                  <button
                    // onClick={handleUploadClick}
                    className="w-full mx-2 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-2 pb-2 rounded-full font-medium text-center cursor-pointer"
                  >
                    + Add Contact Info
                  </button>
                </div>
              </div>
            </div>

            {/* Shouts/ Media */}
            <div className="bg-[#dff3e9]/60 border-1 rounded-[24px] border-[#7ecfa7]">
              <div className="">
                <div className="flex items-center justify-between rounded-[24px] p-6">
                  <label

                    className="text-[32px] font-bold text-black"
                  >
                    Shouts/ Media
                  </label>
                  <label

                    className="relative cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={shoutsToggle}
                      onChange={() => setShoutsToggle(!shoutsToggle)}
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${shoutsToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${shoutsToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <div className="flex flex-col items-center justify-between pb-6 px-6">
                  <h1 className="text-[40px] font-bold text-black">
                    No shouts yet!
                  </h1>
                  <p className="text-[11px] font-normal text-black">
                    Shouts posted by alex james will apperar here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Add Content */}
          <div className="flex-1 pb-6 h-auto md:max-h-[calc(100vh-48px)] md:overflow-y-auto">
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
                      <img src={section.image} alt={section.title} />

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

      {/* Custom Links Tab */}
      <CustomLinksTab
        isOpen={isCustomLinksOpen}
        onClose={() => setIsCustomLinksOpen(false)}
      />

      {/* Modals */}
      <Dialog.Root open={isBigThumbnailOpen} onOpenChange={setIsBigThumbnailOpen}>
        <Dialog.Portal >
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] p-6 shadow-lg focus:outline-none">
            {/* Cross Icon */}
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-2xl font-bold mb-4 text-white">
              Add Big Thumbnail link
            </Dialog.Title>
            {/* Modal body content here */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-white">Title</p>
                <Input
                  type="text"
                  placeholder="Enter title"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">URL</p>
                <Input
                  type="text"
                  placeholder="Enter URL"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Image (Optional)</p>
                <Input
                  type="text"
                  placeholder="Upload thumbnail"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p className="text-white">Background</p>

                  <div
                    className="p-[2px] rounded-full inline-block bg-white"

                  >
                    <div
                      className="inline-flex backdrop-blur-sm rounded-full p-1 w-full h-full"
                      style={{
                        backgroundClip: 'padding-box',
                      }}
                    >
                      <button
                        onClick={() => setActiveTab('Solid')}
                        className={`px-2 rounded-full  text-[20px] font-normal transition-all duration-200 ${activeTab === 'Solid'
                          ? 'bg-gradient-to-r from-[#ff6200] to-[#ff00ee] text-white'
                          : 'hover:bg-white/10'
                          }`}
                      >
                        Solid
                      </button>
                      <button
                        onClick={() => setActiveTab('Gradient')}
                        className={`px-2 rounded-full  text-[20px] font-normal transition-all duration-200 ${activeTab === 'Gradient'
                          ? 'bg-gradient-to-r from-[#ff6200] to-[#ff00ee] text-white'
                          : 'hover:bg-white/10'
                          }`}
                      >
                        Gradient
                      </button>
                    </div>

                  </div>
                </div>
                <div className="h-8">
                  {selectedColor ? (
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white"
                        style={{ backgroundColor: selectedColor }}
                        title={selectedColor}
                      ></div>
                      <span className="text-white text-sm">{selectedColor}</span>
                    </div>

                  ) : (
                    <div className="text-white">No color selected</div>
                  )}
                </div>
                <div className="bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] border-1 border-white rounded-lg p-2 shadow-lg">
                  <p className="text-white mb-1">Present Colors</p>
                  <div className="flex flex-wrap gap-2 ">
                    {colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className="w-8 h-8 rounded-full border-1 hover:border-white transition-colors duration-200"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></button>
                    ))}
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Preview</p>
                <Input
                  type="text"
                  placeholder="Your Title"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

            </div>
            <div className="mt-6">
              <button
                className="w-full bg-white text-[#202020] py-2 rounded-full font-medium text-center cursor-pointer"
                onClick={() => setIsBigThumbnailOpen(false)}
              >
                Add
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={isaddMultiLink} onOpenChange={setIsAddMultiLink}>
        <Dialog.Portal >
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] p-6 shadow-lg focus:outline-none">
            {/* Cross Icon */}
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-2xl font-bold mb-4 text-white">
              Add Multi link
            </Dialog.Title>
            {/* Modal body content here */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-white">Embed Link</p>
                <Input
                  type="text"
                  placeholder="Embed link"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Title</p>
                <Input
                  type="text"
                  placeholder="title"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Cover</p>
                <div className=" py-6 border shadow-lg border-white rounded-lg flex flex-col w-full items-center justify-center bg-gradient-to-r from-[#7ecfa7] to-[#53886c]">
                  <img
                    src={Thumbnail}
                    alt="Big Thumbnail"
                    className="object-contain h-20 mb-2"
                  />
                  <p className="text-[16px] font-normal text-white">
                    Upload thumbnail Photo
                  </p>
                  <p className="text-[12px] font-normal text-white text-center">Use a size that’s at least 500 x 500 pixels and 10 MB or less</p>
                </div>
              </div>

            </div>
            <div className="mt-6">
              <button
                className="w-full bg-white text-[#202020] py-2 rounded-full font-medium text-center cursor-pointer"
                onClick={() => setIsBigThumbnailOpen(false)}
              >
                Add
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={isaddMerch} onOpenChange={setIsAddMerch}>
        <Dialog.Portal >
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] p-6 shadow-lg focus:outline-none">
            {/* Cross Icon */}
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-2xl font-bold mb-4 text-white">
              Add Multi link
            </Dialog.Title>
            {/* Modal body content here */}
            <div className="flex flex-col gap-3">

              <div className="flex flex-col gap-1">
                <p className="text-white">Select Type</p>
                <select
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[16px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border text-white"
                >
                  <option value="" disabled selected>
                    Choose type
                  </option>
                  <option value="youtube">YouTube</option>
                  <option value="vimeo">Vimeo</option>
                  <option value="spotify">Spotify</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Embed Link</p>
                <Input
                  type="text"
                  placeholder="Embed link"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Title</p>
                <Input
                  type="text"
                  placeholder="title"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">$USD</p>
                <Input
                  type="text"
                  placeholder="Payment"
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Cover</p>
                <div className=" py-6 border shadow-lg border-white rounded-lg flex flex-col w-full items-center justify-center bg-gradient-to-r from-[#7ecfa7] to-[#53886c]">
                  <img
                    src={Thumbnail}
                    alt="Big Thumbnail"
                    className="object-contain h-20 mb-2"
                  />
                  <p className="text-[16px] font-normal text-white">
                    Upload thumbnail Photo
                  </p>
                  <p className="text-[12px] font-normal text-white text-center">Use a size that’s at least 500 x 500 pixels and 10 MB or less</p>
                </div>
              </div>

            </div>
            <div className="mt-6">
              <button
                className="w-full bg-white text-[#202020] py-2 rounded-full font-medium text-center cursor-pointer"
                onClick={() => setIsBigThumbnailOpen(false)}
              >
                Add
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>


  );
};

export default EditProfile;

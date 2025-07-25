/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import rightsideemojiimage from "../../public/assets/rightsidegoldenicon.png";
import { useState } from "react";
import AddSocialMediapopup from "../components/popup/AddSocialMediapopup";
import api from "@/service/api";
import "../components/EditProfile.css";
import { RxCross2 } from "react-icons/rx";
const iconMap: Record<string, string> = {
  whatsapp: whatsappimage,
  linkedin: linkedinimage,
  skype: skypeimage,
  facebook: facebookimage,
  instagram: instagramimage,
  twitter: twitterimage,
  tiktok: tiktokimage,
  applemusic: applemusicimage,
  soundcloud: soundcloudimage,
  spotify: spotifyimage,
};

type SocialLink = {
  _id: string;
  platform: string;
  url: string;
  icon: string;
};

type UploadedMedia = {
  id: string;
  url: string;
  isVideo: boolean;
};

const AddSocialMedia = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  // const [uploadedImageURLs, setUploadedImageURLs] = useState<
  //   { id: string; url: string }[]
  // >([]);
  const [uploadedMedia, setUploadedMedia] = useState<UploadedMedia[]>([]);

  const openPopup = (name: string, icon: string) => {
    setSelectedPlatform({ name, icon });
    setIsPopupOpen(true);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<{
    name: string;
    icon: string;
  }>({
    name: "",
    icon: "",
  });
  const [url, setUrl] = useState("");
  const [editingId, setEditingId] = useState<string>("");

  // Open Add
  // const openAdd = (p: { name: string; icon: string }) => {
  //   setSelectedPlatform(p);
  //   setUrl("");
  //   setIsEditing(false);
  //   setIsPopupOpen(true);
  // };

  const openEdit = (p: SocialLink) => {
    const platformKey = p.platform.toLowerCase();
    const resolvedIcon = iconMap[platformKey];

    setSelectedPlatform({ name: p.platform, icon: resolvedIcon });
    setUrl(p.url);
    setEditingId(p._id);
    setIsEditing(true);
    setIsPopupOpen(true);
  };

  // Handle Save
  const handleSave = async (platformName: string) => {
    try {
      const userId = localStorage.getItem("userId");
      const token = Cookies.get("token");

      if (!url || url.trim() === "") return console.error("URL is required.");

      const fixedPlatform = platformName.toLowerCase();
      const fixedUrl = url.startsWith("http") ? url : `https://${url}`;
      const urlPattern = /^https?:\/\/[\w.-]+\.[a-z]{2,}.*$/i;
      if (!urlPattern.test(fixedUrl))
        return console.error("Invalid URL format.");

      await api.post(
        "/api/social-links",
        { userId, platform: fixedPlatform, url: fixedUrl },
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );

      fetchLinks();
      setUrl("");
      setIsPopupOpen(false);
    } catch (error: any) {
      console.error("Error saving social link:", error?.message || error);
    }
  };

  // Handle Update
  const handleUpdate = async () => {
    try {
      const token = Cookies.get("token");

      if (!url || url.trim() === "") return console.error("URL is required.");

      const fixedUrl = url.startsWith("http") ? url : `https://${url}`;
      const urlPattern = /^https?:\/\/[\w.-]+\.[a-z]{2,}.*$/i;
      if (!urlPattern.test(fixedUrl))
        return console.error("Invalid URL format.");

      await api.put(
        `/api/social-links/${editingId}`,
        { url: fixedUrl },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      fetchLinks();
      setIsPopupOpen(false);
      setUrl("");
    } catch (error: any) {
      console.error("Error updating social link:", error?.message || error);
    }
  };

  //fetchLinkes
  const fetchLinks = async () => {
    const userId = localStorage.getItem("userId");
    const token = Cookies.get("token");

    try {
      const response = await api.get(`/api/social-links/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          userId: userId,
        },
      });

      setLinks(response.data);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    const savedFullName = localStorage.getItem("fullName");
    const savedUsername = localStorage.getItem("username");
    if (savedFullName) setFullName(savedFullName);
    if (savedUsername) setUsername(savedUsername);
  }, []);

  //handleDelete
  const handleDelete = async (id: string) => {
    try {
      const token = Cookies.get("token");

      if (!id) return console.error("No ID provided for deletion.");

      await api.delete(`/api/social-links/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      fetchLinks();
      setIsPopupOpen(false);
    } catch (error: any) {
      console.error("Error deleting social link:", error?.message || error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  // postshout
  const fetchShouts = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) return;

      const res = await api.get(`/api/shouts`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const shouts = res.data?.shouts || [];

      const media = shouts.map((shout: any) => {
        let url = shout.videoUrl || "";

        // Agar relative URL hai to full path banao
        if (!url.startsWith("http")) {
          url = `http://3.111.146.115:5000${url}`;
        }

        // Agar isMedia false hai (image), aur path videos ka hai, to fix karo
        if (!shout.isMedia && url.includes("/videos/")) {
          url = url.replace("/videos/", "/images/");
        }

        return {
          id: shout._id,
          url,
          isVideo: shout.isMedia, // true = video, false = image
        };
      });

      setUploadedMedia(media);
    } catch (err) {
      console.error("Failed to fetch shouts:", err);
    }
  };

  useEffect(() => {
    fetchShouts();
  }, []);

  // ✅ POST image/video
  const postShout = async (
    file: File,
    isMedia: boolean = false
  ): Promise<any> => {
    try {
      const token = Cookies.get("token");
      if (!token) return;

      const formData = new FormData();
      formData.append("isMedia", String(isMedia)); // false=image, true=video
      formData.append("file", file);

      const response = await api.post("/api/shouts/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error posting shout:", error);
      return null;
    }
  };

  // Upload Image
  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const posted = await postShout(file, false); // false = image
        if (posted) await fetchShouts();
      }
    };
    input.click();
  };

  // Upload Video
  const handleVideoUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";

    input.onchange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const posted = await postShout(file, true); // true = video
        if (posted) await fetchShouts();
      }
    };
    input.click();
  };

  // Delete Shout
  const deleteShout = async (id: string) => {
    try {
      const token = Cookies.get("token");
      if (!token) return;

      await api.delete(`/api/shouts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      await fetchShouts();
    } catch (error) {
      console.error("Failed to delete shout:", error);
    }
  };

  const [activeTab, setActiveTab] = useState<"shots" | "media">("shots");

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
        <div className="border border-gray-200 rounded-xl p-6 mb-6 bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-semibold text-white">Platform</h1>
            <div className=" hidden gap-4">
              <button className="bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] text-white px-4 py-1.5 rounded-md hover:bg-blue-600 transition">
                Edit All
              </button>
              <button className="bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition">
                Delete All
              </button>
            </div>
          </div>
          <hr className="mb-4 border-gray-300" />

          {links.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-3"
            >
              <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] shadow-md  p-4 border border-gray-200 w-full ">
                <div>
                  <h1 className="text-white text-3xl font-semibold text-800 mb-2">
                    {item.platform}
                  </h1>
                </div>

                <hr className="mb-4 border-gray-300" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <p className="text-gray-700 break-all">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      {item.url}
                    </a>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button
                      onClick={() => openEdit(item)}
                      className="flex items-center justify-center gap-1 bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] text-white px-4 py-2 rounded-md hover:opacity-90"
                    >
                      <FaRegEdit /> Edit
                    </button>

                    <button
                      className="flex items-center justify-center gap-1 bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdDelete />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Social Networks Card */}
          <Card
            className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
            }}
          >
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-[18px] md:text-[32px] font-semibold text-white">
                Social Networks
              </h2>
              <img src={Dropdown} alt="Dropdown" className="object-contain" />
            </div>
            <div className="flex gap-2 flex-wrap">
              <img
                src={facebookimage}
                alt="Facebook"
                className="w-[40px] h-[40px] cursor-pointer"
                onClick={() => openPopup("Facebook", facebookimage)}
              />
              <img
                src={instagramimage}
                alt="Instagram"
                className="w-[40px] h-[40px] cursor-pointer"
                onClick={() => openPopup("Instagram", instagramimage)}
              />
              <img
                src={twitterimage}
                alt="Twitter"
                className="w-[40px] h-[40px] cursor-pointer"
                onClick={() => openPopup("Twitter", twitterimage)}
              />
              <img
                src={tiktokimage}
                alt="TikTok"
                className="w-[40px] h-[40px] cursor-pointer"
                onClick={() => openPopup("TikTok", tiktokimage)}
              />
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
                  onClick={() => openPopup("WhatsApp", whatsappimage)}
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={linkedinimage}
                  alt="LinkedIn"
                  className="w-full h-full"
                  onClick={() => openPopup("Linkedin", linkedinimage)}
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={skypeimage}
                  alt="Skype"
                  className="w-full h-full"
                  onClick={() => openPopup("Skype", skypeimage)}
                />
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
                  onClick={() => openPopup("Music", applemusicimage)}
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={soundcloudimage}
                  alt="Soundcloud"
                  className="w-full h-full"
                  onClick={() => openPopup("SoundCloud", soundcloudimage)}
                />
              </div>
              <div className="rounded-full flex items-center justify-center cursor-pointer w-[40px] h-[40px]">
                <img
                  src={spotifyimage}
                  alt="Spotify"
                  className="w-full h-full"
                  onClick={() => openPopup("Spotify", spotifyimage)}
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
        <Link to="/add-social-media-upload-picture">
          <Button
            className="w-full mt-4 md:mt-6 bg-white text-black text-[18px] md:text[24px] md:text-[36px] py-10 rounded-[50px] hover:bg-white hover:text-black cursor-pointer"
            // onClick={() => setIsPopupOpen(true)}
          >
            Continue
          </Button>
        </Link>
        {/* Popup Component */}
        <AddSocialMediapopup
          icon={selectedPlatform.icon}
          platformName={selectedPlatform.name}
          isOpen={isPopupOpen}
          isEditing={isEditing}
          url={url}
          setUrl={setUrl}
          onClose={() => setIsPopupOpen(false)}
          onSubmit={() =>
            isEditing ? handleUpdate() : handleSave(selectedPlatform.name)
          }
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
                  className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-1 w-full h-full "
                  style={{ backgroundClip: "padding-box" }}
                >
                  <button
                    onClick={() => setActiveTab("shots")}
                    className={`px-4 md:px-6 py-3 rounded-full text-white text-[20px] font-normal ${
                      activeTab === "shots"
                        ? "bg-gradient-to-r from-[#7ECFA7] to-[#53886C]"
                        : "hover:bg-white/10"
                    }`}
                  >
                    Shots
                  </button>
                  <button
                    onClick={() => setActiveTab("media")}
                    className={`px-4 md:px-6 py-3 rounded-full text-white text-[20px] font-normal ${
                      activeTab === "media"
                        ? "bg-gradient-to-r from-[#7ECFA7] to-[#53886C]"
                        : "hover:bg-white/10"
                    }`}
                  >
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
                    {fullName}
                  </h2>
                  <p className="text-lg text-white/90">@{username}</p>
                </div>
                {/* flex flex-col gap-4 mb-6 w-full  */}

                {/* <div className="flex flex-col gap-4 mb-6 w-full   space-y-4 max-w-[242px] h-[600px]   scrollbar-hide    overflow-y-auto">
                  {uploadedImageURLs.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl h-[226px] flex items-center justify-center relative"
                    >
                      <RxCross2
                        className="absolute top-2 right-2 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer hover:bg-gray-300 transition"
                        onClick={() => deleteShout(item.id)}
                      />
                      <img
                        src={item.url}
                        alt={`Shout ${index}`}
                        className="w-[242px] h-[226px] rounded-2xl object-cover"
                      />
                    </div>
                  ))}
                  <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-4 h-[200px] w-full flex items-center justify-center">
                    <div
                      className="flex flex-col items-center gap-4 cursor-pointer"
                      onClick={handleCardClick}
                    >
                      <img
                        src={rightsideemojiimage}
                        alt="Right Side Emoji"
                        className="w-[88px] h-[88px]"
                      />
                      <p className="text-white text-lg">Upload shouts</p>
                    </div>
                  </div>
                </div> */}
                {activeTab === "shots" ? (
                  <div className="  flex flex-col gap-4 mb-6 w-full       space-y-4 max-w-[242px] h-[600px] overflow-y-auto scrollbar-hide">
                    {uploadedMedia
                      .filter((item) => !item.isVideo)
                      .map((item, index) => (
                        <div
                          key={item.id}
                          className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl h-[226px] flex items-center justify-center relative"
                        >
                          <RxCross2
                            className="absolute top-2 right-2 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer hover:bg-gray-300 transition"
                            onClick={() => deleteShout(item.id)}
                          />
                          <img
                            src={item.url}
                            alt={`Shout ${index}`}
                            className="w-[242px] h-[226px] rounded-2xl object-cover"
                          />
                        </div>
                      ))}
                    <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                      <div
                        className="flex flex-col items-center gap-4 cursor-pointer"
                        onClick={handleVideoUpload}
                      >
                        <img
                          src={rightsideemojiimage}
                          alt="Right Side Emoji"
                          className="w-[88px] h-[88px]"
                        />
                        <p className="text-white text-lg">Upload shouts</p>
                      </div>
                    </div>
                    {/* 
                      <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
                        <img
                          src={alexjamesimage}
                          alt="Alex James Character"
                          className="h-[100%]"
                        />
                      </div> */}

                    {/* Desktop Bottom Card - Below character image */}
                    {/* <div className="px-2 mt-[50px]">
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
                      </div> */}
                  </div>
                ) : (
                  <div className="  flex flex-col gap-4 mb-6 w-full       space-y-4 max-w-[242px] h-[600px] overflow-y-auto scrollbar-hide">
                    {uploadedMedia
                      .filter((item) => item.isVideo)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl h-[226px] flex items-center justify-center relative"
                        >
                          <RxCross2
                            className="absolute top-2 right-2 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer hover:bg-gray-300 transition"
                            onClick={() => deleteShout(item.id)}
                          />
                          <video
                            src={item.url}
                            controls
                            className="w-[242px] h-[226px] rounded-2xl object-cover"
                          />
                        </div>
                      ))}

                    <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                      <div
                        className="flex flex-col items-center gap-4 cursor-pointer"
                        onClick={handleVideoUpload}
                      >
                        <img
                          src={rightsideemojiimage}
                          alt="Right Side Emoji"
                          className="w-[88px] h-[88px]"
                        />
                        <p className="text-white text-lg">Upload Media</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="w-full flex justify-center">
                  <img
                    src={alexjamesimage}
                    alt="Alex James Character"
                    className="h-[300px] object-contain"
                  />
                </div>
              </div>

              {/* <div className="w-full mb-6">
                  <div className="bg-[#FFFFFF40] rounded-2xl p-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-1">
                      No shouts yet!
                    </h3>
                    <p className="text-white/90 text-xs">
                      Shouts posted by alex james will appear here
                    </p>
                  </div>
                </div> */}

              {/* Desktop Layout - Hidden on sm, visible on md and up */}
              <div className="hidden md:block relative">
                <div className="relative z-10">
                  <h2 className="text-5xl font-bold text-white mb-1">
                    Full Name
                  </h2>
                  <p className="text-xl text-white/90 mb-6">@username</p>

                  {activeTab === "shots" ? (
                    <div className="space-y-4 max-w-[242px] h-[600px] overflow-y-auto scrollbar-hide">
                      {uploadedMedia
                        .filter((item) => !item.isVideo)
                        .map((item, index) => (
                          <div
                            key={item.id}
                            className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl h-[226px] flex items-center justify-center relative"
                          >
                            <RxCross2
                              className="absolute top-2 right-2 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer hover:bg-gray-300 transition"
                              onClick={() => deleteShout(item.id)}
                            />
                            <img
                              src={item.url}
                              alt={`Shout ${index}`}
                              className="w-[242px] h-[226px] rounded-2xl object-cover"
                            />
                          </div>
                        ))}

                      <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                        <div
                          className="flex flex-col items-center gap-4 cursor-pointer"
                          onClick={handleImageUpload}
                        >
                          <img
                            src={rightsideemojiimage}
                            alt="Right Side Emoji"
                            className="w-[88px] h-[88px]"
                          />
                          <p className="text-white text-lg">Upload Shouts</p>
                        </div>
                      </div>

                      <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
                        <img
                          src={alexjamesimage}
                          alt="Alex James Character"
                          className="h-[100%]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 max-w-[242px] h-[600px] overflow-y-auto scrollbar-hide">
                      {uploadedMedia
                        .filter((item) => item.isVideo)
                        .map((item) => (
                          <div
                            key={item.id}
                            className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl h-[226px] flex items-center justify-center relative"
                          >
                            <RxCross2
                              className="absolute top-2 right-2 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer hover:bg-gray-300 transition"
                              onClick={() => deleteShout(item.id)}
                            />
                            <video
                              src={item.url}
                              controls
                              className="w-[242px] h-[226px] rounded-2xl object-cover"
                            />
                          </div>
                        ))}

                      <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex items-center justify-center">
                        <div
                          className="flex flex-col items-center gap-4 cursor-pointer"
                          onClick={handleVideoUpload}
                        >
                          <img
                            src={rightsideemojiimage}
                            alt="Right Side Emoji"
                            className="w-[88px] h-[88px]"
                          />
                          <p className="text-white text-lg">Upload Media</p>
                        </div>
                      </div>

                      <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
                        <img
                          src={alexjamesimage}
                          alt="Alex James Character"
                          className="h-[100%]"
                        />
                      </div>
                    </div>
                  )}
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

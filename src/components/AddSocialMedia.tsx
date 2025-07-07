/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

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

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import AddSocialMediapopup from "../components/popup/AddSocialMediapopup";
import api from "@/service/api";

type SocialLink = {
  _id: string;
  platform: string;
  url: string;
};

const AddSocialMedia = () => {
  /* ─────────────────────────────  State  ──────────────────────────── */
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const [selectedPlatform, setSelectedPlatform] = useState({
    name: "",
    icon: "",
  });

  /* ─────────────────────────  Helpers  ────────────────────────────── */
  const openPopup = (name: string, icon: string) => {
    setSelectedPlatform({ name, icon });
    setIsPopupOpen(true);
  };

  const fetchLinks = async () => {
    const userId = localStorage.getItem("userId");
    const token = Cookies.get("token");

    try {
      const { data } = await api.get(
        `http://localhost:5000/api/social-links/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLinks(data);
    } catch (err) {
      console.error("Error fetching links:", err);
    }
  };

  const handleDelete = async (id: string) => {
    const token = Cookies.get("token");
    try {
      await api.delete(`/api/social-links/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLinks((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting link:", err);
    }
  };

  /* ─────────────────────────  Lifecycle  ─────────────────────────── */
  useEffect(() => {
    fetchLinks();
  }, []);

  useEffect(() => {
    setFullName(localStorage.getItem("fullName") || "");
    setUsername(localStorage.getItem("username") || "");
  }, []);

  /* ─────────────────────────  UI  ─────────────────────────────────── */
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(to_bottom_right,#98e6c3,#4a725f)] p-4 md:p-6 flex flex-col lg:flex-row items-center justify-center gap-2">
      {/* ───────────────────── Left Pane ───────────────────── */}
      <div className="w-full lg:w-1/2 p-2">
        {/* Headline */}
        <div className="mb-8">
          <h1 className="text-[25px] sm:text-[40px] lg:text-[64px] font-semibold text-white leading-tight">
            <span className="block">Add your social</span>
            <span className="block">media</span>
          </h1>
          <p className="text-[16px] md:text-[24px] text-white">
            Connect your online presence in one place
          </p>
        </div>

        {/* Search bar */}
        <div className="flex gap-2 w-full p-2 py-5 mb-8 rounded-full bg-white text-black text-[20px] font-medium">
          <Input
            type="text"
            placeholder="Search Platforms"
            className="text-[20px] font-medium border-0 focus:ring-0 outline-none shadow-none"
          />
          <Button className="rounded-full bg-[linear-gradient(to_right,#98e6c3,#4a725f)] text-white md:px-8 md:py-5">
            Search
          </Button>
        </div>

        {/* Existing links list */}
        <div className="border border-gray-200 rounded-xl p-6 mb-6 bg-[linear-gradient(to_bottom_right,#98e6c3,#4a725f)] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-semibold text-white">Platform</h1>
          </div>
          <hr className="mb-4 border-gray-300" />

          {links.map((item) => (
            <div key={item._id} className="flex items-center justify-between mb-3">
              <div className="bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] shadow-md p-4 border border-gray-200 w-full">
                <h1 className="text-white text-3xl font-semibold mb-2">
                  {item.platform}
                </h1>

                <hr className="mb-4 border-gray-300" />
                <div className="flex justify-between gap-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-blue-300 break-all"
                  >
                    {item.url}
                  </a>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-1 bg-[linear-gradient(to_bottom_right,#98e6c3,#4a725f)] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                      <FaRegEdit />
                      Edit
                    </button>
                    <button
                      className="flex items-center gap-1 bg-[linear-gradient(to_bottom_right,#98e6c3,#4a725f)] text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
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

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Social Networks */}
          <Card className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-[18px] md:text-[32px] font-semibold text-white">
                Social Networks
              </h2>
              <img src={Dropdown} alt="Dropdown" className="object-contain" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {[facebookimage, instagramimage, twitterimage, tiktokimage].map(
                (img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="platform"
                    className="w-[40px] h-[40px] cursor-pointer"
                    onClick={() => openPopup("platform", img)}
                  />
                )
              )}
            </div>
          </Card>

          {/* Business */}
          <Card className="px-4 bg-[#FFFFFF40] backdrop-blur-xl rounded-[20px] border-none w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[18px] md:text-[32px] font-semibold text-white">
                Business
              </h2>
              <img src={Dropdown} alt="Dropdown" className="object-contain" />
            </div>
            <div className="flex gap-1">
              {[whatsappimage, linkedinimage, skypeimage].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="platform"
                  className="w-[40px] h-[40px] cursor-pointer"
                  onClick={() => openPopup("platform", img)}
                />
              ))}
            </div>
          </Card>

          {/* Music */}
          <Card className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[18px] md:text-[32px] font-semibold text-white">
                Music
              </h2>
              <img src={Dropdown} alt="Dropdown" className="object-contain" />
            </div>
            <div className="flex gap-1">
              {[applemusicimage, soundcloudimage, spotifyimage].map(
                (img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="platform"
                    className="w-[40px] h-[40px] cursor-pointer"
                    onClick={() => openPopup("platform", img)}
                  />
                )
              )}
            </div>
          </Card>

          {/* Empty layout cards */}
          <Card className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[100px]" />
          <Card className="px-4 bg-[#FFFFFF40] backdrop-blur-sm rounded-[20px] border-none w-full h-[100px]" />
        </div>

        {/* Continue button */}
        <Link to="/add-social-media-upload-picture">
          <Button className="w-full mt-6 bg-white text-black text-[24px] py-8 rounded-[50px] hover:bg-white">
            Continue
          </Button>
        </Link>

        {/* Popup */}
        {isPopupOpen && (
          <AddSocialMediapopup
            icon={selectedPlatform.icon}
            platformName={selectedPlatform.name}
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
      </div>

      {/* ───────────────────── Right Preview Pane ───────────────────── */}
      <div
        className="p-[2px] rounded-[32px] w-full lg:w-[800px]"
        style={{
          background:
            "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div
          className="p-4 rounded-[30px] bg-[linear-gradient(to_bottom_right,#98e6c3,#4a725f)]"
          style={{
            boxShadow: "0 0 20px #0004",
            backdropFilter: "blur(21.2px)",
            minHeight: 857,
          }}
        >
          <div className="bg-[linear-gradient(to_bottom_right,#98e6c3,#4a725f)] rounded-[32px] h-full relative overflow-hidden">
            {/* Tabs */}
            <div className="flex justify-end p-4">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-white to-transparent">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 flex">
                  <button
                    className="px-6 py-3 rounded-full text-white text-[20px] font-normal"
                    style={{
                      background:
                        "linear-gradient(97.29deg, #7ECFA7 13.65%, #53886C 90.87%)",
                    }}
                  >
                    Shots
                  </button>
                  <button className="px-6 py-2 text-white text-[20px] font-normal hover:bg-white/10">
                    Media
                  </button>
                </div>
              </div>
            </div>

            {/* Name & username */}
            <div className="p-4">
              <h2 className="text-5xl font-bold text-white mb-1">{fullName}</h2>
              <p className="text-xl text-white/90 mb-6">@{username}</p>
            </div>

            {/* Placeholder / character */}
            <div className="relative px-4">
              <div className="space-y-4 max-w-[242px]">
                {[1, 2].map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF40] backdrop-blur-sm rounded-2xl p-6 h-[226px] flex flex-col items-center justify-center"
                  >
                    <img
                      src={rightsideemojiimage}
                      alt="emoji"
                      className="w-[88px] h-[88px] mb-4"
                    />
                    <p className="text-white text-lg">No shouts</p>
                  </div>
                ))}
              </div>

              <img
                src={alexjamesimage}
                alt="Alex James"
                className="absolute right-[-20px] bottom-[10px] h-[80%] object-contain"
              />

              <div className="mt-[50px]">
                <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-white to-transparent">
                  <div className="rounded-xl bg-[#699683] text-white px-4 py-6 text-center">
                    <h3 className="text-[40px] font-bold mb-1">
                      No shouts yet!
                    </h3>
                    <p className="text-white/90 text-[20px]">
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
  );
};

export default AddSocialMedia;

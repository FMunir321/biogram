/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../components/ui/button";
import alexjamesimage from "../../public/assets/aleximage.png";
import rightsideemojiimage from "../../public/assets/rightsidegoldenicon.png";
import camerapicture from "../../public/assets/camerapic.png";
import { useNavigate } from "react-router-dom";
import { useState, useRef, ChangeEvent } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import api from "@/service/api";
import { RxCross2 } from "react-icons/rx";

type UploadedMedia = {
  id: string;
  url: string;
  isVideo: boolean;
};

const AddSocialMediaPictureUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [activeTab, setActiveTab] = useState<"shots" | "media">("shots");
  const [uploadedMedia, setUploadedMedia] = useState<UploadedMedia[]>([]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setError(null);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
      setFile(selectedFile);
    } else {
      alert("Please select a valid image file");
    }
  };

  const handleFinishSetup = async () => {
    if (!file) {
      alert("Please select an image before finishing setup.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", file);

    setUploading(true);
    try {
      const token = Cookies.get("token");
      await api.patch("/api/user/profile-image", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/search");
    } catch (err: any) {
      setError(
        err.response?.data?.message || err.message || "Image upload failed"
      );
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    const savedFullName = localStorage.getItem("fullName");
    const savedUsername = localStorage.getItem("username");
    if (savedFullName) setFullName(savedFullName);
    if (savedUsername) setUsername(savedUsername);
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

  return (
    <div className="min-h-screen w-full bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] p-4 md:p-6 items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-[960px] min-h-[850px] rounded-[32px] p-8 flex flex-col justify-between items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-left">
              Welcome
              <br />
              Alex!
            </h1>

            <p className="text-base md:text-xl text-white mb-2 text-left">
              Let's personalize your linkme profile
            </p>
            <p className="text-base md:text-xl text-white font-bold mb-8 text-left">
              Add your profile Picture
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="w-[200px] h-[200px] bg-white/30 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={preview || camerapicture}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <Button
                onClick={handleImageClick}
                className="bg-white text-black py-9 px-8 rounded-[50px] hover:bg-white/90 text-[24px] font-medium"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload Picture"}
              </Button>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
        </div>

        {/* Right Section */}
        <div
          className="p-[1px] rounded-[32px] w-full lg:w-[800px]"
          style={{
            background:
              "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
          }}
        >
          <div
            className="p-1 rounded-[30px] bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)]"
            style={{
              boxShadow: "0px 0px 20.2px 0px #00000040",
              backdropFilter: "blur(21.2px)",
              minHeight: "857px",
            }}
          >
            <div className="bg-[linear-gradient(to_bottom_right,_#98e6c3,_#4a725f)] rounded-[32px] md:h-[857px] relative overflow-hidden">
              {/* Tabs */}
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

              {/* Content */}
              <div className="p-4 relative">
                {/* Mobile */}
                <div className="flex flex-col md:hidden w-full">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-1">
                      {fullName}
                    </h2>
                    <p className="text-lg text-white/90">@{username}</p>
                  </div>

                  <div className="flex flex-col gap-4 mb-6 w-full">
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
                            <p className="text-white text-lg">Upload shouts</p>
                          </div>
                        </div>

                        {/* <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
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
                            onClick={handleImageUpload}
                          >
                            <img
                              src={rightsideemojiimage}
                              alt="Right Side Emoji"
                              className="w-[88px] h-[88px]"
                            />
                            <p className="text-white text-lg">Upload Media</p>
                          </div>
                        </div>

                        {/* <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
                          <img
                            src={alexjamesimage}
                            alt="Alex James Character"
                            className="h-[100%]"
                          />
                        </div> */}
                      </div>
                    )}
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

                  <div className="w-full flex justify-center">
                    <img
                      src={alexjamesimage}
                      alt="Alex James Character"
                      className="h-[300px] object-contain"
                    />
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:block relative">
                  <div className="relative z-10">
                    <h2 className="text-5xl font-bold text-white mb-1">
                      {fullName}
                    </h2>
                    <p className="text-xl text-white/90 mb-6">@{username}</p>

                    {activeTab === "shots" ? (
                      <div className="space-y-10 max-w-[242px] h-[600px] overflow-y-auto scrollbar-hide">
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

                        {/* <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
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

                        {/* <div className="absolute right-[-20px] bottom-[10px] h-[80%] z-0 top-[9px]">
                          <img
                            src={alexjamesimage}
                            alt="Alex James Character"
                            className="h-[100%]"
                          />
                        </div> */}
                      </div>
                    )}
                  </div>

                  <div className="absolute right-[-70px]  bottom-[10px] h-[80%] z-0 top-[9px]">
                    <img
                      src={alexjamesimage}
                      alt="Alex James Character"
                      className="h-[100%]"
                    />
                  </div>

                  <div className="px-2 mt-[50px]">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="static mt-5 bottom-0 left-0 right-0 p-2 flex flex-col md:flex-row items-center justify-center gap-4 bg-transparent">
        <Button className="bg-[#aaceba] text-white p-6 rounded-[50px] hover:bg-white/30 text-lg font-semibold w-auto lg:w-[500px] cursor-pointer">
          Back
        </Button>
        <Button
          onClick={handleFinishSetup}
          className="bg-white text-black p-6 rounded-[50px] hover:bg-white/90 text-lg font-semibold w-auto lg:w-[500px] cursor-pointer"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Finish Setup"}
        </Button>
      </div>
    </div>
  );
};

export default AddSocialMediaPictureUpload;

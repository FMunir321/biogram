import group from "../../../public/assets/boys333.png";
import biogram from "../../../public/Biogram.png";
import image from "../../../public/assets/Earth.png";
import { useState } from "react";
// import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import api from "@/service/api";
import bground from "../../../public/assets/lightbg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type UserData = {
  fullName: string;
  username: string;
  profileImage: string;
};
// type ShoutType = {
//   _id: string;
//   content?: string;
//   image?: string;
//   videoUrl?: string;
//   isMedia: boolean;
//   createdAt: string;
// };
interface Shout {
  _id: string;
  mediaUrl?: string;
  userId?: string;
  videoUrl?: string;
  createdAt?: string;
  text?: string;
  isMedia: boolean;
  image?: string; // 👈 Add this
  content?: string; // 👈 Add this
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState("shouts");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [shouts, setShouts] = useState<Shout[]>([]);
  const [mediaShouts, setMediaShouts] = useState<Shout[]>([]);
  const textShouts = shouts.filter((item) => !item.isMedia);
  const [loadingShouts, setLoadingShouts] = useState(true);
  const [loadingMedia, setLoadingMedia] = useState(true);

  // const [newText, setNewText] = useState("");
  // const [newMedia, setNewMedia] = useState<File | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("token");
        const userId = localStorage.getItem("userId");

        const response = await api.get(`/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  //<<<<<<______________________________________________>>>>>>>

  const fetchShouts = async () => {
    setLoadingShouts(true); // Start loading
    try {
      const token = Cookies.get("token");
      const res = await api.get(`/api/shouts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const onlyMedia = res.data.shouts?.filter(
        (shout: Shout) => shout.isMedia === false
      );
      console.log("Filtered shouts", onlyMedia);
      setShouts(onlyMedia || []);
    } catch (error) {
      console.error("Error fetching shouts:", error);
    } finally {
      setLoadingShouts(false);
    }
  };
  const fetchMedia = async () => {
    setLoadingMedia(true);
    try {
      const token = Cookies.get("token");
      const res = await api.get(`/api/shouts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // ✅ Only keep media shouts
      const onlyMedia = res.data.shouts?.filter(
        (shout: Shout) => shout.isMedia === true
      );
      console.log("Filtered Media", onlyMedia);
      setMediaShouts(onlyMedia || []);
    } catch (error) {
      console.error("Error fetching media:", error);
    } finally {
      setLoadingMedia(false);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // ✅ declared here
    if (userId) {
      fetchShouts();
      fetchMedia();
    }
  }, []);

  return (
    <div
      className="bg-white rounded-[32px] bg-center bg-cover h-[calc(100vh-25px)]"
      style={{
        backgroundImage: `url("${bground}")`,
      }}
    >
      <div className="flex p-4  flex-col items-center justify-center ">
        <div
          className="relative bg-cover bg-center  bg-no-repeat text-white text-center h-[600px]  w-[550px] rounded-tl-2xl  rounded-tr-2xl "
          style={{
            backgroundImage: userData?.profileImage
              ? `url("http://3.111.146.115:5000${userData.profileImage}")`
              : `url("${group}")`,
          }}
        >
          <div className="absolute bottom-0 left-0 w-full h-46 bg-gradient-to-b from-transparent to-black via-black/90 z-10"></div>
        </div>

        <div className="inset-0  flex flex-col items-center justify-center mt-[-150px] z-10">
          <h2 className="text-2xl text-white font-bold">
            {userData?.fullName || "Loading..."}
          </h2>
          <p className="text-sm text-gray-200 mt-1">
            @{userData?.username || "username"}
          </p>
          <div className="hidden">
            <img src={biogram} alt="Biogram Logo" className="w-16 h-18 mt-4 " />
          </div>
        </div>

        <div className="  bg-black w-[550px] ">
          <div className="flex flex-col items-center justify-center  ">
              <div className="flex gap-2 justify-center pt-22">
                <button
                  className={`px-4 py-2 ${
                    activeTab === "shouts" ? " text-white" : "text-blue-500"
                  }`}
                  onClick={() => setActiveTab("shouts")}
                >
                  Shouts
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeTab === "media" ? " text-white" : "text-blue-500"
                  }`}
                  onClick={() => setActiveTab("media")}
                >
                  Media
                </button>
                
              </div>
              <div className="flex justify-center items-center m-4">
                  <img src={image} alt="Earth" className="w-14  h-14 mt-4 " />
                </div>
              <div className="p-2 w-[90%] m-15 rounded-2xl">
                {activeTab === "shouts" && (
                  <div className="text-center justify-center  ">
                    {loadingShouts ? (
                      <p className="text-gray-300">Loading shouts...</p>
                    ) : textShouts.length === 0 ? (
                      <>
                        <h1 className="text-white font-bold text-4xl">
                          No Shouts Yet!
                        </h1>
                        <p className="text-gray-300">Shouts will appear here</p>
                      </>
                    ) : (
                      <Carousel
                        orientation="vertical"
                        className="relative w-full h-80"
                        opts={{
                          align: "start",
                          loop: false,
                        }}
                      >
                        <CarouselContent className="h-80">
                          {textShouts.map((shout) => (
                            <CarouselItem key={shout._id} className=" h-full">
                              <div className=" rounded-2xl h-full flex flex-col justify-center">
                                {shout.videoUrl && !shout.isMedia && (
                                  <img
                                    src={`http://3.111.146.115:5000${shout.videoUrl.replace(
                                      "/videos/",
                                      "/images/"
                                    )}`}
                                    alt="Shout"
                                    className="w-full h-[90%] object-cover rounded-2xl"
                                  />
                                )}
                                {shout.content && (
                                  <p className="text-gray-800 mt-2">
                                    {shout.content}
                                  </p>
                                )}
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    )}
                  </div>
                )}

                {activeTab === "media" && (
                  <div className="text-center justify-center">
                    {loadingMedia ? (
                      <p className="text-gray-300">Loading media...</p>
                    ) : mediaShouts.length === 0 ? (
                      <>
                        <h1 className="text-white font-bold text-4xl">
                          No Media Yet!
                        </h1>
                        <p className="text-gray-300">Videos will appear here</p>
                      </>
                    ) : (
                      <Carousel
                        orientation="vertical"
                        className="relative w-full h-80"
                        opts={{ align: "start", loop: false }}
                      >
                        <CarouselContent className="h-80">
                          {mediaShouts.map((media) => (
                            <CarouselItem key={media._id} className="p-2 h-80">
                              <div className="rounded-2xl shadow p-2 h-full flex flex-col justify-center">
                                <video
                                  controls
                                  className="w-full h-full object-cover object-center rounded-xl"
                                  src={`http://3.111.146.115:5000${media.videoUrl}`}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;

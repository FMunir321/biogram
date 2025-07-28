// import { Button } from "../../components/ui/button";
// import { Link } from "react-router-dom";
// import characterImg from "../../../public/assets/aleximage.png";
// import { useState } from "react";
// import bground from "../../../public/assets/lightbg.png";

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState<"shouts" | "media">("shouts");

//   return (
//     <div className="overflow-x-hidden">
//       <div className="w-full max-w-[1400px] px-5 py-6 mx-auto">
//         <div className="w-full max-w-[1400px] px-2 md:px-4 py-6 mx-auto bg-[#ddf0e7] border border-[#7ecfa7] rounded-2xl overflow-hidden">
//           <div
//             className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-[32px] p-4 md:p-6 relative min-h-[500px] bg-cover bg-center flex flex-col md:flex-row justify-between w-full"
//             style={{ backgroundImage: `url(${bground})` }}
//           >
//             {/* Left Side */}
//             <div className="w-full md:w-1/2 flex flex-col justify-between items-center md:items-start py-6">
//               {/* Header */}
//               <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
//                 <div className="text-center sm:text-left">
//                   <h1 className="text-[25px] sm:text-[40px] lg:text-[64px] font-bold text-[#010101]">Alex James</h1>
//                   <p className="text-[18px] md:text-[24px] lg:text-[32px] text-[#010101]">@Alexjames</p>
//                 </div>
//               </div>

//               {/* Centered Content */}
//               <div className="flex-grow flex flex-col justify-center items-center text-center">
//                 <h2 className="text-[25px] sm:text-[40px] lg:text-[64px] font-bold text-black mb-2">
//                   No shouts yet!
//                 </h2>
//                 <p className="text-[13px] md:text-[16px] text-black mb-6">
//                   Shouts posted by Alex James will appear here
//                 </p>
//               </div>

//               {/* Footer Button */}
//               <Link to="/profile-main-dashboard">
//                 <Button className="bg-white hover:bg-gray-50 text-black font-medium rounded-full px-6 md:px-8 py-3 md:py-5 text-[36px] md:text-base cursor-pointer">
//                   Create Your Profile
//                 </Button>
//               </Link>
//             </div>

//             {/* Right Side */}
//             <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-between mt-6 md:mt-0">
//               {/* Tabs */}
//               <div className="bg-white p-2 rounded-full w-fit self-end">
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => setActiveTab("shouts")}
//                     className={`px-4 py-1 rounded-full text-sm font-medium transition ${activeTab === "shouts"
//                       ? "bg-[#98e6c3] text-white"
//                       : "bg-white text-gray-900"
//                       }`}
//                   >
//                     Shouts
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("media")}
//                     className={`px-4 py-1 rounded-full text-sm font-medium transition ${activeTab === "media"
//                       ? "bg-[#98e6c3] text-white"
//                       : "bg-white text-gray-900"
//                       }`}
//                   >
//                     Media
//                   </button>
//                 </div>
//               </div>

//               {/* Character Image */}
//               <div className="mt-6 md:mt-auto">
//                 <img
//                   src={characterImg}
//                   alt="3D Character"
//                   className="w-[160px] lg:w-[240px] h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import  biogram from "../../../public/Biogram.png";

import group from "../../../public/assets/boys333.png";
import biogram from "../../../public/Biogram.png";
import image from "../../../public/assets/Earth.png";
import { useState } from "react";
// import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import api from "@/service/api";

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
  image?: string;     // 👈 Add this
  content?: string;   // 👈 Add this
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

        const response = await api.get(
          `/api/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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

      const onlyMedia = res.data.shouts?.filter((shout: Shout) => shout.isMedia === false);
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
      const onlyMedia = res.data.shouts?.filter((shout: Shout) => shout.isMedia === true);
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
    <div className="flex p-4  flex-col items-center justify-center min-h-screen ">
      <div
        className="relative bg-cover       bg-center  bg-no-repeat text-white text-center h-[600px]  w-[550px] rounded-tl-2xl  rounded-tr-2xl "
        style={{
          backgroundImage: userData?.profileImage
            ? `url("http://3.111.146.115:5000${userData.profileImage}")`
            : `url("${group}")`,
        }}
      ></div>

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
        <div className="flex flex-col items-center justify-center p-22">
          <div className="justify-center items-center">

            <div className="flex gap-2 justify-center ">
              <button
                className={`px-4 py-2 ${activeTab === "shouts" ? " text-white" : "text-blue-500"
                  }`}
                onClick={() => setActiveTab("shouts")}
              >
                Shouts
              </button>
              <button
                className={`px-4 py-2 ${activeTab === "media" ? " text-white" : "text-blue-500"
                  }`}
                onClick={() => setActiveTab("media")}
              >
                Media
              </button>
            </div>
            <div>
              <div className="flex justify-center items-center mt-4">
                <img src={image} alt="Earth" className="w-14  h-14 mt-4 " />
              </div>

              {activeTab === "shouts" && (
                <div className="text-center justify-center">
                  {loadingShouts ? (
                    <p className="text-gray-300">Loading shouts...</p>
                  ) : (
                    textShouts.length === 0 ? (
                      <>
                        <h1 className="text-white font-bold text-4xl">No Shouts Yet!</h1>
                        <p className="text-gray-300">Shouts will appear here</p>
                      </>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {textShouts.map((shout) => (
                          <div key={shout._id} className="bg-white rounded-xl shadow p-2">
                            {shout.videoUrl && !shout.isMedia && (
                              <img
                                src={`http://3.111.146.115:5000${shout.videoUrl.replace("/videos/", "/images/")}`}
                                alt="Shout"
                                className="w-100 h-48 object-cover rounded"
                              />
                            )}
                            {shout.content && (
                              <p className="text-gray-800 mt-2">{shout.content}</p>
                            )}

                          </div>
                        ))}

                      </div>
                    )
                  )}
                </div>
              )}

              {activeTab === "media" && (
                <div className="text-center justify-center">
                  {loadingMedia ? (
                    <p className="text-gray-300">Loading media...</p>
                  ) : mediaShouts.length === 0 ? (
                    <>
                      <h1 className="text-white font-bold text-4xl">No Media Yet!</h1>
                      <p className="text-gray-300">Videos will appear here</p>
                    </>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {mediaShouts.map((media) => (
                        <video
                          key={media._id}
                          controls
                          className="w-full h-auto rounded-xl"
                          src={`http://3.111.146.115:5000${media.videoUrl}`} // ✅ fixed video path
                        />
                      ))}
                    </div>
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

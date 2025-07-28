

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

const Profile = () => {
  const [activeTab, setActiveTab] = useState("shouts");
  const [userData, setUserData] = useState<UserData | null>(null);

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
                  <h1 className="text-white font-bold text-4xl">
                    No Shouts Yet!
                  </h1>
                  <h6 className="text-gray-300">Shouts posted by Saif Ali</h6>
                  <p className="text-gray-300">will appear here </p>
                </div>
              )}

              {activeTab === "media" && (
                <div className="text-center  justify-center">
                  <h1 className="text-white font-bold text-4xl">
                    No Media Yet!
                  </h1>
                  <h6 className="text-gray-300 ">Shouts with media posted</h6>
                  <p className="text-gray-300 ">by Saif Ali will appear here</p>
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

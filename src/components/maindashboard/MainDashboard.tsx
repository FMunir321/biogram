import group from "../../../public/assets/avatar.png";
import { useEffect, useState } from "react";
import bground from "../../../public/assets/lightbg.png";
import biogram from "../../../public/Biogram.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cookies from "js-cookie";
import api from "@/service/api";

// Updated User type to include all used properties
type User = {
  _id: string;
  name?: string;
  profileImage?: string;
  username?: string;
  fullName?: string;
  email?: string;
};

const MainDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("shouts"); // Default to "shouts"
  const [userDetails, setUserDetails] = useState<User | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const handleClickOnId = async (userId: string) => {
    const token = Cookies.get("token");
    try {
       await api.post(`/api/analytics/link-click/${userId}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
     
    } catch (error) {
      console.error("API error:", error);
    }
  };
  const handleClickOnProfile = async (userId: string) => {
    const token = Cookies.get("token");
    // console.log("clicked",userId);
    try {
      await api.post(`/api/analytics/profile-view/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // const data = await response.data;
      // console.log("click tracked",data);
    } catch (error) {
      console.error("API error:", error);
    }
  };
  const fetchUser = async () => {
    const currentUserId=localStorage.getItem("userId")
    if (!currentUserId) {
      console.warn("No current user ID found in localStorage");
      return;
    }
    try {
      const token = Cookies.get("token");
  
      const response = await api.get(`/api/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

  
      const allUsers = response.data.users || [];
  
      // Filter out the current user
      const filteredUsers = allUsers.filter((user: User) => user._id !== currentUserId);
  
      setUsers(filteredUsers);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const fetchUserById = async (userId: string) => {
    try {
      const token = Cookies.get("token");
      const response = await api.get(`/api/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserDetails(response.data); // ya response.data.user, jo bhi aapke backend se aaye
    } catch (error) {
      console.error("Error fetching user by ID:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  // Only show users if search is not empty
  const filteredUsers = search.trim() === ""
    ? []
    : users.filter(user => {
      const value = search.toLowerCase();
      return (
        (user.fullName ?? "").toLowerCase().includes(value) ||
        (user.username ?? "").toLowerCase().includes(value) ||
        (user.email ?? "").toLowerCase().includes(value) ||
        (user.name ?? "").toLowerCase().includes(value)
      );
    });

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-stretch h-[calc(100vh-25px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${bground})` }}
    >
      <div className="w-full md:w-[50%] p-4">
        {/* Searchbar */}
        <div className="flex !border-[#6fb793] border-1 mb-4 gap-2 w-full  rounded-full [background:linear-gradient(to_right,_#dfece2,_#d5dad9)] text-black text-[20px] font-medium">
          <Input
            type="text"
            placeholder="Search Platforms"
            className="py-7 m-1 text-[20px] font-medium border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button className="py-7 px-9 m-1 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white rounded-full text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
            Search
          </Button>
        </div>


        {/* User List: only show if search is not empty */}
        {search.trim() !== "" && (
          <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
            {filteredUsers.length === 0 ? (
              <li style={{ color: "#888", textAlign: "center" }}>No users found.</li>
            ) : (
              filteredUsers.map((user) => (
                <li
                  key={user._id}
                  onClick={() => {
                    setSelectedUser(user);
                    handleClickOnId(user._id);
                    fetchUserById(user._id); // yahan user ki id pass karein
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                    background: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    padding: "10px 16px",
                    maxWidth: 350,
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={user.profileImage || "/public/assets/avatar.png"}
                    alt={user.username || "avatar"}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      marginRight: 16,
                      objectFit: "cover",
                      border: "2px solid #e0e0e0",
                    }}
                    onError={e => { (e.currentTarget as HTMLImageElement).src = "/public/assets/avatar.png"; }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{user.fullName || user.name || "No Name"}</div>
                    <div style={{ fontSize: 14, color: "#888" }}>@{user.username || user.email || "user"}</div>
                  </div>


                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <div className="flex flex-col items-center w-full  ">
        {selectedUser ? (
          <>
            {/* Profile Image as Card Header */}
            <div className=" cursor-pointer mt-10 relative" >
            <div className="absolute bottom-56 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black via-black/90 z-10" >
            </div>
            <div
                className="w-100 h-130 mx-auto shadow-xl overflow-hidden bg-cover bg-center  rounded-2xl"
              style={{
                backgroundImage: selectedUser.profileImage
                  ? `url("http://3.111.146.115:5000${selectedUser.profileImage}")`
                  : `url("${group}")`,

              }}
            >
              
            </div>
          
            <div className="inset-0  flex flex-col items-center justify-center mt-[-150px] z-10">
              <h2 className="text-2xl text-white font-bold z-20">
                {userDetails?.fullName || "Loading..."}
              </h2>
              <p className="text-sm text-white mt-1 z-30">
                @{userDetails?.username || "username"}
              </p>
              <div className="hidden">
                <img src={biogram} alt="Biogram Logo" className="w-16 h-18 mt-4 " />
              </div>
            </div>


            <div className="bg-black w-full max-w-[400px] rounded-b-2xl pb-8 pt-4 " onClick={() => handleClickOnProfile(selectedUser._id)}>
              <div className="flex justify-center gap-8 ">
                <button
                  className={`text-lg font-semibold rounded-none ${activeTab === "shouts" ? "text-blue-400" : "text-white"
                    }`}
                  onClick={() => setActiveTab("shouts")}
                >
                  Shouts
                </button>
                <button
                  className={`text-lg font-semibold rounded-none ${activeTab === "media" ? "text-blue-400" : "text-white"
                    }`}
                  onClick={() => setActiveTab("media")}
                >
                  Media
                </button>
              </div>

              {/* Earth Image or any other content */}
              <div className="flex justify-center items-center mt-4">
                <img src="/assets/Earth.png" alt="Earth" className="w-14 h-14" />
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
          </>
        ) : (
          <p className="text-black font-medium mt-10">
            Click on user to preview their profile
          </p>
        )}
      </div>
    </div>
  );
};

export default MainDashboard;
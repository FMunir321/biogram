import group from "../../../public/assets/avatar.png";
import { useEffect, useState } from "react";
import bground from "../../../public/assets/lightbg.png";
import biogram from "../../../public/Biogram.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cookies from "js-cookie";
import api from "@/service/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



const isVideoFile = (url: string) => {
  return /\.(mp4|webm|mov|avi)$/i.test(url);
};


// Updated User type to include all used properties
interface Shout {
  _id: string;
  userId: string;
  isMedia: boolean;
  videoUrl: string;
  imageUrl?: string;
  createdAt: string;
  // Add other properties if needed
}


type User = {
  _id: string;
  name?: string;
  username?: string;
  fullName?: string;
  email?: string;
  profileImage?: string;
  bio?: string;
  showBio?: boolean;
  gallery?: { imageUrl: string }[];
  showGallery?: boolean;
  shouts?: Shout[];
};


const MainDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("shouts"); // Default to "shouts"
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [userShouts, setUserShouts] = useState<Shout[]>([]);
  const [userMedia, setUserMedia] = useState<Shout[]>([]);




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
    const currentUserId = localStorage.getItem("userId")
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
        headers: { Authorization: `Bearer ${token}` },
      });

      // ✅ Paste it right here
      console.log("Fetched userData:", response.data);

      const userData = response.data;

      const shouts: Shout[] = userData.shouts || [];

      const imageShouts = shouts
        .filter((shout) => shout.videoUrl && !shout.isMedia)
        .map((shout) => ({
          ...shout,
          imageUrl: shout.videoUrl.replace("/videos/", "/images/"),
        }));

      const videoShouts = shouts.filter(
        (shout) => shout.videoUrl && isVideoFile(shout.videoUrl)
      );

      // ✅ Format and assign user details properly
      const formattedUser: User = {
        _id: userData._id,
        name: userData.name,
        username: userData.username,
        fullName: userData.fullName,
        email: userData.email,
        profileImage: userData.profileImage,
        bio: userData.bio,
        showBio: userData.visibilitySettings?.bio ?? false,
        gallery: userData.gallery || [],
        showGallery: userData.visibilitySettings?.gallery ?? false,
        shouts: userData.shouts || [],
      };


      setUserDetails(formattedUser);
      setUserShouts(imageShouts);
      setUserMedia(videoShouts);
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
    console.log("Gallery data:", userDetails?.gallery);
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
              {/* <div className="absolute bottom-56 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black via-black/90 z-10" >
              </div> */}
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


              <div className="bg-black w-full max-w-[400px] rounded-b-2xl pb-8 pt-4 h-100%" onClick={() => handleClickOnProfile(selectedUser._id)}>
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
                  userShouts.length > 0 ? (
                    <div className="text-white px-4 space-y-4 mt-15">
                      <Carousel
                        orientation="vertical"
                        className="relative w-full h-80"
                        opts={{
                          align: "start",
                          loop: false,
                        }}
                      >
                        <CarouselContent className="h-80">
                          {userShouts.map((shout, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg">
                              {shout.imageUrl && (
                                <CarouselItem key={shout._id} className=" h-full">
                                  <img
                                    src={`http://3.111.146.115:5000${shout.imageUrl}`}
                                    alt="shout"
                                    className="w-full h-[90%] object-contain rounded-2xl text-white"
                                  />
                                </CarouselItem>
                              )}
                            </div>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-white text-black hover:bg-gray-200" />
                        <CarouselNext className="bg-white text-black hover:bg-gray-200" />

                      </Carousel>
                    </div>
                  ) : (
                    <div className="text-center justify-center">
                      <h1 className="text-white font-bold text-4xl">No Shouts Yet!</h1>
                      <p className="text-gray-300">by {userDetails?.fullName}</p>
                    </div>
                  )
                )}
                {activeTab === "media" && (
                  userMedia.length > 0 ? (
                    <div className="text-white px-4 space-y-4">
                      <Carousel
                        orientation="vertical"
                        className="relative w-full h-80"
                        opts={{ align: "start", loop: false }}
                      >
                        <CarouselContent className="h-80">
                          {userMedia.map((shout, index) => (
                            <div key={index} className="bg-gray-800 p-4 rounded-lg">
                              {shout.videoUrl && (
                                <CarouselItem key={shout._id} className=" h-full">
                                  <video
                                    controls
                                    src={`http://3.111.146.115:5000${shout.videoUrl}`}
                                    className="w-full h-full object-contain object-center rounded-xl"
                                  />
                                </CarouselItem>
                              )}
                            </div>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-white text-black hover:bg-gray-200" />
                        <CarouselNext className="bg-white text-black hover:bg-gray-200" />

                      </Carousel>
                    </div>
                  ) : (
                    <div className="text-center justify-center">
                      <h1 className="text-white font-bold text-4xl">No Media Yet!</h1>
                      <p className="text-gray-300">by {userDetails?.fullName}</p>
                    </div>
                  )
                )}
                <div className="relative" >
                  {userDetails?.bio && userDetails?.showBio && (
                    <div className="w-[90%] mx-auto mb-6 px-4 mt-15"> {/* mt-12 adds spacing */}
                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                            About
                          </h3>
                          <div className="relative">
                            <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                              {userDetails.bio}
                            </p>
                            <div className="absolute -top-2 -left-2 w-6 h-6 text-gray-600/30 text-2xl font-serif">
                              "
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 text-gray-600/30 text-2xl font-serif rotate-180">
                              "
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
                <div className="relative">
                  {userDetails?.gallery && userDetails?.showGallery && (
                    <div className="w-[90%] mx-auto px-4 mt-12">
                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                            Gallery
                          </h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {userDetails.gallery.map((item, index) => (
                              <img
                                key={index}
                                src={item.imageUrl}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-40 object-cover rounded-lg shadow-md border border-gray-700"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}


                </div>


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
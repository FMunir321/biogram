import group from "../../../public/assets/avatar.png";
import { useEffect, useState } from "react";
import bground from "../../../public/assets/lightbg.png";
import biogram from "../../../public/Biogram.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Cookies from "js-cookie";
import api from "@/service/api";
import { baseUrl } from '@/service/api';

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
  gallery?: {
    imageUrl: string
    _id: string;
  }[];
  showGallery?: boolean;
  shouts?: Shout[];
  contactInfo?: {
    email?: string;
    phoneNumber?: string;
    websiteUrl?: string;
    visibility?: {
      email?: boolean;
      phoneNumber?: boolean;
      websiteUrl?: boolean;
    };
  };
  showContactInfo?: boolean;
  merch?: {
    _id: string;
    user: string;
    category: string;
    url: string;
    title: string;
    price: string;
    image: string;
    productImage?: string;
    createdAt: string;
  }[];
  showMerch?: boolean;
  featuredLinks?: {
    _id: string;
    user: string;
    type: string;
    title: string;
    url: string;
    thumbnailImage?: string;
    image?: string | null;
    background?: string;
    feature?: boolean;
    createdAt: string;
    isVisible?: boolean;
  }[];
  showFeaturedLinks?: boolean;
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
        gallery: userData.gallery,
        showGallery: userData.visibilitySettings?.gallery ?? false,
        shouts: userData.shouts,
        contactInfo: {
          email: userData.contactInfo?.email,
          phoneNumber: userData.contactInfo?.phoneNumber,
          websiteUrl: userData.contactInfo?.websiteUrl,
          visibility: userData.contactInfo?.visibility ?? {},
        },
        merch: userData.merch,
        showMerch: userData.visibilitySettings?.merch ?? false,

        featuredLinks: userData.featuredLinks,
        showFeaturedLinks: userData.visibilitySettings?.featuredLinks ?? false,
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
                className="relative bg-cover bg-center  bg-no-repeat text-white text-center h-[600px]  w-[500px] rounded-tl-2xl  rounded-tr-2xl "
                style={{
                  backgroundImage: selectedUser.profileImage
                    ? `url("${baseUrl}${selectedUser.profileImage}")`
                    : `url("${group}")`,

                }}
              >
                <div className="absolute bottom-0 left-0 w-full h-46 bg-gradient-to-b from-transparent to-black via-black/90 z-10"></div>
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

              <div className="  bg-black w-[500px] ">
                <div className="bg-black w-full max-w-[500px] rounded-b-2xl pb-8 pt-4 h-100% item-center" onClick={() => handleClickOnProfile(selectedUser._id)}>
                  <div className="flex gap-2 justify-center pt-22">
                    <button
                      className={`px-4 py-2 ${activeTab === "shouts" ? " text-white" : "text-gray-300"
                        }`}
                      onClick={() => setActiveTab("shouts")}
                    >
                      Shouts
                    </button>
                    <button
                      className={`px-4 py-2 ${activeTab === "media" ? " text-white" : "text-gray-300"
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

                  <div className="p-2 w-[90%] m-5 rounded-2xl">
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
                              {userShouts.map((shout) => (
                                <CarouselItem key={shout._id} className=" h-full">
                                  <div className=" rounded-2xl h-full flex flex-col justify-center">
                                    {shout.imageUrl && (

                                      <img
                                        src={`http://3.111.146.115:5000${shout.imageUrl}`}
                                        alt="shout"
                                        className="w-full h-[90%] object-contain rounded-2xl text-white"
                                      />

                                    )}
                                  </div>
                                </CarouselItem>
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
                        <div className="text-white px-4 space-y-4 mt-15"
                        >
                          <Carousel
                            orientation="vertical"
                            className="relative w-full h-80"
                            opts={{ align: "start", loop: false }}
                          >
                            <CarouselContent className="h-80">
                              {userMedia.map((shout) => (
                                <CarouselItem key={shout._id} className=" h-full">
                                  <div className="rounded-2xl shadow p-2 h-full flex flex-col justify-center">
                                    {shout.videoUrl && (

                                      <video
                                        controls
                                        src={`http://3.111.146.115:5000${shout.videoUrl}`}
                                        className="w-full h-full object-contain object-center rounded-xl"
                                      />

                                    )}
                                  </div>
                                </CarouselItem>
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
                  </div>
                  <div className="relative" >
                    {userDetails?.bio?.trim() && userDetails?.showBio && (
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
                    {Array.isArray(userDetails?.gallery) &&
                      userDetails.gallery.length > 0 &&
                      userDetails?.showGallery && (
                        <div className="w-[90%] mx-auto px-4 mt-12">
                          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                            <div className="text-center">
                              <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                                Gallery
                              </h3>
                              <Carousel
                                orientation="horizontal"
                                className="relative w-full "
                                opts={{
                                  align: "start",
                                  loop: true,
                                }}
                              >
                                <CarouselContent className="-ml-2 md:-ml-4">
                                  {/* Group images into slides of 4 (optional) */}
                                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {userDetails.gallery.map((item, index) => (

                                      <CarouselItem key={item._id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">

                                        <img
                                          key={index}
                                          src={`${baseUrl}/${item.imageUrl}`} // Correct: full path now
                                          alt={`Gallery image ${index + 1}`}
                                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                      </CarouselItem>
                                    ))}

                                  </div>

                                </CarouselContent>

                                <CarouselPrevious className="left-2 bg-black/50 border-white/20 text-white hover:bg-black/70" />
                                <CarouselNext className="right-2 bg-black/50 border-white/20 text-white hover:bg-black/70" />
                              </Carousel>

                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                  <div className="relative">
                    {userDetails?.contactInfo &&
                      Object.values(userDetails.contactInfo).some(value => value?.toString().trim() !== "") &&
                      userDetails?.showContactInfo && (
                        <div className="w-110 mx-auto mb-6 px-4 mt-12 item-center">
                          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 space-y-6">
                            <div className="text-center">
                              <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                                Contact Info
                              </h3>
                              <div className="flex flex-col space-y-3">
                                {/* Phone Number */}
                                {userDetails.contactInfo.phoneNumber &&
                                  userDetails.contactInfo.visibility?.phoneNumber && (
                                    <div className="flex items-center justify-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                      <div className="flex-shrink-0">
                                        <svg
                                          className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 "
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                      </div>
                                      <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base ">
                                        {userDetails.contactInfo.phoneNumber}
                                      </span>
                                    </div>
                                  )}

                                {/* Email */}
                                {userDetails.contactInfo.email &&
                                  userDetails.contactInfo.visibility?.email && (
                                    <div className="flex items-center justify-start space-x-4 p-4 w-full rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                      <div className="flex-shrink-0">
                                        <svg
                                          className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                      </div>
                                      <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base ">
                                        {userDetails.contactInfo.email}
                                      </span>
                                    </div>
                                  )}

                                {/* Website URL */}
                                {userDetails.contactInfo.websiteUrl &&
                                  userDetails.contactInfo.visibility?.websiteUrl && (
                                    <div className="flex items-center justify-start space-x-3 p-3  rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                                      <div className="flex-shrink-0">
                                        <svg
                                          className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </div>
                                      <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base break-all max-w-xs">
                                        <a
                                          href={userDetails.contactInfo.websiteUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="hover:underline"
                                        >
                                          {userDetails.contactInfo.websiteUrl}
                                        </a>
                                      </span>
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                  <div className="relative">
                    {Array.isArray(userDetails?.merch) &&
                      userDetails.merch.length > 0 &&
                      userDetails?.showMerch && (
                        <div className="w-[90%] mx-auto px-4 mt-12">
                          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                            <div className="text-center">
                              <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                                Merch
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {userDetails.merch.map((item) => (
                                  <a
                                    key={item._id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block bg-white/5 hover:bg-white/10 rounded-xl p-4 transition duration-300"
                                  >
                                    <img
                                      src={`${baseUrl}/${item.image}`}
                                      alt={item.title}
                                      className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform"
                                    />
                                    <h4 className="text-white text-lg font-semibold">{item.title}</h4>
                                    <p className="text-gray-300 text-sm mt-1">Price: {item.price}</p>
                                    <p className="text-gray-400 text-xs mt-1 capitalize">Category: {item.category}</p>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                  <div className="relative">
                    {Array.isArray(userDetails?.featuredLinks) &&
                      userDetails.featuredLinks.some(link => link?.url?.toString().trim() !== "") &&
                      userDetails?.showFeaturedLinks && (
                        <div className="w-[90%] mx-auto px-4 mt-12">
                          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                            <div className="text-center mb-4">
                              <h3 className="text-lg font-semibold text-white tracking-wide">Featured Links</h3>
                            </div>
                            <div className="flex flex-col gap-4">
                              {userDetails.featuredLinks
                                .filter(link => link.isVisible)
                                .map(link => (
                                  <a
                                    key={link._id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl transition duration-300 group"
                                    style={{
                                      background: link.background || '#1f2937',
                                      border: '1px solid rgba(255,255,255,0.1)',
                                    }}
                                  >
                                    {/* Thumbnail */}
                                    {link.thumbnailImage && (
                                      <img
                                        src={link.thumbnailImage}
                                        alt={link.title}
                                        className="w-10 h-10 rounded object-cover"
                                      />
                                    )}

                                    {/* Text Info */}
                                    <div className="flex-1 text-left">
                                      <h4 className="text-white font-medium">{link.title}</h4>
                                      <p className="text-sm text-white/70 break-all">{link.url}</p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <svg
                                      className="w-4 h-4 text-white/50 group-hover:text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 9H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </a>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}

                  </div>
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
import group from "../../../public/assets/boys333.png";
import biogram from "../../../public/Biogram.png";
import image from "../../../public/assets/Earth.png";
import { useState } from "react";
// import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import api, { baseUrl } from "@/service/api";
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
  bio?: string;
  gallery?: Gallery[];
  contactInfo?: ContactInfo;
  merch?: Merch[];
  featuredLinks?: FeaturedLink[];
};

interface FeaturedLink {
  _id: string;
  user: string;
  type: string;
  title: string;
  url: string;
  thumbnailImage?: string;
  image?: string;
  background?: string;
  feature?: boolean;
  createdAt: string;
  isVisible: boolean;
  __v: number;
}

interface ContactInfo {
  visibility: {
    phoneNumber: boolean;
    websiteUrl: boolean;
    email: boolean;
  };
  phoneNumber?: string;
  websiteUrl?: string;
  email?: string;
}

interface Merch {
  _id: string;
  user: string;
  category: string;
  url: string;
  title: string;
  image: string;
  productImage?: string;
  price?: number; // Optional price field
  createdAt: string;
  __v: number;
}

interface Gallery {
  _id: string;
  user: string;
  imageUrl: string;
  caption: string;
  createdAt: string;
  __v: number;
}
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
  const [loadingShouts, setLoadingShouts] = useState(true);
  const [loadingMedia, setLoadingMedia] = useState(true);
  const [largeFeaturedLinks, setLargeFeaturedLinks] = useState<FeaturedLink[]>([]);
  const [smallFeaturedLinks, setSmallFeaturedLinks] = useState<FeaturedLink[]>([]);

  // const [newText, setNewText] = useState("");
  // const [newMedia, setNewMedia] = useState<File | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoadingShouts(true);
      setLoadingMedia(true);
      
      try {
        const token = Cookies.get("token");
        const userId = localStorage.getItem("userId");

        const response = await api.get(`/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        
        // Filter shouts based on isMedia property
        if (response.data.shouts && Array.isArray(response.data.shouts)) {
          const textShouts = response.data.shouts.filter(
            (shout: Shout) => shout.isMedia === false
          );
          const mediaItems = response.data.shouts.filter(
            (shout: Shout) => shout.isMedia === true
          );
          
          setShouts(textShouts);
          setMediaShouts(mediaItems);
          
          console.log("Text Shouts:", textShouts);
          console.log("Media Shouts:", mediaItems);
        }

        // Filter featured links based on type
        if (response.data.featuredLinks && Array.isArray(response.data.featuredLinks)) {
          const largeLinks = response.data.featuredLinks.filter(
            (link: FeaturedLink) => link.type === "large" && link.isVisible
          );
          const smallLinks = response.data.featuredLinks.filter(
            (link: FeaturedLink) => link.type === "small" && link.isVisible
          );
          
          setLargeFeaturedLinks(largeLinks);
          setSmallFeaturedLinks(smallLinks);
          
          console.log("Large Featured Links:", largeLinks);
          console.log("Small Featured Links:", smallLinks);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoadingShouts(false);
        setLoadingMedia(false);
      }
    };

    fetchUser();
  }, []);

  //<<<<<<______________________________________________>>>>>>>

  return (
    <div
      className="h-[calc(100vh-25px)]"
    >
      <div   className="rounded-[32px] bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("${bground}")`,
        backgroundAttachment: 'fixed',
      }}>
      <div className="flex p-4  flex-col items-center justify-center ">
        <div
          className="relative bg-cover bg-center  bg-no-repeat text-white text-center h-[600px]  w-[550px] rounded-tl-2xl  rounded-tr-2xl "
          style={{
            backgroundImage: userData?.profileImage
              ? `url("${baseUrl}${userData.profileImage}")`
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
                    activeTab === "shouts" ? " text-white" : "text-gray-300"
                  }`}
                  onClick={() => setActiveTab("shouts")}
                >
                  Shouts
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeTab === "media" ? " text-white" : "text-gray-300"
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
                    ) : shouts.length === 0 ? (
                      <>
                        <h1 className="text-white font-bold text-4xl">
                          No Shouts Yet!
                        </h1>
                        <p className="text-gray-300">No shouts have been uploaded yet</p>
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
                          {shouts.map((shout) => (
                            <CarouselItem key={shout._id} className=" h-full">
                              <div className=" rounded-2xl h-full flex flex-col justify-center">
                                {shout.videoUrl && (
                                  <img
                                    src={`${baseUrl}${shout.videoUrl.replace(
                                      "/videos/",
                                      "/images/"
                                    )}`}
                                    alt="Shout"
                                    className="w-full h-[90%] object-contain rounded-2xl text-white"
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
                  <div className="text-center justify-center text-white">
                    {loadingMedia ? (
                      <p className="text-gray-300">Loading media...</p>
                    ) : mediaShouts.length === 0 ? (
                      <>
                        <h1 className="text-white font-bold text-4xl">
                          No Media Yet!
                        </h1>
                        <p className="text-gray-300">No media has been uploaded yet</p>
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
                                  className="w-full h-full object-contain object-center rounded-xl"
                                  src={`${baseUrl}${media.videoUrl}`}
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
            {/* Bio Section */}
            {userData?.bio && (
                <div className="w-[90%] mx-auto mb-6 px-4">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">
                        About
                      </h3>
                      <div className="relative">
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                          {userData.bio}
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

            {/* Gallery Section */}
            {userData?.gallery && userData.gallery.length > 0 && (
                <div className="w-[90%] mx-auto mb-6 px-4">
                  <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                        Gallery
                      </h3>
                      <Carousel
                        orientation="horizontal"
                        className="relative w-full"
                        opts={{
                          align: "center",
                          loop: true,
                        }}
                      >
                        <CarouselContent className="-ml-2 md:-ml-4">
                          {userData.gallery.map((item) => {
                            const imageUrl = `${baseUrl}/${item.imageUrl.replace(/\\/g, '/')}`;
                            console.log('Gallery image URL:', imageUrl, 'Original:', item.imageUrl);
                            return (
                            <CarouselItem key={item._id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                              <div className="group relative overflow-hidden rounded-xl bg-gray-900/50 aspect-square flex items-center justify-center">
                                <img
                                  src={imageUrl}
                                  alt={item.caption || "Gallery image"}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  loading="lazy"
                                  onError={(e) => {
                                    console.error('Failed to load image:', imageUrl);
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    // Show fallback placeholder
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `
                                        <div class="flex flex-col items-center justify-center h-full text-gray-400">
                                          <svg class="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                          </svg>
                                          <p class="text-xs">Image not found</p>
                                        </div>
                                      `;
                                    }
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="absolute bottom-0 left-0 right-0 p-3">
                                    {item.caption && (
                                      <p className="text-white text-sm font-medium leading-tight">
                                        {item.caption}
                                      </p>
                                    )}
                                    <p className="text-gray-300 text-xs mt-1">
                                      {new Date(item.createdAt).toLocaleDateString()}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CarouselItem>
                            );
                          })}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 bg-black/50 border-white/20 text-white hover:bg-black/70" />
                        <CarouselNext className="right-2 bg-black/50 border-white/20 text-white hover:bg-black/70" />
                      </Carousel>
                    </div>
                  </div>
                </div>
              )}

            {/* Contact Info Section */}
            {userData?.contactInfo && (userData.contactInfo.phoneNumber || userData.contactInfo.websiteUrl || userData.contactInfo.email) && (
                <div className="w-full mx-auto mb-6 px-4">
                  <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                        Contact Info
                      </h3>
                      <div className="flex flex-col space-y-3">
                        {/* Phone Number */}
                        {userData.contactInfo.phoneNumber && userData.contactInfo.visibility.phoneNumber && (
                          <div className="flex items-center justify-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                            <div className="flex-shrink-0">
                              <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                            </div>
                            <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                              {userData.contactInfo.phoneNumber}
                            </span>
                          </div>
                        )}

                        {/* Email */}
                        {userData.contactInfo.email && userData.contactInfo.visibility.email && (
                          <div className="flex items-center justify-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                            <div className="flex-shrink-0">
                              <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                            </div>
                            <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                              {userData.contactInfo.email}
                            </span>
                          </div>
                        )}

                        {/* Website URL */}
                        {userData.contactInfo.websiteUrl && userData.contactInfo.visibility.websiteUrl && (
                          <div className="flex items-center justify-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                            <div className="flex-shrink-0">
                              <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm md:text-base break-all max-w-xs">
                              {userData.contactInfo.websiteUrl}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            {/* Merch Section */}
            {userData?.merch && userData.merch.length > 0 && (
                <div className="w-[90%] mx-auto mb-6 px-4">
                  <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                        Merch
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {userData.merch.map((item) => {
                          const imageUrl = `${baseUrl}/${item.image.replace(/\\/g, '/')}`;
                          return (
                            <div key={item._id} className="group relative overflow-hidden rounded-xl bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer">
                              <div className="aspect-square overflow-hidden">
                                <img
                                  src={imageUrl}
                                  alt={item.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  loading="lazy"
                                  onError={(e) => {
                                    console.error('Failed to load merch image:', imageUrl);
                                    const target = e.currentTarget;
                                    target.style.display = 'none';
                                    // Show fallback placeholder
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `
                                        <div class="flex flex-col items-center justify-center h-full text-gray-400">
                                          <svg class="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd" />
                                          </svg>
                                          <p class="text-xs">Image not found</p>
                                        </div>
                                      `;
                                    }
                                  }}
                                />
                              </div>
                              
                              <div className="p-4 flex flex-col justify-between">
                                <h4 className="text-white font-semibold text-base mb-2 group-hover:text-green-300 transition-colors duration-300 capitalize">
                                  {item.title}
                                </h4>
                                <div className="flex items-center justify-between">
                                  <p className="text-green-400 text-sm">
                                    €{item.price}
                                  </p>
                                  
                                </div>
                                <span className="text-gray-400 text-xs capitalize mt-3">
                                    {item.category}
                                  </span>
                                
                                {/* Overlay for clickable area */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="absolute top-3 right-3">
                                    <svg className="w-6 h-6 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            {/* Featured Links Section */}
            {(largeFeaturedLinks.length > 0 || smallFeaturedLinks.length > 0) && (
              <div className="w-[90%] mx-auto mb-6 px-4">
                <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide">
                      Featured Links
                    </h3>
                  </div>
                  
                  {/* Large Featured Links */}
                  {largeFeaturedLinks.length > 0 && (
                    <div className="space-y-4">
                      
                      {largeFeaturedLinks.map((link) => {
                        const thumbnailUrl = link.thumbnailImage 
                          ? (link.thumbnailImage.startsWith('data:') 
                              ? link.thumbnailImage 
                              : `${baseUrl}${link.thumbnailImage}`)
                          : null;
                        
                        return (
                          <a
                            key={link._id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <div 
                              className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                              style={{
                                background: link.background || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                minHeight: '200px'
                              }}
                            >
                              {/* Background Pattern/Overlay */}
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                              
                              {/* Content */}
                              <div className="relative z-10 p-6 h-full flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                  {thumbnailUrl && (
                                    <div className="flex-shrink-0">
                                      <img
                                        src={thumbnailUrl}
                                        alt={link.title}
                                        className="w-16 h-16 rounded-lg object-cover shadow-lg"
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                    </div>
                                  )}
                                  <div className="text-left">
                                    <h4 className="text-white font-bold text-xl group-hover:text-amber-200 transition-colors duration-300">
                                      {link.title}
                                    </h4>
                                    <p className="text-white/80 text-base capitalize">
                                      Large Link
                                    </p>
                                  </div>
                                </div>
                                
                                {/* Arrow Icon */}
                                <div className="flex-shrink-0">
                                  <svg 
                                    className="w-8 h-8 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                  >
                                    <path 
                                      fillRule="evenodd" 
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                      clipRule="evenodd" 
                                    />
                                  </svg>
                                </div>
                              </div>
                              
                              {/* Shine Effect */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-1000 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {/* Small Featured Links */}
                  {smallFeaturedLinks.length > 0 && (
                    <div className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {smallFeaturedLinks.map((link) => {
                          const thumbnailUrl = link.thumbnailImage 
                            ? (link.thumbnailImage.startsWith('data:') 
                                ? link.thumbnailImage 
                                : `${baseUrl}${link.thumbnailImage}`)
                            : null;
                          
                          return (
                            <a
                              key={link._id}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block"
                            >
                              <div 
                                className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                                style={{
                                  background: link.background || 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                                  minHeight: '120px'
                                }}
                              >
                                {/* Background Pattern/Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-4 h-full flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    {thumbnailUrl && (
                                      <div className="flex-shrink-0">
                                        <img
                                          src={thumbnailUrl}
                                          alt={link.title}
                                          className="w-10 h-10 rounded-lg object-cover shadow-lg"
                                          onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                          }}
                                        />
                                      </div>
                                    )}
                                    <div className="text-left">
                                      <h4 className="text-white font-bold text-base group-hover:text-purple-200 transition-colors duration-300">
                                        {link.title}
                                      </h4>
                                      <p className="text-white/80 text-sm">
                                        Small Link
                                      </p>
                                    </div>
                                  </div>
                                  
                                  {/* Arrow Icon */}
                                  <div className="flex-shrink-0">
                                    <svg 
                                      className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                                      fill="currentColor" 
                                      viewBox="0 0 20 20"
                                    >
                                      <path 
                                        fillRule="evenodd" 
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                        clipRule="evenodd" 
                                      />
                                    </svg>
                                  </div>
                                </div>
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-1000 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;

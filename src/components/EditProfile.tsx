/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useCallback } from "react";
import characterImg from "../../public/assets/aleximage.png";
import bground from "../../public/assets/lightbg.png";
import Thumbnail from "../../public/assets/edit-profile/thumbnail.svg";
import Call from "../../public/assets/edit-profile/call.svg";
import Map from "../../public/assets/edit-profile/map.svg";
import Mail from "../../public/assets/edit-profile/mail.svg";
import { Input } from "@/components/ui/input";
import * as Dialog from "@radix-ui/react-dialog";
import Cookies from "js-cookie";
import { useEffect } from "react";
import api from "@/service/api";
import { FaRegImage } from "react-icons/fa6";
import "../components/EditProfile.css";
import { RxCross2 } from "react-icons/rx";
import { HiDotsVertical } from "react-icons/hi";
import rightsideemojiimage from "../../public/assets/rightsidegoldenicon.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LinkImg from "../../public/assets/Link.png";
import SpotifyImg from "../../public/assets/Spotify.png";
import ShoppingBagImg from "../../public/assets/Shopingbag.png";
const colors = [
  "#7ecfa7",
  "#548a6e",
  "#f87171",
  "#fbbf24",
  "#34d399",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#c084fc",
  "#fb923c",
  "#4ade80",
  "#facc15",
  "#3b82f6",
];

type UserData = {
  fullName: string;
  username: string;
  profileImage: string;
  thumbnailImage: string;
  bio: string;
};
type MerchItem = {
  id(id: any): unknown;
  _id: string;
  title: string;
};
interface GalleryImage {
  _id: string;
  imageUrl: string;
}
type UploadedMedia = {
  id: string;
  url: string;
  isVideo: boolean;
};
const EditProfile = () => {
  // const [isCustomLinksOpen, setIsCustomLinksOpen] = useState(false);
  const [uploadedImg, setUploadedImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [isBioEnabled, setIsBioEnabled] = useState(false);

  const [isBigThumbnailOpen, setIsBigThumbnailOpen] = useState(false);
  const [isaddMultiLink, setIsAddMultiLink] = useState(false);
  // const [isAddBio, setIsAddBio] = useState(false);
  const [isaddMerch, setIsAddMerch] = useState(false);
  const [isEditMerch, setIsEditMerch] = useState(false);
  const [activeTab, setActiveTab] = useState("Solid");
  const [selectedColor, setSelectedColor] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [bioText, setBioText] = useState("");
  const [isBioUpdating, setIsBioUpdating] = useState(false);
  const [bigThumbnails, setBigThumbnails] = useState<any[]>([]);
  const [bigThumbType, setBigThumbType] = useState("");
  const [bigThumbTitle, setBigThumbTitle] = useState("");
  const [bigThumbUrl, setBigThumbUrl] = useState("");
  const [bigThumbImage, setBigThumbImage] = useState("");
  const userId = localStorage.getItem("userId");
  const [bigThumbPreview, setBigThumbPreview] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState("");
  const [merchData, setMerchData] = useState<MerchItem[]>([]);

  // const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploadedImages, setUploadedImages] = useState<GalleryImage[]>([]);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [contactExists, setContactExists] = useState(false);
  const [editMerchId, setEditMerchId] = useState<string | null>(null);

  const [isBioEnabled, setIsBioEnabled] = useState(false);
  const [galleryToggle, setGalleryToggle] = useState(false);
  const [featureLinkToggle, setFeatureLinkToggle] = useState(false);
  const [merchToggle, setMerchToggle] = useState(false);
  const [shoutsToggle, setShoutsToggle] = useState(false);
  const [isAddBio, setIsAddBio] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState<UploadedMedia[]>([]);

  const sections = [
    {
      heading: "Link",
      title: "Custom Links",
      subtitle: "Link section",
      image: LinkImg,
      // onClick: () => setIsCustomLinksOpen(true),
    },
    {
      heading: "Streaming",
      title: "Spotify",
      subtitle: "Music section",
      image: SpotifyImg,
    },
    {
      heading: "E commerce",
      title: "New Merch",
      subtitle: "Merch section",
      image: ShoppingBagImg,
    },
  ];

  const imageToShow = uploadedImg || characterImg;

  const handleBigThumbFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setBigThumbPreview(reader.result as string);
      setBigThumbImage("");
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchVisibilitySettings = async () => {
      try {
        const token = Cookies.get("token");
        const userId = localStorage.getItem("userId");
        if (!token) {
          console.error("Token not found");
          return;
        }

        const res = await api.get(`/api/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data;
        setIsBioEnabled(data?.visibilitySettings?.bio || false);
        setFeatureLinkToggle(data?.visibilitySettings?.featuredLinks || false);
        setMerchToggle(data?.visibilitySettings?.merch || false);
        setShoutsToggle(data?.visibilitySettings?.shouts || false);
        setGalleryToggle(data?.visibilitySettings?.gallery || false);
        setContactInfo(data?.visibilitySettings?.contactInfo || false);
      } catch (error) {
        console.error("Error fetching visibility settings:", error);
      }
    };

    fetchVisibilitySettings();
  }, []);

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

  //handle file change
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const token = Cookies.get("token");
      const formData = new FormData();
      formData.append("profileImage", file);

      const response = await api.patch(`/api/user/profile-image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUserData(response.data);
      setUploadedImg(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  // Function to handle the custom links tab
  const handleBioUpdate = async () => {
    setIsBioUpdating(true);
    try {
      const token = Cookies.get("token");

      await api.patch(
        "/api/user/bio",
        { bio: bioText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserData((prev) => ({
        ...prev!,
        bio: bioText,
      }));

      setIsAddBio(false);
    } catch (error) {
      console.error("Error updating bio:", error);
    } finally {
      setIsBioUpdating(false);
    }
  };

  useEffect(() => {
    if (userData?.bio) {
      setBioText(userData.bio);
    }
  }, [userData]);

  const handleAddBigThumbnail = async (
    title: string,
    url: string,
    thumbnailImage: string,
    type: string,
    background: string
  ) => {
    
    
    if (!title || !url || !type) {
      
      alert("Title, URL, and Thumbnail Type are required.");
      return;
    }
    setIsBioUpdating(true);
    try {
      const token = Cookies.get("token");
      const payload = {
        title,
        url,
        thumbnailImage,
        type,
        background,
      };

      await api.post(
        "/api/thumbnails",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsBigThumbnailOpen(false);
      setBigThumbTitle("");
      setBigThumbUrl("");
      setBigThumbImage("");
      setBigThumbPreview(null);
      setBigThumbType("");
      setSelectedColor("");
      fetchBigThumbnails();
    } catch (error) {
      console.error("Error adding big thumbnail:", error);
      alert("Failed to add thumbnail. Please try again.");
    } finally {
      setIsBioUpdating(false);
    }
  };

  // Function to fetch big thumbnails
  const fetchBigThumbnails = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      const res = await api.get(`/api/thumbnails/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBigThumbnails(res.data);
    } catch (err) {
      console.error("Error fetching thumbnails:", err);
    }
  }, [userId]);

  useEffect(() => {
    fetchBigThumbnails();
  }, [fetchBigThumbnails]);

  // Function to handle deleting a thumbnail
  const handleDelete = async (id: string) => {
    try {
      const token = Cookies.get("token");
      await api.delete(`/api/thumbnails/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBigThumbnails((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting thumbnail:", err);
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePostSubmit = async () => {
    const formData = new FormData();
    formData.append("category", category);
    formData.append("url", url);
    formData.append("title", title);
    formData.append("price", price);

    if (thumbnail) {
      formData.append("image", thumbnail);
    }

    const token = Cookies.get("token");

    try {
      await api.post("/api/merch", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Uploaded Successfully!");
      fetchMerch();
      resetForm();
      setIsAddMerch(false);
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    }
  };

  // PUT Handler
  const handleUpdateSubmit = async () => {
    console.log("Updating merch with ID:", editMerchId); // Debugging

    if (!editMerchId) {
      alert("Merch ID not found!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);

    if (thumbnail) {
      formData.append("image", thumbnail);
    }

    const token = Cookies.get("token");

    try {
      await api.put(`/api/merch/${editMerchId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Updated Successfully!");
      fetchMerch(); // Refresh merch list
      resetForm(); // Reset form fields
      setIsEditMerch(false); // Close dialog
    } catch (err) {
      console.error("Update Error:", err);
      alert("Update Failed");
    }
  };

  const resetForm = () => {
    setCategory("");
    setUrl("");
    setTitle("");
    setPrice("");
    setPreview("");
    setThumbnail(null);
    setEditMerchId(null); // Reset ID
  };

  // Function to fetch merch data
  const fetchMerch = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      const res = await api.get(`/api/merch/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMerchData(res.data.merch);
    } catch (err) {
      console.error("Error fetching merch data:", err);
    }
  }, [userId]);

  useEffect(() => {
    fetchMerch();
  }, [fetchMerch]);

  // Function to handle deleting a merch item
  const handleDeleteMerch = async (merchId: string) => {
    try {
      const token = Cookies.get("token");

      const res = await api.delete(`/api/merch/${merchId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Delete response:", res.data);
      setMerchData((prev) => prev.filter((item) => item._id !== merchId));
    } catch (err) {
      console.error("Error deleting merch item:", err);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        // const previewUrl = URL.createObjectURL(file);

        // setImagePreviews((prev) => [...prev, previewUrl]);
        handleUpload(file);
      });
    }
  };

  // Function to handle image upload
  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("galleryImage", file);

    const token = Cookies.get("token");

    try {
      const response = await api.post("/api/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUploadedImages();
      console.log("Upload success:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  // Function to fetch uploaded images
  const fetchUploadedImages = async () => {
    const token = Cookies.get("token");
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("No userId found in localStorage");
      return;
    }
    try {
      const response = await api.get(`/api/gallery/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUploadedImages(response.data.gallery);
    } catch (error) {
      console.error("Error fetching uploaded images:", error);
      setUploadedImages([]);
    }
  };

  // useEffect(() => {}, [uploadedImages]);

  useEffect(() => {
    fetchUploadedImages();
  }, []);

  const handleDeleteImage = async (imageId: string) => {
    const token = Cookies.get("token");

    try {
      await api.delete(`/api/gallery/${imageId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUploadedImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleSubmitContactInfo = async () => {
    if (!email || !phoneNumber || !websiteUrl) {
      alert("Please fill all fields.");
      return;
    }

    const token = Cookies.get("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      console.error("Missing token or userId");
      return;
    }

    try {
      if (contactExists) {
        const response = await api.put(
          "/api/contact-info",
          { email, phoneNumber, websiteUrl },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Contact info updated:", response.data);
        alert("Contact info updated successfully!");
      } else {
        // Create using POST
        const response = await api.post(
          "/api/contact-info",
          { email, phoneNumber, websiteUrl },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("Contact info added:", response.data);
        alert("Contact info added successfully!");
        setContactExists(true);
      }

      await fetchContactInfo();
    } catch (error) {
      console.error("Error submitting contact info:", error);
      alert("Failed to submit contact info.");
    }
  };

  const fetchContactInfo = useCallback(async () => {
    const token = Cookies.get("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      console.error("Missing token or userId");
      return;
    }

    try {
      const response = await api.get(`/api/contact-info/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data) {
        setEmail(response.data.email || "");
        setPhoneNumber(response.data.phoneNumber || "");
        setWebsiteUrl(response.data.websiteUrl || "");
        setContactExists(true);
      } else {
        setContactExists(false);
      }
    } catch (error) {
      console.error("Error fetching contact info:", error);
      setContactExists(false);
    }
  }, []);

  useEffect(() => {
    fetchContactInfo();
  }, [fetchContactInfo]);

  const handleToggle = async (
    section: string,
    currentValue: boolean,
    setterFunction: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const originalValue = currentValue;
    setterFunction(!currentValue);

    const success = await updateVisibilitySetting(section, !currentValue);
    if (!success) {
      setterFunction(originalValue);
    }
  };
  const updateVisibilitySetting = async (section: string, value: boolean) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.error("Token not found");
        return false;
      }

      // Correct Axios PATCH request
      await api.patch(
        "/api/user/visibility",
        { section, value },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return true;
    } catch (error) {
      console.error("Error updating visibility setting:", error);
      return false;
    }
  };

  // postshout
  const fetchShouts = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) return;

      const res = await api.get(`/api/shouts`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const shouts = res.data?.shouts || [];

      // Calculate counts for shouts and media
      calculateShoutAndMediaCounts(shouts);

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

  const [shoutMediaTab, setShoutMediaTab] = useState<"shots" | "media">(
    "shots"
  );

  // Count variables for shouts and media
  const [shoutCount, setShoutCount] = useState(0);
  const [mediaCount, setMediaCount] = useState(0);

  // Function to calculate counts from shouts data
  const calculateShoutAndMediaCounts = (shouts: any[]) => {
    let shoutsCount = 0;
    let mediaCount = 0;

    shouts.forEach((shout: any) => {
      if (shout.isMedia === true) {
        mediaCount++;
      } else {
        shoutsCount++;
      }
    });

    setShoutCount(shoutsCount);
    setMediaCount(mediaCount);
  };

  return (
    <div className="w-full h-[calc(100vh-30px)] mx-auto  ">
      {/* Mobile View */}

      <div
        className="bg-white rounded-[32px] bg-cover bg-center "
        style={{
          backgroundImage: `url("${bground}")`,
        }}
      >
        <div className="hidden">
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-[24px] p-4">
            <div className="text-center">
              <div className="relative w-[120px] h-[120px] mx-auto mb-4">
                <img
                  src={imageToShow}
                  alt="Profile character"
                  className="w-full h-full object-cover rounded-full"
                />
                <button
                  onClick={handleUploadClick}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">+</span>
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
              <h1 className="text-xl font-bold mb-1">
                {userData?.fullName || "Full Name"}
              </h1>
              <p className="text-gray-600 text-sm">
                @{userData?.username || "username"}
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {/* Content Section (Mobile) */}
            <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-[16px] p-4">
              <h3 className="font-semibold mb-3">Add Content</h3>
              <div className="space-y-3">
                {/* Custom Links */}
                <div
                  className="bg-white rounded-xl p-3 flex items-center justify-between cursor-pointer"
                // onClick={() => setIsCustomLinksOpen(true)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      🔗
                    </div>
                    <div>
                      <p className="font-medium">Custom Links</p>
                      <p className="text-sm text-gray-500">Link section</p>
                    </div>
                  </div>
                  <button className="text-2xl font-bold text-gray-500">
                    +
                  </button>
                </div>

                {/* Spotify */}
                <div className="bg-white rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <img
                        src="/src/assets/Spotify.png"
                        alt="Spotify"
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Spotify</p>
                      <p className="text-sm text-gray-500">Music section</p>
                    </div>
                  </div>
                  <button className="text-2xl font-bold text-gray-500">
                    +
                  </button>
                </div>

                {/* New Merch */}
                <div className="bg-white rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      🛍️
                    </div>
                    <div>
                      <p className="font-medium">New Merch</p>
                      <p className="text-sm text-gray-500">Merch section</p>
                    </div>
                  </div>
                  <button className="text-2xl font-bold text-gray-500">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div
        className="rounded-[32px] bg-center bg-cover"
        style={{
          backgroundImage: `url("${bground}")`,
        }}
      >
        <div className="flex flex-col lg:flex-row lg:gap-5 2xl:gap-4 w-full h-full">
          <div className="flex flex-col gap-4 md:w-[500px] h-auto md:h-full md:max-h-[calc(100vh-30px)] md:overflow-y-auto p-5">
            {/* Add photo card */}
            <div className="bg-[#dff3e9]/60 border-1 rounded-[24px] border-[#7ecfa7]">
              <div className="rounded-[24px] p-6">
                <div>
                  <h1 className="text-xl font-bold mb-1">
                    {userData?.fullName || "Full Name"}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    @{userData?.username || "username"}
                  </p>
                </div>
                <img
                  src={
                    userData?.profileImage
                      ? `http://3.111.146.115:5000${userData.profileImage}`
                      : "/default-profile.png"
                  }
                  alt="Profile character"
                  className="w-full h-[400px] object-contain mt-4"
                />

                <button
                  onClick={handleUploadClick}
                  className="w-full  bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-2 mt-3  rounded-full font-medium text-center cursor-pointer"
                  disabled={isUploading}
                >
                  Add Photo
                  {isUploading ? "Uploading..." : ""}
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
            </div>

            {/* Bio card */}
            <div className="bg-[#dff3e9]/60 border rounded-[24px] border-[#7ecfa7]">
              <div className="">
                <div className="flex items-center justify-between rounded-[24px] p-6">
                  <label className="text-[32px] font-bold text-black">
                    Bio
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={isBioEnabled}
                      onChange={() =>
                        handleToggle("bio", isBioEnabled, setIsBioEnabled)
                      }
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${isBioEnabled ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${isBioEnabled
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                
                {/* Add Bio Button */}
                <div className="px-6 pb-2">
                  <button
                    onClick={() => setIsAddBio(true)}
                    className="w-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-3 rounded-full font-medium text-center cursor-pointer hover:from-[#8dd9b8] hover:to-[#3f6454] transition-all duration-200"
                  >
                    {userData?.bio ? "Edit Bio" : "Add Bio"}
                  </button>
                </div>

                {/* Bio Display Area */}
                {userData?.bio && (
                  <div className="px-6 pb-6">
                    <div className="p-4">
                      <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap break-words">
                        {userData.bio}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Links card*/}
            <div className="bg-[#dff3e9]/60 border border-[#7ecfa7] rounded-[24px]">
              <div className="rounded-[24px] p-6">
                {/* Toggle Header */}

                <div className="flex items-center justify-between rounded-[24px]">
                  <label className="text-[32px] font-bold text-black">
                    Featured Links
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={featureLinkToggle}
                      onChange={() =>
                        handleToggle(
                          "featuredLinks",
                          featureLinkToggle,
                          setFeatureLinkToggle
                        )
                      }
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${featureLinkToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${featureLinkToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>

                <div className="w-full space-y-4">
                  {/* Large Thumbnails - One per row */}
                  <div>
                    {bigThumbnails
                      .filter((item) => item.type === "large")
                      .map((item) => (
                        <div
                          key={item._id}
                          className="  py-1 rounded-lg flex flex-col items-center justify-center "
                        >
                          <div className=" relative ">
                            <RxCross2
                              className="absolute top-2 right-2 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer hover:bg-gray-300 transition"
                              onClick={() => handleDelete(item._id)}
                            />

                            <p className="absolute top-40 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm text-center ">
                              {item.title}
                            </p>
                            <img
                              src={
                                item.thumbnailImage
                                  ? item.thumbnailImage.startsWith("data:image")
                                    ? item.thumbnailImage
                                    : `http://3.111.146.115:5000${item.thumbnailImage}`
                                  : "/default-thumbnail.png"
                              }
                              alt={item.title}
                              className=" h-48 w-[420px] mb-2 rounded   object-cover"
                            />
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Small Thumbnails - 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2  ">
                    {bigThumbnails
                      .filter((item) => item.type === "small")
                      .map((item) => (
                        <div
                          key={item._id}
                          className="flex flex-col items-center justify-center ml-24"
                        >
                          <div className="relative w-72 h-36 rounded overflow-hidden">
                            <RxCross2
                              className="absolute top-2 right-2 mr-20 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer transition"
                              onClick={() => handleDelete(item._id)}
                            />

                            <p className="absolute top-28 left-[50%] ml-[-146px] text-white font-bold text-sm text-center w-[205px]">
                              {item.title}
                            </p>

                            <img
                              src={
                                item.thumbnailImage
                                  ? item.thumbnailImage.startsWith("data:image")
                                    ? item.thumbnailImage
                                    : `http://3.111.146.115:5000${item.thumbnailImage}`
                                  : "/default-thumbnail.png"
                              }
                              alt={item.title}
                              className="w-[205px] h-full object-cover rounded"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div
                  className="m-2 py-6 px-4 rounded-lg flex flex-col w-full items-center justify-center bg-gradient-to-r from-[#7ecfa7] to-[#53886c]"
                  onClick={() => setIsBigThumbnailOpen(true)}
                >
                  <img
                    src={Thumbnail}
                    alt="Big Thumbnail"
                    className="object-contain h-20 mb-2"
                  />
                  <p className="text-[16px] font-normal text-white">
                    Add Big Thumbnail link
                  </p>
                </div>

                {/* Small Thumbnail Grid */}
                <div
                  className="flex flex-col md:flex-row w-full gap-4 m-2"
                  onClick={() => setIsBigThumbnailOpen(true)}
                >
                  {[1, 2].map((_, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (idx === 0) {
                          setIsAddMultiLink(true);
                          console.log("Add Multi Link clicked", isaddMultiLink);
                        } else {
                          setIsAddMultiLink(false);
                        }
                      }}
                      className="flex-1 py-6 px-4 rounded-lg flex flex-col items-center justify-center bg-gradient-to-r from-[#7ecfa7] to-[#53886c]"
                    >
                      <img
                        src={Thumbnail}
                        alt={`Small Thumbnail ${idx + 1}`}
                        className="object-contain h-16 mb-2"
                      />
                      <p className="text-[16px] font-normal text-white text-center">
                        Add Small Thumbnail link
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleUploadClick}
                  className="w-full mx-2 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-2 pb-2 rounded-full font-medium text-center cursor-pointer"
                >
                  + Add No Thumbnail link
                </button>
              </div>
            </div>

            {/* Merch card */}
            <div className="bg-[#dff3e9]/60 border-1 rounded-[24px] border-[#7ecfa7]">
              <div className="">
                <div className="flex items-center justify-between rounded-[24px] p-6">
                  <label className="text-[32px] font-bold text-black">
                    Merch ({merchData.length})
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={merchToggle}
                      onChange={() =>
                        handleToggle("merch", merchToggle, setMerchToggle)
                      }
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${merchToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${merchToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <>
                  {merchData.map((item, index) => (
                    <div key={item._id} className="flex justify-center px-4">
                      <div
                        className="flex flex-col md:flex-row w-full max-w-md items-center justify-between bg-gradient-to-r from-[#98e6c3] to-[#4a725f] rounded-2xl p-4 shadow-lg space-y-4 md:space-y-0 mb-4"
                      >
                        <div className="text-center md:text-left">
                          <p className="text-xl sm:text-2xl font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-xl sm:text-2xl font-semibold text-white mt-1">
                            Item (1)
                          </p>
                        </div>

                        <div className="relative">
                          <div
                            className="text-white text-2xl cursor-pointer"
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                          >
                            <DropdownMenu>
                              <DropdownMenuTrigger>
                                {" "}
                                <HiDotsVertical />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f]">
                                <DropdownMenuItem
                                  className="text-white hover:bg-green-300 text-lg px-4 py-1 rounded"
                                  onClick={() => {
                                    console.log("Selected Item:", item); // Debugging
                                    setIsEditMerch(true);
                                    setEditMerchId(String(item._id)); // Use _id from API
                                    setTitle(item.title);
                                  }}
                                >
                                  Rename
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                  className="   text-white     hover:bg-green-300  text-lg px-4 py-1 rounded"
                                  onClick={() => handleDeleteMerch(item._id)}
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>

                <div className="flex flex-col md:flex-row items-center justify-between pb-6 px-6">
                  <p
                    className="text-[16px] font-normal text-[#EA00FF]"
                    onClick={() => setIsAddMerch(true)}
                  >
                    Manage Merch
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery card */}
            <div className="bg-[#dff3e9]/60 border border-[#7ecfa7] rounded-[24px]">
              <div className="rounded-[24px] p-6">
                {/* Toggle Header */}
                <div className="flex items-center justify-between rounded-[24px]">
                  <label className="text-[32px] font-bold text-black">
                    Gallery
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={galleryToggle}
                      onChange={() =>
                        handleToggle("gallery", galleryToggle, setGalleryToggle)
                      }
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${galleryToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${galleryToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <div className="flex justify-center gap-3 ">
                  <div className="flex flex-col items-center">
                    {/* Upload Button */}

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 ">
                      {uploadedImages.map((imageObj) => (
                        <div
                          key={imageObj._id}
                          className="relative rounded-lg flex flex-col items-center w-32 h-32 sm:w-28 sm:h-28 xs:w-24 xs:h-24"
                        >
                          <RxCross2
                            className="absolute top-1 right-1 sm:top-1 sm:right-1 bg-gray-200 text-red-600 p-1 rounded-full w-5 h-5 sm:w-4 sm:h-4 cursor-pointer hover:bg-gray-300 transition"
                            onClick={() => handleDeleteImage(imageObj._id)}
                          />
                          <img
                            src={`http://3.111.146.115:5000/${imageObj.imageUrl}`}
                            alt="Uploaded Image"
                            className="object-cover w-full h-full rounded-2xl mb-2"
                          />
                        </div>
                      ))}

                      <div className="flex justify-center items-center mb-5">
                        <label className="cursor-pointer  bg-gradient-to-r from-[#7ecfa7] to-[#53886c] rounded-lg p-1 flex flex-col items-center">
                          <div className=" bg-gradient-to-r from-[#7ecfa7] to-[#53886c] rounded-lg p-2 flex flex-col items-center">
                            <img
                              src={Thumbnail}
                              alt="Big Thumbnail"
                              className="object-contain w-24 h-14 mb-2"
                            />
                          </div>
                          <p className="text-[16px] font-normal text-white text-center">
                            Add photo
                          </p>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageSelect}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small Thumbnail Grid */}
              </div>
            </div>

            {/* Contact info card */}
            <div className="bg-[#dff3e9]/60 border border-[#7ecfa7] rounded-[24px]">
              <div className="rounded-[24px] p-6">
                <div className="flex items-center justify-between rounded-[24px]">
                  <label className="text-[32px] font-bold text-black">
                    Contact info
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={contactInfo}
                      onChange={() =>
                        handleToggle("contactInfo", contactInfo, setContactInfo)
                      }
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${contactInfo ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${contactInfo
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <div className="flex items-center justify-center w-full space-x-4">
                    <img src={Mail} alt="Email" className="object-contain" />
                    <Input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-[#c2e2d2] px-2 py-4 text-[24px] font-medium !border-[#6fb793] rounded-lg focus:outline-none focus:ring-0 border"
                    />
                  </div>

                  <div className="flex items-center justify-center w-full space-x-4">
                    <img src={Call} alt="Phone" className="object-contain" />
                    <Input
                      type="text"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 bg-[#c2e2d2] px-2 py-4 text-[24px] font-medium !border-[#6fb793] rounded-lg focus:outline-none focus:ring-0 border"
                    />
                  </div>

                  <div className="flex items-center justify-center w-full space-x-4">
                    <img src={Map} alt="Website" className="object-contain" />
                    <Input
                      type="text"
                      placeholder="Enter website URL"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="flex-1 bg-[#c2e2d2] px-2 py-4 text-[24px] font-medium !border-[#6fb793] rounded-lg focus:outline-none focus:ring-0 border"
                    />
                  </div>

                  <button
                    onClick={handleSubmitContactInfo}
                    className="w-full mx-2 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white py-2 rounded-full font-medium text-center cursor-pointer"
                  >
                    {contactExists
                      ? "Update Contact Info"
                      : "+ Add Contact Info"}
                  </button>
                </div>
              </div>
            </div>

            {/* Shouts/ Media */}
            <div className="bg-[#dff3e9]/60 border-1 rounded-[24px] border-[#7ecfa7]">
              <div className="">
                <div className="flex items-center justify-between rounded-[24px] p-6">
                  <label className="text-[32px] font-bold text-black">
                    Shouts/ Media
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      id="bio-toggle"
                      className="sr-only"
                      checked={shoutsToggle}
                      onChange={() =>
                        handleToggle("shouts", shoutsToggle, setShoutsToggle)
                      }
                    />
                    <div
                      className={`block w-14 h-8 rounded-full bg-white transition-colors duration-300 ${shoutsToggle ? "bg-[#72bb96]" : "bg-[#d1d5db]"
                        }`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 w-6 h-6  rounded-full transition-transform duration-300 ${shoutsToggle
                        ? "translate-x-6 bg-[#72bb96]"
                        : "bg-[#d1d5db]"
                        }`}
                    ></div>
                  </label>
                </div>

                {/* Top Tabs */}
                <div className="flex items-end justify-center p-4 min-w-[238px] ">
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
                        onClick={() => setShoutMediaTab("shots")}
                        className={`px-4 md:px-6 py-3 rounded-full text-[20px] font-normal ${shoutMediaTab === "shots"
                          ? "bg-gradient-to-r from-[#7ECFA7] to-[#53886C]"
                          : "hover:bg-white/10"
                          }`}
                      >
                        Shots
                      </button>
                      <button
                        onClick={() => setShoutMediaTab("media")}
                        className={`px-4 md:px-6 py-3 rounded-full text-[20px] font-normal ${shoutMediaTab === "media"
                          ? "bg-gradient-to-r from-[#7ECFA7] to-[#53886C]"
                          : "hover:bg-white/10"
                          }`}
                      >
                        Media
                      </button>
                    </div>
                  </div>
                </div>

                {shoutMediaTab === "shots" ? (
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

                    {Array.isArray(uploadedMedia) && shoutCount < 5 ? (
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
                          <p className="text-black text-lg">Upload shouts</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}

                  </div>
                ) : (
                  <div className="  flex flex-col gap-4 mb-6 w-full space-y-4 max-w-[242px] h-[600px] overflow-y-auto scrollbar-hide">
                    {uploadedMedia
                      .filter((item) => item.isVideo)
                      .map((item) => (
                        <div key={item.id} className="relative">
                          <RxCross2
                            className="absolute top-2 right-2 bg-gray-200 text-red-600 p-1 rounded-full w-6 h-6 cursor-pointer hover:bg-gray-300 transition z-10"
                            onClick={() => deleteShout(item.id)}
                          />
                          <video
                            src={item.url}
                            controls
                            className="w-[242px] h-[226px] rounded-2xl object-cover"
                          />
                        </div>
                      ))}


                    {Array.isArray(uploadedMedia) && mediaCount < 1 ? (
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
                          <p className="text-black text-lg">Upload Media</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}


                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Add Content */}
          <div className="flex-1 pb-6 h-auto md:max-h-[calc(100vh-30px)] md:overflow-y-auto">
            <h2 className="text-xl font-semibold m-4">Add Content</h2>
            <p className="text-gray-600 text-sm m-6">
              Interact with the menu elements below. Let's first create profile
              elements on the left to open dynamic support page and set them.
            </p>

            <div className="flex flex-col space-y-4 m-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (section.heading === "E commerce") {
                      setIsAddMerch(true);
                    } else if (section.heading === "Link") {
                      setIsBigThumbnailOpen(true);
                    }
                  }}
                >
                  <h1>{section.heading}</h1>
                  <div className="w-full flex items-center justify-between bg-gradient-to-r from-[#98e6c3] to-[#4a725f] p-4 rounded-xl border shadow-sm cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <img src={section.image} alt={section.title} />
                      <div>
                        <h3 className="font-medium text-white">
                          {section.title}
                        </h3>
                        <p className="text-sm text-white/90">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                    <button className="text-2xl font-bold text-white hover:text-gray-700">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Dialog.Root
        open={isBigThumbnailOpen}
        onOpenChange={setIsBigThumbnailOpen}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 h-[630px] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-lg focus:outline-none flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <Dialog.Title className="text-2xl font-bold text-white">
                Add Big Thumbnail link
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="text-white hover:text-gray-300 focus:outline-none"
                  aria-label="Close"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6l12 12M6 18L18 6"
                    />
                  </svg>
                </button>
              </Dialog.Close>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-6 py-4">
              <div className="flex flex-col gap-3">
                {/* Title Input */}
                <div className="flex flex-col gap-1">
                  <p className="text-white text-sm">Title</p>
                  <Input
                    type="text"
                    placeholder="Enter title"
                    value={bigThumbTitle}
                    onChange={(e) => setBigThumbTitle(e.target.value)}
                    className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-sm font-medium !border-white rounded-lg focus:outline-none border"
                  />
                </div>
                {/* URL Input */}
                <div className="flex flex-col gap-1">
                  <p className="text-white text-sm">URL</p>
                  <Input
                    type="text"
                    placeholder="Enter URL"
                    value={bigThumbUrl}
                    onChange={(e) => setBigThumbUrl(e.target.value)}
                    className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-sm font-medium !border-white rounded-lg focus:outline-none border"
                  />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col gap-1">
                  <div className="border-2 border-white border-dashed rounded-lg p-3">
                    <h1 className="text-sm text-white mb-2">
                      Image/icon(optional)
                    </h1>
                    <div
                      className="flex gap-2 cursor-pointer items-center justify-center p-2 border border-white rounded-md hover:bg-white/10 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FaRegImage className="text-lg text-white" />
                      <p className="text-sm text-white">Uploads thumbnail</p>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleBigThumbFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Thumbnail Type */}
                <div className="flex flex-col gap-1">
                  <p className="text-white text-sm">Thumbnail Type111</p>
                  <select
                    value={bigThumbType}
                    onChange={(e) => setBigThumbType(e.target.value)}
                    className="flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-sm font-medium !border-white rounded-lg focus:outline-none border text-white"
                  >
                    <option value="" disabled>
                      Select thumbnail type
                    </option>
                    <option className="bg-green-300" value="large">
                      Large Thumbnail
                    </option>
                    <option className="bg-green-300" value="small">
                      Small Thumbnail
                    </option>
                  </select>
                </div>
                {/* Color Picker */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <p className="text-white text-sm">Background</p>
                    <div className="p-[2px] rounded-full inline-block bg-white">
                      <div className="inline-flex backdrop-blur-sm rounded-full p-1 w-full h-full">
                        <button
                          onClick={() => setActiveTab("Solid")}
                          className={`px-2 rounded-full text-xs font-normal transition-all duration-200 ${activeTab === "Solid"
                            ? "bg-gradient-to-r from-[#ff6200] to-[#ff00ee] text-white"
                            : "hover:bg-white/10"
                            }`}
                        >
                          Solid
                        </button>
                        <button
                          onClick={() => setActiveTab("Gradient")}
                          className={`px-2 rounded-full text-xs font-normal transition-all duration-200 ${activeTab === "Gradient"
                            ? "bg-gradient-to-r from-[#ff6200] to-[#ff00ee] text-white"
                            : "hover:bg-white/10"
                            }`}
                        >
                          Gradient
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Color Info */}
                  <div className="h-6">
                    {selectedColor ? (
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white"
                          style={{ backgroundColor: selectedColor }}
                          title={selectedColor}
                        ></div>
                        <span className="text-white text-xs">
                          {selectedColor}
                        </span>
                      </div>
                    ) : (
                      <div className="text-white text-xs">No color selected</div>
                    )}
                  </div>

                  {/* Color Options */}
                  <div className="bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] border border-white rounded-lg p-2 shadow-lg">
                    <p className="text-white text-xs mb-1">Present Colors</p>
                    <div className="flex flex-wrap gap-1">
                      {colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          className="w-6 h-6 rounded-full border hover:border-white transition-colors duration-200"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preview Section moved here */}
                <div className="flex flex-col gap-1 border-t border-white/20 pt-3">
                  <p className="text-white text-sm">Preview</p>
                  <div
                    className="py-16 border-2 border-white border-dashed shadow-lg rounded-lg flex items-center justify-center min-h-[120px]"
                    style={{
                      background:
                        selectedColor && activeTab === "Solid"
                          ? selectedColor
                          : "linear-gradient(to right, #7ecfa7, #53886c)",
                    }}
                  >
                    {bigThumbPreview ? (
                      <div className="text-center">
                        <img
                          src={bigThumbPreview}
                          alt="Thumbnail Preview"
                          className="h-20 object-contain rounded-lg mx-auto mb-1"
                        />
                        {bigThumbTitle && (
                          <p className="text-white text-xs font-medium">{bigThumbTitle}</p>
                        )}
                      </div>
                    ) : bigThumbImage ? (
                      <div className="text-center">
                        <img
                          src={bigThumbImage}
                          alt="Thumbnail Preview"
                          className="h-20 object-contain rounded-lg mx-auto mb-1"
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                        {bigThumbTitle && (
                          <p className="text-white text-xs font-medium">{bigThumbTitle}</p>
                        )}
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-white/60 text-xs">Preview will appear here</p>
                        {bigThumbTitle && (
                          <p className="text-white text-xs font-medium mt-1">{bigThumbTitle}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Button */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] rounded-b-2xl">
              <button
                className="w-full bg-white text-[#202020] py-2 rounded-full font-medium text-center cursor-pointer text-sm"
                onClick={() =>
                  handleAddBigThumbnail(
                    bigThumbTitle,
                    bigThumbUrl,
                    bigThumbPreview || bigThumbImage,
                    bigThumbType,
                    selectedColor
                  )
                }
                disabled={isBioUpdating}
              >
                {isBioUpdating ? "Adding..." : "Add"}
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={isAddBio} onOpenChange={setIsAddBio}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] p-6 shadow-lg focus:outline-none">
            {/* Cross Icon */}
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-2xl font-bold mb-4 text-white">
              Add Bio Link
            </Dialog.Title>
            {/* Modal body content here */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-white">Post</p>
                <textarea
                  placeholder="Write your post here..."
                  rows={10}
                  value={bioText}
                  onChange={(e) => setBioText(e.target.value)}
                  className="!placeholder-white focus-visible:ring-0 shadow-lg flex-1 bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 text-[24px] font-medium !border-white rounded-lg focus:outline-none focus:ring-0 focus:shadow-none border"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="w-full bg-white text-[#202020] py-2 rounded-full font-medium text-center cursor-pointer"
                onClick={handleBioUpdate}
                disabled={isBioUpdating}
              >
                {isBioUpdating ? "Updating..." : "Add"}
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={isaddMerch} onOpenChange={setIsAddMerch}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] p-6 shadow-lg focus:outline-none">
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-2xl font-bold text-white">
              Add Merch
            </Dialog.Title>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex flex-col gap-1">
                <p className="text-white">Select Type</p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="text-white bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 rounded-lg"
                >
                  <option value="" disabled>
                    Choose type
                  </option>
                  <option className="bg-[#72bb96]" value="youtube">
                    YouTube
                  </option>
                  <option className="bg-[#72bb96]" value="vimeo">
                    Vimeo
                  </option>
                  <option className="bg-[#72bb96]" value="spotify">
                    Spotify
                  </option>
                  <option className="bg-[#72bb96]" value="other">
                    Other
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Embed Link</p>
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  placeholder="Embed link"
                  className="text-white bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Title</p>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title"
                  className="text-white bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">$USD</p>
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="text-white bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#98e6c3] cursor-pointer"
                >
                  <option className="bg-[#548a6e]" value="" disabled>
                    Select Price Range
                  </option>
                  <option className="bg-[#548a6e]" value="500-1000">
                    500$ - 1000$
                  </option>
                  <option className="bg-[#548a6e]" value="1500-3000">
                    1500$ - 3000$
                  </option>
                  <option className="bg-[#548a6e]" value="300-5000">
                    300$ - 5000$
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-white">Cover</p>
                <label
                  htmlFor="thumbnailUpload"
                  className="cursor-pointer py-4 border border-white rounded-lg flex flex-col items-center justify-center transition-all overflow-hidden"
                  style={{
                    backgroundImage: preview ? `url(${preview})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    width: "100%",
                    borderRadius: "12px",
                  }}
                >
                  {!preview && (
                    <>
                      <p className="text-white">Upload thumbnail photo</p>
                      <p className="text-white text-sm">
                        500x500px, under 10MB
                      </p>
                    </>
                  )}
                  <input
                    type="file"
                    id="thumbnailUpload"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="mt-4">
              <button
                className="w-full bg-white text-[#202020] py-2 rounded-full font-medium"
                onClick={handlePostSubmit}
              >
                Add
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={isEditMerch} onOpenChange={setIsEditMerch}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] p-6 shadow-lg focus:outline-none">
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-2xl font-bold text-white">
              Update Title
            </Dialog.Title>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex flex-col gap-1">
                <p className="text-white">Title</p>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter new title"
                  className="text-white bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] px-2 py-2 rounded-lg"
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                className="w-full bg-white text-[#202020] py-2 rounded-full font-medium"
                onClick={handleUpdateSubmit}
              >
                Update
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default EditProfile;

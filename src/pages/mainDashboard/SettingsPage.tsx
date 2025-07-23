import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Greaterthen from "../../../public/assets/greaterthen.png";
import bground from "../../../public/assets/lightbg.png";
import Cookies from "js-cookie";
import api from "@/service/api";
import * as Dialog from "@radix-ui/react-dialog";
import { Eye, EyeOff } from "lucide-react";

// UserData type (update as per your backend response)
type UserData = {
  fullName?: string;
  username?: string;
  dateOfBirth?: string;
  interests?: string;
  email?: string;
};

const menuItems = [
  { key: "personal-info", label: "Personal Info" },
  { key: "subscriptions", label: "Subscriptions" },
  { key: "terms", label: "Terms & Conditions" },
  { key: "privacy", label: "Privacy policy" },
  { key: "about", label: "About" },
];

const Settings = () => {
  const [activeMenu, setActiveMenu] = useState("personal-info");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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
        console.log("userData:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  const formattedDate = userData?.dateOfBirth
    ? new Date(userData.dateOfBirth).toLocaleDateString("en-GB")
    : "";

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const token = Cookies.get("token");
      await api.put(
        "/api/user/change-password",
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setIsChangePasswordOpen(false), 1500); // modal close after success
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        "Failed to change password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-2 md:p-4 h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bground})` }}>
      <div className=" rounded-[32px] p-4 md:p-6 bg-white/40 bg-cover h-full">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Settings Menu */}
          <div className="w-full lg:w-[300px] lg:flex-shrink-0">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="w-full p-[2px] rounded-full ">
                <Input
                  type="text"
                  placeholder="Search Here"
                  className="w-full px-4 py-7 text-[24px] font-medium !border-[#6fb793] rounded-full focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none border-1 [background:linear-gradient(to_right,_#dff3e9,_#d4e1da)]"
                />
              </div>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 ">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition 
                    ${activeMenu === item.key
                      ? "bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3]"
                      : "hover:bg-gray-50"
                    }`}
                  onClick={() => setActiveMenu(item.key)}
                >
                  <span className="text-[20px] font-medium text-black">
                    {item.label}
                  </span>
                  <img
                    src={Greaterthen}
                    alt={item.label}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 mt-6 lg:mt-0">
            {activeMenu === "personal-info" && (
              <>
                <h1 className="text-[32px] font-bold mb-2 text-black">
                  Personal Info
                </h1>
                <p className="text-[15px] text-normal text-black mb-8">
                  Here you can change your name, username, email and phone
                  number the information you write login and personalize your
                  account.
                </p>
                <div className="mt-19 flex flex-col gap-4">
                  <div className="flex flex-row justify-between mb-4">
                    <p className="text-[20px] font-medium text-black">Name</p>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-[16px] font-normal text-black">{userData?.fullName || ""}</p>
                      <img src={Greaterthen} alt="greater than" className="object-contain w-[22px] h-[22px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-4">
                    <p className="text-[20px] font-medium text-black">Username</p>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-[16px] font-normal text-black">@{userData?.username || ""}</p>
                      <img src={Greaterthen} alt="greater than" className="object-contain w-[22px] h-[22px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-4">
                    <p className="text-[20px] font-medium text-black">dateOfBirth</p>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-[16px] font-normal text-black">{formattedDate}</p>
                      <img src={Greaterthen} alt="greater than" className="object-contain w-[22px] h-[22px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-4">
                    <p className="text-[20px] font-medium text-black">My Interests</p>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-[16px] font-normal text-black">{userData?.interests || ""}</p>
                      <img src={Greaterthen} alt="greater than" className="object-contain w-[22px] h-[22px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mb-4">
                    <p className="text-[20px] font-medium text-black">Email</p>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-[16px] font-normal text-black">{userData?.email || ""}</p>
                      <img src={Greaterthen} alt="greater than" className="object-contain w-[22px] h-[22px]" />
                    </div>
                  </div>
                  {/* Change Password Option */}
                  <div
                    className="flex flex-row justify-between mb-4 cursor-pointer"
                    onClick={() => setIsChangePasswordOpen(true)}
                  >
                    <p className="text-[20px] font-medium text-black">Change Password</p>
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-[16px] font-normal text-black">*********</p>
                      <img src={Greaterthen} alt="greater than" className="object-contain w-[22px] h-[22px]" />
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* You can add more conditions for other menu items here */}
          </div>
        </div>
      </div>
      <Dialog.Root open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#7ecfa7] to-[#548a6e] p-6 shadow-lg focus:outline-none"
            aria-describedby="change-password-desc"
          >
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-700 focus:outline-none"
                aria-label="Close"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </Dialog.Close>
            <Dialog.Title className="text-2xl font-bold mb-4 text-white text-center ">
              Change Password
            </Dialog.Title>
            {/* <div id="change-password-desc">Enter your current and new password below.</div> */}
            <form onSubmit={handleChangePassword}>
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-80">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={e => setCurrentPassword(e.target.value)}
                    className="bg-white/80 text-black px-4 py-3 rounded-xl mb-2 text-lg font-semibold placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ecfa7] w-full pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowCurrentPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="relative w-80">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    className="bg-white/80 text-black px-4 py-3 rounded-xl mb-2 text-lg font-semibold placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ecfa7] w-full pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="relative w-80">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="bg-white/80 text-black px-4 py-3 rounded-xl mb-2 text-lg font-semibold placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7ecfa7] w-full pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                  ) : (
                      <Eye className="h-5 w-5" />
                  )}
                  </button>
                </div>

                {error && <div className="text-red-500 mb-2">{error}</div>}
                {success && <div className="text-green-600 mb-2">{success}</div>}
                <div className="flex justify-center gap-4 mt-4 w-full">
                  <button
                    type="button"
                    className="w-32 bg-white text-[#202020] py-2 rounded-full font-medium text-center cursor-pointer shadow"
                    onClick={() => setIsChangePasswordOpen(false)}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-32 bg-white text-[#202020] py-2 rounded-full font-medium text-center cursor-pointer shadow"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Settings;

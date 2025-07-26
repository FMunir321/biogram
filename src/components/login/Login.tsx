import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import logo from "../../../public/assets/loginlogo.png";
import groupBg from "../../../public/assets/group.png";
import api from "@/service/api";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import MotionCards from "./MotionCardForLogin";


// Spinner component
const Spinner = () => (
  <div className="flex justify-center items-center">
    <ClipLoader color="#98e6c3" size={20} />  
  </div>
);
const people = [
  {
    name: "Eliza",
    tag: "@elizaSocial.com",
    role: "Flush",
    imagePath: "/assets/Rectangle79.jpg",
  },
  {
    name: "Chan Ja HO",
    tag: "@chan567james.com",
    role: "Blogger",
    imagePath: "/assets/Rectangle80.jpg",
  },
  {
    name: "Sara James",
    tag: "@sara123james.com",
    role: "Designer",
    imagePath: "/assets/Rectangle77.jpg",
  },
  {
    name: "James Max",
    tag: "@james555.com",
    role: "Actor",
    imagePath: "/assets/Rectangle76.jpg",
  },
  {
    name: "Alex",
    tag: "@alexcraft.com",
    role: "Slicer",
    imagePath: "/assets/Rectangle78.jpg",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "", // ✅ use 'identifier' to match backend
    password: "",
  });
  const [focusedField, setFocusedField] = useState({
    identifier: false,
    password: false,
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  };

  const handleBlur = (fieldName: string) => {
    setFocusedField((prev) => ({
      ...prev,
      [fieldName]: false,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post("/api/auth/login", {
        identifier: formData.identifier,
        password: formData.password,
      });

      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      localStorage.setItem("otpToken", response.data.otpToken || "");
      localStorage.setItem("isVerified", response.data.isVerified || "false");

      
      console.log(response.data);
      setLoading(false);
      navigate("/otp");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response?.data?.error || "Login failed. Please check your credentials.");
    } 
  };

  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section (Images) */}
      <div className="hidden md:flex md:w-1/2 p-0 md:p-6 justify-end items-center bg-white">
        <div className="flex gap-4 md:gap-10 w-full justify-end">
          <MotionCards people={people}  />
          <div className="mt-12">
          <MotionCards people={people} reverse={true}  />
          </div>
         
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen relative overflow-hidden bg-white">
        <img
          src={groupBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-8 pointer-events-none z-0"
        />
        <div className="w-full max-w-[420px] px-4 sm:px-6 mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <img
              src={logo}
              alt="Biogram"
              className="mx-auto mb-2 w-[120px] sm:w-[160px] h-auto object-contain"
            />
            <p className="text-[#000000] text-xs sm:text-sm mt-1">
              Networking just got an upgrade
            </p>
          </div>

          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="identifier"
                value={formData.identifier}
                onChange={(e) =>
                  handleInputChange("identifier", e.target.value)
                }
                onFocus={() => handleFocus("identifier")}
                onBlur={() => handleBlur("identifier")}
                className="w-full h-12 px-4 rounded-[10px] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#98e6c3] focus:ring-1 focus:ring-[#98e6c3] bg-white transition-all duration-200"
                placeholder={
                  !focusedField.identifier && !formData.identifier
                    ? "Email or Phone Number"
                    : ""
                }
              />
              <label
                htmlFor="identifier"
                className={`absolute left-3 transition-all duration-200 pointer-events-none bg-white px-1 ${
                  focusedField.identifier || formData.identifier
                    ? "-top-2 text-xs text-[#98e6c3] font-medium"
                    : "opacity-0"
                }`}
              >
                Email or Phone Number
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                className="w-full h-12 px-4 pr-12 rounded-[10px] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#98e6c3] focus:ring-1 focus:ring-[#98e6c3] bg-white transition-all duration-200"
                placeholder={
                  !focusedField.password && !formData.password ? "Password" : ""
                }
              />
              <label
                htmlFor="password"
                className={`absolute left-3 transition-all duration-200 pointer-events-none bg-white px-1 ${
                  focusedField.password || formData.password
                    ? "-top-2 text-xs text-[#98e6c3] font-medium"
                    : "opacity-0"
                }`}
              >
                Password
              </label>
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98e6c3]"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>

            <div className="flex items-start space-x-2.5 mt-20">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-[#E5E5E5] text-[#98e6c3] focus:ring-[#98e6c3]"
              />
              <label
                htmlFor="terms"
                className="text-xs text-[#666666] leading-5"
              >
                By checking the box and tapping continue, you acknowledge that
                you have read the{" "}
                <Link to="/privacy-policy" className="text-[#1A1A1A] font-bold">
                  privacy Policy
                </Link>{" "}
                and agree to the{" "}
                <Link to="/terms" className="text-[#1A1A1A] font-bold">
                  Terms of service
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-10 sm:h-12 mt-4 rounded-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-sm font-medium cursor-pointer transition-all"
              disabled={loading}
            >
              {loading ? <Spinner /> : "Continue"}
            </button>

            <div className="text-center mt-4">
              <span className="text-xs font-medium text-[#53886C]">
                Don't have an account?{" "}
              </span>
              <Link to="/signup" className="text-[#53886C] text-xs font-bold">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;

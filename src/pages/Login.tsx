import { Link } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import imageleftsideimage from "../../public/assets/image20.png";
import imageleftsideimage2 from "../../public/assets/image19.png";
import logo from "../../public/assets/loginlogo.png";
import groupBg from "../../public/assets/group.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: ""
  });
  const [focusedField, setFocusedField] = useState({
    emailOrPhone: false,
    password: false
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const handleBlur = (fieldName: string) => {
    setFocusedField(prev => ({
      ...prev,
      [fieldName]: false
    }));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section (Images) */}
      <div className="hidden md:flex md:w-1/2 p-0 md:p-6 justify-end items-center bg-white">
        <div className="flex gap-4 md:gap-10 w-full justify-end">
          <img
            src={imageleftsideimage}
            alt="Profile 1"
            className="hidden sm:block w-[120px] h-[340px] md:w-[180px] md:h-[500px] lg:w-[220px] lg:h-[650px] xl:w-[322px] xl:h-[905px] object-cover"
          />
          <img
            src={imageleftsideimage2}
            alt="Profile 2"
            className="hidden sm:block w-[120px] h-[340px] md:w-[180px] md:h-[500px] lg:w-[220px] lg:h-[650px] xl:w-[322px] xl:h-[905px] object-cover"
          />
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen relative overflow-hidden bg-white">
        {/* Background Image */}
        <img
          src={groupBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-8 pointer-events-none z-0"
        />
        <div className="w-full max-w-[420px] px-4 sm:px-6 mx-auto relative z-10">
          {/* Logo */}
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

          {/* Login Form */}
          <form className="space-y-5 sm:space-y-6">
            {/* Email or Phone Number Field */}
            <div className="relative">
              <input
                type="text"
                id="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={(e) => handleInputChange("emailOrPhone", e.target.value)}
                onFocus={() => handleFocus("emailOrPhone")}
                onBlur={() => handleBlur("emailOrPhone")}
                className="w-full h-12 px-4 rounded-[10px] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#98e6c3] focus:ring-1 focus:ring-[#98e6c3] bg-white transition-all duration-200"
                placeholder={!focusedField.emailOrPhone && !formData.emailOrPhone ? "Email or Phone Number" : ""}
              />
              <label
                htmlFor="emailOrPhone"
                className={`absolute left-3 transition-all duration-200 pointer-events-none bg-white px-1 ${
                  focusedField.emailOrPhone || formData.emailOrPhone
                    ? '-top-2 text-xs text-[#98e6c3] font-medium'
                    : 'opacity-0'
                }`}
              >
                Email or Phone Number
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                className="w-full h-12 px-4 pr-12 rounded-[10px] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#98e6c3] focus:ring-1 focus:ring-[#98e6c3] bg-white transition-all duration-200"
                placeholder={!focusedField.password && !formData.password ? "Password" : ""}
              />
              <label
                htmlFor="password"
                className={`absolute left-3 transition-all duration-200 pointer-events-none bg-white px-1 ${
                  focusedField.password || formData.password
                    ? '-top-2 text-xs text-[#98e6c3] font-medium'
                    : 'opacity-0'
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
            <Link to="/maindashboard">
              <button className="w-full h-10 sm:h-12 mt-4 rounded-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-sm font-medium cursor-pointer transition-all">
                Continue
              </button>
            </Link>
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
  );
};

export default Login;
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import MotionCards from "./MotionCard";
// ...existing code...
import { Input } from "../../components/ui/input";
import logo from "../../../public/assets/Biogramlogo.png";

import { EyeIcon, EyeOffIcon, CheckCircle2, XCircle } from "lucide-react";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import groupBg from "../../../public/assets/group.png";
import api from "../../service/api";
import toast, { Toaster } from "react-hot-toast";

interface SignupProps {
  initialName?: string;
}
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


// ...existing code...
const Signup: React.FC<SignupProps> = ({ initialName = "" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [personalForm, setPersonalForm] = useState({
    email: "",
    fullName: initialName,
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    username:  "",
    password: "",
    termsAgreement: false,
  });
  const [error, setError] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Helper function to check if form is valid
  const checkFormValidity = () => {
    const {
      email,
      fullName,
      birthDay,
      birthMonth,
      birthYear,
      username,
      password,
      termsAgreement,
    } = personalForm;

    // Check if all fields are filled
    const areAllFieldsFilled = 
      Boolean(email) && 
      Boolean(fullName) && 
      Boolean(birthDay) && 
      Boolean(birthMonth) && 
      Boolean(birthYear) && 
      Boolean(username) && 
      Boolean(password) && 
      Boolean(termsAgreement);

    // Check if all password requirements are met
    const areAllPasswordRequirementsMet = Object.values(passwordRequirements).every(Boolean);
    
    return areAllFieldsFilled && areAllPasswordRequirementsMet;
  };

  // Check password requirements as user types
  useEffect(() => {
    const password = personalForm.password;
    setPasswordRequirements({
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    });
  }, [personalForm.password]);
  
  // Update form validity whenever form fields or password requirements change
  useEffect(() => {
    setIsFormValid(checkFormValidity());
  }, [personalForm, passwordRequirements]);

  // Handle input changes
  const handlePersonalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setPersonalForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handle personal form submit
  const handlePersonalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Use the form validity check to determine if we can proceed
    if (!isFormValid) {
      if (!Object.values(passwordRequirements).every(Boolean)) {
        setError("Password does not meet all requirements.");
      } else {
        setError("All fields are required and you must agree to the terms.");
      }
      return;
    }
    
    // Extract needed values for API call
    const {
      email,
      fullName,
      birthDay,
      birthMonth,
      birthYear,
      username,
      password,
    } = personalForm;
    try {
      const dateOfBirth = `${birthYear}-${String(birthMonth).padStart(
        2,
        "0"
      )}-${String(birthDay).padStart(2, "0")}`;
      const payload = {
        email,
        fullName,
        dateOfBirth,
        username,
        password,
      };
      const response = await api.post("/api/auth/signup", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("email", response.data.email || email);
      localStorage.setItem("username", response.data.username || username);
      localStorage.setItem("fullName", response.data.fullName || fullName);
      localStorage.setItem("otpToken", response.data.otpToken || "");
      localStorage.setItem("isVerified", response.data.verified || "");
      navigate("/otp");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.response?.data?.error === "Username taken") {
        toast.error("Username already exists");
      } else if (err?.response?.data?.error === "Email already registered") {
        toast.error("Email already exists");
      } else {
        toast.error(err?.response?.data?.error || "Signup failed"); // fallback to the backend message
      }
    }
  };

  // Password requirement component
  const PasswordRequirement = ({ met, text }: { met: boolean; text: string }) => (
    <div className="flex items-center gap-2 text-xs">
      {met ? (
        <CheckCircle2 className="h-4 w-4 text-green-500" />
      ) : (
        <XCircle className="h-4 w-4 text-gray-400" />
      )}
      <span className={met ? "text-green-600" : "text-gray-500"}>{text}</span>
    </div>
  );

  return (
    <>
    <div><Toaster/></div>
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row items-stretch min-h-screen">
        {/* Left Image */}
        <div className="hidden lg:block w-[300px] xl:w-[400px] h-screen overflow-hidden relative">
          <MotionCards people={people} />
        </div>
        {/* Center Form */}
        <div className="flex-1 flex flex-col justify-center px-2 sm:px-4 md:px-8 py-6 w-full max-w-2xl mx-auto">
          {/* Decorative Lines */}
          <div className="hidden  items-center justify-center gap-1 mb-6">
            <div className="w-16 sm:w-20 h-1.5 rounded-lg bg-gradient-to-r from-[#7ECFA7] to-[#53886C]" />
            <div className="w-16 sm:w-20 h-1.5 rounded-lg bg-[#D9D9D9]" />
          </div>
          <div className="rounded-[16px] sm:rounded-[20px] p-2 sm:p-4 md:p-8 relative overflow-hidden shadow-sm bg-white">
            {/* Background Image */}
            <img
              src={groupBg}
              alt=""
              className="absolute"
              style={{
                width: "683px",
                height: "780px",
                top: "166px",
                left: "46px",
                opacity: 0.05,
                pointerEvents: "none",
                zIndex: 0,
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[15px] sm:text-[16px] text-black mb-1 tracking-wide"
                >
                  Welcome to
                </p>
                <img
                  src={logo}
                  alt="logo"
                  className="w-[160px] sm:w-[200px] md:w-[262px] h-auto mx-auto mb-2"
                  style={{
                    fontFamily: "Poppins",
                  }}
                />
                <p style={{ fontFamily: "Poppins" }} className="text-black">
                  Networking just got an upgrade
                </p>
              </div>
              <Tabs defaultValue="personal" className="w-full">
                <div className="hidden px-0 sm:px-2 md:px-6 justify-center">
                  <TabsList
                    className="relative w-full max-w-xl h-[48px] sm:h-[56px] p-1 mb-8 flex gap-2"
                    style={{
                      background:
                        "linear-gradient(97.29deg, rgba(126, 207, 167, 0.25) 13.65%, rgba(83, 136, 108, 0.25) 90.87%)",
                      border: "1px solid",
                      borderRadius: "42px",
                    }}
                  >
                    <TabsTrigger
                      value="personal"
                      className="flex-1 h-[38px] sm:h-[44px] rounded-[42px] py-2 font-medium text-black-600 transition-all duration-300
                      data-[state=active]:text-white
                      data-[state=active]:bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                    >
                      Personal
                    </TabsTrigger>
                    <TabsTrigger
                      value="business"
                      className="flex-1 h-[38px] sm:h-[44px] rounded-[42px] py-2 font-medium text-gray-600 transition-all duration-300
                      data-[state=active]:text-white
                      data-[state=active]:bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                    >
                      Business
                    </TabsTrigger>
                  </TabsList>
                </div>
                {/* PERSONAL TAB */}
                <TabsContent value="personal" className="space-y-4">
                  <form className="space-y-4" onSubmit={handlePersonalSubmit}>
                    {/* Error Message */}
                    {error && (
                      <div className="text-red-600 text-sm text-center">
                        {error}
                      </div>
                    )}
                    {/* Email */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Email or Phone Number
                      </legend>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter here"
                        onChange={handlePersonalChange}
                        autoComplete="email"
                        aria-label="Email or Phone Number"
                        className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        required
                        value={personalForm.email}
                      />
                    </fieldset>
                    {/* Full Name */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Full Name
                      </legend>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter here"
                        onChange={handlePersonalChange}
                        autoComplete="name"
                        aria-label="Full Name"
                        className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        required
                        value={personalForm.fullName}
                      />
                    </fieldset>
                    {/* Date of Birth */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Date of Birth
                      </legend>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <select
                          id="birthDay"
                          name="birthDay"
                          className="w-full h-[36px] sm:h-[40px] rounded-[5px] px-2 text-sm text-gray-800 border border-black"
                          style={{
                            background:
                              "linear-gradient(97.29deg, rgba(126, 207, 167, 0.25) 13.65%, rgba(83, 136, 108, 0.25) 90.87%)",
                          }}
                          required
                          value={personalForm.birthDay}
                          onChange={handlePersonalChange}
                        >
                          <option value="">Day</option>
                          {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                        <select
                          id="birthMonth"
                          name="birthMonth"
                          className="w-full h-[36px] sm:h-[40px] rounded-[5px] px-2 text-sm text-gray-800 border border-black"
                          style={{
                            background:
                              "linear-gradient(97.29deg, rgba(126, 207, 167, 0.25) 13.65%, rgba(83, 136, 108, 0.25) 90.87%)",
                          }}
                          required
                          value={personalForm.birthMonth}
                          onChange={handlePersonalChange}
                        >
                          <option value="">Month</option>
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month, index) => (
                            <option key={index + 1} value={index + 1}>
                              {month}
                            </option>
                          ))}
                        </select>
                        <select
                          id="birthYear"
                          name="birthYear"
                          className="w-full h-[36px] sm:h-[40px] rounded-[5px] px-2 text-sm text-gray-800 border border-black"
                          style={{
                            background:
                              "linear-gradient(97.29deg, rgba(126, 207, 167, 0.25) 13.65%, rgba(83, 136, 108, 0.25) 90.87%)",
                          }}
                          required
                          value={personalForm.birthYear}
                          onChange={handlePersonalChange}
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 100 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </fieldset>
                    {/* Username */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-[#F8F8F8] px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Username
                      </legend>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter here"
                        onChange={handlePersonalChange}
                        autoComplete="username"
                        required
                        value={personalForm.username}
                        className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black bg-[#F8F8F8] px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                    {/* Password */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Password
                      </legend>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Enter here"
                          onChange={handlePersonalChange}
                          autoComplete="new-password"
                          aria-label="Password"
                          className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                          required
                          value={personalForm.password}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          tabIndex={0}
                        >
                          {showPassword ? (
                            <EyeOffIcon size={20} />
                          ) : (
                            <EyeIcon size={20} />
                          )}
                        </button>
                      </div>
                      
                      {/* Password Requirements */}
                      {personalForm.password.length > 0 && (
                        <div className="mt-2 p-3 bg-gray-50 rounded-md space-y-1.5">
                          <PasswordRequirement 
                            met={passwordRequirements.minLength} 
                            text="At least 8 characters" 
                          />
                          <PasswordRequirement 
                            met={passwordRequirements.hasUppercase} 
                            text="At least one uppercase letter" 
                          />
                          <PasswordRequirement 
                            met={passwordRequirements.hasLowercase} 
                            text="At least one lowercase letter" 
                          />
                          <PasswordRequirement 
                            met={passwordRequirements.hasNumber} 
                            text="At least one number" 
                          />
                          <PasswordRequirement 
                            met={passwordRequirements.hasSpecial} 
                            text="At least one special character (!@#$%^&*)" 
                          />
                        </div>
                      )}
                    </fieldset>
                    {/* Terms */}
                    <div className="text-xs text-gray-500">
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="termsAgreement"
                          name="termsAgreement"
                          className="mt-1 rounded border-gray-300"
                          checked={personalForm.termsAgreement}
                          onChange={handlePersonalChange}
                        />
                        <span>
                          By checking the box and signing continue, you
                          acknowledge that you have read the{" "}
                          <span className="text-black font-medium">
                            privacy policy
                          </span>{" "}
                          and agree to the{" "}
                          <span className="text-black font-medium">
                            Terms of service
                          </span>
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className={`block w-full h-[52px] text-white rounded-full text-base font-medium text-center leading-[52px] hover:opacity-90 ${
                        isFormValid
                          ? "bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                          : "bg-gray-400"
                      }`}
                    >
                      Continue
                    </button>
                    <p className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-[#53886C] hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </form>
                </TabsContent>
                <TabsContent value="business" className="space-y-4">
                  <form className="space-y-4">
                    {/* Email */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Email or Phone Number
                      </legend>
                      <Input
                        type="email"
                        id="businessEmail"
                        name="email"
                        placeholder="Enter here"
                        onChange={handlePersonalChange}
                        autoComplete="email"
                        aria-label="Email or Phone Number"
                        className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                    {/* Full Name */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Full Name
                      </legend>
                      <Input
                        type="text"
                        id="businessFullName"
                        name="fullName"
                        placeholder="Enter here"
                        autoComplete="name"
                        aria-label="Full Name"
                        className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                    {/* Date of Birth */}
                    <fieldset className="relative pt-5">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Date of Birth
                      </legend>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <fieldset className="relative">
                          <legend className="absolute left-2 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                            Day
                          </legend>
                          <Input
                            id="birthDay"
                            name="birthDay"
                            autoComplete="bday-day"
                            className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                          />
                        </fieldset>
                        <fieldset className="relative">
                          <legend className="absolute left-2 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                            Month
                          </legend>
                          <Input
                            id="birthMonth"
                            name="birthMonth"
                            autoComplete="bday-month"
                            className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                          />
                        </fieldset>
                        <fieldset className="relative">
                          <legend className="absolute left-2 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                            Year
                          </legend>
                          <Input
                            id="birthYear"
                            name="birthYear"
                            autoComplete="bday-year"
                            className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                          />
                        </fieldset>
                      </div>
                    </fieldset>
                    {/* Username */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-[#F8F8F8] px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Username
                      </legend>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="username"
                        className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black bg-[#F8F8F8] px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                    {/* Password */}
                    <fieldset className="relative pt-3">
                      <legend className="absolute left-4 -top-3 bg-white px-2 text-sm font-medium text-gray-700 z-10 pointer-events-none">
                        Password
                      </legend>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="businessPassword"
                          name="password"
                          placeholder="Enter here"
                          onChange={handlePersonalChange}
                          autoComplete="new-password"
                          aria-label="Password"
                          className="w-full h-[44px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                          tabIndex={0}
                        >
                          {showPassword ? (
                            <EyeOffIcon size={20} />
                          ) : (
                            <EyeIcon size={20} />
                          )}
                        </button>
                      </div>
                    </fieldset>
                    {/* Terms */}
                    <div className="text-xs text-gray-500">
                      <label className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="termsAgreement"
                          name="termsAgreement"
                          className="mt-1 rounded border-gray-300"
                        />
                        <span>
                          By checking the box and signing continue, you
                          acknowledge that you have read the{" "}
                          <span className="text-black font-medium">
                            privacy policy
                          </span>{" "}
                          and agree to the{" "}
                          <span className="text-black font-medium">
                            Terms of service
                          </span>
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="block w-full h-[44px] sm:h-[52px] text-white rounded-full text-base font-medium text-center leading-[44px] sm:leading-[52px] hover:opacity-90 bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                    >
                      Continue
                    </button>
                    <p className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-[#53886C] hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </form>
                </TabsContent>{" "}
                {/* BUSINESS TAB (not implemented) */}
              </Tabs>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="hidden lg:block w-[300px] xl:w-[400px] h-screen overflow-hidden relative">
         <MotionCards people={people} reverseDirection={true} />
          </div>
          </div>
      </div>
    </>
  );
};

export default Signup;
// ...existing code...

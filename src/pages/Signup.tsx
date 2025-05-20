import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import logo from "../assets/Biogramlogo.png";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import RightImage from "../assets/RightImage.png";
import LeftImage from "../assets/LeftImage.png";
import { Link } from "react-router-dom";
import logo from "../assets/Biogramlogo.png";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Signup page

  return (
    <div className="min-h-screen">
      <div className="flex items-start justify-between h-screen">
        {/* Left Image - Hidden on md and sm screens */}
        <div className="hidden lg:block w-[400px] h-screen overflow-hidden relative">
          <img
            src={LeftImage}
            alt="Left Profile"
            className="absolute w-[322px] h-[1063px] -top-[21px] left-8"
          />
        </div>

        {/* Center Form - Responsive */}
        <div className="flex-1 px-4 md:px-8 py-6 overflow-y-auto w-full max-w-[900px] mx-auto">
          {/* Decorative Lines */}
          <div className="flex items-center justify-center gap-[4px] mb-6">
            <div className="w-[78px] h-[6px] rounded-[8px]">
              <div
                className="h-full rounded-[8px]"
                style={{
                  background:
                    "linear-gradient(97.29deg, #7ECFA7 13.65%, #53886C 90.87%)",
                }}
              ></div>
            </div>
            <div className="w-[78px] h-[6px] rounded-[8px]">
              <div className="h-full bg-[#D9D9D9] rounded-[8px]"></div>
            </div>
          </div>

          <div className="rounded-[20px] p-4 md:p-8">
            <div className="text-center mb-8">
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-[16px] text-black mb-1 tracking-wide"
              >
                Welcome to
              </p>
              <img
                src={logo}
                alt="logo"
                className="w-[262px] h-[100px] mx-auto mb-2"
                style={{
                  fontFamily: "Poppins",
                }}
              />
              <p style={{ fontFamily: "Poppins" }} className="text-black">
                Networking just got an upgrade
              </p>
            </div>
            <Tabs
              defaultValue="personal"
              className="w-full border-r-emerald-300"
            >
              <div className="px-2 md:px-6 flex justify-center">
                <TabsList
                  className="relative w-[546px] h-[66px] p-1 mb-8"
                  style={{
                    background:
                      "linear-gradient(97.29deg, rgba(126, 207, 167, 0.25) 13.65%, rgba(83, 136, 108, 0.25) 90.87%)",
                    border: "1px solid",
                    borderRadius: "42px", // ✅ match tab border radius
                  }}
                >
                  <TabsTrigger
                    value="personal"
                    className="w-[270px] h-[54px] rounded-[42px] py-3 font-medium text-black-600 transition-all duration-300
          data-[state=active]:text-white
          data-[state=active]:bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                  >
                    Personal
                  </TabsTrigger>

                  <TabsTrigger
                    value="business"
                    className="w-[270px] h-[54px] rounded-[42px] py-3 font-medium text-gray-600 transition-all duration-300
          data-[state=active]:text-white
          data-[state=active]:bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                  >
                    Business
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="personal" className="space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Email or Phone Number</legend>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email or Phone Number"
                        autoComplete="email"
                        className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Full Name</legend>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        autoComplete="name"
                        className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Date of Birth</legend>
                      <div className="grid grid-cols-3 gap-3">
                        <Input
                          id="birthDay"
                          name="birthDay"
                          placeholder="Day"
                          autoComplete="bday-day"
                          className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        />
                        <Input
                          id="birthMonth"
                          name="birthMonth"
                          placeholder="Month"
                          autoComplete="bday-month"
                          className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        />
                        <Input
                          id="birthYear"
                          name="birthYear"
                          placeholder="Year"
                          autoComplete="bday-year"
                          className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        />
                      </div>
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Username</legend>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Password</legend>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 pr-12 focus:border-black focus:ring-black"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? (
                            <EyeOffIcon size={20} />
                          ) : (
                            <EyeIcon size={20} />
                          )}
                        </button>
                      </div>
                    </fieldset>
                  </div>
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
                  <Link
                    to="/otp"
                    className="block w-full h-[52px] text-white rounded-full text-base font-medium text-center leading-[52px] hover:opacity-90 bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                  >
                    Continue
                  </Link>

                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#53886C] hover:underline">
                      Login
                    </a>
                  </p>
                </form>
              </TabsContent>

              <TabsContent value="business" className="space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Email or Phone Number</legend>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email or Phone Number"
                        autoComplete="email"
                        className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Full Name</legend>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        autoComplete="name"
                        className="w-full h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Date of Birth</legend>
                      <div className="grid grid-cols-3 gap-3">
                        <Input
                          id="birthDay"
                          name="birthDay"
                          placeholder="Day"
                          autoComplete="bday-day"
                          className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        />
                        <Input
                          id="birthMonth"
                          name="birthMonth"
                          placeholder="Month"
                          autoComplete="bday-month"
                          className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        />
                        <Input
                          id="birthYear"
                          name="birthYear"
                          placeholder="Year"
                          autoComplete="bday-year"
                          className="h-[52px] rounded-[14px] border-black px-4 focus:border-black focus:ring-black"
                        />
                      </div>
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Username</legend>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 focus:border-black focus:ring-black"
                      />
                    </fieldset>
                  </div>

                  <div className="space-y-2">
                    <fieldset className="relative">
                      <legend className="absolute -top-2 left-2 px-2 bg-white text-sm font-medium text-gray-700">Password</legend>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          className="w-full h-[52px] rounded-[14px] border-black bg-[#F8F8F8] px-4 pr-12 focus:border-black focus:ring-black"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? (
                            <EyeOffIcon size={20} />
                          ) : (
                            <EyeIcon size={20} />
                          )}
                        </button>
                      </div>
                    </fieldset>
                  </div>
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
                  <Link
                    to="/otp"
                    className="block w-full h-[52px] text-white rounded-full text-base font-medium text-center leading-[52px] hover:opacity-90 bg-[linear-gradient(97.29deg,_#7ECFA7_13.65%,_#53886C_90.87%)]"
                  >
                    Continue
                  </Link>

                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#53886C] hover:underline">
                      Login
                    </a>
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Image - Hidden on md and sm screens */}
        <div className="hidden lg:block w-[400px] h-screen overflow-hidden relative">
          <img
            src={RightImage}
            alt="Right Profile"
            className="absolute w-[322px] h-[1063px] -top-[3px] right-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

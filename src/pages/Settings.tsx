 import { useState } from "react";
import { Input } from "@/components/ui/input";
import Greaterthen from "../../public/assets/greaterthen.png";
import bground from "../../public/assets/lightbg.png";

const menuItems = [
  { key: "personal-info", label: "Personal Info" },
  { key: "subscriptions", label: "Subscriptions" },
  { key: "terms", label: "Terms & Conditions" },
  { key: "privacy", label: "Privacy policy" },
  { key: "about", label: "About" },
];
const personalInfo = [
  { label: "Name", value: "Alex James" },
  { label: "Username", value: "@Alexjames123" },
  { label: "Birth Date", value: "10/Jun/2000" },
  { label: "My Interests", value: "Sports, Cricket" },
  { label: "Email ", value: "Alexhames123@gmail.com" },
  { label: "Change Password", value: "*********" },
];
const Settings = () => {
  const [activeMenu, setActiveMenu] = useState("personal-info");

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
                  {personalInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-row justify-between mb-4"
                    >
                      <p className="text-[20px] font-medium text-black">
                        {item.label}
                      </p>
                      <div className="flex flex-row items-center gap-2">
                        <p className="text-[16px] font-normal text-black">
                          {item.value}
                        </p>
                        <img
                          src={Greaterthen}
                          alt="greater than"
                          className="object-contain w-[22px] h-[22px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* You can add more conditions for other menu items here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

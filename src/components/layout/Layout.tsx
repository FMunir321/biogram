import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
// import { IoPerson } from "react-icons/io5";
// import { CiEdit } from "react-icons/ci";
// import { MdMessage } from "react-icons/md";
// import { FaChartLine } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
// import { IoIosSettings } from "react-icons/io";
import logo from "../../../public/assets/Biogramlogo.png";
import Search from "../../../public/assets/menue/search.svg";
import Profile from "../../../public/assets/menue/profile.svg";
import Editeprofile from "../../../public/assets/menue/editprofile.svg";
import Message from "../../../public/assets/menue/message.svg";
import Analytics from "../../../public/assets/menue/analytics.svg";
import Notification from "../../../public/assets/menue/notification.svg";
import Setting from "../../../public/assets/menue/setting.svg";
// import { profile } from "console";
// import { Button } from "../components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Routes where sidebar should be hidden
  const hideSidebarRoutes = ["/SocialMedia", "/AddSocialMediaUploadPicture"];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebarOpen]);

  if (shouldHideSidebar) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }
  return (
    <div className="flex h-screen relative bg-gray-50">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="z-30 fixed inset-0 bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {/* <div
        className={`fixed top-0 left-0 min-h-screen w-[280px] bg-[#e6f8f0] py-4 px-6 flex flex-col justify-between transform transition-all duration-300 ease-in-out z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full shadow-2xl"} 
          md:translate-x-0 md:relative md:w-64 md:shadow-none`}
      > */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-[#e6f8f0] px-6 py-4 flex flex-col overflow-y-auto z-40
  transform transition-all duration-300 ease-in-out
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full shadow-2xl"}
  md:translate-x-0 md:relative md:w-64 md:shadow-none`}
      >
        {/* Close Button (small screens) */}
        <div className="flex justify-end -mt-2 -mr-2 md:hidden">
          <button
            className="p-2 rounded-full hover:bg-pink-200 transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1">
          <Link to="/maindashboard">
            <img src={logo} alt="BiogramLogo" className="h-10 sm:h-12" />
          </Link>

          <nav className="flex flex-col gap-5 mt-7 ">
            <Link to="/maindashboard" onClick={() => setSidebarOpen(false)}>
              <SidebarItem
                icon={
                  <img
                    src={Search}
                    alt="Search"
                    className="w-[36px] h-[36px]"
                  />
                }
                label="Search"
                active={location.pathname === "/maindashboard"}
              />
            </Link>
            <Link to="/profile" onClick={() => setSidebarOpen(false)}>
              <SidebarItem
                icon={
                  <img
                    src={Profile}
                    alt="Search"
                    className="w-[36px] h-[36px]"
                  />
                }
                label="Profile"
                active={location.pathname === "/profile"}
              />
            </Link>
            <Link to="/edit-profile" onClick={() => setSidebarOpen(false)}>
              <SidebarItem
                icon={
                  <img
                    src={Editeprofile}
                    alt="Search"
                    className="w-[36px] h-[36px]"
                  />
                }
                label="Edit Profile"
                active={location.pathname === "/edit-profile"}
              />
            </Link>
            <Link to="/messages" onClick={() => setSidebarOpen(false)}>
              <SidebarItem
                icon={
                  <img
                    src={Message}
                    alt="Search"
                    className="w-[36px] h-[36px]"
                  />
                }
                label="Messages"
                active={location.pathname === "/messages"}
              />
            </Link>
            <Link to="/analytics" onClick={() => setSidebarOpen(false)}>
              <SidebarItem
                icon={
                  <img
                    src={Analytics}
                    alt="Search"
                    className="w-[36px] h-[36px]"
                  />
                }
                label="Analytics"
                active={location.pathname === "/analytics"}
              />
            </Link>
            <Link to="/notifications" onClick={() => setSidebarOpen(false)}>
              <SidebarItem
                icon={
                  <img
                    src={Notification}
                    alt="Search"
                    className="w-[36px] h-[36px]"
                  />
                }
                label="Notifications"
                active={location.pathname === "/notifications"}
              />
            </Link>
            <Link to="/settings">
              <SidebarItem
                icon={
                  <img
                    src={Setting}
                    alt="Search"
                    className="w-[36px] h-[36px]"
                  />
                }
                label="Settings"
                active={location.pathname === "/settings"}
              />
            </Link>
          </nav>
        </div>

        {/* User Profile at bottom */}
        <div className="flex items-center gap-3 p-3 mt-6 bg-opacity-50 rounded-xl">
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-[50px] h-[50px] rounded-full ring-2 ring-black"
          />
          <div>
            <p className="text-[20px] font-bold text-black">Alex James</p>
            <p className="text-[13px] font-normal text-black">@AlexJames</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-4 md:px-6 z-10">
          <div className="relative z-10 flex justify-between items-center max-w-6xl mx-auto">

            {/* Hamburger Button (small screens) */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Dummy div to balance hamburger and search */}
            <div className="w-10 md:hidden"></div>
          </div>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: string | React.ReactElement;
  label: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`text-[24px] font-normal flex items-center gap-3 p-2 rounded-lg cursor-pointer text-sm transition-colors
        ${active
          ? "text-[#53886C] bg-opacity-50"
          : "text-gray-700 hover:bg-white hover:bg-opacity-30"
        }`}
    >
      <span
        className={`text-lg ${active ? "text-black" : "text-white"}`}
        style={{
          filter: active
            ? "invert(39%) sepia(33%) saturate(628%) hue-rotate(100deg) brightness(91%) contrast(87%)"
            : "brightness(0)",
        }}
      >
        {icon}
      </span>
      {label}
    </div>
  );
};

export default Layout;

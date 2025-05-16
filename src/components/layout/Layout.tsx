import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import logo from "../../assets/Biogramlogo.png"

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Routes where sidebar should be hidden
  const hideSidebarRoutes = ['/SocialMedia', '/AddSocialMediaUploadPicture'];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
          className="fixed inset-0  bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-gradient-to-b from-pink-100 to-orange-100 py-4 px-6 flex flex-col justify-between transform transition-all duration-300 ease-in-out z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full shadow-2xl"} 
          md:translate-x-0 md:relative md:w-64 md:shadow-none`}
      >
        {/* Close Button (small screens) */}
        <div className="flex justify-end -mt-2 -mr-2 md:hidden">
          <button
            className="p-2 rounded-full hover:bg-pink-200 transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1">
          <Link to="/maindashboard">
          <img src={logo} alt="BiogramLogo" className="h-10 sm:h-12" />
          </Link>

          <nav className="flex flex-col gap-5 mt-7 ">
            <Link to="/maindashboard">
              <SidebarItem 
                icon={<FaSearchengin />} 
                label="Search" 
                active={location.pathname === '/maindashboard'} 
              />
            </Link>
            <Link to="/profile">
              <SidebarItem 
                icon={<IoPerson />} 
                label="Profile" 
                active={location.pathname === '/profile'} 
              />
            </Link>
            <Link to="/edit-profile">
              <SidebarItem 
                icon={<CiEdit />}    
                label="Edit Profile" 
                active={location.pathname === '/edit-profile'} 
              />
            </Link>
            <Link to="/messages">
              <SidebarItem 
                icon={<MdMessage />} 
                label="Messages" 
                active={location.pathname === '/messages'} 
              />
            </Link>
            <Link to="/analytics">
              <SidebarItem 
                icon={<FaChartLine />} 
                label="Analytics" 
                active={location.pathname === '/analytics'} 
              />
            </Link>
            <Link to="/notifications">
              <SidebarItem 
                icon={<IoIosNotifications />} 
                label="Notifications" 
                active={location.pathname === '/notifications'} 
              />
            </Link>
            <Link to="/settings">
              <SidebarItem 
                icon={<IoIosSettings />} 
                label="Settings" 
                active={location.pathname === '/settings'} 
              />
            </Link>
          </nav>
        </div>

        {/* User Profile at bottom */}
        <div className="flex items-center gap-3 p-3 mt-6 bg-white bg-opacity-50 rounded-xl">
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-10 h-10 rounded-full ring-2 ring-pink-500"
          />
          <div>
            <p className="font-semibold text-sm">Alex James</p>
            <p className="text-xs text-gray-500">@AlexJames</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 overflow-auto">
        {/* Top Bar */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 py-4 md:px-6 z-50">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            {/* Hamburger Button (small screens) */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Searchbar */}
            <div className="flex justify-center flex-1 md:justify-center px-4">
              <div className="flex items-center bg-gradient-to-r from-pink-300 to-orange-400 rounded-full p-1 w-full max-w-md shadow-md">
                <input
                  type="text"
                  placeholder="Search Person name here"
                  className="px-4 py-2 flex-1 rounded-l-full outline-none text-sm w-full min-w-0 bg-white"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>

            {/* Dummy div to balance hamburger and search */}
            <div className="w-10 md:hidden"></div>
          </div>
        </div>

        {/* Page Content */}
        <div>
          {children}
        </div>
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
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer text-sm transition-colors
        ${active 
          ? "text-pink-500 font-semibold bg-white bg-opacity-50" 
          : "text-gray-700 hover:bg-white hover:bg-opacity-30"
        }`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </div>
  );
};

export default Layout;
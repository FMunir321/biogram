  // import EditProfile from "../../components/EditProfile"
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import bground from "../../../public/assets/lightbg.png";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLandingPageClick = () => {
    console.log('Landing Page clicked');
    navigate('/edit-profile/landing-page');
  };

  const handleDirectLinkClick = () => {
    console.log('Direct Link clicked');
    navigate('/edit-profile/direct-link');
  };

  // Check if we're on a nested route
  const isOnNestedRoute = location.pathname !== '/edit-profile';

  return (
    <>
      {!isOnNestedRoute ? (
        // Show the main page with buttons when on /edit-profile
        <div 
          className="max-w-full mx-auto p-6 h-[calc(100vh-25px)] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bground})` }}
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-6xl w-full">
            {/* Landing Page Card */}
            <div 
              onClick={handleLandingPageClick}
              className="group bg-white rounded-lg border border-gray-200 p-8 cursor-pointer hover:shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full border-2 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="9" y1="9" x2="15" y2="9"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Landing Page</h3>
                <p className="text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Create a beautiful landing page with all your custom links and posts.</p>
              </div>
            </div>

            {/* Direct Link Card */}
            <div 
              onClick={handleDirectLinkClick}
              className="group bg-white rounded-lg border border-gray-200 p-8 cursor-pointer hover:shadow-lg hover:border-purple-500 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full border-2 border-gray-200 group-hover:border-purple-500 transition-colors duration-300">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500 group-hover:text-purple-600 transition-colors duration-300"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Direct Link</h3>
                <p className="text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Redirect users directly to any website without an intermediary page.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Show nested route content with optional back button
        <div>
          <div className="w-full">
            <button 
              onClick={() => navigate('/edit-profile')}
              className="flex items-center font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 mr-2"
              >
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to Edit Profile
            </button>
          </div>
          
          <Outlet />
        </div>
      )}
    </>
  )
}

export default EditProfilePage
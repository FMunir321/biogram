// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout/Layout";

// import AddSocialMedia from "./pages/public/signup/SocialMediaPage";
// import Otp from "./pages/public/signup/OtpPage";


// import BiogramShoutPage from "./pages/BiogramShout/BiogramShoutPage";
// import Forpeople from "./pages/public/forPeople/ForPeoplePage";
// import AddSocialMediaPictureUpload from "./pages/public/signup/AddSocialMediaPictureUploadPage";

// import MainDashboard from "./pages/mainDashboard/MainDashboardPage";
// import Profile from "./pages/mainDashboard/ProfilePage";
// import EditProfile from "./pages/mainDashboard/EditProfilePage";
// import Messages from "./pages/mainDashboard/MessagesPage";
// import Analytics from "./pages/mainDashboard/AnalyticsPage";
// import Notifications from "./pages/mainDashboard/NotificationsPage";
// import Settings from "./pages/mainDashboard/SettingsPage";
// import FeaturedLinkForm from "./components/FeaturedLinkForm";
// import AddMultiLink from "./components/AddMultiLink";
// import AddMerch from "./components/AddMerge";
// import ProfileLink from "./components/ProfileLink";
// import ProfileMainDashboard from "./components/ProfileMainDashboard";
// // import LinkInBio from "./components/linkInBio/LinkInBio";
// import Started from "./pages/public/forBussiness/StartedPage";
// import StartNow from "./pages/public/forBussiness/StartNowPage";
// import Signup from "./pages/public/signup/SignUpPage";
// import Login from "./pages/public/Login/LoginPage";

// // Wrapper component for routes that need the layout
// const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
//   <Layout>{children}</Layout>
// );

// // Routes that should have the layout (authenticated routes)
// const ProtectedRoute = ({ element }: { element: React.ReactNode }) => (
//   <LayoutWrapper>{element}</LayoutWrapper>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes - No Layout */}
//         {/* <Route path="/" element={<Started />} /> */}
//         <Route path="/startnow" element={<StartNow />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<Forpeople />} />
//         {/* <Route path="/linkinbio" element={<LinkInBio />} /> */}
//         <Route path="/Otp" element={<Otp />} />

//        {/* /featured-link-form */}
//         <Route path="/featured-link-form" element={<FeaturedLinkForm />} />
//         <Route path="/add-multi-link" element={<AddMultiLink />} />
//         <Route path="/add-merge" element={<AddMerch />} />
//         <Route path="/profile-link" element={<ProfileLink />} />
//         <Route
//           path="/profile-main-dashboard"
//           element={<ProfileMainDashboard />}
//         />
//         <Route path="/started" element={<Started />} />
//         <Route path="/login" element={<Login />} />
//         {/* Protected Routes - With Layout */}
//         <Route
//           path="/main-dashboard"
//           element={<ProtectedRoute element={<MainDashboard />} />}
//         />
//         <Route
//           path="/social-media"
//           element={<ProtectedRoute element={<AddSocialMedia />} />}
//         />
//         <Route
//           path="/analytics"
//           element={<ProtectedRoute element={<Analytics />} />}
//         />
//         <Route
//           path="/add-social-media-upload-picture"
//           element={<ProtectedRoute element={<AddSocialMediaPictureUpload />} />}
//         />

//         <Route
//           path="/biogram-shout"
//           element={<ProtectedRoute element={<BiogramShoutPage />} />}
//         />
 
//         <Route
//           path="/profile"
//           element={<ProtectedRoute element={<Profile />} />}
//         />
//         <Route
//           path="/edit-profile"
//           element={<ProtectedRoute element={<EditProfile />} />}
//         />
//         <Route
//           path="/messages"
//           element={<ProtectedRoute element={<Messages />} />}
//         />
//         <Route
//           path="/notifications"
//           element={<ProtectedRoute element={<Notifications />} />}
//         />
//         <Route
//           path="/settings"
//           element={<ProtectedRoute element={<Settings />} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes"; 

function App() {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AddSocialMedia from "./pages/public/signup/SocialMediaPage";
import Otp from "./pages/public/signup/OtpPage";

import BiogramProfile from "./pages/biogramProfile/BiogramProfilePage";
import BiogramShoutPage from "./pages/BiogramShout/BiogramShoutPage";
import Forpeople from "./pages/public/forPeople/ForPeoplePage";
import AddSocialMediaPictureUpload from "./pages/public/signup/AddSocialMediaPictureUploadPage";

import ArtistShowcase from "./pages/artistShowcase/ArtistShowcasePage";
// import GoGreenSection from "./components/GoGreenSection";
import BiogramPricing from "./pages/biogramPricing/BiogramPricingPage";
import MainDashboard from "./pages/mainDashboard/MainDashboardPage";
import Profile from "./pages/mainDashboard/ProfilePage";
import EditProfile from "./pages/mainDashboard/EditProfilePage";
import Messages from "./pages/mainDashboard/MessagesPage";
import Analytics from "./pages/mainDashboard/AnalyticsPage";
import Notifications from "./pages/mainDashboard/NotificationsPage";
import Settings from "./pages/mainDashboard/SettingsPage";
import FeaturedLinkForm from "./components/FeaturedLinkForm";
import AddMultiLink from "./components/AddMultiLink";
import AddMerch from "./components/AddMerge";
import ProfileLink from "./components/ProfileLink";
import ProfileMainDashboard from "./components/ProfileMainDashboard";
// import LinkInBio from "./components/linkInBio/LinkInBio";
import Started from "./pages/public/forBussiness/StartedPage";
import StartNow from "./pages/public/forBussiness/StartNowPage";
import Signup from "./pages/public/signup/SignUpPage";
import Login from "./pages/public/Login/LoginPage";

// Wrapper component for routes that need the layout
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <Layout>{children}</Layout>
);

// Routes that should have the layout (authenticated routes)
const ProtectedRoute = ({ element }: { element: React.ReactNode }) => (
  <LayoutWrapper>{element}</LayoutWrapper>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes - No Layout */}
        {/* <Route path="/" element={<Started />} /> */}
        <Route path="/startnow" element={<StartNow />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Forpeople />} />
        {/* <Route path="/linkinbio" element={<LinkInBio />} /> */}
        <Route path="/Otp" element={<Otp />} />
        <Route path="/pricing" element={<BiogramPricing />} />
        {/* <Route path="/gogreensection" element={<GoGreenSection />} /> */}
        <Route path="/featuredlinkform" element={<FeaturedLinkForm />} />
        <Route path="/addmultilink" element={<AddMultiLink />} />
        <Route path="/addmerge" element={<AddMerch />} />
        <Route path="/profilelink" element={<ProfileLink />} />
        <Route
          path="/profilemaindashboard"
          element={<ProfileMainDashboard />}
        />
        <Route path="/started" element={<Started />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Routes - With Layout */}
        <Route
          path="/maindashboard"
          element={<ProtectedRoute element={<MainDashboard />} />}
        />
        <Route
          path="/SocialMedia"
          element={<ProtectedRoute element={<AddSocialMedia />} />}
        />
        <Route
          path="/analytics"
          element={<ProtectedRoute element={<Analytics />} />}
        />
        <Route
          path="/AddSocialMediaUploadPicture"
          element={<ProtectedRoute element={<AddSocialMediaPictureUpload />} />}
        />
        <Route
          path="/biogram-profile"
          element={<ProtectedRoute element={<BiogramProfile />} />}
        />
        <Route
          path="/biogram-shout"
          element={<ProtectedRoute element={<BiogramShoutPage />} />}
        />
        <Route
          path="/artistshowcase"
          element={<ProtectedRoute element={<ArtistShowcase />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/edit-profile"
          element={<ProtectedRoute element={<EditProfile />} />}
        />
        <Route
          path="/messages"
          element={<ProtectedRoute element={<Messages />} />}
        />
        <Route
          path="/notifications"
          element={<ProtectedRoute element={<Notifications />} />}
        />
        <Route
          path="/settings"
          element={<ProtectedRoute element={<Settings />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

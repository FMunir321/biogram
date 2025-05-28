import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AddSocialMedia from "./pages/AddSocialMedia";
import Otp from "./pages/Otp";

import BiogramProfile from "./pages/BiogramProfile";
import BiogramShoutPage from "./pages/BiogramShoutPage";
import Forpeople from "./pages/Forpeople";
import AddSocialMediaPictureUpload from "./pages/AddSocialMediaPictureUpload";

import ArtistShowcase from "./pages/ArtistShowcase";
// import GoGreenSection from "./components/GoGreenSection";
import BiogramPricing from "./pages/BiogramPricing";
import MainDashboard from "./components/maindashboard/MainDashboard";
import Profile from "./components/maindashboard/Profile";
import EditProfile from "./pages/EditProfile";
import Messages from "./pages/Messages";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import FeaturedLinkForm from "./components/FeaturedLinkForm";
import AddMultiLink from "./components/AddMultiLink";
import AddMerch from "./components/AddMerge";
import ProfileLink from "./components/ProfileLink";
import ProfileMainDashboard from "./components/ProfileMainDashboard";
// import LinkInBio from "./components/linkInBio/LinkInBio";
import Started from "./components/Started";
import StartNow from "./components/StartNow";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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

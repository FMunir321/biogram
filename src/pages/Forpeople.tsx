import BiogramLandingPage from "../components/business/BiogramLandingPage";
import ChooseBiogram from "../components/business/choosebiogram/ChooseBiogram";
import Navbar from "../components/business/navbar/Navbar";
import RealTimeAnalyticsHero from "../components/RealTimeAnalyticsHero";
import ArtistShowcase from "./ArtistShowcase";
// import GoGreenSection from "@/components/GoGreenSection";
// import LinkInBio from "../components/linkInBio/LinkInBio";
import BiogramProfile from "./BiogramProfile";
import BiogramShoutPage from "./BiogramShoutPage";
import BiogramPricing from "./BiogramPricing";
// import JoinTheFamilySection from "./JoinFamily";
import Footer from "@/components/footer/Footer";
import ProfileCard from "./ProfileCard";
import InstagramRedirectFeatures from "./InstagramRedirectFeatures";
const Forpeople = () => {
  return (
    <div>
      <Navbar />
      <BiogramLandingPage />
      <ChooseBiogram />
      {/* <LinkInBio /> */}
      <RealTimeAnalyticsHero />
      <ArtistShowcase />
     
       <BiogramProfile />
       <BiogramShoutPage />
       <ProfileCard />
       <InstagramRedirectFeatures />
      {/* <GoGreenSection /> */}
      {/* <JoinTheFamilySection /> */}
      <BiogramPricing />
      <Footer />
    </div>
  );
};

export default Forpeople;

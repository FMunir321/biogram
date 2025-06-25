import BiogramLandingPage from "../../../components/forPeople/BiogramLandingPage";
import ChooseBiogram from "../../../components/forPeople/choosebiogram/ChooseBiogram";
import Navbar from "../../../components/forPeople/navbar/Navbar";
import RealTimeAnalyticsHero from "../../../components/forPeople/realTimeAnalyticsHero/RealTimeAnalyticsHero";
import ArtistShowcase from "../../artistShowcase/ArtistShowcasePage";
import BiogramProfile from "../../../components/forPeople/biogramProfile/BiogramProfile";
import BiogramShoutPage from "../../../components/BiogramShout";
import BiogramPricing from "../../../components/BiogramPricing";
import Footer from "@/components/footer/Footer";
import ProfileCard from "../../../components/ProfileCard";
import InstagramRedirectFeatures from "../../../components/AddSocialMediaPictureUpload";
const Forpeople = () => {
  return (
    <div>
      <Navbar />
      <BiogramLandingPage />
      <ChooseBiogram />
      <RealTimeAnalyticsHero />
      <ArtistShowcase />
       <BiogramProfile />
       <BiogramShoutPage />
       <ProfileCard />
       <InstagramRedirectFeatures />
      <BiogramPricing />
      <Footer />
    </div>
  );
};

export default Forpeople;

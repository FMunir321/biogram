import BiogramLandingPage from "../../../components/forPeople/BiogramLandingPage";
import ChooseBiogram from "../../../components/forPeople/choosebiogram/ChooseBiogram";
import Navbar from "../../../components/forPeople/navbar/Navbar";
import RealTimeAnalyticsHero from "../../../components/forPeople/realTimeAnalyticsHero/RealTimeAnalyticsHero";
import ArtistShowcase from "../../../components/forPeople/artistShowcase/ArtistShowcase";
import BiogramProfile from "../../../components/forPeople/biogramProfile/BiogramProfile";
import BiogramShoutPage from "../../../components/BiogramShout";
import BiogramPricing from "../../../components/forPeople/biogramPricing/BiogramPricing";
import Footer from "@/components/footer/Footer";
import ProfileCard from "../../../components/forPeople/profileCard/ProfileCard";
import InstagramRedirectFeatures from "../../../components/forPeople/instagramRedirectFeatures/InstagramRedirectFeatures";
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

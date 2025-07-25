import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  function handleUsernameChange(name: string) {
    setName(name);
  }
  
  function handleSignupWithName(name:string){
    if (name.trim()) {
      navigate(`/signup?name=${encodeURIComponent(name)}`);
    } else {
      navigate('/signup');
    }
  }
  
  return (
    <div>
      <Navbar />
      <BiogramLandingPage name={name} handleNameInput={handleUsernameChange}  handleButtonInput={handleSignupWithName}/>
      <ChooseBiogram />
      <RealTimeAnalyticsHero   name={name} handleNameInput={handleUsernameChange}  handleButtonInput={handleSignupWithName}  />
      <ArtistShowcase />
      <BiogramProfile name={name} handleNameInput={handleUsernameChange}  handleButtonInput={handleSignupWithName}  />
      <BiogramShoutPage  /> 
      <ProfileCard />
      <InstagramRedirectFeatures />
      <BiogramPricing />
      <Footer />
    </div>
  );
};

export default Forpeople;

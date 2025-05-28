import SocialIcon from "../components/SocialIcon";
import CategorySection from "../components/CategorySection";
import LinkCard from "@/components/LinkCard";
import { Button } from "../components/ui/button";
import { FaPlus } from "react-icons/fa";
// import { Input } from "../../components/ui/input";
// Import images from src/assets
import FacebookImage from "../assets/Facebook.png";
import InstagramImage from "../assets/Instagram.png";
import TwitterImage from "../assets/twitter.png";
import TiktokImage from "../assets/TikTok.png";
import WhatsappImage from "../assets/Whatsapp.png";
import LinkedinImage from "../assets/Linkedin.png";
import SkypeImage from "../assets/Skype.png";
import AppleImage from "../assets/AppleMusic.png";
import SoundcloudImage from "../assets/Soundcloud.png";
import SpotifyImage from "../assets/Spotify.png";
import LinkImage from "../assets/Link.png";
import ShoppingImage from "../assets/Shopingbag.png";
import YoutubeImage from "../assets/Youtube.png";
import CalendarImage from "../assets/Calender.png";

const BiogramProfile: React.FC = () => {
  return (
    <div
      className="w-full h-full min-h-screen p-4 md:p-8 font-sans"
      style={{
        background: "linear-gradient(97.29deg, #98e6c3 13.65%, #4a725f 90.87%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left section (8 columns) */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                What can you add to your Biogram?
              </h1>
              <p className="text-white text-base md:text-lg">
                Your Biogram Profile is your digital hub, and the possibilities
                are endless! From all your favourite social media platforms to
                any link on the internet, You can showcase everything that
                matters to you in one place.
              </p>
            </div>

            {/* Signup Section */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 border border-gray-300 rounded-[46px] px-4 py-2 bg-white w-full">
              <input
                type="text"
                placeholder="Biogram/Your name"
                className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none w-full sm:w-auto py-3"
              />
              <Button className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-lg px-6 py-3 rounded-full font-poppins w-full sm:w-auto hover:from-[#4a725f] hover:to-[#98e6c3] focus:outline-none focus:ring-2 focus:ring-orange-300 h-[60px]">
                Signup Free
              </Button>
            </div>

            {/* Category Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <CategorySection title="Social Networks">
                <SocialIcon
                  imageSrc={FacebookImage}
                  backgroundColor="bg-blue-600"
                />
                <SocialIcon
                  imageSrc={InstagramImage}
                  backgroundColor="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                />
                <SocialIcon
                  imageSrc={TwitterImage}
                  backgroundColor="bg-blue-400"
                />
                <SocialIcon imageSrc={TiktokImage} backgroundColor="bg-black" />
              </CategorySection>

              <CategorySection title="Business">
                <SocialIcon
                  imageSrc={WhatsappImage}
                  backgroundColor="bg-green-500"
                />
                <SocialIcon
                  imageSrc={LinkedinImage}
                  backgroundColor="bg-blue-700"
                />
                <SocialIcon
                  imageSrc={SkypeImage}
                  backgroundColor="bg-blue-400"
                />
              </CategorySection>

              <CategorySection title="Music">
                <SocialIcon
                  imageSrc={AppleImage}
                  backgroundColor="bg-pink-500"
                />
                <SocialIcon
                  imageSrc={SoundcloudImage}
                  backgroundColor="bg-orange-500"
                />
                <SocialIcon
                  imageSrc={SpotifyImage}
                  backgroundColor="bg-green-500"
                />
              </CategorySection>

              {/* Payment Section */}
              <CategorySection title="Payment">
                <SocialIcon
                  imageSrc={AppleImage}
                  backgroundColor="bg-pink-500"
                />
              </CategorySection>

              {/* Gaming Section */}
              <CategorySection title="Gaming">
                <SocialIcon
                  imageSrc={AppleImage}
                  backgroundColor="bg-pink-500"
                />
              </CategorySection>

              {/* Lifestyle Section */}
              <CategorySection title="Lifestyle">
                <SocialIcon
                  imageSrc={AppleImage}
                  backgroundColor="bg-pink-500"
                />
              </CategorySection>
            </div>
          </div>

          {/* Right section (4 columns) */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h3 className="text-white text-lg md:text-xl mb-2">Link</h3>
              <LinkCard
                title="Custom links"
                subtitle="Link section"
                imageSrc={LinkImage}
                icon={<FaPlus />}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg md:text-xl mb-2">Streaming</h3>
              <LinkCard
                title="Spotify"
                subtitle="View Spotify"
                imageSrc={SpotifyImage}
                icon={<FaPlus />}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg md:text-xl mb-2">E commerce</h3>
              <LinkCard
                title="New Merch"
                subtitle="Merch section"
                imageSrc={ShoppingImage}
                icon={<FaPlus />}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg md:text-xl mb-2">
                Video Contents
              </h3>
              <LinkCard
                title="Youtube"
                subtitle="View youtube video"
                imageSrc={YoutubeImage}
                icon={<FaPlus />}
              />
            </div>

            <div className="mb-8">
              <h3 className="text-white text-lg md:text-xl mb-2">
                Booking & Appointments
              </h3>
              <LinkCard
                title="Calendly"
                subtitle="View Top Link"
                imageSrc={CalendarImage}
                icon={<FaPlus />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiogramProfile;

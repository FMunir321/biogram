import image from "../assets/flowers.png";
import miamiImg from "../assets/miami.jpg";
import videoImg from "../assets/videoshoot.jpg";
import dish from "../assets/dish.png";
import redjersy from "../assets/redjersy.png";
import Mobilefram from "../assets/realtimeanalytics/mobilefram.png";
import Tickets from "../assets/realtimeanalytics/tickets.png";
import Sweet from "../assets/realtimeanalytics/sweet.png";
import Stream from "../assets/realtimeanalytics/stream.png";
import Music from "../assets/realtimeanalytics/music.png";
import Photshoot from "../assets/realtimeanalytics/photshoot.png";
import Videoshoot from "../assets/realtimeanalytics/videoshoot.png";
import FacebookImage from "../assets/Facebook.png";
import InstagramImage from "../assets/Instagram.png";
import TwitterImage from "../assets/twitter.png";
import TiktokImage from "../assets/TikTok.png";
import WhatsappImage from "../assets/Whatsapp.png";
import {
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import PhoneMockup from "../components/PhoneMockup";
import CategorySection from "@/components/CategorySection";
import SocialIcon from "@/components/SocialIcon";

const ArtistShowcase = () => {
  const socialIcons = [
    { src: FacebookImage, alt: "Facebook" },
    { src: InstagramImage, alt: "Instagram" },
    { src: TwitterImage, alt: "Twitter" },
    { src: TiktokImage, alt: "TikTok" },
    { src: WhatsappImage, alt: "Whatsapp" },
  ];

  return (
    <>
      <div className="container p-5 flex flex-col lg:flex-row mx-auto gap-4 my-5 ">
        <div className="flex flex-col md:flex-row shadow-2xl gap-4 md:gap-0 lg:w-[60%] lg:h-[422px] xl:h-full">
          <div className="md:w-[50%]">
            <p className="top-4 mt-5 max-w-[300px] left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-4 py-1 rounded-r-full font-semibold z-10">
              Coming Soon: Add your Tickets
            </p>
            <div className="pl-5">
              <h1 className="text-[40px] font-extrabold text-black">
                Tour Dates
              </h1>

              {/* Vertical stack with alternating alignments */}
              <div className="flex flex-col gap-4 mt-5">
                {/* First card - align left */}
                <div className="self-start w-[250px]">
                  <div className="border border-[#7ecfa7] rounded-lg px-5 bg-[#d8e8e0]">
                    <div className="flex flex-row items-center justify-between border-b border-dotted border-[#3A3A3A]">
                      <p className="text-[20px] font-medium text-[#2D2D2D]">
                        <span className="text-[40px] font-bold">21 </span>jun
                        2025
                      </p>
                      <p className="text-[15px] font-medium text-[#2D2D2D] mt-[-30px] mr-[-12px]">
                        8PM
                      </p>
                    </div>
                    <p className="text-[20px] font-medium text-[#2D2D2D]">
                      Kaseya Center
                    </p>
                    <p className="text-[14px] font-normal text-[#2D2D2D]">
                      Miami, FL
                    </p>
                  </div>
                </div>

                {/* Second card - align right */}
                <div className="self-end w-[250px]">
                  <div className="border border-[#7ecfa7] rounded-lg px-5 bg-[#d8e8e0]">
                    <div className="flex flex-row items-center justify-between border-b border-dotted border-[#3A3A3A]">
                      <p className="text-[20px] font-medium text-[#2D2D2D]">
                        <span className="text-[40px] font-bold">26 </span>jun
                        2025
                      </p>
                      <p className="text-[15px] font-medium text-[#2D2D2D] mt-[-30px] mr-[-12px]">
                        10PM
                      </p>
                    </div>
                    <p className="text-[20px] font-medium text-[#2D2D2D]">
                      T-Mobile Arena
                    </p>
                    <p className="text-[14px] font-normal text-[#2D2D2D]">
                      Las Vegas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 md:w-[50%] lg:mt-[65px]">
            <div className="relative w-full flex justify-center items-center">
              {/* Mobile Frame */}

              <img
                src={Tickets}
                alt="Mobile Frame"
                className="w-[97%] h-[90%] rounded-t-[56px] object-cover shadow-md"
              />

              {/* Content Image inside the frame */}
              <img
                src={Mobilefram} // <-- your content image
                alt="Content"
                className="absolute w-full object-cover top-[-15px]"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-[2%]  w-[80%]">
                <h3 className="text-white text-[32px] font-extrabold">
                  Chan Ja HO
                </h3>
                <p className="text-white text-[14px]">June 21, 2025</p>
                <div className="flex flex-row gap-2 mt-2">
                  {socialIcons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="rounded-[30px] flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)",
                        width: "63px",
                        height: "58px",
                      }}
                    >
                      <img src={icon.src} alt={icon.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-2xl lg:w-[40%] lg:h-[422px] xl:h-[531px] 2xl:h-[640px] bg-[#e4f4ec]">
          <p className="mt-5 p-0 max-w-[300px] left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-4 py-1 rounded-r-full font-semibold z-10">
            Coming Soon: Sell Products & Services
          </p>
          <div className="flex flex-row justify-between items-center mt-5 relative">
            {/* Card Column - overlaps image and is vertically centered */}
            <div className="z-10 -mr-20">
              <div className="flex flex-col gap-4 pl-2">
                {/* First card */}
                <div className="flex flex-row items-center bg-white shadow-md rounded-lg">
                  <div>
                    <img
                      src={redjersy}
                      alt="Artist"
                      className="w-[100px] h-[80px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="rounded-lg px-5 bg-white">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">
                      Red jersey
                    </p>
                    <p className="text-[16px] font-normal text-[#2D2D2D]">
                      250.00$
                    </p>
                  </div>
                </div>

                {/* Second card */}
                <div className="flex flex-row items-center bg-white shadow-md rounded-lg">
                  <div>
                    <img
                      src={Sweet}
                      alt="Artist"
                      className="w-[100px] h-[80px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="rounded-lg px-5 bg-white">
                    <p className="text-[20px] font-bold text-[#2D2D2D]">
                      Red jersey
                    </p>
                    <p className="text-[16px] font-normal text-[#2D2D2D]">
                      250.00$
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="z-0 xl:mt-[45px] 2xl:mt-[155px]">
              <img
                src={Mobilefram}
                alt="Artist"
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 flex flex-col lg:flex-row items-center mx-auto gap-4 my-5 ">
        <div className="flex flex-col shadow-2xl lg:w-[40%] h-full bg-[#e4f4ec]">
          <p className="mt-5 p-0 max-w-[300px] left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-4 py-1 rounded-r-full font-semibold z-10">
            Add Your Music
          </p>
          <div className="flex flex-row justify-between items-center mt-5 relative">
            {/* Card Column - overlaps image and is vertically centered */}
            <div className="z-10 -mr-25">
              <div className="flex flex-col gap-4 pl-2">
                {/* First card */}
                <div className="flex flex-row items-center bg-white shadow-md rounded-full">
                  <div>
                    <img
                      src={Stream}
                      alt="Artist"
                      className="w-[52px] h-[50px] object-cover rounded-full"
                    />
                  </div>
                  <div className=" px-1">
                    <p className="text-[14px] font-normal text-[#2D2D2D]">
                      Stream “Hype” on all platforms!
                    </p>
                  </div>
                </div>

                {/* Second card */}
                <div className="border border-[#4278ef] rounded-xl mt-9">
                  <img
                    src={Music}
                    alt="Artist"
                    className="w-[280px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="z-0">
              <img
                src={Mobilefram}
                alt="Artist"
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-2xl lg:w-[60%] h-full bg-[]">
          <p className="mt-5 p-0 max-w-[300px] left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-4 py-1 rounded-r-full font-semibold z-10">
            Coming Soon: Appointment Scheduler
          </p>

          <div className="flex flex-row justify-between items-center mt-5 relative">
            {/* Image Column */}
            <div className=" pl-5">
              <img
                src={Mobilefram}
                alt="Artist"
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </div>
            {/* Card Column - overlaps image and is vertically centered */}
            <div className=" p-3">
              <div className="flex flex-col gap-4 pl-2">
                {/* First card */}
                <div className="">
                  <img
                    src={Photshoot}
                    alt="Artist"
                    className=" object-cover rounded-xl"
                  />
                </div>

                {/* Second card */}
                <div className="">
                  <img
                    src={Videoshoot}
                    alt="Artist"
                    className=" object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container mx-auto p-4">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //     <TourDatesAndArtistCard />
    //     <ProductsCard />
    //     <MusicPlayerCard />
    //     <AppointmentSchedulerCard />
    //   </div>
    // </div>
  );
};

export default ArtistShowcase;

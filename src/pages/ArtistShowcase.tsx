import image from "../assets/flowers.png";
import miamiImg from "../assets/miami.jpg";
import videoImg from "../assets/videoshoot.jpg";
import dish from "../assets/dish.png";
import redjersy from "../assets/redjersy.png";
import Mobilefram from "../assets/realtimeanalytics/mobilefram.png";
import Sweet from "../assets/realtimeanalytics/sweet.png";
import Stream from "../assets/realtimeanalytics/stream.png";
import Music from "../assets/realtimeanalytics/music.png";
import Photshoot from "../assets/realtimeanalytics/photshoot.png";
import Videoshoot from "../assets/realtimeanalytics/videoshoot.png";
import {
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import PhoneMockup from "../components/PhoneMockup";

const SocialLinks = () => (
  <div className="flex space-x-3 mt-2">
    {[FaInstagram, FaTwitter, FaSpotify, FaYoutube, FaTiktok].map((Icon, i) => (
      <Icon
        key={i}
        className="text-white bg-black/50 rounded-full p-1.5"
        size={20}
      />
    ))}
  </div>
);

const ArtistProfileCard = () => (
  <div className="rounded-xl overflow-hidden bg-white w-full shadow-md">
    <img
      src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=80&q=80"
      alt="Artist"
      className="w-full h-48 object-cover"
    />
    <div className="p-3 bg-gradient-to-t from-black/80 to-transparent -mt-12 relative z-10 rounded-b-xl">
      <h3 className="text-white text-base font-semibold">John Doe</h3>
      <p className="text-white/70 text-xs">john.doe</p>
      <SocialLinks />
    </div>
  </div>
);

const TourDatesAndArtistCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between w-full relative">
    <div className="absolute top-4 left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-4 py-1 rounded-r-full font-semibold z-10">
      Coming Soon: Add your Tickets
    </div>
    <div className="flex-1 pr-4 mt-12">
      <h2 className="text-2xl font-bold mb-6">Tour Dates</h2>
      {[
        {
          date: "21",
          month: "Jun",
          venue: "Kaseya Center",
          city: "Miami FL",
          time: "8PM",
        },
        {
          date: "26",
          month: "Jun",
          venue: "T-Mobile Arena",
          city: "Las Vegas",
          time: "10AM",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-[#bcf3d8] rounded-xl px-4 py-3 mb-4"
        >
          <div className="text-center">
            <div className="text-xl font-bold">{item.date}</div>
            <div className="text-xs">{item.month} 2025</div>
          </div>
          <div>
            <div className="font-semibold">{item.venue}</div>
            <div className="text-xs">{item.city}</div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-xs">{item.time}</div>
            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs mt-1 inline-block">
              Tickets
            </span>
          </div>
        </div>
      ))}
    </div>
    <div className="w-1/2 mt-6 md:mt-0 flex flex-col justify-end items-center">
      <PhoneMockup image={miamiImg} name="Chan Ja HO" username="Chan567.com" />
    </div>
  </div>
);

const ProductsCard = () => (
  <div className="bg-[#dcfaeb] shadow rounded-[20px] p-8 flex flex-col relative overflow-hidden w-[562px] h-[466px]">
    <div className="absolute top-4 left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-10">
      Coming Soon: Sell Products & Services
    </div>

    <h2 className="text-2xl font-bold mb-6 text-[#1f1f1f] mt-8">
      Your Products
    </h2>

    <div className="grid grid-cols-1 gap-4 z-10 ">
      {[
        { name: "Red Jersey", price: "$250.00", image: redjersy },
        { name: "Sweets", price: "$50.99", image: dish },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex items-center bg-white shadow p-3 gap-4"
          style={{ width: "355px", height: "99px", borderRadius: "10px" }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-[80px] object-cover rounded-l-[10px]"
          />
          <div>
            <p className="font-semibold text-black">{item.name}</p>
            <p className="text-xs text-gray-500">{item.price}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute bottom-4 right-4 z-10">
      <PhoneMockup
        image={videoImg}
        name="Michal James"
        username="MJames123.com"
      />
    </div>
  </div>
);

const MusicPlayerCard = () => (
  <div className="bg-[#dcfaeb] shadow rounded-[20px] p-8 flex flex-col relative overflow-hidden w-[562px] h-[466px]">
    <div className="absolute top-4 left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-20">
      Add Your Music
    </div>
    <div className="flex flex-col justify-between mt-13 z-10">
      <div className="flex items-center bg-white shadow-md rounded-full p-3 mb-4 w-[74%] mt-15">
        <img
          src={image}
          alt="Track Cover"
          className="w-10 h-10 object-cover rounded"
        />
        <p className="ml-4 text-sm text-black">
          Stream "Hype" on all platforms!
        </p>
      </div>
      <div className="bg-[#081439] p-4 rounded-lg shadow-md w-[74%] mt-2">
        <div className="flex items-center mb-2 ">
          <img
            src={image}
            alt="Artist"
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <h3 className="text-white font-semibold text-base">John Doe</h3>
            <p className="text-xs text-gray-300">john.doe</p>
          </div>
        </div>
        <div className="w-full mb-2">
          <div className="bg-gray-300 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full w-[60%]" />
          </div>
          <div className="flex justify-between text-xs text-white mt-1">
            <span>0:00</span>
            <span>3:45</span>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div>
    <div className="absolute bottom-4 right-4 z-0">
      <PhoneMockup image={image} name="Max James" username="MJames.com" />
    </div>
  </div>
);

const AppointmentSchedulerCard = () => (
  <div className="bg-white rounded-[20px] shadow-lg p-6 flex flex-col md:flex-row relative overflow-hidden w-[562px] h-[466px]">
    <div className="absolute top-4 left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-4 py-1 rounded-r-full font-semibold z-10">
      Coming Soon: Appointment Scheduler
    </div>
    <div className="flex flex-row w-full h-full mt-12">
      {/* Phone mockup on the left */}
      <div className="flex-shrink-0 flex items-center justify-center mr-6">
        <PhoneMockup image={image} name="Max James" username="MJames.com" />
      </div>
      {/* Appointment cards on the right */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-full space-y-4">
          {/* Card 1 */}
          <div
            className="relative rounded-xl overflow-hidden h-28 flex items-center px-4 text-white"
            style={{
              backgroundImage: `url(${miamiImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col">
              <span className="font-semibold text-lg">Photoshoot in Miami</span>
              <span className="text-xs text-white/90">2 Hours – $500</span>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="relative rounded-xl overflow-hidden h-28 flex items-center px-4 text-white"
            style={{
              backgroundImage: `url(${videoImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col">
              <span className="font-semibold text-lg">
                Video Shoot in Miami
              </span>
              <span className="text-xs text-white/90">1.5 Hours – $400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ArtistShowcase = () => (
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
                      <span className="text-[40px] font-bold">21 </span>jun 2025
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
                      <span className="text-[40px] font-bold">26 </span>jun 2025
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
          <img
            src={Mobilefram}
            alt="Artist"
            className="w-full object-cover rounded-xl shadow-md"
          />
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
          <div className="z-0">
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

export {
  SocialLinks,
  ArtistProfileCard,
  TourDatesAndArtistCard,
  ProductsCard,
  MusicPlayerCard,
  AppointmentSchedulerCard,
};

export default ArtistShowcase;

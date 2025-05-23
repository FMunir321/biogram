import image from "../assets/flowers.png";
import miamiImg from "../assets/miami.jpg";
import videoImg from "../assets/videoshoot.jpg";
import dish from "../assets/dish.png";
import redjersy from "../assets/redjersy.png";
import { FaInstagram, FaTwitter, FaSpotify, FaYoutube, FaTiktok } from "react-icons/fa";
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
        { date: "21", month: "Jun", venue: "Kaseya Center", city: "Miami FL", time: "8PM" },
        { date: "26", month: "Jun", venue: "T-Mobile Arena", city: "Las Vegas", time: "10AM" }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4 bg-[#bcf3d8] rounded-xl px-4 py-3 mb-4">
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
            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs mt-1 inline-block">Tickets</span>
          </div>
        </div>
      ))}
    </div>
    <div className="w-1/2 mt-6 md:mt-0 flex flex-col justify-end items-center">
      <PhoneMockup
        image={miamiImg}
        name="Chan Ja HO"
        username="Chan567.com"
      />
    </div>
  </div>
);

const ProductsCard = () => (
  <div className="bg-[#dcfaeb] shadow rounded-[20px] p-8 flex flex-col relative overflow-hidden w-[562px] h-[466px]">
    <div className="absolute top-4 left-0 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-10">
      Coming Soon: Sell Products & Services
    </div>

    <h2 className="text-2xl font-bold mb-6 text-[#1f1f1f] mt-8">Your Products</h2>

    <div className="grid grid-cols-1 gap-4 z-10 ">
      {[
        { name: "Red Jersey", price: "$250.00", image: redjersy},
        { name: "Sweets", price: "$50.99", image: dish}
      ].map((item, idx) => (
        <div
          key={idx}
         className="flex items-center bg-white shadow p-3 gap-4"
  style={{ width: '355px', height: '99px', borderRadius: '10px' }}
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
        <p className="ml-4 text-sm text-black">Stream "Hype" on all platforms!</p>
      </div>
      <div className="bg-[#081439] p-4 rounded-lg shadow-md w-[74%] mt-2">
        <div className="flex items-center mb-2 " >
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
      <PhoneMockup
        image={image}
        name="Max James"
        username="MJames.com"
      />
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
        <PhoneMockup
          image={image}
          name="Max James"
          username="MJames.com"
        />
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
              <span className="font-semibold text-lg">Video Shoot in Miami</span>
              <span className="text-xs text-white/90">1.5 Hours – $400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ArtistShowcase = () => (
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <TourDatesAndArtistCard />
      <ProductsCard />
      <MusicPlayerCard />
      <AppointmentSchedulerCard />
    </div>
  </div>
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

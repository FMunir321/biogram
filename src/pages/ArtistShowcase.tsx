import image from "../assets/flowers.png";
import { FaInstagram, FaTwitter, FaSpotify, FaYoutube, FaTiktok } from "react-icons/fa";

// Social Links
const SocialLinks = () => (
  <div className="flex space-x-2 mt-2">
    <FaInstagram className="text-white bg-black/30 rounded-full p-1" size={22} />
    <FaTwitter className="text-white bg-black/30 rounded-full p-1" size={22} />
    <FaSpotify className="text-white bg-black/30 rounded-full p-1" size={22} />
    <FaYoutube className="text-white bg-black/30 rounded-full p-1" size={22} />
    <FaTiktok className="text-white bg-black/30 rounded-full p-1" size={22} />
  </div>
);

// Artist Card Image Section
const ArtistImage = () => (
  <img
    src={image}
    alt="Artist Image"
    className="w-full h-64 object-cover rounded-xl shadow-lg"
  />
);

// Artist Overlay
const ArtistOverlay = ({ name, username }: { name: string; username?: string }) => (
  <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 to-transparent w-full rounded-b-xl -mt-16">
    <h3 className="text-xl font-bold text-white">{name}</h3>
    {username && <p className="text-sm text-white/80">{username}</p>}
    <SocialLinks />
  </div>
);

// Artist Profile Card
const ArtistProfileCard = () => (
  <div className="rounded-2xl overflow-hidden relative h-full flex flex-col justify-end bg-white w-full">
    <img
      src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=80&q=80"
      alt="Artist Image"
      className="w-full h-60 object-cover rounded-2xl"
    />
    <div className="relative z-10 p-2 bg-gradient-to-t from-black/80 to-transparent w-full rounded-b-2xl -mt-8">
      <h3 className="text-lg font-bold text-white">John Doe</h3>
      <p className="text-xs text-white/80">john.doe</p>
      <SocialLinks />
    </div>
  </div>
);

// Tour Dates and Artist Card
const TourDatesAndArtistCard = () => (
  <div className="bg-white rounded-xl border shadow p-6 flex flex-col md:flex-row justify-between h-full relative overflow-hidden w-[640px]">
    <div className="absolute top-4 bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-10 right-[424px]">
      Coming Soon: Add your Tickets
    </div>
    <div className="flex-1 flex flex-col justify-center z-10">
      <h2 className="text-3xl font-bold mb-6 mt-8">Tour Dates</h2>
      <div className="space-y-10">
        {[1, 2].map((id) => (
          <div
            key={id}
            className={`flex items-center gap-4 rounded-xl p-2 ${id === 1 ? "bg-[#bcf3d8]" : "bg-[#bcf3d8] ml-10"} text-[#292828]`}
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">{id === 1 ? "21" : "26"}</span>
              <span className="text-xs">Jun 2025</span>
            </div>
            <div>
              <div className="font-semibold">{id === 1 ? "Kaseya Center" : "T-Mobile Arena"}</div>
              <div className="text-xs">{id === 1 ? "Miami FL" : "Las Vegas"}</div>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="text-xs">{id === 1 ? "8PM" : "10AM"}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mt-1">Tickets</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-end items-center relative min-w-[220px] mt-8 md:mt-0 md:ml-8">
      <ArtistImage />
      <ArtistOverlay name="John Doe" username="john.doe" />
    </div>
  </div>
);


// Products Card
const ProductsCard = () => (
  <div className="bg-[#bcf3d8] shadow rounded-2xl p-12 flex flex-col justify-between h-full relative overflow-hidden w-[610px]">
    <div className="absolute top-4 right-[352px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-10">
      Coming Soon: Sell Products & Services
    </div>
    <div className="flex flex-col gap-4 mt-8">
      {["Red jersey", "Sweets"].map((name, idx) => (
        <div key={idx} className="flex items-center gap-4 bg-white shadow-lg z-10 w-1/2">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=80&q=80"
            alt={name}
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <div className="font-semibold text-black">{name}</div>
            <div className="text-xs text-black">{idx === 0 ? "$250.00" : "$50.99"}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute right-4 w-1/2">
      <ArtistProfileCard />
    </div>
  </div>
);

// Music Player Card
const MusicPlayerCard = () => (
  <div className="bg-white rounded-xl border shadow p-6 flex flex-col justify-between h-full relative overflow-hidden">
    <div className="absolute top-4 right-[495px] bg-gradient-to-r from-[#7ECFA7] to-[#53886C] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-20">
      Add Your Music
    </div>
    <div className="absolute w-1/2 h-full right-4 z-10 bottom-8">
      <ArtistProfileCard />
    </div>
    <div className="flex mt-8 bg-white p-3 w-3/5 shadow-lg rounded-md z-20">
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=80&q=80"
        alt="Music Track"
        className="w-10 h-10 object-cover rounded"
      />
      <p className="text-[16px] ml-4 mt-2 text-black">Stream "Hype" on all platforms!</p>
    </div>
    <div className="flex flex-col mt-6 bg-blue-900 p-4 w-3/5 shadow-lg rounded-md z-20">
      <img
        src={image}
        alt="Artist"
        className="w-10 h-10 rounded-full object-cover mb-2 ml-8"
      />
      <h3 className="text-lg font-bold ml-4 text-white">John Doe</h3>
      <p className="text-[10px] text-gray-300 ml-5">john.doe</p>
      <div className="w-full mt-3">
        <div className="bg-gray-200 rounded-full h-1.5 w-[160px]">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "60%" }}></div>
        </div>
        <div className="flex text-xs text-gray-400 mt-1 justify-between w-[160px]">
          <span>0:00</span>
          <span>3:45</span>
        </div>
      </div>
      <SocialLinks />
    </div>
  </div>
);

const ArtistShowcase = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <TourDatesAndArtistCard />
        <div className="bg-[#bcf3d8] shadow rounded-2xl p-8 flex flex-col justify-between h-full relative overflow-hidden w-[560px]">
          <div className="absolute top-4 right-[370px] bg-[#5ad18b] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-10 ">
            Coming Soon: New Feature
          </div>
          <div className="flex flex-col  mt-8">
            <h2 className="text-3xl font-bold">New Feature</h2>
            <p className="text-gray-600 text-sm">Stay tuned for exciting updates!</p>
          </div>
          <div className="absolute right-4 w-1/2">
            <ArtistProfileCard />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ProductsCard />
        <MusicPlayerCard />
      </div>
    </div>
  );
};

export {
  TourDatesAndArtistCard,
  ProductsCard,
  MusicPlayerCard,
  ArtistProfileCard,
  SocialLinks,
};

export default ArtistShowcase;
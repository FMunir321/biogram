import React from "react";
import { FaInstagram, FaTwitter, FaSpotify, FaYoutube, FaTiktok } from "react-icons/fa";

// Dummy Data
const tourDates = [
  {
    id: 1,
    day: "21",
    month: "Jun 2025",
    time: "8PM",
    venue: "Kaseya Center",
    city: "Miami FL",
  },
  {
    id: 2,
    day: "26",
    month: "Jun 2025",
    time: "10AM",
    venue: "T-Mobile Arena",
    city: "Las Vegas",
  },
];

const artists = [
  {
    id: 1,
    name: "Chan Ja HO",
    username: "@chan567.com",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Michal James",
    username: "@MJames123.com",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Arcangel",
    username: "@Arcangel.com",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Max James",
    username: "@Maxmes.com",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Stream “Hype” on all platforms!",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  
];

const products = [
  { id: 1, name: "Red jersey", price: "250.00$" },
  { id: 2, name: "Sweets", price: "50.99$" },
];

const services = [
  { id: 1, title: "Photoshoot in miami", duration: "2 Hours", price: "$500" },
  { id: 2, title: "Video Shoot in miami", duration: "2 Hours", price: "$199" },
];

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

// Tour Dates and Artist Card
const TourDatesAndArtistCard = ({
  artist,
}: {
  artist: typeof artists[0];
}) => (
  <div className="bg-white rounded-xl border shadow p-6 flex flex-col md:flex-row justify-between h-full relative overflow-hidden">
    {/* Coming Soon Label */}
    <div className="absolute top-4 left-4 bg-green-200 text-green-900 text-xs px-3 py-1 rounded-full font-semibold z-10">
      Coming Soon: Add your Tickets
    </div>
    {/* Tour Dates Section */}
    <div className="flex-1 flex flex-col justify-center z-10">
      <h2 className="text-3xl font-bold mb-6 mt-8">Tour Dates</h2>
      <div className="space-y-10">
        {tourDates.map((date) => (
          <div
            key={date.id}
            className={
              "flex items-center gap-4 rounded-xl p-2 " +
              (date.id === 1
                ? "bg-[#bcf3d8] text-[#292828]"
                : "bg-[#bcf3d8] text-[#292828] ml-10")
            }
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">{date.day}</span>
              <span className="text-xs">{date.month}</span>
            </div>
            <div>
              <div className="font-semibold">{date.venue}</div>
              <div className="text-xs">{date.city}</div>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="text-xs">{date.time}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mt-1">Tickets</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Artist Profile Section */}
    <div className="flex-1 flex flex-col justify-end items-center relative min-w-[220px] mt-8 md:mt-0 md:ml-8">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-64 object-cover rounded-xl shadow-lg"
      />
      <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 to-transparent w-full rounded-b-xl -mt-16">
        <h3 className="text-xl font-bold text-white">{artist.name}</h3>
        <p className="text-sm text-white/80">{artist.username}</p>
        <SocialLinks />
      </div>
    </div>
  </div>
);

// Products Card
const ArtistProfileCard = ({ artist }: { artist: typeof artists[0] }) => (
  <div className="rounded-2xl overflow-hidden relative h-full flex flex-col justify-end bg-white w-full">
    <img
      src={artist.image}
      alt={artist.name}
      className="w-full h-60 object-cover rounded-2xl"
    />
    <div className="relative z-10 p-2 bg-gradient-to-t from-black/80 to-transparent w-full rounded-b-2xl -mt-8">
      <h3 className="text-lg font-bold text-white">{artist.name}</h3>
      <p className="text-xs text-white/80">{artist.username}</p>
      <SocialLinks />
    </div>
  </div>
);

const ProductsCard = () => (
  <div className="bg-[#bcf3d8] shadow rounded-2xl p-12 flex flex-col justify-between h-full relative overflow-hidden w-[560px]">
    <div className="absolute top-4 right-[242px] bg-[#5ad18b] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-10">
      Coming Soon: Sell Products & Services
    </div>
    <div className="flex flex-col gap-4 mt-8">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-4 bg-white shadow-lg z-10 w-1/2">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=80&q=80"
            alt={product.name}
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <div className="font-semibold text-black">{product.name}</div>
            <div className="text-xs text-black">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute right-4 w-1/2 ">
      <ArtistProfileCard artist={artists[1]} />
    </div>
  </div>
);

// Music Player Card
const MusicPlayerCard = () => (
  <div className="bg-white rounded-xl border shadow p-6 flex flex-col justify-between h-full relative overflow-hidden">

    {/* Green Badge */}
    <div className="absolute top-4 right-[443px] bg-[#5ad18b] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-20">
      Add Your Music
    </div>

    {/* Background Artist Profile (Michael) */}
    <div className="absolute  w-1/2 h-full right-4 z-10 bottom-8">
      <ArtistProfileCard artist={artists[1]} />
    </div>

    {/* First Blue Box */}
    <div className="flex mt-8 bg-white  p-3 w-3/5 shadow-lg rounded-md z-20">
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=80&q=80"
        alt="Arcangel"
        className="w-10 h-10 object-cover rounded"
      />
      <p className="text-[16px] ml-4 mt-2 text-black">{artists[4].name}</p>
    </div>

    {/* Second Blue Box */}
    <div className="flex flex-col mt-6 bg-blue-900 p-4 w-3/5 shadow-lg rounded-md z-20">
      <img
        src={artists[2].image}
        alt={artists[2].name}
        className="w-10 h-10 rounded-full object-cover mb-2 ml-8"
      />
      <h3 className="text-lg font-bold ml-4 text-white">{artists[2].name}</h3>
      <p className="text-[10px] text-gray-300 ml-5">{artists[2].username}</p>

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


// Appointment Scheduler Card
// Appointment Scheduler Card
// Appointment Scheduler Card
const AppointmentSchedulerCard = () => (
  <div className="bg-white rounded-xl border shadow p-6 flex flex-col justify-between h-full relative overflow-hidden">
    {/* Green Badge */}
    <div className="absolute top-4 left-[1px] bg-[#5ad18b] text-white text-xs px-3 py-1 rounded-r-full font-semibold z-20">
      Coming Soon: Appointment Scheduler
    </div>

    {/* Background Image (Artist) on Left Side */}
    <div className="absolute w-1/2 h-full left-4 z-10 bottom-8">
      <ArtistProfileCard artist={artists[1]} />
    </div>

    {/* Appointment Service Cards */}
    <div className="flex flex-col gap-4 mt-8 ml-auto items-center w-3/5 z-20">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-[#bcf3d8] rounded-lg shadow p-4 w-full flex flex-col items-start"
        >
          <h4 className="text-lg font-semibold text-black">{service.title}</h4>
          <p className="text-sm text-gray-700">{service.duration}</p>
          <span className="text-md font-bold text-green-700 mt-2">{service.price}</span>
        </div>
      ))}
    </div>
  </div>
);




// Main Layout
const ArtistShowcase: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex items-center justify-center py-8">
    <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Top Left: Tour Dates and Artist */}
      <div className="col-span-2 row-span-1">
        <TourDatesAndArtistCard artist={artists[0]} />
      </div>
      {/* Top Right: Products & Services */}
      <div className="col-span-1 row-span-1">
        <ProductsCard />
      </div>
      {/* Bottom Left: Music Player */}
      <div className="col-span-2 row-span-1">
        <MusicPlayerCard />
      </div>
      {/* Bottom Right: Appointment Scheduler */}
      <div className="col-span-2 row-span-1">
        <AppointmentSchedulerCard />
      </div>
    </div>
  </div>
);

export default ArtistShowcase;

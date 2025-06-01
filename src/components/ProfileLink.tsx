import { Link } from "react-router-dom";
import profile from "../../public/assets/aleximage.png";
import { TbExternalLink } from "react-icons/tb";

const ProfileLink = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 rounded-2xl p-10 max-w-6xl mx-auto ">
      
      {/* Left: Form Section */}
      <div className="flex-1 w-full">
        <div className="flex items-center justify-center gap-2 mb-4 border border-black p-4">
          <span className="text-black text-9xl">
            <TbExternalLink />
          </span>
          <h2 className="text-lg font-bold">Direct Link</h2>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Redirect users directly to any website without an intermediate page
        </p>

        <label className="block text-gray-600 text-sm mb-1">Destination Page</label>
        <div className="flex items-center mb-4 border rounded-lg px-3 py-2 bg-gray-100">
          <input
            type="text"
            className="bg-transparent outline-none w-full text-sm"
            placeholder="http://your-link.com"
            defaultValue="http://onlinesjasdbasljbasdi234"
            />
          <button className="text-[#98e6c3] hover:text-[#4a725f] text-lg">🗑</button>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Shield Protection</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#98e6c3]"></div>
            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
          </label>
        </div>

        <p className="text-xs text-gray-500 mb-4">
          To protect your social account, Shield Protection provides an additional layer of security.{" "}
          <a href="#" className="text-blue-600 underline">How Shield Protection Works?</a>
        </p>
       <Link to="/maindashboard">
        <button className="w-full bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white font-semibold py-2 rounded-full hover:opacity-90 transition cursor-pointer">
          View Profile
        </button>
        </Link>
      </div>

      {/* Right: User Card */}
      <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-[40px] p-4 max-w-[300px] mx-auto">
        <img
          src={profile}
          alt="User"
          className="rounded-full w-full h-auto max-w-[250px] mb-2" // Adjust for responsiveness
        />
        <h3 className="text-lg font-semibold">Alex James</h3>
        <p className="text-gray-500 text-sm">@alexjames</p>
      </div>
    </div>
  );
};

export default ProfileLink;
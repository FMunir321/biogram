import React from "react";
import logo from "../../../public/assets/Biogramlogo2.png";
import bg from "../../../public/assets/Groupbg.png";

const Footer: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#7ECFA7] to-[#53886C]">
      {/* Background Image */}
      <img
        src={bg}
        alt="Light Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />

      <footer className="relative z-10 text-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="max-w-7xl mx-auto mb-10 text-center md:text-left">
          <a href="/" className="flex justify-center md:justify-start items-center">
            <img src={logo} alt="Biogram Logo" className="h-10 sm:h-12" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          {/* Products */}
          <div className="bg-white/20 rounded-2xl p-4 space-y-4 w-full">
            <h2 className="text-lg font-bold ml-2">Products</h2>
            <ul className="space-y-2 mt-8 sm:mt-12">
              <li>
                <a href="#" className="hover:underline ml-2">Link-in-Bio</a>
                <hr className="w-4/5 mx-auto border-t border-white/70 my-4" />
              </li>
              <li>
                <a href="#" className="hover:underline ml-2">Linkme Business</a>
                <hr className="w-4/5 mx-auto border-t border-white/70 my-4" />
              </li>
              <li>
                <a href="#" className="hover:underline ml-2">Linkme+</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="bg-white/20 rounded-2xl p-4 space-y-4 w-full">
            <h2 className="text-lg font-bold ml-2">Company</h2>
            <ul className="space-y-2 mt-8 sm:mt-12">
              <li>
                <a href="#" className="hover:underline ml-2">About Us</a>
                <hr className="w-4/5 mx-auto border-t border-white/70 my-4" />
              </li>
              <li>
                <a href="#" className="hover:underline ml-2">Careers</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-white/20 rounded-2xl p-4 space-y-4 w-full">
            <h2 className="text-lg font-bold ml-2">Resources</h2>
            <ul className="space-y-2 mt-8 sm:mt-12">
              <li>
                <a href="#" className="hover:underline ml-2">Help & Support</a>
                <hr className="w-4/5 mx-auto border-t border-white/70 my-4" />
              </li>
              <li>
                <a href="#" className="hover:underline ml-2">Blog</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white/20 rounded-2xl p-4 space-y-4 w-full">
            <h2 className="text-lg font-bold ml-2">Legal</h2>
            <ul className="space-y-2 mt-8 sm:mt-12">
              <li>
                <a href="#" className="hover:underline ml-2">Terms & Conditions</a>
                <hr className="w-4/5 mx-auto border-t border-white/70 my-4" />
              </li>
              <li>
                <a href="#" className="hover:underline ml-2">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 text-center text-sm text-white/80">
          <p>&copy; 2024 Me Global App, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

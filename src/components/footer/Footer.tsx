import React from "react";
import logo from "../../assets/Biogramlogo2.png";

const Footer: React.FC = () => {
  return (
    <footer
  className="text-white py-12 px-6 overflow-x-hidden"
  style={{ background: "linear-gradient(to right, #7ECFA7, #53886C)" }}
>
      {/* Logo Section */}
      <div className="max-w-7xl mx-auto mb-10 text-center md:text-left">
        <a href="/" className="flex items-center ">
          <img src={logo} alt="Biogram Logo" className="h-10 sm:h-12" />
        </a>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Products */}
        <div className="bg-white/20 rounded-2xl p-4 space-y-4 w-[315px] h-[444px]">
          <h2 className="text-lg font-bold ml-2">Products</h2>

          <ul className="space-y-2 mt-24">
            <li>
              <a href="#" className="hover:underline ml-2">
                Link-in-Bio
              </a>
              <hr className="w-[260px] mx-auto border-t border-white/70 my-4" />
            </li>
            <li>
              <a href="#" className="hover:underline ml-2">
                Linkme Business
              </a>
              <hr className="w-[260px] mx-auto border-t border-white/70 my-4" />
            </li>
            <li>
              <a href="#" className="hover:underline ml-2">
                Linkme+
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="bg-white/20 rounded-2xl p-4 space-y-4">
          <h2 className="text-lg font-bold ml-2">Company</h2>
          <ul className="space-y-2 mt-24">
            <li>
              <a href="#" className="hover:underline ml-2">
                About Us
              </a>
              <hr className="w-[260px] mx-auto border-t border-white/70 my-4" />
            </li>
            <li>
              <a href="#" className="hover:underline ml-2">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="bg-white/20 rounded-2xl p-4 space-y-4">
          <h2 className="text-lg font-bold ml-2">Resources</h2>
          <ul className="space-y-2 mt-24">
            <li>
              <a href="#" className="hover:underline ml-2">
                Help & Support
              </a>
              <hr className="w-[260px] mx-auto border-t border-white/70 my-4" />
            </li>
            <li>
              <a href="#" className="hover:underline ml-2">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="bg-white/20 rounded-2xl p-4 space-y-4">
          <h2 className="text-lg font-bold ml-2">Legal</h2>
          <ul className="space-y-2 mt-24">
            <li>
              <a href="#" className="hover:underline ml-2">
                Terms & Conditions
              </a>
              <hr className="w-[260px] mx-auto border-t border-white/70 my-4" />
            </li>
            <li>
              <a href="#" className="hover:underline ml-2">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-40 text-center text-sm text-white/80">
        <p>Copyright 2024 Me Global App, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

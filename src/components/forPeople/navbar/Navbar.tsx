import React, { useState } from 'react';
import { Button } from "../../../components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../../../public/assets/Biogramlogo.png";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    // This would open login modal in a real implementation
    console.log("Login button clicked");
  };

  const handleSignup = () => {
    // This would redirect to signup page in a real implementation
    console.log("Signup button clicked");
  };

  return (
    <nav className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="flex-shrink-0">
            <a href="/" className="flex items-center ">
              <img src={logo} alt="Biogram Logo" className="h-10 sm:h-12" />
            </a>
          </div>

          <div className="hidden md:flex gap-4 items-center">
            
          <Link to="/login"><Button 
              variant="outline" 
              className="bg-transparent border border-black text-black font-poppins font-normal text-lg leading-5 tracking-normal w-[108px] h-[48px] rounded-2xl px-4 py-2 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </Button>
            </Link>
            <Link to="/signup">
            <Button 
              className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white font-poppins text-base md:text-xl w-[140px] md:w-[168px] h-[44px] md:h-[48px] rounded-2xl hover:from-[#4a725f] hover:to-[#98e6c3] transition duration-200 cursor-pointer"
              onClick={handleSignup}
            >
              Signup Free
            </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Button 
              variant="outline" 
              className="bg-transparent border border-black text-black font-poppins text-base w-full h-12 rounded-2xl hover:bg-black hover:text-white transition duration-200"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white font-poppins text-base w-full h-12 rounded-2xl hover:from-[#4a725f] hover:to-[#98e6c3] transition duration-200"
              onClick={handleSignup}
            >
              Signup Free
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
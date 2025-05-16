import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import BiogramLogo1 from "../assets/Biogramlogo.png";
import BiogramLogo2 from "../assets/Biogramlogo2.png";

interface LogoStartNowProps {
  variant?: "default" | "alt";
}

const LogoStartNow = ({ variant = "default" }: LogoStartNowProps) => {
  const logo = variant === "alt" ? BiogramLogo2 : BiogramLogo1;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-2 bg-gradient-to-r from-white to-pink-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="BiogramLogo" className="h-10 sm:h-12" />
        </Link>

        {/* Start Now Button */}
        <Link to="/startnow">
          <Button className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-sm sm:text-base px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg cursor-pointer">
            Start Now
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LogoStartNow;

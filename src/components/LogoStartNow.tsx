import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import BiogramLogo1 from "../../public/assets/Biogramlogo.png";
import BiogramLogo2 from "../../public/assets/Biogramlogo2.png";

interface LogoStartNowProps {
  variant?: "default" | "alt";
}

const LogoStartNow = ({ variant = "default" }: LogoStartNowProps) => {
  const logo = variant === "alt" ? BiogramLogo2 : BiogramLogo1;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="BiogramLogo" className="h-10 sm:h-12" />
        </Link>

        {/* Start Now Button */}
        <Link to="/startnow">
          <Button
            className="text-white text-sm sm:text-base w-[168px] h-[48px] rounded-[10px] cursor-pointer"
            style={{
              background:
                "linear-gradient(97.29deg, #7ECFA7 13.65%, #53886C 90.87%)",
            }}
          >
            Start Now
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LogoStartNow;

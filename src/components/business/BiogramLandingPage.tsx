import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import bgImage from "../../assets/lightbg.png";
import group1 from "../../assets/Group1.png"; // adjust path if needed
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from "@/components/ui/Dropdown-menu";
// import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSignupWithName = () => {
    // This would pre-populate signup form with username in a real implementation
    console.log(`Signup with username: ${username}`);
  };

  return (
    <div
      className="relative hero-background overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // image ko container ke size ke according scale karega    // image ko center karega
      }}
    >
      <div className="min-h-[90vh] sm:min-h-[90vh] md:min-h-[30vh] lg:min-h-[30vh] xl:min-h-[90vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Column: Text & Form */}
          <div className="w-full md:w-[60%] z-10">
            <h1 className="font-poppins font-extrabold text-[32px] sm:text-[48px] md:text-[80px] lg:text-[110px] leading-[1.1] tracking-tight text-black">
              One link,
              <br className="hidden sm:block" />
              Endless possibilities.
            </h1>

            <p className="font-poppins font-medium text-base sm:text-lg md:text-xl leading-relaxed tracking-normal text-black max-w-[670px] mt-4 mb-8">
              Biogram puts your entire digital world in one smart link. From
              socials to stores, content to contact — bring everything together
              in one sleek, shareable place. One link. Zero limits.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 border border-gray-300 rounded-[46px] px-4 py-2 bg-[#cbeede] w-full md:w-[655px]">
              <Input
                type="text"
                placeholder="Biogram/Your name"
                className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none w-full sm:w-auto py-3 px-4 border-0 shadow-none"
                value={username}
                onChange={handleUsernameChange}
              />
              <Button
                className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-lg px-6 py-3 rounded-full font-poppins w-full sm:w-auto hover:from-[#4a725f] hover:to-[#98e6c3] focus:outline-none h-[60px] transition duration-200 cursor-pointer"
                onClick={handleSignupWithName}
              >
                Signup Free
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full md:w-[40%] mt-10 md:mt-0 flex justify-center">
            <img
              src={group1}
              alt="Person using Biogram on laptop with social media icons"
              className="w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain relative z-10"
            />
          </div>
        </div>

        {/* Audience Selector Dropdown */}
        {/* <div className="absolute bottom-4 right-4 z-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 bg-opacity-80 text-white text-lg border flex items-center justify-between gap-2 px-4 py-2 rounded-xl">
                {audienceType}
                <ChevronDown size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setAudienceType('For People')}>
                For People
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setAudienceType('For Business')}>
                For Business
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}

        {/* Background Gradient Effects */}
        <div className="absolute top-0 right-0 -z-10 w-[40%] h-[40%] bg-[radial-gradient(circle,theme(colors.orange.100)_0%,transparent_70%)] opacity-70"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[40%] h-[40%] bg-[radial-gradient(circle,theme(colors.pink.100)_0%,transparent_70%)] opacity-70"></div>
      </div>
    </div>
  );
};

export default HeroSection;

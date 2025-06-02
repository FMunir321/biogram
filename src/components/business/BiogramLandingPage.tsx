import React, { useState } from "react";
import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
import men from "../../../public/assets/men.png";
// import bgImage from "../../../public/assets/lightbg.png";
import group from "../../../public/assets/group.png"; // adjust path if needed
import { FloatingLabelInput } from "../ui/floatinglabelinput";
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
    // <div
    //   className="relative hero-background overflow-hidden"
    //   style={{
    //     backgroundImage: `url(${bgImage})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover", // image ko container ke size ke according scale karega    // image ko center karega
    //   }}
    // >
    <div className="max-w-[1280px] mx-auto min-h-[90vh] sm:min-h-[90vh] md:min-h-[30vh] lg:min-h-[30vh] xl:min-h-[90vh] px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Column: Text & Form */}
        <div className="w-full md:w-[60%] z-10">
          <h1 className="text-[32px] sm:text-[45px] md:text-[80px] lg:text-[100px] text-center lg:text-left font-poppins font-extrabold leading-[1.1] tracking-tight text-black">
            One link,
            <br className="hidden sm:block text-center lg:text-left " />
            Endless possibilities.
          </h1>

          <p className="text-center text-[16px] md:text[20px] font-poppins font-medium sm:text-lg md:text-xl leading-relaxed tracking-normal text-black max-w-[670px] mt-4 mb-8">
            Biogram puts your entire digital world in one smart link. From
            socials to stores, content to contact — bring everything together in
            one sleek, shareable place. One link. Zero limits.
          </p>

          <div className="flex flex-row items-center sm:gap-4 border border-gray-300 rounded-[46px] px-4 py-2 bg-[#cbeede] w-full lg:w-[655px]">
            <FloatingLabelInput
              label="Biogram / Your name"
              value={username}
              onChange={handleUsernameChange}
            />

            <Button
              className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-lg px-6 py-3 rounded-full font-poppins sm:w-full sm:w-auto hover:from-[#4a725f] hover:to-[#98e6c3] focus:outline-none h-[60px] transition duration-200 cursor-pointer"
              onClick={handleSignupWithName}
            >
              Signup Free
            </Button>
          </div>
        </div>

        <div className="relative w-full md:w-[40%] h-[600px] flex justify-center items-start mt-10 md:mt-0">
          {/* Men Image - behind */}
          <img
            src={men}
            alt="Man using Biogram"
            className="relative w-[400px] md:w-[500px] lg:w-[550px] h-auto object-contain z-10"
          />

          {/* Group Image - in front and lower near knees */}
          <img
            src={group}
            alt="Group illustration"
            className="absolute w-[300px] h-[340px] top-[280px] -left-8 object-contain z-20"
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
    // </div>
  );
};

export default HeroSection;

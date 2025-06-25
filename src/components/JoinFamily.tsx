import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Smilinggirl from "../../public/assets/Smilinggirl.png";
import JoinfamilyImage from "../../public/assets/Join the Family.png";
import bearedperson from "../../public/assets/bearedperson.png";
import blueperson from "../../public/assets/blueperson.png";
import casual from "../../public/assets/casual.png";
import beachperson from "../../public/assets/beachperson.png";
import mountains from "../../public/assets/mountains.png";
import desert from "../../public/assets/desert.png";
import flowers from "../../public/assets/flowers.png";
import friends from "../../public/assets/friends.png";
import personworking from "../../public/assets/personworking.png";
import bicycle from "../../public/assets/bicycle.png";
import land from "../../public/assets/land.png";
import joker from "../../public/assets/joker.png";
import dancing from "../../public/assets/dancing.png";

type ImageGridItem = {
  src: string;
  alt: string;
  isEmpty?: boolean;
};

const JoinTheFamilySection: React.FC = () => {
  const [email, setEmail] = useState("");

  // Sample grid images - in a real application, you would import these properly
  const gridImages: ImageGridItem[] = [
    { src: bearedperson, alt: "Person with beard" },
    { src: "", alt: "", isEmpty: true },
    { src: blueperson, alt: "Person in blue shirt" },
    { src: beachperson, alt: "Person at beach" },
    { src: casual, alt: "Person in casual outfit" },
    { src: desert, alt: "Person with arms spread" },
    { src: flowers, alt: "Flowers" },
    { src: mountains, alt: "Mountain landscape" },
    { src: joker, alt: "Person on motorcycle" },
    { src: dancing, alt: "Dancing scene" },
    { src: friends, alt: "Group of friends" },
    { src: "", alt: "", isEmpty: true },
    { src: flowers, alt: "Pink flowers" },
    { src: bicycle, alt: "Person with bicycle" },
    { src: land, alt: "Desert landscape" },
    { src: personworking, alt: "Person working" },
  ];

  const handleSignUp = () => {
    console.log("Signing up with:", email);
    // Handle sign up logic here
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white rounded-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left side - Main image and overlay text */}
        <div className="relative w-full md:w-1/3 flex-shrink-0">
          <img
            src={Smilinggirl}
            alt="Woman smiling"
            className="w-full h-auto rounded-xl"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full">
              {/* Repeated text in background (semi-transparent) */}
              <div className="relative">
                {Array.from({ length: 5 }).map((_, i) => (
                  <h2
                    key={i}
                    className="text-3xl md:text-4xl font-bold text-pink-200/30 opacity-60 -mb-2"
                  >
                    Join the Family
                  </h2>
                ))}
              </div>

              {/* Main heading - positioned on top */}
            <img
                src={JoinfamilyImage}
                alt="Join the Family"
                className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-[300px] bo px-4 py-2 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Right side - Image grid */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-4 gap-2">
            {gridImages.map((image, index) => (
              <div key={index} className="aspect-square">
                {!image.isEmpty && (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form section */}
          <div className="mt-6 flex flex-col md:flex-row gap-3">
            <div className="flex-grow">
              <div className="bg-orange-100 rounded-full flex items-center px-4 py-2">
                <Input
                  type="email"
                  placeholder="Biogram/your name"
                  className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
              onClick={handleSignUp}
            >
              Sign Up Free
            </Button>
            {/* Dropdown Button */}
            <div className="relative">
              <button className="w-[189px] h-[48px] bg-gradient-to-r from-orange-500/80 to-pink-500/80 text-white rounded-[10px] border border-white px-6 py-2 flex items-center justify-between">
                For People
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-[189px] bg-white rounded-[10px] shadow-lg z-10 border border-gray-200">
                <ul className="py-1">
                  <li>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      For People
                    </button>
                  </li>
                  <li>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      For Brands
                    </button>
                  </li>
                  <li>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      For Creators
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheFamilySection;

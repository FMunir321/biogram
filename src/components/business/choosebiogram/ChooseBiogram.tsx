import React from 'react';
import user1 from "../../../assets/Rectangle79.png";
import user2 from "../../../assets/Rectangle80.png";
import user3 from "../../../assets/Rectangle77.png";
import user4 from "../../../assets/Rectangle76.png";
import user5 from "../../../assets/Rectangle78.png";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTiktok
} from 'react-icons/fa';

const people = [
  {
    name: "Chan Ja HO",
    tag: "@chan567james.com",
    role: "Blogger",
    imagePath: user1,
    color: "bg-orange-500",
  },
  {
    name: "Sara James",
    tag: "@sara123james.com",
    role: "Designer",
    imagePath: user2,
    color: "bg-pink-500",
  },
  {
    name: "James Max",
    tag: "@james555.com",
    role: "Actor",
    imagePath: user3,
    color: "bg-purple-700",
  },
  {
    name: "Alex",
    tag: "@alexcraft.com",
    role: "Slicer",
    imagePath: user4,
    color: "bg-blue-500",
  },
  {
    name: "Eliza",
    tag: "@elizaSocial.com",
    role: "Flush",
    imagePath: user5,
    color: "bg-green-500",
  },
];

const ChooseBiogram: React.FC = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight font-poppins mb-4 flex justify-start items-center">
          Connect Smarter <br /> with Biogram
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl font-medium mb-12 flex justify-start items-center">
          Whether you're an individual or a growing enterprise, Biogram helps you turn everyday digital interactions into lasting relationships and real-world results.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {people.map((person, index) => (
            <div
              key={index}
              className="w-60 h-[360px] bg-white rounded-3xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 relative"
            >
              <p className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] p-4 w-[100px] text-white absolute top-0 left-0" style={{
                clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
              }}>
                {person.role}
              </p>

              {/* Ribbon */}

              {/* Image */}
              <div
                className="w-full h-1/2"
                style={{
                  backgroundImage: `url(${person.imagePath})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              

              {/* Info */}
              <div className="p-4 text-center bg-gradient-to-r from-[#98e6c3] to-[#4a725f] bg-opacity-90 h-1/2 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white">{person.name}</h3>
                <p className="text-sm text-white">{person.tag}</p>
                <div className="flex justify-center gap-3 mt-3 text-white text-lg">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaTwitter />
                  <FaWhatsapp />
                  <FaTiktok />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseBiogram;

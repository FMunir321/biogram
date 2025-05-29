import React from "react";

const LinkCard: React.FC<{
  title: string;
  subtitle: string;
  imageSrc: string;
  icon?: React.ReactNode; // Optional icon prop
}> = ({ title, subtitle, imageSrc, icon }) => (
  <div className="bg-white/20 backdrop-blur-2xl p-4 rounded-xl flex items-center gap-4 mb-4 shadow-xl">
    <div className=" rounded-lg  flex items-center justify-center">
      <img src={imageSrc} alt={`${title} icon`} className="" />
    </div>
    <div className="flex-1">
      <h4 className="text-white font-semibold text-base md:text-[32px]">{title}</h4>
      <p className="text-white text-xs md:text-[20px]">{subtitle}</p>
    </div>
    {icon && (
      <div className="text-white text-lg cursor-pointer hover:text-gray-300">
        {icon}
      </div>
    )}
  </div>
);

export default LinkCard;

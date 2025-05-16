import React from "react";

const LinkCard: React.FC<{
  title: string;
  subtitle: string;
  imageSrc: string;
  icon?: React.ReactNode; // Optional icon prop
}> = ({ title, subtitle, imageSrc, icon }) => (
  <div className=" bg-white/60 backdrop-blur-lg bg-opacity-5 p-4 rounded-xl flex items-center gap-4 mb-4 shadow-lg">
    <div className=" rounded-lg w-12 h-12 flex items-center justify-center">
      <img src={imageSrc} alt={`${title} icon`} className="w-8 h-8" />
    </div>
    <div className="flex-1">
      <h4 className="text-white font-semibold text-base">{title}</h4>
      <p className="text-white text-xs">{subtitle}</p>
    </div>
    {icon && (
      <div className="text-white text-lg cursor-pointer hover:text-gray-300">
        {icon}
      </div>
    )}
  </div>
);

export default LinkCard;

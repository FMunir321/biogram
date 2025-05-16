import React from "react";

const SocialIcon: React.FC<{ imageSrc?: string; backgroundColor?: string }> = ({
  imageSrc,
  // backgroundColor = "bg-white",
}) => (
  <div
    className={`rounded-[30px] flex items-center justify-center`}
    style={{
      background: "linear-gradient(141.54deg, #FBFBFC 7.37%, #DBDDE8 92.32%)", // Background gradient
      width: "67px", // Width
      height: "66px", // Height
    }}
  >
    {imageSrc ? (
      <img src={imageSrc} alt="Social Icon" className="w-8 h-8" />
    ) : (
      <div className="text-white text-xl">No Image</div>
    )}
  </div>
);

export default SocialIcon;

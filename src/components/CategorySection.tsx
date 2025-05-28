import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

const CategorySection: React.FC<{ title: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="relative mb-6 bg-white/20 backdrop-blur-lg rounded-[20px] p-6 md:p-8 shadow-2xl w-full max-w-[445px] h-auto md:h-auto overflow-hidden">
    {/* Dropdown Icon */}
    <div className="absolute top-4 right-4 text-white cursor-pointer">
      <FaChevronDown className="text-base md:text-lg" />
    </div>

    {/* Title */}
    <h3 className="text-white font-poppins font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-[111%] tracking-[0%]">
      {title}
    </h3>

    {/* Children */}
    <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
      {children}
    </div>
  </div>
);

export default CategorySection;

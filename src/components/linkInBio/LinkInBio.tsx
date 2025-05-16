// src/pages/BioPage.tsx
import React, { useState } from 'react';
import Title from '../linkInBio/Title';
import GridLayout from '../linkInBio/GridLayout';
import myBg from "../../assets/my-background.png";

const LinkInBio: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <GridLayout
            className="bg-no-repeat bg-cover bg-center xl:overflow-hidden md:overflow-hidden"
            style={{ backgroundImage: `url(${myBg})` }}
        >
            {/* Left Column */}
            <div className="h-full ">
                <Title title="Link in Bio" isFullHeight>
                    <div className="space-y-4">
                        
                        {/* Add more bio links as needed */}
                    </div>
                </Title>
            </div>

            {/* Center Column */}
            <div className="grid grid-rows-2 gap-4 md:gap-6">
                <Title title="Capture Contacts">
                    <div className="space-y-3">
                       
                    </div>
                </Title>
                <Title title="Personal QR Code">
                    <div className="flex flex-col items-center justify-center h-full space-y-3">
                    </div>
                </Title>
            </div>

            {/* Right Column */}
            <div className="h-full">
                <Title title="Direct Message" isFullHeight>
                    <div className="space-y-4">
                        
                       
                    </div>
                </Title>
            </div>

            {/* For People Button with Dropdown */}
            <div className="fixed bottom-6 right-6 z-10">
                <div 
                    className="bg-gradient-to-r from-orange-500 to-pink-500 py-1 px-4 rounded-lg text-white shadow-sm cursor-pointer flex items-center gap-2"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    For People
                    <svg 
                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                {isDropdownOpen && (
                    <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                        </div>
                    </div>
                )}
            </div>
        </GridLayout>
    );
};

export default LinkInBio;
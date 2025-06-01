// src/pages/BioPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this if you're using Link
import Title from '../linkInBio/Title';
import GridLayout from '../linkInBio/GridLayout';
import myBg from "../../../public/assets/my-background.png";

const LinkInBio: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <GridLayout
            className="bg-no-repeat bg-cover bg-center xl:overflow-hidden md:overflow-hidden"
            style={{ backgroundImage: `url(${myBg})` }}
        >
            <>
                {/* Left Column */}
                <div className="h-full">
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
                            {/* Add content */}
                        </div>
                    </Title>
                    <Title title="Personal QR Code">
                        <div className="flex flex-col items-center justify-center h-full space-y-3">
                            {/* Add content */}
                        </div>
                    </Title>
                </div>

                {/* Right Column */}
                <div className="h-full">
                    <Title title="Direct Message" isFullHeight>
                        <div className="space-y-4">
                            {/* Add content */}
                        </div>
                    </Title>
                </div>

                {/* For People Button with Dropdown */}
                <div className="fixed bottom-6 right-6 z-30">
                    <div
                        className="bg-green-200 py-1 px-4 rounded-lg text-black shadow-sm cursor-pointer flex items-center gap-2"
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
                        <div className="absolute bottom-full right-0 mb-2 w-48 bg-green-200 rounded-lg shadow-lg overflow-hidden">
                            <div className="py-1">
                                <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400">Personal</Link>
                                <Link to="/started" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-400">Business</Link>
                            </div>
                        </div>
                    )}
                </div>
            </>
        </GridLayout>
    );
};

export default LinkInBio;

import React from 'react';

interface TitleProps {
    title: string;
    children: React.ReactNode;
    isFullHeight?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, children, isFullHeight = false }) => {
    return (
        <div className={`bg-white/70 backdrop-blur-sm rounded-lg shadow-md relative p-4 ${
            isFullHeight ? 'h-[calc(100vh-2rem)]' : 'min-h-[240px]'
        } bg-[url('/images/card-bg.png')] bg-no-repeat bg-cover`}>
            <div className="absolute left-[-2px] top-4 z-10">
                <div className="bg-gradient-to-r from-[#98e6c3] to-[#4a725f] py-1 px-4 rounded-r-full text-white shadow-sm">
                    <h2 className="font-medium text-sm">{title}</h2>
                </div>
            </div>
            <div className="mt-12 text-center h-[calc(100%-4rem)] xl:overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Title;
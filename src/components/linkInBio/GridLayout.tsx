import React from 'react';

interface GridLayoutProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children, className, style }) => {
    return (
        <div className={`w-full min-h-screen p-4 sm:p-6 xl:overflow-y-hidden position ${className || ''}`} style={style}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto min-h-[calc(100vh-3rem)]">
                {children}
            </div>
        </div>
    );
};

export default GridLayout;
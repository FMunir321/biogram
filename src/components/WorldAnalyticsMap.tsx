// components/WorldAnalyticsMap.tsx
import React from 'react';
import map from '../assets/vector.png';

const WorldAnalyticsMap = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-10 px- rounded-xl overflow-hidden">
      
      {/* Background World Map */}
      <img
        src={map}
        alt="World Map"
        width={800}
        height={400}
        className="w-full h-full"
      />

      {/* America Analytics Card */}
      <div className="absolute top-[20%] left-[5%] bg-black text-white p-4 rounded-xl shadow-xl flex flex-col items-start w-[120px]">
        <div className="text-lg font-bold">8.5M</div>
        <div className="text-sm">Profile View</div>
        <div className="mt-1 text-xs text-green-400 flex items-center gap-1">
          <span className="text-green-400">▲ 40%</span>
        </div>
      </div>

      {/* Asia Analytics Card */}
      <div className="absolute top-[5%] right-[5%] bg-black text-white p-4 rounded-xl shadow-xl flex flex-col items-start w-[100px] h-[100] text-center">
         <div className="mt-1 text-xs text-green-400 flex items-center gap-1">
          <span className="text-green-400 right-[5%]">↑ 3.3%</span>
        </div>
        <div className="text-lg font-bold text-center">80K</div>
        <div className="text-sm">Links Click</div>
       
      </div>

      {/* Continent Labels */}
      <div className="absolute top-[10%] left-[40%] text-green-800 font-semibold text-lg text-center">
        America <div className="text-sm font-normal">(10%)</div>
      </div>

      <div className="absolute top-[45%] left-[45%] text-green-800 font-semibold text-lg text-center">
        Europe <div className="text-sm font-normal">(10%)</div>
      </div>

      <div className="absolute top-[20%] right-[25%] text-green-800 font-semibold text-lg text-center">
        Asia <div className="text-sm font-normal">(40%)</div>
      </div>
    </div>
  );
};

export default WorldAnalyticsMap;

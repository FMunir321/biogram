import map from '../../public/assets/Vector.svg';

const WorldAnalyticsMap = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 rounded-xl overflow-hidden">
      
      {/* Map Image */}
      <img
        src={map}
        alt="World Map"
        className="w-full h-auto object-contain"
      />

      {/* Analytics Cards for sm and above */}
      <div className="hidden sm:block">
        {/* America Analytics */}
        <div className="absolute top-[18%] left-[4%] bg-black text-white p-2 rounded-xl shadow-xl w-[90px]">
          <div className="text-sm font-bold">8.5M</div>
          <div className="text-xs">Profile View</div>
          <div className="text-xs text-green-400">▲ 40%</div>
        </div>

        {/* Asia Analytics */}
        <div className="absolute top-[5%] right-[5%] bg-black text-white p-2 rounded-xl shadow-xl w-[80px]">
          <div className="text-xs text-green-400">↑ 3.3%</div>
          <div className="text-sm font-bold">80K</div>
          <div className="text-xs">Links Click</div>
        </div>

        {/* Continent Labels */}
        <div className="absolute top-[10%] left-[18%] text-green-800 font-semibold text-sm text-center">
          America <div className="text-xs font-normal">(10%)</div>
        </div>
        <div className="absolute bottom-[44%] left-[42%] text-green-800 font-semibold text-sm text-center">
          Europe <div className="text-xs font-normal">(10%)</div>
        </div>
        <div className="absolute top-[18%] right-[22%] text-green-800 font-semibold text-sm text-center">
          Asia <div className="text-xs font-normal">(40%)</div>
        </div>
      </div>

      {/* Stack cards vertically on mobile */}
      <div className="block sm:hidden mt-4 flex flex-col gap-2">
        <div className="bg-black text-white p-3 rounded-xl shadow-md text-center">
          <div className="text-sm font-bold">8.5M</div>
          <div className="text-xs">Profile View</div>
          <div className="text-xs text-green-400">▲ 40%</div>
        </div>
        <div className="bg-black text-white p-3 rounded-xl shadow-md text-center">
          <div className="text-xs text-green-400">↑ 3.3%</div>
          <div className="text-sm font-bold">80K</div>
          <div className="text-xs">Links Click</div>
        </div>
      </div>
    </div>
  );
};

export default WorldAnalyticsMap;

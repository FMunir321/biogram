import React from "react";

const RecommendedSection: React.FC = () => (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden relative">
      <div className="absolute top-2  bg-gradient-to-r from-orange-500 to-pink-500  text-white text-xs px-2 py-1 rounded-r-full">
        Personalized for you
      </div>
      <div className="p-4 pt-10 text-white">
        <h3 className="text-xl font-bold mb-3">Recommended Services</h3>
        <p className="text-sm opacity-80">More services coming soon</p>
        
      </div>
    </div>
  );

export default RecommendedSection;
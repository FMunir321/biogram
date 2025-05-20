import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddMerch: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#98e6c3] to-[#4a725f] p-4 overflow-hidden">
      <div className="w-full max-w-sm p-6 bg-white/20 rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-white text-center">Add Merch</h2>

        {/* Category Select */}
        <select className="mb-4 w-full p-2 text-gray-700 rounded focus:ring-2 focus:ring-pink-300 border border-gray-300">
          <option>Select category</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>

        {/* Link Input */}
        <input
          type="text"
          placeholder="Link"
          className="mb-4 w-full p-2 text-gray-700 rounded focus:ring-2 focus:ring-pink-300 border border-gray-300"
        />

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          className="mb-4 w-full p-2 text-gray-700 rounded focus:ring-2 focus:ring-pink-300 border border-gray-300"
        />

        {/* Price Input */}
        <div className="flex mb-4">
          <span className="flex items-center px-4 bg-gray-200 text-gray-700 rounded-l">$</span>
          <input
            type="number"
            placeholder="0.00"
            className="w-full p-2 rounded-r border border-gray-300 focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Image Upload Section */}
        <div className="mb-4 p-6 border-2 border-dashed border-gray-300 rounded text-center">
          <p className="text-gray-600">Upload Product Photo</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 ml-10"
          />
          <p className="text-sm text-gray-500">Use a size that's at least 500 x 500 pixels and 10 MB or less</p>
          {image && <p className="mt-2 text-gray-500">Image Selected: {image.name}</p>}
        </div>

        {/* Add Button */}
        <Link to="/profilelink">
        <button className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-200 transition">
          Add
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AddMerch;
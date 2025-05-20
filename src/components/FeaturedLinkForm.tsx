import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedLinkForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [background, setBackground] = useState<'solid' | 'gradient'>('solid');
  const [color, setColor] = useState<string>('#234dcd');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, url, image, background, color });
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-none md:bg-gradient-to-r md:from-[#98e6c3] md:to-[#4a725f]
      px-4">
      <form 
        onSubmit={handleSubmit}
        className="
          w-full max-w-md 
          bg-none 
          rounded-lg shadow-lg p-4 md:p-6 bg-white/30
        "
      >
        <h2 className="text-xl font-bold mb-4 text-black md:text-white">Add Featured Link</h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>

        <div className="mb-4">
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>

        <div className="mb-4">
          <p className="text-black">Background</p>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setBackground('solid')}
              className={`px-4 py-2 rounded ${background === 'solid' ? 'bg-gray-300' : 'bg-gray-100'}`}
            >
              Solid
            </button>
            <button
              type="button"
              onClick={() => setBackground('gradient')}
              className={`ml-2 px-4 py-2 rounded ${background === 'gradient' ? 'bg-gray-300' : 'bg-gray-100'}`}
            >
              Gradient
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-1 text-black">Present Colors</p>
          <div className="flex flex-wrap space-x-2">
            {['#000', '#34D399', '#FBBF24', '#F87171', '#C084FC', '#F472B6'].map((colorOption) => (
              <div
                key={colorOption}
                className={`h-8 w-8 rounded-full cursor-pointer ${colorOption === color ? 'ring-2 ring-black' : ''}`}
                style={{ backgroundColor: colorOption }}
                onClick={() => setColor(colorOption)}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-black">Preview</h3>
          <div className="border rounded p-4 text-white" style={{ backgroundColor: color }}>
            {title || "Your Title"}
          </div>
        </div>
        <Link to="/addmultilink">
        <button 
          type="submit" 
          className="w-full bg-white text-black py-2 rounded mt-4"
        >
          Add
        </button>
        </Link>
      </form>
    </div>
  );
};

export default FeaturedLinkForm;

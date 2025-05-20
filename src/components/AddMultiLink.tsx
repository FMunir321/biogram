import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddMultiLink: React.FC = () => {
  const [embedLink, setEmbedLink] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [cover, setCover] = useState<File | null>(null);

  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCover(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ embedLink, title, cover });
  };

  return (
    <div className="
      min-h-screen w-full
      bg-gradient-to-r from-[#98e6c3] to-[#4a725f]
      flex items-center justify-center
      p-0 m-0
    ">
      <div className="
        w-full h-full 
        md:max-w-md md:h-auto 
        bg-white/30
        rounded-none md:rounded-lg
        p-6
        flex flex-col justify-center
        min-h-[400px] // Optional: To set a minimum height for the form container
      ">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Add Multi link</h2>

          <div className="mb-4">
            <label className="block text-black">Embed link</label>
            <input
              type="text"
              value={embedLink}
              onChange={(e) => setEmbedLink(e.target.value)}
              placeholder="Embed link"
              className="border rounded-lg w-full p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="border rounded-lg w-full p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black">Cover</label>
            <input
              type="file"
              onChange={handleCoverUpload}
              className="border rounded-lg w-full p-2 bg-white/30"
              accept="image/*"
              required
            />
            <p className="text-gray-700 mt-2">
              Use a size that's at least 500 x 500 pixels and 10 MB or less
            </p>
          </div>
       <Link to="/addmerge">
          <button 
            type="submit" 
            className="bg-white text-black rounded-lg w-full p-2 hover:bg-white"
          >
            Add
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddMultiLink;
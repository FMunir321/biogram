import bground from "../assets/lightbg.png";

const Messages = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto p-2 md:p-4">
      <div
        className="bg-white rounded-[32px] p-4 md:p-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bground})`,
        }}
      >
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl font-bold mb-4">Message</h1>
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full max-w-md bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-full p-1">
              <input
                type="text"
                placeholder="Search Person name here"
                className="w-full px-4 py-2 bg-white rounded-full outline-none text-sm"
              />
            </div>
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white px-6 py-2 rounded-full text-sm font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Message Content */}
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
          <p className="text-gray-600 mb-4">No conversation yet</p>
          <p className="text-gray-400 text-sm">Select a conversation to start chat</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;

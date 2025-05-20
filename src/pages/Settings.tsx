const Settings = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto p-2 md:p-4">
      <div className="bg-white rounded-[32px] p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Settings Menu */}
          <div className="w-full lg:w-[300px] lg:flex-shrink-0">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] rounded-full p-1">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full px-4 py-2 bg-white rounded-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3] text-left">
                <span className="font-medium">Personal Info</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 text-left">
                <span className="font-medium">Subscriptions</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 text-left">
                <span className="font-medium">Terms & Conditions</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 text-left">
                <span className="font-medium">Privacy policy</span>
                <span className="text-gray-400">›</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 text-left">
                <span className="font-medium">About</span>
                <span className="text-gray-400">›</span>
              </button>
            </div>
          </div>

          {/* Right Side - Personal Info Content */}
          <div className="flex-1 mt-6 lg:mt-0">
            <h1 className="text-2xl font-bold mb-2">Personal Info</h1>
            <p className="text-gray-500 text-sm mb-8">
              Here you can change your name, username, email and phone number the information you write login and personalize your account.
            </p>

            {/* Personal Info Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3]">
                <div>
                  <div className="text-sm text-gray-500">Name</div>
                  <div>Alex James</div>
                </div>
                <span className="text-gray-400">›</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3]">
                <div>
                  <div className="text-sm text-gray-500">Username</div>
                  <div>@AlexJames123</div>
                </div>
                <span className="text-gray-400">›</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3]">
                <div>
                  <div className="text-sm text-gray-500">Birth Date</div>
                  <div>10/Jun/2000</div>
                </div>
                <span className="text-gray-400">›</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3]">
                <div>
                  <div className="text-sm text-gray-500">My Interests</div>
                  <div>Sports, Cricket</div>
                </div>
                <span className="text-gray-400">›</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3]">
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div>alexjames123@gmail.com</div>
                </div>
                <span className="text-gray-400">›</span>
              </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#d3f0e3] to-[#c1e4d3]">
                <div>
                  <div className="text-sm text-gray-500">Change Password</div>
                  <div>••••••••</div>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 
import { Link } from "react-router-dom";
import imageleftsideimage from "../assets/image20.png";
import imageleftsideimage2 from "../assets/image19.png";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white min-h-screen">
        <div className="w-[90%] max-w-[420px] px-6 mx-auto">
          {/* Logo */}
          <div className="text-center mb-14">
            <h1 className="text-[52px] font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#98e6c3] to-[#4a725f] italic font-normal leading-tight">Biogram</h1>
            <p className="text-[#666666] text-sm mt-1">Networking just got an upgrade</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm text-[#666666] block">Email or Phone Number</label>
              <input
                type="text"
                placeholder="enter here"
                className="w-full h-12 px-5 rounded-[100px] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#98e6c3] focus:ring-1 focus:ring-pink-200"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-[#666666] block">Password</label>
              <input
                type="password"
                placeholder="enter here"
                className="w-full h-12 px-5 rounded-[100px] border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#98e6c3] focus:ring-1 focus:ring-pink-200"
              />
            </div>

            <div className="flex items-start space-x-2.5 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-[#E5E5E5] text-[#98e6c3] focus:ring-[#98e6c3]"
              />
              <label htmlFor="terms" className="text-xs text-[#666666] leading-5">
                By checking the box and tapping continue, you acknowledge that you have read the{" "}
                <Link to="/privacy-policy" className="text-[#1A1A1A]">
                  privacy Policy
                </Link>{" "}
                and agree to the{" "}
                <Link to="/terms" className="text-[#1A1A1A]">
                  Terms of service
                </Link>
              </label>
            </div>
            <Link to="/maindashboard">
            <button 
              className="w-full h-12 mt-4 rounded-[100px] bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white text-sm font-medium cursor-pointer"
            >
              Continue
            </button>
            </Link>
            <div className="text-center mt-4">
              <span className="text-xs text-[#666666]">Don't have an account? </span>
              <Link to="/signup" className="text-[#47705e] text-xs">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 p-6 justify-end">
        <div className="flex gap-10">
          <img
            src={imageleftsideimage}
            alt="Profile 1"
            className="w-[322px] h-[905px] hidden sm:block"
          />
          <img
            src={imageleftsideimage2}
            alt="Profile 2"
            className="w-[322px] h-[905px] hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
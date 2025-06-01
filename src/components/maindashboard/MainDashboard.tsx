import bground from "../../../public/assets/lightbg.png"; // ✅ Adjust the path if needed
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const MainDashboard = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-stretch min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bground})` }}
    >
      <div className="w-full md:w-[50%] p-5">
        {/* Searchbar */}
        <div className="flex !border-[#6fb793] border-1 mb-4 gap-2 w-full  rounded-full [background:linear-gradient(to_right,_#dfece2,_#d5dad9)] text-black text-[20px] font-medium">
          <Input
            type="text"
            placeholder="Search Platforms"
            className="py-7 m-1 text-[20px] font-medium border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
          />
          <Button className="py-7 px-9 m-1 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white rounded-full text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
            Search
          </Button>
        </div>
      </div>

      <div className="w-full md:w-[50%] md:border-l md:border-[#b6c1bc] md:pl-8 flex justify-center items-center">
        <div className="text-center px-4">
          <p className="text-black font-medium">
            Click on user to preview their profile
          </p>
        </div>
      </div>

    </div>
  );
};

export default MainDashboard;

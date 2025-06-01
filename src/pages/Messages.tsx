import { Button } from "@/components/ui/button";
import bground from "../../public/assets/lightbg.png";
import { Input } from "@/components/ui/input";

const Messages = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center h-full  bg-cover bg-center"
      style={{ backgroundImage: `url(${bground})` }}
    >
      <div className="w-full md:w-[50%] p-5">
        <h1 className="text-[32px] font-bold text-black mb-3 md:mb-0">Message</h1>
        {/* Searchbar */}
        <div className="flex !border-[#6fb793] border-1 mb-4 gap-2 w-full  rounded-full [background:linear-gradient(to_right,_#dfece2,_#d5dad9)] text-black text-[20px] font-medium">
          <Input
            type="text"
            placeholder="Search Person name here"
            className="py-7 m-1 text-[20px] font-medium border-0 focus:border-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none"
          />
          <Button className="py-7 px-9 m-1 bg-gradient-to-r from-[#98e6c3] to-[#4a725f] text-white rounded-full text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity">
            Search
          </Button>
        </div>
        <div className="mt-9">
          <p className="text-20px font-medium text-center text-black">No conversation yet</p>
        </div>
      </div>

      <div className="w-full md:w-[50%] md:border-l md:border-[#b6c1bc] md:pl-8 flex justify-center items-center">
        <div>
          <p className="text-black text-center font-medium">
            Select a conversation to start chat
          </p>
        </div>
      </div>
    </div>

  );
};

export default Messages;

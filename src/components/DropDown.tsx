import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

export const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="
            w-[189px] h-[48px] rounded-[10px] border border-black
            flex items-center gap-1 px-4 py-2 text-black font-poppins font-normal
            text-[20px] leading-[100%] tracking-[0]
            bg-[linear-gradient(97.29deg,rgba(126,207,167,0.5)_13.65%,rgba(83,136,108,0.5)_90.87%)]
            backdrop-blur-[20.2px]
            absolute top-[936px] left-[1211px]
          "
        >
          For Business
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-lg shadow-lg mt-2 p-1 min-w-[140px]">
        <DropdownMenuItem className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
          For Business
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;

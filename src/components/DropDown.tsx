import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../components/ui/button";
import { ChevronDown } from 'lucide-react';

export const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-black border-black px-4 py-2 flex items-center gap-1 bg-gradient-to-br from-[#7ECFA7] to-[#53886C]">
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
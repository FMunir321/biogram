import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import toppopuppic from "../../../public/assets/toppopuppic.png";
import centerpopuppic from "../../../public/assets/centerpopupoic.png";
import bottompopuppic from "../../../public/assets/bottompopuppic.png";
// import { JSX } from "react";

// AddSocialMediapopup.tsx

interface AddSocialMediaPopupProps {
  icon: string;
  platformName: string;
  isOpen: boolean;
  isEditing: boolean;
  url: string;
  setUrl: (value: string) => void;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

const AddSocialMediapopup = ({
  icon,
  platformName,
  isOpen,
  onClose,
  onSubmit,
  url,
  setUrl,
  isEditing,
}: AddSocialMediaPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-[20px] p-6 !w-[400px] md:!w-[600px] !max-w-none overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 z-0">
          <img
            src={toppopuppic}
            alt="top background"
            className="absolute top-0 left-0 w-full"
          />
          <img
            src={centerpopuppic}
            alt="center background"
            className="absolute top-1/2 left-0 w-full -translate-y-1/2"
          />
          <img
            src={bottompopuppic}
            alt="bottom background"
            className="absolute bottom-7 left-0 w-full"
          />
        </div>
        <div className="relative z-10">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4">
              <img
                src={icon}
                alt={platformName}
                className="w-20 h-20 mx-auto"
              />
            </div>
            <DialogTitle className="text-[20px] md:text[30px] md:text-[40px] font-bold mb-4 text-center">
              Add your {platformName} URL
            </DialogTitle>
            <DialogDescription className="text-center"></DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex justify-center md:justify-start w-full p-[2px] rounded-full">
              <Input
                type="text"
                placeholder="Paste URL Here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className=" w-[300px] md:w-full px-4 py-7 text-[16px] md:text-[24px] font-medium !border-[#6fb793] rounded-full focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none border-2 [background:linear-gradient(to_right,_#dfece2,_#d5dad9)]"
              />
            </div>

            <div className="flex gap-2 justify-center mt-6">
              <Button
                onClick={onClose}
                className="md:w-[200px] text-[18px] md:text[24px] lg:text-[32px] py-7 border-1 border-[#aeaeae] rounded-lg bg-gray-200/80 backdrop-blur-sm text-black hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </Button>

              <Button
                onClick={() => onSubmit(platformName)}
                className="md:w-[200px] text-[18px] md:text[24px]  bg-gradient-to-r from-[#98e6c3] to-[#4a725f] lg:text-[32px] py-7 border-1 border-[#aeaeae] rounded-lg  cursor-pointer"
              >
                {isEditing ? "Update" : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddSocialMediapopup;

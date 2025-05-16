 import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useState } from "react"
import toppopuppic from "../../assets/toppopuppic.png"
import centerpopuppic from "../../assets/centerpopupoic.png"
import bottompopuppic from "../../assets/bottompopuppic.png"
import { Link } from "react-router-dom"



interface AddSocialMediaPopupProps {
  icon: string;
  platformName: string;
  isOpen: boolean;
  onClose: () => void;
}

const AddSocialMediapopup = ({ icon, platformName, isOpen, onClose }: AddSocialMediaPopupProps) => {
  const [url, setUrl] = useState("");

  const handleSave = () => {
    console.log(`Saving ${platformName} URL:`, url);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-[20px] p-6 w-full max-w-[400px] overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 z-0">
          <img src={toppopuppic} alt="top background" className="absolute top-0 left-0 w-full" />
          <img src={centerpopuppic} alt="center background" className="absolute top-1/2 left-0 w-full -translate-y-1/2" />
          <img src={bottompopuppic} alt="bottom background" className="absolute bottom-7 left-0 w-full" />
        </div>
        <div className="relative z-10">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4">
              <img src={icon} alt={platformName} className="w-16 h-16" />
            </div>
            <DialogTitle className="text-2xl font-bold mb-4 text-center">
              Add your Facebook URL
            </DialogTitle>
            <DialogDescription className="text-center">
              Enter your Facebook profile URL to add it to your linkme profile
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 ">
            <div className="w-full rounded-full p-[2px] bg-gradient-to-r from-[#FF6200] to-[#FF00EE]">
              <Input
                type="text"
                placeholder="Paste URL Here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-orange-200 to-pink-200 focus:outline-none"
              />
            </div>


            <div className="flex gap-2 justify-center mt-6">
              <Button
                onClick={onClose}
                className="px-8 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </Button>
              <Link to="/AddSocialMediaUploadPicture">
  <Button
    onClick={handleSave}
    className="px-8 py-2 rounded-full bg-gradient-to-r from-[#FF00EE] to-[#FF6200] text-white hover:opacity-90 cursor-pointer"
  >
    Save
  </Button>
</Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddSocialMediapopup;
import { Card, CardContent } from "@/components/ui/card";
import {
  QrCode,
  Send,
  Shield,
  BarChart2,
  ExternalLink,
  Layout,
  Globe,
  Calendar,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
// import bground from "../../public/assets/lightbg.png";

const features = [
  {
    title: "Deeplink Technology",
    description: "Direct Instagram users straight to your page on their native browser, like safari.",
    icon: ArrowUpRight,
  },
  {
    title: "Landing Page",
    description: "Create a beautiful landing page with all your custom links and social.",
    icon: Layout,
  },
  {
    title: "Direct Link",
    description: "Redirect users directly to any website without an intermediary page.",
    icon: ExternalLink,
  },
  {
    title: "Shield Protection",
    description: "Activate shield protection to protect your Instagram account against mods & bots.",
    icon: Shield,
  },
  {
    title: "Analytics",
    description: "Track activities & engagement in realtime (Clicks, devices, demographics, IPS).",
    icon: BarChart2,
  },
  {
    title: "Shoutout function",
    description: "The Shoutout function shows a quick, personalized appreciation message.",
    icon: Send,
  },
  {
    title: "multiple link templates",
    description: "The Multiple Link Templates function creates quick layouts for sharing multiple links.",
    icon: Layout,
  },
  {
    title: "your own domain in the link",
    description: "The Multiple Link Templates function creates custom link layouts using your own domain.",
    icon: Globe,
  },
  {
    title: "scheduling posts on social media",
    description: "The Post Scheduler lets you plan and auto-publish social media posts.",
    icon: Calendar,
  },
  {
    title: "Advanced analytics",
    description: "The Advanced Analytics feature provides deep insights through detailed data tracking and reports.",
    icon: BarChart2,
  },
  {
    title: "Personal QR code",
    description: "The Personal QR Code generator allows a unique scannable code linked to your personal information or profile.",
    icon: QrCode,
  },
  {
    title: "direct Messages",
    description: "The Direct Messages function allows sending private, one-on-one messages between users.",
    icon: MessageCircle,
  },
];

export default function InstagramRedirectFeatures() {
  return (
    <div
    className="max-w-[1280px] mx-auto px-5"
      // className="max-w-8xl mx-auto px-4 py-10 rounded-3xl bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${bground})` }}
    >
      <h1 className="text-[25px] sm:text-[40px] lg:text-[55px] font-extrabold text-center lg:text-left mb-4 text-black">
        All in one solution to drive traffic away from <br className="hidden md:block" />
        <span className="text-primary">instagram’s in-app browser</span>
      </h1>
      <p className=" text-black mb-10 max-w-2xl text-[16px] md:text[24px] font-medium text-center lg:text-left">
        Create your loading page or choose to instantly redirect your fans to any website with our deeplink & Shield protection technology.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {features.map(({ title, description, icon: Icon }, index) => (
          <Card key={index} className="h-full bg-[#def5e9] rounded-[40px] shadow-md">
            <CardContent className="flex flex-col gap-2 p-6 items-center justify-center">
              <Icon className="h-6 w-6 text-primary mx-auto" />
              <h3 className="text-[16px] md:text[24px] font-bold text-center">{title}</h3>
              <p className="text-[13px] md:text[16px] text-muted-foreground text-center">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

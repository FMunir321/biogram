import React from "react";
import { Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Badge from "../../../components/ui/Badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import logo from "../../../../public/assets/Biogramlogo.png";
import mybackground from "../../../../public/assets/pricingbg.png";

type PlanFeature = {
  name: string;
  description?: string;
  link?: boolean;
};

type PricingPlan = {
  title: string;
  price: number | number[];
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  linkText?: string;
  bgColor?: string;
  priceColor?: string;
};

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card
      className={`border border-gray-300 rounded-[46px] h-full w-[433px] bg-[#b5efd2] shadow-lg relative`}
      style={{
        height: "600px",
        width: "433px",
        borderWidth: "1px",
        borderRadius: "46px",
        backgroundColor: "transparent",
      }}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-center">{plan.title}</CardTitle>
        <div className="flex justify-center items-center mt-2">
          {Array.isArray(plan.price) ? (
            <>
              <span className="text-3xl font-bold text-[#7ECFA7]">
                {plan.price.join("$/")}$
              </span>
              <span className="text-lg font-medium text-black">/mo</span>
            </>
          ) : (
            <>
              <span className="text-5xl font-bold text-[#7ECFA7]">{plan.price}</span>
              <span className="text-lg font-medium text-black">$/mo</span>
            </>
          )}
        </div>
        <CardDescription className="text-center text-sm mt-2">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.name === "Up to" ? (
                <div className="bg-[#7ECFA7] text-white px-3 py-1 rounded-md text-sm font-medium">
                  25 Links
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="text-sm mr-1">{feature.name}</span>
                  {feature.description && (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-gray-500 cursor-pointer hover:text-gray-700" />
                        </TooltipTrigger>
                        <TooltipContent side="right" className="max-w-[300px]">
                          <p className="text-sm text-white">{feature.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      {plan.linkText && (
        <CardFooter className="pt-2 pb-4">
          <Badge variant="outline" className="w-full justify-center py-1 border-orange-200">
            {plan.linkText}
          </Badge>
        </CardFooter>
      )}
    </Card>
  );
};

interface PricingTableProps {
  plans: PricingPlan[];
}

const PricingTable: React.FC<PricingTableProps> = ({ plans }) => {
  return (
    <div
      className="w-full bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${mybackground})`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <img src={logo} alt="Biogram Logo" className="h-10 sm:h-12" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="flex justify-center">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BiogramPricing = () => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Creator",
      price: 0,
      description:
        "Create a beautiful page, share all your projects and open instagram audience",
      features: [
        { name: "1 Link", description: "You can add one link to your profile." },
        { name: "High converting custom Landing Page", description: "Build a personalized page to showcase all your content and social media links" },
        { name: "Analytics", description: "Track visitors live with detailed insights on demographic,devices,and locations." },
        { name: "Deeplinks", description: "skip the in-app browser and open your page directly in Safari, Chrome, or tour visitors default browser." },
        { name: "Personal QR code", description: "You get an individual QR code that links people directly to your biogram landing page." },
        { name: "Shoutout function", description: "Get shout out from other biogram users." },
        { name: "Multiple link templates", description: "Choose between multiple beautiful designs to create your own customisable link." },
        { name: "Affiliate program", description: "Get 10% commission for every user you undesrtand." },
      ],
    },
    {
      title: "Creator Pro",
      price: 5,
      description:
        "Send links directly to your page, protect your social accounts and collaborate content",
      features: [
        { name: "Everything in creator", description: "Includes all features from the Creator plan plus additional advanced options." },
        { name: "Posts scheduling", description: "Make posting more effective and schedule your post for the whole week directly in biogram." },
        { name: "Direct Link", description: "Direct your audience to the final destination instantly,skipping unnecessary steps." },
        { name: "Your own domain link", description: "Create a link with just your name without the biogram name in it." },
        { name: "Direct message", description: "Recieve and sent direct messsages to biogram users making outreach and connectiong way more effective." },
        { name: "Appointment scheduler", description: "people are not able to book an appointment for your service." },
        { name: "Add your music", description: "Doesn't matter if you are a music producer or just a listener you;re not able to add your fav song to your biogram." },
      ],
    },
    {
      title: "Agency",
      price: [10, 20, 35, 50],
      description:
        "Manage all your creators from in one place & maximize your traffic and content",
      features: [
        { name: "Everything in Creator pro", description: "All features from Creator Pro plus specialized agency tools." },
        { name: "Up to 25/50/100/200/500 Links", description: "Manage multiple links with different permission levels for team members." },
        { name: "Shields protection for direct Links", description: "Add an extra layer of defence against bots and modes with shield protection for all your social links." },
        { name: "Advanced analytics", description: "See what links performs the best in one dashboard" },
      ],
    },
  ];

  return <PricingTable plans={pricingPlans} />;
};

export default BiogramPricing;

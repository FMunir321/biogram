import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Badge from "../components/ui/Badge";
import logo from "../../public/assets/Biogramlogo.png";
import mybackground from "../../public/assets/pricingbg.png";

type PlanFeature = {
  name: string;
  description?: string;
  link?: boolean;
};

type PricingPlan = {
  title: string;
  price: number;
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
      className={`border border-gray-300 rounded-[46px] h-full w-[433px] bg-[#b5efd2] shadow-lg`}
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
          <span className="text-5xl font-bold text-[#7ECFA7]">{plan.price}</span>
          <span className="text-lg font-medium text-black">$/mo</span>
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
              ) : feature.link ? (
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{feature.name}</span>
                    {feature.description && (
                      <span className="text-xs text-blue-600 cursor-pointer hover:underline">
                        Learn more
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <span className="text-sm">{feature.name}</span>
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
      title: "Starter",
      price: 0,
      description:
        "Create a beautiful page, share all your projects and open instagram audience",
      features: [
        { name: "Deeplink Technology" },
        { name: "Landing Page" },
        { name: "Unlimited Content" },
        { name: "Beautiful Designs" },
      ],
    },
    {
      title: "Creator",
      price: 9,
      description:
        "Send links directly to your page, protect your social accounts and collaborate content",
      features: [
        { name: "Everything in Starter" },
        { name: "Direct Link" },
        { name: "Shield Protection", description: "Learn more",},
        { name: "Geo Filter", description: "Learn more",},
        { name: "Link Analytics" },
        { name: "Clicks Tracking" },
        { name: "Engagement Boost" },
      ],
    },
    {
      title: "Agency",
      price: 49,
      description:
        "Manage all your creators from in one place & maximize your traffic and content",
      features: [
        { name: "Everything in Creator" },
        { name: "Up to" }, // Ye feature ab "Up to 25 Links" styled div ban gaya hai
        { name: "Shields for 5 Links", description: "Learn more" },
        { name: "All-in-One Dashboard" },
        { name: "Custom Tracking" },
        { name: "White-Label Experience" },
        { name: "VIP Telegram Support" },
      ],
    },
  ];

  return <PricingTable plans={pricingPlans} />;
};

export default BiogramPricing;

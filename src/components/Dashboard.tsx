import { Card, CardContent } from "../components/ui/card";
import map from "../../public/assets/map-sample.png";

const Dashboard = () => {
  return (
    <div className="relative w-full ">
      <div className="flex justify-center px-4 sm:px-6 lg:px-0 w-[700px]">
        <Card className="w-full max-w-3xl rounded-xl shadow-lg bg-white">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-md font-bold text-black mb-1">Overview</h3>
            <h3 className="text-sm text-black mb-4">
              You reached 0% more accounts for the last 30 days
            </h3>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "My Deeplinks",
                  count: "5/25",
                  label: "Active Links",
                },
                {
                  title: "Shield Protection",
                  count: "5/25",
                  label: "Protected Links",
                },
                {
                  title: "April Analytics",
                  count: "5/25",
                  label: "Visitors in April 2025",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#7ECFA7] to-[#d4e8dd] border border-[#a2d8c2] rounded-xl px-4 py-4 shadow-sm text-center"
                >
                  <p className="text-sm text-gray-700 font-medium mb-2">
                    {item.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-800">
                    {item.count.split("/")[0]}
                    <span className="text-gray-600">/{item.count.split("/")[1]}</span>
                  </p>
                  <p className="text-sm text-[#4a725f] font-medium mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-6">
              <p className="text-gray-700 font-medium mb-2">Top Locations</p>
              <div className="flex justify-center">
             
                <img
                  src={map}
                  alt="Top locations map"
                  className="rounded-md w-full max-w-xs aspect-video object-cover"
                />
              </div>
              <div className="mt-2 text-sm text-gray-600 text-center sm:text-left">
                <strong>80K</strong> - America (US)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

import bground from "../../assets/lightbg.png"; // ✅ Adjust the path if needed

const MainDashboard = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-[calc(100vh-10rem)] bg-cover bg-center"
      style={{ backgroundImage: `url(${bground})` }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Welcome to Your Dashboard
      </h2>
      <p className="text-gray-600 text-center">
        Click on user to preview their profile
      </p>
    </div>
  );
};

export default MainDashboard;

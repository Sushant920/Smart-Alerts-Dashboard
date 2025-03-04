import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Smart Alerts</h1>
      <p className="mt-4 text-lg text-gray-700">
        Get real-time alerts for stocks, crypto, weather, and news.
      </p>
      <Link to="/alerts">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
}

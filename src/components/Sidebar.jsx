import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li><Link to="/" className="hover:underline">🏠 Home</Link></li>
        <li><Link to="/alerts" className="hover:underline">🚨 Alerts</Link></li>
        <li><Link to="/weather" className="hover:underline">🌦 Weather</Link></li>
        <li><Link to="/stocks" className="hover:underline">📈 Stocks</Link></li>
        <li><Link to="/news" className="hover:underline">📰 News</Link></li>
        <li><Link to="/crypto" className="hover:underline">💰 Crypto</Link></li>  {/* ✅ Add Crypto Link */}
        <li><Link to="/settings" className="hover:underline">⚙️ Settings</Link></li>
      </ul>
    </div>
  );
}

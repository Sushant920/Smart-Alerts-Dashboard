import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Smart Alerts</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/alerts" className="hover:underline">Alerts</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </div>
      </div>
    </nav>
  );
}

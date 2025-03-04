import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import Weather from "./pages/Weather";
import Stocks from "./pages/Stocks";
import News from "./pages/News";
import Crypto from "./pages/Crypto";  // ✅ Import Crypto Page
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/news" element={<News />} />
            <Route path="/crypto" element={<Crypto />} />  {/* ✅ Add Crypto Route */}
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

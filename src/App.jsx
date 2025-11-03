import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import MapPage from "./components/MapPage";

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 p-6">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mapa" element={<MapPage />} />
      </Routes>
    </div>
  );
}

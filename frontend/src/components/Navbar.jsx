import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 fixed top-0 left-0 shadow-lg z-50">
      <div className="max-w-full px-6 md:px-12 lg:px-16 flex justify-between items-center py-4">
        <h1 className="text-white text-2xl font-bold">Texas Instruments</h1>

        {/* Mobile Menu Button */}
        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#" className="hover:underline hover:text-blue-200 transition-colors">Home</a></li>
          <li><a href="#" className="hover:underline hover:text-blue-200 transition-colors">About</a></li>
          <li><a href="https://www-open.india.ti.com/%7Ea0132146/root/data/radar_pd_areadashboard1/AREA_DASHBOARD_VERSION3/base_ai.html" className="hover:underline hover:text-blue-200 transition-colors">Dashboard</a></li>
          <li><a href="https://confluence.itg.ti.com/display/AWR2188/AREA+SHEET+XLS" className="hover:underline hover:text-blue-200 transition-colors">Confluence</a></li>
        </ul>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div className={`fixed inset-0 bg-blue-700 text-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"} md:hidden`}>
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        <ul className="text-lg space-y-6">
          <li><a href="#" className="hover:underline hover:text-blue-200 transition-colors">Home</a></li>
          <li><a href="#" className="hover:underline hover:text-blue-200 transition-colors">About</a></li>
          <li><a href="https://www-open.india.ti.com/%7Ea0132146/root/data/radar_pd_areadashboard1/AREA_DASHBOARD_VERSION3/base_ai.html" className="hover:underline hover:text-blue-200 transition-colors">Dashboard</a></li>
          <li><a href="https://confluence.itg.ti.com/display/AWR2188/AREA+SHEET+XLS" className="hover:underline hover:text-blue-200 transition-colors">Confluence</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
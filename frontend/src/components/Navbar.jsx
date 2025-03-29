import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-600 shadow-lg z-50 relative"> {/* Removed fixed */}
      <div className="max-w-full px-6 md:px-12 lg:px-16 flex justify-between items-center py-4">
        
        {/* Logo with Link to Home */}
        <Link to="/" className="flex items-center">
          <img 
            src="texas.png" 
            alt="Texas Instruments Logo" 
            className="h-12 md:h-14 w-auto" // Adjusted logo size
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><Link to="/" className="hover:underline hover:text-blue-200 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:underline hover:text-blue-200 transition-colors">About</Link></li>
          <li><a href="https://www-open.india.ti.com/%7Ea0132146/root/data/radar_pd_areadashboard1/AREA_DASHBOARD_VERSION3/base_ai.html" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-200 transition-colors">Dashboard</a></li>
          <li><a href="https://confluence.itg.ti.com/display/AWR2188/AREA+SHEET+XLS" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-200 transition-colors">Confluence</a></li>
        </ul>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-blue-700 text-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>
        <ul className="text-lg space-y-6">
          <li><Link to="/" className="hover:underline hover:text-blue-200 transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:underline hover:text-blue-200 transition-colors" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><a href="https://www-open.india.ti.com/%7Ea0132146/root/data/radar_pd_areadashboard1/AREA_DASHBOARD_VERSION3/base_ai.html" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-200 transition-colors">Dashboard</a></li>
          <li><a href="https://confluence.itg.ti.com/display/AWR2188/AREA+SHEET+XLS" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-200 transition-colors">Confluence</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

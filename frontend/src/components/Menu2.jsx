import React, { useState } from "react";
import TableForPnrSummary from "./PnROverheadSummary";
import TableForTOP from "./TableForTOP";
import TableForRSS from "./TableForRSS";

function Menu2({ Name }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center my-6">
      {/* Updated Button Design */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
      >
        {Name}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-lg">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-3/4 h-3/4 overflow-hidden text-gray-800 border-t-4 border-blue-500">
            <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center">
              {Name}
            </h2>

            {/* Scrollable Table Container */}
            <div className="overflow-auto max-h-[70%] border border-gray-300 p-2">
              {(Name === "Pnr Overhead Summary")?(<TableForPnrSummary/>):(Name === "TOP")?(<TableForTOP/>):(<TableForRSS/>)}
            </div>

            <div className="text-center mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 w-[20%] text-xl bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu2;

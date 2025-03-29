import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const TableForPnrSummary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("Book3.xlsx") // Ensure file is inside `public/` folder
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Get the maximum number of columns in any row
        const maxColumns = Math.max(...jsonData.map(row => row.length));

        const formattedData = jsonData
          .map(row => Array.from({ length: maxColumns }, (_, i) => row[i] || " ")) // Fill missing values
          .filter(row => row.some(cell => cell !== " ")); // Remove completely empty rows

        setData(formattedData);
      });
  }, []);

  return (
    <div className="w-full border rounded-lg shadow-md p-4 bg-white">
      {data.length > 0 ? (
        <div className="overflow-x-auto"> {/* Keeps table responsive */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                {data[0].map((header, index) => (
                  <th key={index} className="border border-gray-300 px-4 py-3 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Loading data...</p>
      )}
    </div>
  );
};

function PnrSummaryPage() {
  return (
    <div className="mx-4 w-screen"> {/* Ensures full width */}
      <h1 className="text-2xl font-bold mb-4 text-center bg-white py-2 rounded-xl border border-gray-200 shadow-lg">PNR Overhead Summary</h1>
      <TableForPnrSummary />
    </div>
  );
}

export default PnrSummaryPage;

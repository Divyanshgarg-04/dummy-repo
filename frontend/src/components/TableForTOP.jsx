import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const TableForTOP = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("Book2.xlsx") // File should be in `public/` folder
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        setData(XLSX.utils.sheet_to_json(sheet, { header: 1 }));
      });
  }, []);

  return (
    <div className="max-h-[400px] overflow-y-auto border rounded-lg shadow-md p-2">
      {data.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {data[0].map((header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">Loading data...</p>
      )}
    </div>
  );
};

export default TableForTOP;

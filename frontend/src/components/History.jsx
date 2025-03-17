import React, { useState } from "react";

const History = () => {
  const [data, setData] = useState(false);

  const historyData = [
    // Sample data remains the same
  ];

  return (
    <div className="text-center">
      <button
        className="px-6 py-3 my-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        onClick={() => setData(!data)}
      >
        {data ? "Close" : "Visit History"}
      </button>

      {data && (
        <div className="w-full bg-gray-100 py-10 animate-fade-in">
          <div className="w-full bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Visit History</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200 sticky top-0">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">SL No.</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">File</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Action Performed</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Timestamp</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((entry, index) => (
                    <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-2">{entry.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{entry.email}</td>
                      <td className="border border-gray-300 px-4 py-2">{entry.file}</td>
                      <td className={`border border-gray-300 px-4 py-2 font-bold ${entry.action === "Updated" ? "text-blue-600" : entry.action === "Fixed Bug" ? "text-green-600" : "text-red-600"}`}>
                        {entry.action}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{entry.timestamp}</td>
                      <td className="border border-gray-300 px-4 py-2">{entry.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
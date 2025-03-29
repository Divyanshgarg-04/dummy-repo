import React, { useState } from "react";

const History = () => {
  const [data, setData] = useState(false);

  const historyData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", file: "Report.xlsx", action: "Updated", timestamp: "2025-03-29 10:15 AM", remarks: "Revised budget details" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", file: "Summary.docx", action: "Deleted", timestamp: "2025-03-28 02:30 PM", remarks: "Removed outdated document" },
    { id: 3, name: "Michael Lee", email: "michael.lee@example.com", file: "Dashboard.pdf", action: "Fixed Bug", timestamp: "2025-03-27 06:45 PM", remarks: "Corrected chart labels" },
    { id: 4, name: "Alice Brown", email: "alice.brown@example.com", file: "Logs.txt", action: "Updated", timestamp: "2025-03-26 11:10 AM", remarks: "Added latest logs" },
    { id: 5, name: "Robert Wilson", email: "robert.wilson@example.com", file: "Plan.pptx", action: "Updated", timestamp: "2025-03-25 09:00 AM", remarks: "Modified slides layout" },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {data && (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl px-6 bg-white shadow-lg rounded-xl border border-gray-200 p-6">
            <h3 className="text-3xl font-semibold text-blue-700 text-center">Visit History</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
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
                      <td className={`border border-gray-300 px-4 py-2 font-bold ${
                        entry.action === "Updated" ? "text-blue-600" :
                        entry.action === "Fixed Bug" ? "text-green-600" :
                        "text-red-600"
                      }`}>
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
      <button
        className="px-6 py-3 mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        onClick={() => setData(!data)}
      >
        {data ? "Close" : "Visit History"}
      </button>
    </div>
  );
};

export default History;

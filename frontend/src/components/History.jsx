import React, { useState } from "react";

const History = () => {
  const [data,setData] = useState(false);
  // Sample history data (You can replace this with real-time fetched data)
  const historyData = [
    { id: 1, name: "John Doe", email: "john@example.com", file: "App.js", action: "Updated", timestamp: "2025-03-06 14:20", remarks: "Updated Navbar" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", file: "Menu.js", action: "Fixed Bug", timestamp: "2025-03-06 15:05", remarks: "Fixed modal issue" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", file: "styles.css", action: "Modified", timestamp: "2025-03-06 15:30", remarks: "Improved responsiveness" },
    { id: 4, name: "Eve Adams", email: "eve@example.com", file: "data.json", action: "Added", timestamp: "2025-03-06 16:10", remarks: "New data added for analytics" },
  ];

  return (
    <div className="text-center">
      <button
      className="px-6 py-3 my-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
      onClick={() => setData(!data)}>
        {(data == false)?(<span>Visit History</span>):(<span>Close</span>)}
      </button>
    
    {data && (<div className="w-full bg-gray-100 py-10">
      <div className="w-full bg-white shadow-md rounded-lg p-6 border">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Visit History</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            {/* Table Header */}
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">SL No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">File</th>
                {/* <th className="border border-gray-300 px-4 py-2 text-left">File Type</th> */}
                <th className="border border-gray-300 px-4 py-2 text-left">Action Performed</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Timestamp</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Remarks</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {historyData.map((entry, index) => (
                <tr key={entry.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.file}</td>
                  {/* <td className="border border-gray-300 px-4 py-2">{entry.fileType}</td> */}
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
    </div>)}
    </div>
  );
};

export default History;

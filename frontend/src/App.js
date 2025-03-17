import "./App.css";
import Menu2 from "./components/Menu2";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import History from "./components/History";
import FinalArea from "./components/FinalArea";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="px-4 py-20">
        <Form />
        <Table />
        <FinalArea />
        {/* Menu Section with Full-Width Buttons */}
        <div className="w-full bg-white mt-8 rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-around gap-4">
            <Menu2 Name="RSS" />
            <Menu2 Name="TOP" />
            <Menu2 Name="Pnr Overhead Summary" />
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
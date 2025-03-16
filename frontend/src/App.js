import "./App.css";
import Menu2 from "./components/Menu2";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import History from "./components/History";
import FinalArea from "./components/FinalArea";
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Form/>
      <Table />
      <FinalArea/>
      {/* Menu Section with Full-Width Buttons */}
      <div className="w-full bg-gray-100 mt-8">
        <div className="w-full bg-white shadow-md rounded-lg p-6 border">
          <div className="flex justify-around w-full gap-4">
            <Menu2 Name="RSS"/>
            <Menu2 Name="TOP" />
            <Menu2 Name="Pnr Overhead Summary" />
            <History/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

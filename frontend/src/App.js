import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Menu2 from "./components/Menu2";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import History from "./components/History";
import FinalArea from "./components/FinalArea";
import RSSPage from "./pages/RSSPage";
import TopPage from "./pages/TopPage";
import PnrSummaryPage from "./pages/PnrSummaryPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <div className="py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rss" element={<RSSPage />} />
            <Route path="/top" element={<TopPage />} />
            <Route path="/pnr-summary" element={<PnrSummaryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Form />
      <Table />
      <div className="w-full mt-2 rounded-xl p-6">
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <Link to="/rss" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-200">RSS Page</Link>
          <Link to="/top" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 hover:scale-105 transition-transform duration-200">TOP Page</Link>
          <Link to="/pnr-summary" className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 hover:scale-105 transition-transform duration-200">PNR Summary Page</Link>
        </div>
      </div>
      <FinalArea />
      {/* Navigation Buttons */}
      <div className="w-full mt-8 px-6">
        <div className="w-full rounded-xl">
          <History />
        </div>
      </div>

    </>
  );
}

export default App;

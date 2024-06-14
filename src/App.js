import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import Market from "./components/market/Market";
import Tables from "./components/tables/Tables";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-[290px_1580px] bg-[#F4F7FE] gap-5">
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/market" element={<Market />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

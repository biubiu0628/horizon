import "./App.css";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="grid grid-cols-[290px_1550px] bg-[#F4F7FE] gap-5">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;

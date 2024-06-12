import "./App.css";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="grid grid-cols-[16%_83%] bg-[#F4F7FE]">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;

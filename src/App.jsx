import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Pages/Shared/Navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

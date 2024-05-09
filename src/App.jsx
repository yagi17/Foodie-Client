import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Pages/Shared/Navbar";
import Banner from "./Components/Pages/Home/Banner";
import Footer from "./Components/Pages/Shared/Footer";

function App() {
  return (
    <div className="w-full bg-[#F4F1EA]">
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
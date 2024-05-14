import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import TopItems from "./TopItems";
import Marquee from "react-fast-marquee";
import "react-loading-skeleton/dist/skeleton.css";
import FeatureSection from "./FeatureSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-[#F4F1EA]">
        <div className="mt-10">
          <Marquee className="text-6xl font-bold flex justify-evenly">
            <h2 className="pl-12 italic">TRENDING FOOD </h2>
            <img
              className="pl-12 italic text w-24"
              src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-1.png"
              alt=""
            />
            <h2 className="pl-12 italic">POPULER DISHES </h2>
            <img
              className="pl-12 italic text w-24"
              src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-1.png"
              alt=""
            />
            <h2 className="pl-12 italic">TRENDING FOOD </h2>
            <img
              className="pl-12 italic text w-24"
              src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/burger-1.png"
              alt=""
            />
            <h2 className="pl-12 italic">POPULER DISHES </h2>
            <img
              className="pl-12 italic text w-24"
              src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-1.png"
              alt=""
            />
          </Marquee>
        </div>

        <TopItems></TopItems>
        <h2 className="text-center my-10 text-[#D12525] font-medium hover:link">
          <Link to={"/All-Foods"}>View Full Menu</Link>
        </h2>
        <div className="my-8">
          {" "}
          <FeatureSection></FeatureSection>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

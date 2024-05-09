import TopItems from "./TopItems";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;

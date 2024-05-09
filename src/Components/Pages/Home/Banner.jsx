import { MdRestaurantMenu } from "react-icons/md";
const Banner = () => {
  return (
    <div className="bg-[url('/hero-bg.jpg')] min-h-screen flex items-center">
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <div className="">
          <h2 className="text-9xl text-white font-bold">
            Your <br />
            <span className="text-yellow-500">Favorite</span>
            <br /> Meal
          </h2>
          <a href="#menu"><button className="bg-yellow-500 rounded-full py-2 px-6 flex items-center gap-2 mt-4"><MdRestaurantMenu />Menu</button></a>
        </div>
        <div>
          <img className="w-[550px]" src="/banner.png" alt="bannerImage" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

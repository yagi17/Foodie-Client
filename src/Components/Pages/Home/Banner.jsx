import { MdRestaurantMenu } from "react-icons/md";

const Banner = () => {
  const handleClick = () => {
    const element = document.getElementById("myElement");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-[url('/hero-bg.jpg')] min-h-screen flex items-center">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div className="">
          <p className="w-96 text-xs text-yellow-500 font-semibold pl-2">
            WHERE QUALITY MEET EXCELLENT SERVICE.
          </p>
          <h2 className="text-9xl text-white font-bold">
            Your <br />
            <span className="text-yellow-500">Favorite</span>
            <br /> Meal
          </h2>

          <a onClick={handleClick}  href="#menu">
            <button className="bg-[#00813D] btn border-none hover:bg-[#00813D] text-white rounded-full py-2 px-6 flex items-center gap-2 mt-4">
              <MdRestaurantMenu />
              Menu
              <MdRestaurantMenu />
            </button>
          </a>
        </div>
        <div>
          <img className="w-[650px]" src="/banner.png" alt="bannerImage" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

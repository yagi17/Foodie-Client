import { useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { name, image, category, price } = item;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card card-compact bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="px-10 pt-10">
        <img
          src={image}
          className={`size-52 transform transition duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          alt="Shoes"
        />
        {/* {` transform transition duration-500 w-full h-[200px]  ${
              isHovered ? "scale-105" : "scale-100"
            }`} */}
      </figure>
      <div className="card-body mt-4">
        <div className="badge badge-secondary bg-[#00813D] border-0">
          {category}
        </div>
        <div className="flex justify-between font-bold text-xl">
          <h2 className="card-title">{name}</h2>
          <h2 className="text-[#D12525]">$ {price}</h2>
        </div>

        <div className="card-actions">
          <button className="btn  bg-yellow-500 hover:bg-yellow-500">
            <Link className="flex items-center"> <span className="text-lg pr-1"><LiaShoppingBagSolid /></span> Order Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

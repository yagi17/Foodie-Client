import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { Name, Image, Category, Price } = item;

  return (
    <div>
      <div className="card card-compact bg-white border">
        <figure className="px-10 pt-10">
          <img src={Image} className="size-52" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between font-bold text-xl">
            <h2 className="card-title">{Name}</h2>
            <h2 className="text-[#D12525]">$ {Price}</h2>
          </div>
          <div className="badge badge-secondary bg-[#00813D] border-0">{Category}</div>
          <div className="card-actions">
            <button className="btn  bg-yellow-500 hover:bg-yellow-500">
              <Link>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

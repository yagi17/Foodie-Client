import { useEffect, useState } from "react";
import ItemCard from "../Home/Item Card/ItemCard";

const AllFood = () => {
  const [topItems, setTopItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allmenu")
      .then((res) => res.json())
      .then((data) => {
        setTopItems(data);
      });
  }, []);
  return (
    <div className="mx-10">
      <h2 className="text-4xl text-center font-semibold text-[#D12525]">Browse Our Menu</h2>
      
      <div id="menu" className="grid grid-cols-5 gap-4 mt-10">
        {topItems.map((item, idx) => (
          <ItemCard key={idx} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllFood;

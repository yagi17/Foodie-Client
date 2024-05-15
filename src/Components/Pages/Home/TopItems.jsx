import { useEffect, useState } from "react";
import ItemCard from "./Item Card/ItemCard";

const TopItems = () => {
  const [topItems, setTopItems] = useState([]);
  const topSixItems = topItems.slice(0, 8);
  // console.log(topSixItems);
  //   console.log(topItems.slice(0,6));

  useEffect(() => {
    fetch("https://foodie-server-sand.vercel.app/allMenu")
      .then((res) => res.json())
      .then((data) => {
        setTopItems(data);
      });
  }, []);

  return (
    <div className="">
      <h2 className="text-5xl text-center mt-24 font-semibold text-[#D12525]">
        Popular Dishes
      </h2>
      <div id="menu" className="grid lg:grid-cols-4 md:grid-cols-3 w-10/12 mx-auto gap-4 mt-10">
        {topSixItems.map((item, idx) => (
          <ItemCard key={idx} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default TopItems;

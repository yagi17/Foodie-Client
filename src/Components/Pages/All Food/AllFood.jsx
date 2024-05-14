import { useEffect, useState } from "react";
import ItemCard from "../Home/Item Card/ItemCard";
import Footer from "../Shared/Footer";
// import Auth from "../../Hooks/Auth";
import { Helmet } from "react-helmet";

const AllFood = () => {
  // const { setLoading } = Auth();
  // setLoading(true);
  const [topItems, setTopItems] = useState([]);

  useEffect(() => {
    fetch("https://foodie-server-eight.vercel.app/allMenu")
      .then((res) => res.json())
      .then((data) => {
        setTopItems(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Foodie | Full Menu</title>
      </Helmet>
      <div className="m-10">
        <h2 className="text-4xl text-center font-semibold text-[#D12525]">
          Browse Our Menu
        </h2>
        <div id="menu" className="grid lg:grid-cols-4 md:col-end-3 gap-4 mt-10">
          {topItems.map((item, idx) => (
            <ItemCard key={idx} item={item}></ItemCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllFood;

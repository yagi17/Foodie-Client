import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Shared/Footer";
import Auth from "../../Hooks/Auth";
import { FaCartShopping } from "react-icons/fa6";

const SingleFood = () => {

    const { setLoading } = Auth();
    setLoading(false);
  const { id } = useParams();

  const [food, setFood] = useState([]);
  console.log(food);

  useEffect(() => {
    axios.get(`http://localhost:5000/allMenu/${id}`).then((response) => {
      const matchedData = response.data.find((food) => food._id === id);
      setFood(matchedData);
    });
  }, [id]);

  return (
    <div className="">
      <Helmet>
        <title>{food?.name}</title>
      </Helmet>
      <p></p>
      <div className="card w-7/12 mx-auto my-10 card-side bg-base-100 shadow-xl">
        <figure className="p-4">
          <img className="size-96" src={food.image} alt="Movie" />
        </figure>
        <div className="card-body w-2/4">
          <h2 className="card-title font-semibold text-3xl">{food.name}</h2>
          <p className="text-[#D12525] font-bold">$ {food.price}</p>
          <p className="opacity-80 text-sm">{food.description}</p>
          <p className="mt-8">Category : {food.category}</p>
          <p>Available : {food.quantity}</p>
          <div className="card-actions">
            <button className="btn text-white rounded-full bg-[#FBB200] hover:bg-[#FBB200]">
            <FaCartShopping /> ADD TO CURT
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleFood;

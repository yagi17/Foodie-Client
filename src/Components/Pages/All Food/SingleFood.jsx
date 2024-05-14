import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Shared/Footer";
import Auth from "../../Hooks/Auth";
import { FaCartShopping } from "react-icons/fa6";
import Swal from "sweetalert2";

const SingleFood = () => {
  const { user, setLoading } = Auth();

  const { id } = useParams();

  const [food, setFood] = useState([]);
  // console.log(food);

  // handle purchase button disable when quantity is less than or equal 0
  if (food.quantity <= 0) {
    document.getElementById("addToCurt").disabled = true;
    Swal.fire({
      title: "Quantity is low",
      text: "Please Wait until we restock our product",
      icon: "question",
    });
  }

  if (food.pointPersonEmail === user.email) {
    document.getElementById("addToCurt").disabled = true;
    Swal.fire({
      title: "Can not be purchased",
      text: "You can not purchase your own product",
      icon: "question",
    });
  }

  // get food from menu by id
  useEffect(() => {
    axios.get(`https://foodie-server-eight.vercel.app/allMenu/${id}`).then((response) => {
      const matchedData = response.data.find((food) => food._id === id);
      setFood(matchedData);
    });
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = food.name;
    const foodImage = food.image;
    const foodPrice = food.price;
    const orderQuantity = form.quantity.value;
    const foodId = food._id;

    const orderData = { foodImage, orderQuantity, foodPrice, foodName, foodId };

    axios
      .post(`https://foodie-server-eight.vercel.app/curt/${user?.email}`, orderData)
      .then((data) => {
        // console.log('data addeed');
        if (data.data.insertedId) {
          setLoading(true);
          Swal.fire({
            title: "Success!",
            text: "Item Added to curt",
            icon: "success",
            confirmButtonText: "Done",
          });
          // Decrease the quantity of the food item in the database
          fetch(`https://foodie-server-eight.vercel.app/allMenu/${food._id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ quantity: food.quantity - orderQuantity }),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log('quantity updat hoise');
              setLoading(false);
            });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Somethings Wrong",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>{food?.name}</title>
      </Helmet>
      <p></p>
      <div className="card md:w-7/12 w-10/12 mx-auto my-10 card-side flex flex-col md:flex-row bg-base-100 shadow-xl">
        <figure className="p-4">
          <img className="md:size-96 size-60" src={food.image} alt="Movie" />
        </figure>
        <div className="card-body md:w-2/4">
          <h2 className="card-title font-semibold text-3xl">{food.name}</h2>
          <p className="text-[#D12525] font-bold">$ {food.price}</p>
          <p className="opacity-80 text-sm">{food.description}</p>
          <p className="mt-8">Category : {food.category}</p>
          <p>Available : {food.quantity}</p>
          <div className="card-actions">
            <form onSubmit={handleOrder}>
              <button
                id="addToCurt"
                className="btn text-white rounded-full bg-[#FBB200] hover:bg-[#FBB200]"
              >
                <FaCartShopping /> ADD TO CURT
              </button>

              <input
                required
                type="number"
                placeholder="0"
                className="border-black text-center border-2 rounded-md ml-10 w-10"
                // defaultValue={0}
                name="quantity"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleFood;

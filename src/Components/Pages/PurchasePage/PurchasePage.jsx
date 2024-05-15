import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Shared/Footer";
import useAxiosHook from "../../Hooks/axiosHook";

const PurchasePage = () => {
  const { email } = useParams();

  const [curt, setCurt] = useState([]);
  const axiosSecure = useAxiosHook()

  useEffect(() => {
    axiosSecure.get(`/curt/${email}`)
    .then(res=>{
      setCurt(res.data);
    })
  }, [email, setCurt, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "The data will be removed permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("item delete");
        fetch(`https://foodie-server-sand.vercel.app/curt/${email}/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Item removed",
                text: "Your file has been removed.",
                icon: "success",
              });
              const remainingItems = curt.filter(
                (listItem) => listItem._id !== id
              );
              setCurt(remainingItems);
            }
          });
      }
    });
  };

  const subtotal = Math.ceil(
    curt.reduce(
      (total, curtItem) => total + curtItem.foodPrice * curtItem.orderQuantity,
      0
    )
  );

  return (
    <div>
      <div className="w-10/12 h-full mx-auto">
        <div className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                        <th className="text-left font-semibold">Action</th>
                      </tr>
                    </thead>
                    {curt.map((curtItem) => (
                      <>
                        {" "}
                        <tbody>
                          <tr>
                            <td className="">
                              <div className="flex items-center">
                                <img
                                  className="h-16 w-16"
                                  src={curtItem.foodImage}
                                  alt="Product image"
                                />
                              </div>
                            </td>
                            <td className="py-4">${curtItem.foodPrice}</td>
                            <td className="py-4">
                              <div className="flex items-center">
                                <span className="text-center w-8">
                                  {curtItem.orderQuantity}
                                </span>
                              </div>
                            </td>
                            <td className="py-4">
                              ${curtItem.foodPrice * curtItem.orderQuantity}
                            </td>
                            <td className="py-4">
                              <button
                                onClick={() => handleDelete(curtItem._id)}
                                className="btn hover:bg-transparent bg-transparent border-0 text-xl text-red-500"
                              >
                                <RiDeleteBin5Line />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    ))}
                  </table>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal}.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${subtotal + 10}.00</span>
                  </div>
                  <button className=" btn bg-[#FBB200] hover:bg-[#FBB200] text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PurchasePage;

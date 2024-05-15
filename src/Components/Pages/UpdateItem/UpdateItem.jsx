import { Helmet } from "react-helmet";
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {

  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const price = form.price.value;

    const updateDetails = {
      name,
      image,
      category,
      quantity,
      description,
      price,
    };
    // console.log(updateDetails);

    // send data to the server
    fetch(`https://foodie-server-sand.vercel.app/allMenu/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Data updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          }).then((result) => {
            if (result.isConfirmed) {
              Navigate(`/MyList`);
            }
          });
        }
      });
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>Foodie | Update Details</title>
        </Helmet>
        <div className="h-screen">
          <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-5xl">
            <h2 className="text-2xl text-center font-medium mb-4">
              Update Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between space-x-4">
                {/* Name */}
                <div className="mb-4 w-full">
                  <label className=" text-gray-700 font-medium mb-2">
                    Food Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  />
                </div>

                {/* Category */}
                <div className="mb-4 w-full">
                  <label className=" text-gray-700 font-medium mb-2">
                    Food Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="flex justify-between space-x-4">
                {/* Price  */}
                <div className="mb-4 w-full">
                  <label className=" text-gray-700 font-medium mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  />
                </div>

                {/* Quantity  */}
                <div className="mb-4 w-full">
                  <label className=" text-gray-700 font-medium mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
              {/* Image */}
              <div className="mb-4 w-full">
                <label className=" w-full text-gray-700 font-medium mb-2">
                  Food Image
                </label>
                <input
                  type="url"
                  name="image"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="message"
                  name="description"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows="5"
                ></textarea>
              </div>

              <input
                type="submit"
                value={"Add Item"}
                className="bg-blue-500 btn w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;

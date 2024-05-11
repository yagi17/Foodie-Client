import Swal from "sweetalert2";
import Auth from "../../Hooks/Auth";

const AddItems = () => {
  const {user} = Auth()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const price = form.price.value;
    const pointPersonName = user.displayName;
    const pointPersonEmail = user.email;

    const handleData = { name, image, category, quantity, description, price, pointPersonName, pointPersonEmail};
    // console.log(handleData);

    fetch("http://localhost:5000/allMenu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(handleData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add item",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="h-screen">
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-5xl">
        <h2 className="text-2xl text-center font-medium mb-4">Add Food Item</h2>
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
                required
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
                required
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
                required
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
                required
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
              required
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
  );
};

export default AddItems;

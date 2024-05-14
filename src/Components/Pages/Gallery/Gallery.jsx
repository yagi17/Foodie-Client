import { Helmet } from "react-helmet";
import { useRef } from "react";
import GalleryCard from "./GalleryCard";
import useAxiosHook from "../../Hooks/axiosHook";
import Swal from "sweetalert2";
import Auth from "../../Hooks/Auth";
import Footer from "../Shared/Footer";

const Gallery = () => {
  const { setLoading } = Auth();
  const modalRef = useRef(null);
  const axiosSecure = useAxiosHook();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const photo = form.image.value;
    const feedback = form.feedback.value;
    const data = { name, photo, feedback };

    axiosSecure
      .post(`/gallery`, data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          setLoading(true);
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

    modalRef.current.close(); // Close the modal
  };

  return (
    <div className="">
      <Helmet>
        <title>Foodie | Gallery</title>
      </Helmet>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div>
        <div className="flex justify-center">
          <button
            className=" btn bg-yellow-500 hover:bg-yellow-500"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Feedback
          </button>
        </div>
        <dialog id="my_modal_2" className="modal" ref={modalRef}>
          <div className="modal-box">
            <div>
              <form
                onSubmit={handleSubmit}
                className="modal-backdrop text-black"
              >
                {/* food name */}
                <div className="mb-4">
                  <label className=" text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>
                {/* image */}
                <div className="mb-4 w-full">
                  <label className="w-full text-gray-700 font-medium mb-2">
                    Food Image
                  </label>
                  {/* feedback text */}
                  <input
                    type="url"
                    name="image"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Feedback
                  </label>
                  <textarea
                    name="feedback"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    rows="3"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="submit"
                    value={"Feedback"}
                    className="bg-blue-500 col-span-1 btn w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  />
                  <button className="btn w-full col-span-1 btn-error">
                    {" "}
                    close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className=" mb-10">
        <GalleryCard></GalleryCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" text-center">
      <img
        className="mx-auto"
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-4279234-3569464.png?f=webp"
        alt=""
      />
      <h2 className="text-4xl">Page Not Found</h2>
      <Link to={"/"}>
        <button className="btn mt-6 btn-wide border-4 bg-white hover:bg-transparent border-yellow-500 hover:border-yellow-500">
          <FaArrowLeft /> Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white">
      <div className="h-72 bg-[url('/Footer.png')]">
        <p className="flex justify-center items-center text-5xl">
          <img className="w-32" src="/logo.png" alt="" />
        </p>
        <ul className="w-full my-8 justify-center flex gap-10 text-2xl font-bold opacity-80">
          <li className="group transition-all duration-100 ease-in-out">
            <Link
              className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="group transition-all duration-100 ease-in-out">
            <Link
              className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
              to={""}
            >
              All Food
            </Link>
          </li>
          <li className="group transition-all duration-100 ease-in-out">
            <Link
              className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
              to={""}
            >
              Gallery
            </Link>
          </li>
        </ul>
        <p className="text-center text-xs opacity-50">
          © Copyright 2024 Foodie . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

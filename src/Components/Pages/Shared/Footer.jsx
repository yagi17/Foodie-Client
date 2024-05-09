import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white">
      <div className="h-72 bg-[url('/Footer.png')]">
        <p className="flex justify-center items-center text-5xl"><img className="w-32" src="/logo.png" alt="" /></p>
        <ul className="w-full my-8 justify-center flex gap-10 text-2xl font-bold">
            <li className="hover:link">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="hover:link">
                <Link to={''}>All Food</Link>
            </li>
            <li className="hover:link">
                <Link to={''}>Gallery</Link>
            </li>

        </ul>
        <p className="text-center text-xs">
          © Copyright 2024 Foodie . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

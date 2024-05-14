import { Link, NavLink } from "react-router-dom";
import Auth from "../../Hooks/Auth";
import { FaUserEdit } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdAddToPhotos } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = Auth();
  // setLoading(true)
  const link = (
    <>
      {/* Home */}
      <li className="group transition-all duration-100 ease-in-out">
        <NavLink
          className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
          to={"/"}
        >
          Home
        </NavLink>
      </li>

      {/* All Foods */}
      <li className="group transition-all duration-100 ease-in-out">
        <NavLink
          className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
          to={"/All-Foods"}
        >
          All Foods
        </NavLink>
      </li>

      {/* Gallery */}
      <li className="group transition-all duration-100 ease-in-out">
        <NavLink
          className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
          to={"/Gallery"}
        >
          Gallery
        </NavLink>
      </li>

    </>
  );

  return (
    <div className="navbar min-h-10 flex justify-between md:px-10 bg-[#F4F1EA] z-50 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {link}
          </ul>
        </div>
        <Link className="flex items-center text-2xl font-bold">
          <img className="size-10" src="/logo.png" alt="" />
          Foodie
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex space-x-10">
        <ul className="flex justify-between space-x-10 px-1 text-sm font-bold">
          {link}
        </ul>
      </div>
      <div className="flex justify-end lg:pl-8">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ||
                    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="font-bold">
                  <FaUserEdit />{" "}
                  <span className=" text-[#D12525]">{user.displayName}</span>
                </a>
              </li>
              <li className="hover:font-bold">
                <Link to={"/MyList"}>
                  <MdAddToPhotos />
                  My added food items
                </Link>
              </li>
              <li className="hover:font-bold">
                <Link to={"/AddItems"}>
                  <IoIosAddCircle />
                  Add a food item
                </Link>
              </li>
              <li className="hover:font-bold">
                <Link to={`/PurchasePage/${user.email}`}>
                  <IoIosAddCircle />
                  My Purchase Page
                </Link>
              </li>
              <li className="hover:font-bold">
                <Link onClick={logout} to={"/Login"}>
                  <FiLogOut /> Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/Login"}
            className="btn px-10 bg-[#FBB200] hover:bg-[#FBB200] rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import Auth from "../../Authentication/Auth";
import { TbLogout } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logout, setLoading } = Auth();

  // console.log(user);
  // console.log(user.email);
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
      {/* Add Food in menu */}
      <li className="group transition-all duration-100 ease-in-out">
        {user ? (
          <NavLink
            className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
            to={"/AddItems"}
          >
            Add Items
          </NavLink>
        ) : (
          <h2 className="hidden"></h2>
        )}
      </li>
      {/* Add my list */}
      <li className="group transition-all duration-100 ease-in-out">
        {user ? (
          <NavLink
            className={`bg-left-bottom ml-1 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
            to={"/MyList"}
          >
            My List
          </NavLink>
        ) : (
          <h2 className="hidden"></h2>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar min-h-10 px-10 bg-[#F4F1EA] z-50 sticky top-0">
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
        <ul className="flex justify-between space-x-10 px-1 font-bold">
          {link}
        </ul>
        <div className="">
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
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40"
              >
                <li>
                  <a className="font-semibold text-[#D12525]">
                    {user.displayName}
                  </a>
                </li>
                <li>
                  <Link to={"/user${id}"}>
                    Settings
                    <IoIosSettings />
                  </Link>
                </li>
                <li>
                  <Link onClick={logout}>
                    Logout <TbLogout />
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/Login"}
              className="btn px-10 bg-yellow-500 hover:bg-yellow-500 rounded-full"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

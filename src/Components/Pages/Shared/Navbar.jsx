import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink to={'/'}>Item 1</NavLink>
      </li>
      <li>
        <NavLink to={'/'}>Parent</NavLink>
      </li>
      <li>
        <NavLink to={'/'}>Item 3</NavLink>
      </li>
    </>
  );

  return (
      <div className="navbar min-h-10 p-0 px-10 bg-[#F4F1EA]  sticky top-0">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <Link className="flex items-center text-2xl font-bold"><img className="size-10" src="/logo.png" alt="" />Foodie</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn  min-h-10 rounded-full">Button</a>
        </div>
      </div>
  );
};

export default Navbar;

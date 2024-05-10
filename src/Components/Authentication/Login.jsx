import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Auth from "./Auth";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
  const { login } = Auth();

  const navigate = useNavigate();
  const location = useLocation();
  const naviGate = location?.state || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const SignInData = { email, password };
    console.log(SignInData);

    // console.log(email);
    login(email, password)
      .then((result) => {
        if (result.user) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Logged in successfully",
          });
          navigate(naviGate);
        }
      })
      .catch((error) => {
        // console.log(error);
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          Swal.fire({
            icon: "error",
            title: "Invalid credential",
            text: "Wrong email or password",
            footer: '<a href="/login">Try again</a>',
          });
        }
        if (
          error.message ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ) {
          Swal.fire({
            icon: "error",
            title: "Too many request",
            text: "Try again letter",
          });
        }
        form.reset()
      });
  };

  return (
    <div className=" p-16">
      <div className="mx-auto max-w-xl bg-[#212121]">
        <div className="border-[20px] border-transparent rounded-[20px] bg-[url('/Footer.png')]  shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
            Log In
          </h1>
          <form onSubmit={handleLogIn} className="space-y-4">
            <div>
              <label className="mb-2 dark:text-gray-400 text-lg">Email</label>
              <input
                id="email"
                className="border p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="mb-2 dark:text-gray-400 text-lg">
                Password
              </label>
              <input
                id="password"
                className="border p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3>
              <span className="cursor-default dark:text-gray-300">
                Don't have an account?
              </span>
              <Link
                to={"/Register"}
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Register here
                </span>
              </Link>
            </h3>
          </div>

          {/* <!-- Social Authentication Options --> */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;

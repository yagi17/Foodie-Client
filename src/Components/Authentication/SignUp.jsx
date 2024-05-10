import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth";
import Swal from "sweetalert2";
import { useState } from "react";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const { createUser, setLoading, UserProfile } = Auth();

  const navigate = useNavigate();

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  // check password

  const validatePassword = (password) => {
    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    // Check for length
    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return;
  };

  // Update error message based on password input
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const passwordError = validatePassword(password);
    setPasswordError(passwordError);
  };

  // create user with email and password
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const user = { name, email, password, image };
    // console.log(user);
    const checkPassword = validatePassword(password);
    if (checkPassword) {
      setPasswordError(passwordError);
      return;
    }

    setEmailError();

    createUser(email, password)
      .then(() => {
        // Create a new user on the server
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              // update user details
              UserProfile(name, image).then(() => {
                setLoading(true);
                navigate("/");
                Swal.fire({
                  title: "User has been created successfully!",
                  icon: "success",
                });
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Failed to create user",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error",
              text: "Failed to create user",
              icon: "error",
            });
          });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setEmailError("Email already in use");
        }
      });
  };

  return (
    <div className="">
      <div className="mx-auto max-w-xl bg-[#212121]">
        <div className="border-[15px] border-transparent rounded-[20px] bg-[url('/Footer.png')] shadow-lg xl:p-8 2xl:p-8 lg:p-8 md:p-8 sm:p-2 m-2">
          <h1 className="py-5 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
            Sign Up
          </h1>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="mb-2 dark:text-gray-400 text-lg">Name</label>
              <input
                name="name"
                className="border p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label className="mb-2 dark:text-gray-400 text-lg">Email</label>
              <input
                name="email"
                className="border p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="email"
                placeholder="Email"
                required
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1 pl-2">{emailError}</p>
              )}
            </div>
            <div>
              <label className=" dark:text-gray-400 text-lg">Password</label>
              <input
                name="password"
                className="border p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="password"
                placeholder="Password"
                required
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="text-red-500 text-xs pt-1 ml-2">
                  {passwordError}
                </p>
              )}
            </div>
            <div>
              <label className="mb-2 dark:text-gray-400 text-lg">Image</label>
              <input
                name="image"
                className="border p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="url"
                placeholder="Image Url"
              />
            </div>
            <input
              className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              value="Sign In"
              type="submit"
            />
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3>
              <span className="cursor-default dark:text-gray-300">
                Have an account?
              </span>
              <Link
                to={"/Login"}
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Log In
                </span>
              </Link>
            </h3>
          </div>

          {/* <!-- Third Party Authentication Options --> */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

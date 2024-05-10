import { Link, useLocation, useNavigate } from "react-router-dom";
import Auth from "./Auth";

const SignUp = () => {
  const { SignUp, setLoading } = Auth();

  const navigate = useNavigate();
  const location = useLocation();
  const naviGate = location?.state || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    const SignUpData = { name, email, password, image };
    console.log(SignUpData);

    SignUp(email, password).then(() => {
      setLoading(true);
      navigate("/");
      const user = { name, email, password, image };
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
            </div>
            <div>
              <label className=" dark:text-gray-400 text-lg">Password</label>
              <input
                name="password"
                className="border p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                type="password"
                placeholder="Password"
                required
              />
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
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
          <div
            id="third-party-auth"
            className="flex items-center justify-center mt-4 flex-wrap"
          >
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                alt="Linkedin"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px] filter dark:invert"
                src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                alt="Github"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                alt="Facebook"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px] dark:gray-100"
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                alt="twitter"
              />
            </button>

            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                alt="apple"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

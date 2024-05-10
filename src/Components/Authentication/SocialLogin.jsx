import Swal from "sweetalert2";
import Auth from "./Auth";
import { Navigate, useLocation } from "react-router-dom";


const SocialLogin = () => {

    const location = useLocation();
    const naviGate = location?.state || "/";


    const { googleLogIn, gitHubLogin} = Auth()
    const handleSocial = (socialProvider) => {
        socialProvider().then((result) => {
          if (result.user) {
            const email = result.user.email;
            const creationTime = result.user.metadata.creationTime;
            const user = { email, creationTime };
    
            // Post the user data to backend
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                  // Notify user of success
                  Swal.fire({
                    title: "User has been created successfully!",
                    icon: "success",
                  });
                }
              });
    
            // Redirect user after successful login
            Navigate(naviGate);
          }
        });
      };
    
  return (
    <div>
      <div
        id="third-party-auth"
        className="flex items-center justify-center mt-4 flex-wrap"
      >
        <button
          href="#"
          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            onClick={() => handleSocial(googleLogIn)}
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
            onClick={() => handleSocial(gitHubLogin)}
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
      </div>
    </div>
  );
};

export default SocialLogin;

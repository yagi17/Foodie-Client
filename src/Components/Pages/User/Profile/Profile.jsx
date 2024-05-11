import Auth from "../../../Hooks/Auth";
import Footer from "../../Shared/Footer";

const Profile = () => {
  const { user } = Auth();
  console.log(user);
  const { displayName, email, photoURL } = user;
  return (
    <div>
      <div className="py-12">
        {/* <!-- Card start --> */}
        <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden py-4 shadow-lg">
          <div className="border-y px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                src={photoURL}
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                  {displayName}
                </h3>
                <h3 className=" text-gray-800 dark:text-white mb-1">
                  {email}
                </h3>
              </div>
            </div>
            <div className="flex gap-2 px-2">
              <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                Follow
              </button>
              <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                Message
              </button>
              <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                Message
              </button>
            </div>
          </div>

        </div>
        {/* <!-- Card end --> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;

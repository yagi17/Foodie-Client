import { useEffect, useState } from "react";
import useAxiosHook from "../../Hooks/axiosHook";

const GalleryCard = () => {
  const axiosSecure = useAxiosHook();

  const [feedbacks, setFeedback] = useState([]);
  console.log(feedbacks);
  useEffect(() => {
    axiosSecure.get(`/gallery`).then((res) => {
      setFeedback(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="w-10/12 mt-8 gap-6 mx-auto grid grid-cols-4">
      {feedbacks.map((feedback) => (
        <>
          <div className="group h-96 relative rounded-xl bg-yellow-400 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={feedback.photo}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black duration-700 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col justify-center px-9 transition-all duration-500 group-hover:translate-y-0">
              <h1 className=" text-3xl font-bold text-white">{feedback.name}</h1>
              <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {feedback.feedback}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default GalleryCard;

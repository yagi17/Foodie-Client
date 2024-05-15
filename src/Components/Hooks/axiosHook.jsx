import axios from "axios";
import { useEffect } from "react";
import Auth from "./Auth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://foodie-server-sand.vercel.app",
  withCredentials: true,
});

const useAxiosHook = () => {
  const { logout } = Auth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // console.log("error in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("user logged off");
          logout().then(() => {
            navigate("/Login");
          });
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosHook;
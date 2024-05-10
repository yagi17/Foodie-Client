import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Auth from "./Auth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Auth);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <img src="/loader.gif" alt="" />
        <p>You're almost there! </p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname || "/"} to="/login"></Navigate>;
};

export default PrivateRoute;

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Auth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default Auth;

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const UserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google and github
  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();

  // google login
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, google);
  };

  //  Github login
  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, github);
  };

  // logout user
  const logout = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    // set user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      // console.log("current user:", currentUser);
      const userEmail = currentUser?.email || user?.email;
      const existingUser = { email: userEmail };
      // Issue a token to the user
      if (currentUser) {
        axios
          .post("https://foodie-server-sand.vercel.app/cookies", existingUser, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log("token response", res.data);
          });
      } else {
        axios.post("https://foodie-server-sand.vercel.app/logout", existingUser, {
          withCredentials: true,
        })
        .then(res =>{
          // console.log(res.data);
        })
      }
    });
    return () => unsubscribe();
  }, [reload]);

  const values = {
    user,
    loading,
    logout,
    setLoading,
    setReload,
    createUser,
    googleLogIn,
    gitHubLogin,
    UserProfile,
    login,
  };
  return (
    <div>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

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
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUser(user);
    }

    // set user
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);

        // Also save user in localStorage
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setLoading(false);
        setUser(currentUser);

        // Remove user from localStorage
        localStorage.removeItem("user");
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

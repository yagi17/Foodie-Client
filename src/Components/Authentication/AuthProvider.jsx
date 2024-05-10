import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const SignUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateProfile = (name, image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
          });
    }

    // login user
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const values= {
        user,
        loading,
        setLoading,
        SignUp,
        updateProfile,
        login,
        
    }
  return (
    <div>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

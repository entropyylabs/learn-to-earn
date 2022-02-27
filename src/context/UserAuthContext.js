import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { createUserDocument } from "../services/userService";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  async function signUp(email, password) {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUserDocument(user);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  async function googleLogIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, googleAuthProvider);
    await createUserDocument(user);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, signUp, login, logout, googleLogIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// Hook to use userAuthContext
export function useUserAuth() {
  return useContext(userAuthContext);
}

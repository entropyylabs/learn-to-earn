import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmtv_vuDJD2yCaMsCtkaHR6InGx-ugQAc",
  authDomain: "learn-to-earn-84520.firebaseapp.com",
  projectId: "learn-to-earn-84520",
  storageBucket: "learn-to-earn-84520.appspot.com",
  messagingSenderId: "539650631857",
  appId: "1:539650631857:web:f34ff226070d4689c41a90",
  measurementId: "G-LGNDPMEN57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;

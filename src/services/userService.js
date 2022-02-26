import { firestore } from "../firebase";
import { collection, setDoc, doc } from "firebase/firestore";

export const createUserDocument = async (user) => {
  if (!user) return;

  const userRef = collection(firestore, "Users");
  const snapshot = doc(firestore, "Users", user.uid);

  if (!snapshot.exists) {
    const { email } = user;

    try {
      setDoc(doc(firestore, "Users", user.uid), {
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log("Error :: creating user", error);
    }
  }
};

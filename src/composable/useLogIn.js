import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ref } from "vue";
const errorMessages = {
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
};
let error = ref("");
let signIn = async (email, password) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Cannot LogIn account");
    }
    return res;
  } catch (err) {
    error.value = errorMessages[err.code] || err.message;
    console.log(error.value);
    return null;
  }
};

let useLogIn = () => {
  return { error, signIn };
};
export default useLogIn;

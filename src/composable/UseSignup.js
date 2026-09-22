import { ref } from "vue";
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const errorMessages = {
  "auth/email-already-in-use": "This email is already registered.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/missing-password": "Please enter a password.",
};

const error = ref("");

const createUser = async (email, password, userName) => {
  try {
    error.value = "";
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not create an account");
    }
    await updateProfile(res.user, { displayName: userName });
    return res;
  } catch (err) {
    console.log(err.code); // Check your browser console to see what code Firebase gives you
    error.value = errorMessages[err.code] || err.message;
    return null;
  }
};

const useSignUp = () => {
  return { error, createUser };
};

export default useSignUp;

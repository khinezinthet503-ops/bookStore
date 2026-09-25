import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { ref } from "vue";

let error = ref("");

let logOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    error.value = err.message;
  }
};

let useLogOut = () => {
  return { error, logOut };
};
export default useLogOut;

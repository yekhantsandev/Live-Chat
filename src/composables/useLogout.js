import { ref } from "vue";
import { auth } from "../firebase/config";

let error = ref(null);

let signout = async () => {
  try {
    await auth.signOut();
    console.log("user log out");
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

let useLogout = () => {
  return { error, signout };
};

export default useLogout;

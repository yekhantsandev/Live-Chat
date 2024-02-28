import { auth } from "../firebase/config";
import { ref } from "vue";

let error = ref(null);

let createAccount = async (email, password, displayName) => {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("could not create new user");
    }
    res.user.updateProfile({ displayName }); // key === value same
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};

let useSignup = () => {
  return { error, createAccount };
};

export default useSignup;

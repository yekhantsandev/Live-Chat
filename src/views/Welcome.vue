<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login />
      <p>
        Not a number?
        <span @click="showLoginForm = !showLoginForm">Create Account</span>
      </p>
    </div>
    <div v-else>
      <Signup />
      <p>
        Already member?
        <span @click="showLoginForm = !showLoginForm">Login Account</span>
      </p>
    </div>
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import { ref } from "vue";

export default {
  components: { Signup, Login },
  setup() {
    let showLoginForm = ref(true);

    return { showLoginForm };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

/* form style  */
.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
}
</style>

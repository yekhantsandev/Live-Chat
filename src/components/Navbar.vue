<template>
  <nav>
    <div>
      <p>Hi diaplayName</p>
      <p class="email">login as email</p>
    </div>

    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";

export default {
  setup() {
    let {error, signout} = useLogout();
    let logout = async () => {
      await signout();
    };

    return { logout, error };
  },
};
</script>

<style></style>

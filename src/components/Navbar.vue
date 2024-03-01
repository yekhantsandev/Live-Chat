<template>
  <nav v-if="user">
    <div>
      <p>Hi {{ user.displayName }}</p>
      <p class="email">login as : {{ user.email }}</p>
    </div>

    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    let { error, signout } = useLogout();
    let logout = async () => {
      await signout();
    };
    
    let {user} = getUser();

    return { logout, error, user };
  },
};
</script>

<style></style>

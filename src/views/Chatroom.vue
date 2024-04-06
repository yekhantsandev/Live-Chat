<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import { watch } from "vue";
import Navbar from "../components/Navbar.vue";
import ChatForm from "../components/ChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
  components: { Navbar, ChatForm, ChatWindow },
  setup() {
    let router = useRouter();
    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        // redirect welocme page
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav .email {
  font-size: 14px;
  color: #999;
}
</style>

<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
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

import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome";
import Chatroom from "../views/Chatroom";
import { auth } from "../firebase/config";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/chatroom",
    name: "chatroom",
    component: Chatroom,
    beforeEnter(to, from, next) {
      let user = auth.currentUser;
      if (user) {
        next();
      } else {
        next({ name: "welcome" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router"; // Import VueRouter

import Jiro from "@/views/components/JiroComponent.vue";
import Ced from "@/views/components/CedricComponent.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "jiro",
    component: Jiro,
  },
  {
    path: "/ced",
    name: "Ced",
    component:Ced,
  }
];

// Create a history mode router (if needed)
const router = new VueRouter({
  routes,
});

export default router;

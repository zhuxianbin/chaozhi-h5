import Vue from "vue";
import Router from "vue-router";

import home from "./pages/home.vue";
import login from "./pages/login.vue";

import layout from "./pages/center/layout.vue";
import index from "./pages/center/index.vue";
import course from "./pages/center/course.vue";
import male from "./pages/center/male.vue";
import pay from "./pages/center/pay.vue";
import info from "./pages/center/info.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/center",
      name: "center",
      component: layout,
      children: [
        {
          path: "index",
          name: "index",
          component: index
        },
        {
          path: "course",
          name: "course",
          component: course
        },
        {
          path: "male",
          name: "male",
          component: male
        },
        {
          path: "pay",
          name: "pay",
          component: pay
        },
        {
          path: "info",
          name: "info",
          component: info
        }
      ]
    }
  ]
});

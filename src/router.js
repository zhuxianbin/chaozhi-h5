import Vue from "vue";
import Router from "vue-router";

import index from "./pages/index.vue";
import login from "./pages/login.vue";

// import index from "./pages/center/index.vue";
import courseList from "./pages/center/course.list.vue";
import course from "./pages/center/course.vue";

import male from "./pages/male.vue";
import pay from "./pages/pay.vue";
import info from "./pages/center/info.vue";

import center from "./pages/center/layout.vue";
import centerIndex from "./pages/center/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/index"
      //component: home
    },
    {
      path: "/index",
      name: "index",
      component: index
      //redirect: "/index"
      //component: home
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/male",
      name: "male",
      component: male
    },
    {
      path: "/pay",
      name: "pay",
      component: pay
    },

    {
      path: "/center",
      name: "center",
      component: centerIndex
    },
    {
      path: "/courseList",
      name: "courseList",
      component: courseList
    },
    {
      path: "/course",
      name: "course",
      component: course
    },
    {
      path: "/info",
      name: "info",
      component: info
    },
    {
      path: "/live",
      name: "live",
      component: () => import("./pages/center/list.live.vue")
    },
    {
      path:"/signup",
      name: "signup",
      component: () => import("./pages/center/signup.vue")
    },
    // {
    //   path: "/getcode",
    //   name: "getcode",
    //   component: info
    // }
  ]
});

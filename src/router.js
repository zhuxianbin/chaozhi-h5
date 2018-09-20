import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

// import { getToken } from "@/utils/auth";

import index from "./pages/index.vue";
import login from "./pages/login/index.vue";
const register = () => import("@/pages/login/register");
const forget = () => import("@/pages/login/forget");
import layout from "./pages/layout.vue";
import courseList from "./pages/center/course.list.vue";
import course from "./pages/center/course.vue";

import male from "./pages/male.vue";
import pay from "./pages/pay.vue";
import info from "./pages/center/info.vue";

import center from "./pages/center/layout.vue";
import centerIndex from "./pages/center/index.vue";
const orders = () => import("@/pages/center/orders");

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/index",
    component: layout,
    children: [
      {
        path: "/index",
        name: "index",
        component: index
      },
      {
        path: "/male",
        name: "male",
        component: male
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
        path: "/signup",
        name: "signup",
        component: () => import("./pages/center/signup.vue")
      },
      {
        path: "/getcode",
        name: "getcode",
        component: () => import("./pages/center/getcode.vue")
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("./pages/center/orders.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
    path: "/forget",
    name: "forget",
    component: forget
  },

  {
    path: "/pay/:id?/:isGet?",
    name: "pay",
    component: pay
  },

  {
    path: "/hybrid",
    name: "hybrid",
    redirect: "/hybrid/index",
    component: () => import("./hybrid/layout.vue"),
    children: [
      {
        path: "index",
        name: "hybrid-index",
        component: () => import("./hybrid/index.vue")
      },
      {
        path: "orders",
        name: "hybrid-orders",
        component: () => import("./hybrid/me/orders")
      },
      {
        path: "message",
        name: "hybrid-message",
        component: () => import("./hybrid/me/message"),
        meta:{
          title:"消息管理"
        }
      },
      {
        path: "coupon",
        name: "hybrid-coupon",
        component: () => import("./hybrid/me/coupon"),
        meta:{
          title:"优惠券"
        }
      }
    ]
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || "/" + (route.name || "");
});

const router = new Router({
  routes
});

NProgress.configure({
  showSpinner: false
}); // NProgress Configuration
// const whiteList = ["/login", "/index", "/male", "/register", "/forget"]; // no redirect whitelist
router.beforeEach((to, from, next) => {
  console.log(to, from);
  NProgress.start(); // start progress bar
  // const token = getToken();

  // if (token) {
  //   if (to.path === "/login") {
  //     next({
  //       path: "/"
  //     })
  //     NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     next("/login") // 否则全部重定向到登录页
  //     NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  //   }
  // }
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});
router.afterEach(() => {
  NProgress.done(); // finish progress bar
});

export { router };
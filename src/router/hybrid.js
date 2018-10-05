export default [
  {
    path: "/hybrid",
    name: "hybrid",
    redirect: "/hybrid/index",
    component: () => import("@/hybrid/layout.vue"),
    children: [
      {
        path: "index",
        name: "hybrid-index",
        component: () => import("@/hybrid/index.vue")
      },
      {
        path: "orders",
        name: "hybrid-orders",
        component: () => import("@/hybrid/me/orders")
      },
      {
        path: "message",
        name: "hybrid-message",
        component: () => import("@/hybrid/me/message"),
        meta: {
          title: "消息管理"
        }
      },
      {
        path: "coupon",
        name: "hybrid-coupon",
        component: () => import("@/hybrid/me/coupon"),
        meta: {
          title: "优惠券"
        }
      },
      {
        path: "feedback",
        name: "hybrid-feedback",
        component: () => import("@/hybrid/feedback"),
        meta: {
          title: "问题反馈"
        }
      }
    ]
  }
];

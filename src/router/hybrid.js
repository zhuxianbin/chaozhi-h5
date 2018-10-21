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
      },
      {
        path: "study",
        name: "hybrid-study",
        redirect: "/hybrid/study/index",
        component: () => import("@/hybrid/study/layout.vue"),
        children: [
          {
            path: "index",
            name: "hybrid-study-index",
            component: () => import("@/hybrid/study/index.vue")
          },
          {
            path: "library/:id?",
            name: "hybrid-study-library",
            component: () => import("@/hybrid/study/library")
          },
          {
            path: "node/:course_id?",
            name: "hybrid-study-node",
            component: () => import("@/hybrid/study/node/index.vue")
          },
          {
            path: "answer/:id/:type",
            name: "hybrid-study-answer",
            component: () => import("@/hybrid/study/answer")
          },
          {
            path: "score/:id/:type",
            name: "hybrid-study-score",
            component: () => import("@/hybrid/study/answer/score")
          },
          {
            path: "course-list",
            name: "hybrid-study-course-list",
            component: () => import("@/hybrid/study/course-list.vue")
          },
          {
            path: "doc/:id?",
            name: "hybrid-study-doc",
            component: () => import("@/hybrid/study/doc/index.vue")
          }
        ]
      }
    ]
  }
];

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
            path: "question/:id?",
            name: "hybrid-study-question",
            component: () => import("@/hybrid/study/question-bank.vue")
          },
          {
            path: "exam",
            name: "hybrid-study-exam",
            component: () => import("@/hybrid/study/exam.vue")
          },
          {
            path: "score",
            name: "hybrid-study-score",
            component: () => import("@/hybrid/study/score.vue")
          },
          {
            path: "course-list",
            name: "hybrid-study-course-list",
            component: () => import("@/hybrid/study/course-list.vue")
          }
        ]
      }
    ]
  }
];

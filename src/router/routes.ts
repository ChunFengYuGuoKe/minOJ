import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "芙宁娜",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "那维莱特",
    component: NoAuthView,
  },
  {
    path: "/admin",
    name: "芙宁娜的老公",
    component: AdminView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/about",
    name: "阿蕾奇诺",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

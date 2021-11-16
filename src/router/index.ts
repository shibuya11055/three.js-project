import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/001",
    name: "Scene001",
    component: () => import("../views/scene001.vue"),
  },
  {
    path: "/002",
    name: "Scene002",
    component: () => import("../views/scene002.vue"),
  },
  {
    path: "/003",
    name: "Scene003",
    component: () => import("../views/scene003.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const routerPages = routes
  .map((route) => {
    if (route.name !== "Index") return route.path;
  })
  .filter((page): page is string => typeof page === "string");

export default router;

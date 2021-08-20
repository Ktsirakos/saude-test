import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Graph from "../views/Graphs.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({ query: route.query.q }),
  },
  {
    path: "/graphs",
    name: "Graphs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Graph,
    props: (route) => ({ query: route.query.q }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

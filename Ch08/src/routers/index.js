import { createRouter, createWebHistory } from "vue-router";
import Components from "../components/sub1/Components";
import Grids from "../components/sub2/Grids";
import Layout from "../components/sub3/Layout";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/components", name: "Components", component: Components },
    { path: "/grids", name: "Grids", component: Grids },
    { path: "/layout", name: "Layout", component: Layout },
  ],
});

export default router;

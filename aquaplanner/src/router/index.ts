import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Calendar from "../views/Calendar.vue";
import PerformanceTest from "../views/PerformanceTest.vue";
import HelloWord from "../components/HelloWorld.vue";
import Costs from "../views/Costs.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HelloWord,
  },
  {
    path: "/costs",
    name: "Costs",
    component: Costs,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/performanceTest",
    name: "PerformanceTest",
    component: PerformanceTest,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;

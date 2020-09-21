import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Calendar from "../views/Calendar.vue";
import HelloWord from "../components/HelloWorld.vue";
import CostCalculator from "../components/CostCalculator.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HelloWord,
  },
  {
    path: "/costCalculator",
    name: "CostCalculator",
    component: CostCalculator,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
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

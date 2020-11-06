import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Calendar from "../views/Calendar.vue";
import PerformanceTest from "../views/PerformanceTest.vue";
import HelloWord from "../components/HelloWorld.vue";
import Costs from "../views/Costs.vue";
import firebase from "firebase";
import Login from "../components/Login.vue";
import WaterValues from '../views/WaterValues.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "Home",
    component: HelloWord,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/costs",
    name: "Costs",
    component: Costs,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/waterValues",
    name: "WaterValues",
    component: WaterValues,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/performanceTest",
    name: "PerformanceTest",
    component: PerformanceTest,
    meta: {
      requiresAuth: true,
    },
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

//router.beforeEach((to, from, next) => {
  // const currentUser = firebase.auth().currentUser;
  // const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // if (requiresAuth && !currentUser) next("login");
  // else if (!requiresAuth && currentUser) next("home");
  // else next();
//});

export default router;

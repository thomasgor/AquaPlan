//import { firebase } from 'firebase';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import {firestorePlugin} from "vuefire"

import axios from "axios";

Vue.prototype.$axios = axios;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  
}).$mount("#app");

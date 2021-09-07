import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VModal from "vue-js-modal";
import VueToastify from "vue-toastify";
Vue.use(VueToastify);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

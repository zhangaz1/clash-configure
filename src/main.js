import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import "./registerServiceWorker";
import "./plugins/element.js";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    decodeData: ""
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

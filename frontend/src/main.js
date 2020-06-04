import Vue from "vue";
import App from "./App.vue";
import router from "./routes/Router.js";
import "./registerServiceWorker";
import Axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

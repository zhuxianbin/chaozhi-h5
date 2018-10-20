if (
  window.location.protocol === "http:" &&
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "test.chaozhiedu.com"
) {
  window.location.href = window.location.href.replace("http:", "https:");
}
import Vue from "vue";
import App from "./App.vue";
// console.log(App);
import { router } from "./router";
import store from "./stores";
import Vant from "vant";
import "normalize.css/normalize.css";
import "nprogress/nprogress.css";
import "vant/lib/vant-css/index.css";
import "./assets/index.less";
Vue.config.productionTip = false;
import mixins from "./utils/mixins";

Vue.use(Vant);
Vue.use(mixins);
new Vue({
  router,
  store,
  ...App
}).$mount("#app");

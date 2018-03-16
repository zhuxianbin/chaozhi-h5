import Vue from "vue";
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import "flex.css/dist/flex.css";
import "./assets/index.less";
import app from "./app.vue";
import router from "./router";

import mixins from "./utils/mixins";
import store from "./stores/index";

Vue.use(Mint);
Vue.use(mixins);
new Vue({
  router,
  store,
  el: "#app",
  ...app
});

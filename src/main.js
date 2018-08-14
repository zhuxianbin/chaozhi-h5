import Vue from "vue";
import Mint from "mint-ui";
// import Vant from "vant";
import "normalize.css/normalize.css";
import "mint-ui/lib/style.css";
import "flex.css/dist/flex.css";
import "nprogress/nprogress.css";
import "./assets/index.less";
import app from "./app.vue";
import {
  router
} from "@/router";

import mixins from "./utils/mixins";
import store from "./stores/index";

Vue.use(Mint);
// Vue.use(Vant);
Vue.use(mixins);
new Vue({
  router,
  store,
  el: "#app",
  ...app
});


// wx.config({
//   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//   appId: '', // 必填，企业号的唯一标识，此处填写企业号corpid
//   timestamp: , // 必填，生成签名的时间戳
//   nonceStr: '', // 必填，生成签名的随机串
//   signature: '',// 必填，签名，见附录1
//   jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
// });
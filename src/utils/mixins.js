//import cookie from '../jPlugins/jquery.cookie.min'
//import $ from 'jquery';
import storage from "./storage";
import api from "./api";
import tools from "./tools";

const $cookie = {
  //设置cookie
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  },
  //获取cookie
  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
  },
  //清除cookie
  clearCookie(name) {
    this.setCookie(name, "", -1);
  }
};

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        let { token } = this.$storage.get("userToken");
        return {
          Token: token
        };
      },
      filters: {
        htmlfilter(s) {
          s = s.replace(/<\s*script[^>]*>(.|[\r\n])*?<\s*\/script[^>]*>/gi, "");
          s = s.replace(/<\s*style[^>]*>(.|[\r\n])*?<\s*\/style[^>]*>/gi, "");
          s = s.replace(/<\/?[^>]+>/g, "");
          s = s.replace(/\&[a-z]+;/gi, "");
          s = s.replace(/\s+/g, "\n");
          return s;
        }
      },
      methods: {
        doLogout() {
          storage.remove("userToken");
          //$cookie.clearCookie("userToken", "", -1);
          //$.cookie("userToken", "", -1);
          //console.log(this.$router,1111);
          this.$router.go();
        },
        openNew(link) {
          // var e = document.createElement("a");
          // document.body.appendChild(e);
          // e.href = link;
          // e.target = "_new";
          // e.click();
          // document.body.removeChild(e);
          window.open(link);
        },
        initWeiXin(jsApiList = [], callback) {
          api.getWeiXinConfig().then(() => {
            wx.config({
              beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
              debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: '', // 必填，企业微信的corpID
              timestamp: 0, // 必填，生成签名的时间戳
              nonceStr: '', // 必填，生成签名的随机串
              signature: '',// 必填，签名，见附录1
              jsApiList: jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(() => {
              callback && callback(wx);
            });
          });
        },
        bindWeiXinOpenId(url) {
          let { token } = storage.get("userToken");
          let redirect_uri = encodeURIComponent(url);
          let href = `http://test-aci-api.chaozhiedu.com/api/weixinauth?token=${token}&url=${redirect_uri}`;
          window.location.href = href;
        },
        weixinPay(config,callback) {
          function onBridgeReady() {
            WeixinJSBridge.invoke(
              'getBrandWCPayRequest', config,
              function (res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                  callback&&callback();
                }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
              }
            );
          }
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
          } else {
            onBridgeReady();
          }
        }
      }
    });

    //Vue.prototype.$tools = prototypes;
    //Vue.prototype.$regex = regex;
    //Vue.prototype.$api = api;
    Vue.prototype.$storage = storage;

    Vue.prototype.$cookie = $cookie;

    Vue.prototype.$TOOLS = tools;
  }
};

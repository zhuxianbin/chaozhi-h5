var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf("micromessenger") != -1;
var isAndroid = ua.indexOf("android") != -1;
var isAlipay = ua.indexOf("alipay") != -1;
var isIos = ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1;

export default {
  isIos,
  isAndroid,
  isWechat() {
    return isWeixin;
  },
  isAlipay() {
    return isAlipay;
  },
  isAlipayOrWechat() {
    return isWeixin || isAlipay;
  }
};

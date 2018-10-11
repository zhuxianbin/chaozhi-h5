export const ua = navigator.userAgent.toLowerCase();
export const isWeixin = ua.indexOf("micromessenger") != -1;
export const isAndroid = ua.indexOf("android") != -1;
export const isAlipay = ua.indexOf("alipay") != -1;
export const isIos = ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1;

export default {
  isIos,
  isAndroid,
  isWeixin,
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

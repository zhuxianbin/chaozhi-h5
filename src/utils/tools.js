export default {
    isWechat() {
        var userAgent = navigator.userAgent.toLowerCase();
        return userAgent.match(/MicroMessenger/i) == "micromessenger";
    },
    isAlipay() {
        var userAgent = navigator.userAgent.toLowerCase();
        return userAgent.match(/Alipay/i) == "alipay";
    },
    isAlipayOrWechat() {
        return this.isWechat() || this.isAlipay();
    }
};
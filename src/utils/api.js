import async from "./async";
import storage from "./storage";
export default {
  /**
   * 取得登陆验证码
   * URL (/api/phone-captcha) METHOD POST
   * @param phone
   * */
  getPhoneCaptcha: function (param) {
    return async.post("/api/phone-captcha", param);
  },

  /**
   * 登陆
   * URL (/api/login) METHOD POST
   * @param phone
   * @param captcha 手机验证码 在测试环境中 先调用 phone-captcha 可以使用 1111 做为验证码
   * */
  doLogin: function (param) {
    return async.post("/api/login", param);
  },

  /**
   * 用户基本信息
   * URL (/api/user) METHOD get
   * 无需参数，直接获取 ，注意要带上token
   * */
  getUserInfo: function (param) {
    let { token } = storage.get("userToken");
    return async.get("/api/user", param || {}, token);
  },

  /**
   * 保存用户基本资料
   * URL (/api/user) METHOD POST
   * 接收参数如下：
   * cn_name en_name sex birthday college edu_num idcard
   * email contacts_phone addr period idcard_front idcard_reverse edu degree entry_form avatar
   * */
  addUserInfo: function (param) {
    let { token } = storage.get("userToken");
    return async.post("/api/user", param, token);
  },

  /**
   * 提交用户基本资料
   * URL (/api/user) METHOD POST
   * 接收参数如下：
   * cn_name en_name sex birthday college edu_num idcard
   * email contacts_phone addr period idcard_front idcard_reverse edu degree entry_form avatar
   * */
  submitUserInfo: function (param) {
    let { token } = storage.get("userToken");
    return async.post("/api/user/submit", param, token);
  },

  /**
   * 取得已购课程
   * URL (/api/course/list) METHOD post
   * 无需参数，直接获取 ，注意要带上token
   * */
  getCourseList: function (param) {
    let { token } = storage.get("userToken");
    return async.post("/api/course/list", param, token);
  },

  /**
   * 课程资料
   * URL (/api/course/information) METHOD post
   * 接收参数
   * pid 产品ID 必传 p 分页 必传 offset 每页显示的数量 默认为10
   * */
  getCourseInfo: function (param) {
    let { token } = storage.get("userToken");
    return async.post("/api/course/information", param, token);
  },

  /**
   * 取得课程计划
   * URL (/api/course/plan) METHOD post
   * 接收参数
   * pid 产品ID 必传 p 分页 必传 offset 每页显示的数量 默认为10
   * */
  getCoursePlan: function (param) {
    let { token } = storage.get("userToken");
    return async.post("/api/course/plan", param, token);
  },

  /**
   * 资源上传
   * URL (/api/file/upload) METHOD post
   * 接收参数
   * 上传名称为 file
   * */
  fileUpload: function (param) {
    let { token } = storage.get("userToken");
    return async.upload("/api/file/upload", param, token);
  },

  /**
   * 产品列表
   * URL (/api/product/list) METHOD POST
   * 接收参数
   * p 分页 必传 offset 每页显示的数量 默认为10
   * */
  getProductList: function (param) {
    return async.post("/api/product/list", param);
  },

  /**
   * 获取订单状态
   * URL (/api/get-pay-info) METHOD POST
   * 接收参数
   * product_id 产品列表的ID字段
   * */
  getPayInfo: function (param) {
    let { token } = storage.get("userToken");
    return async.post("/api/get-pay-info", param, token);
  },

  /**
   * 刷新订单金额
   * URL (/api/pay/refresh-price/{TOKEN} ) METHOD GET
   * 接收参数
   * token 直接拼在url后
   * 示例: /api/pay/refresh-price/1802055004745729
   * */
  refreshPrice: function (orderToken) {
    let { token } = storage.get("userToken");
    return async.get(`/api/pay/refresh-price/${orderToken}`, {}, token);
  },

  /**
   * 订单下单
   * URL (/api/pay) METHOD POST
   * 接收参数
   * product_id 产品列表的ID字段 channel 支付渠道 wechat,alipay
   * */
  pay: function (param) {
    let { token } = storage.get("userToken");
    return async.post("/api/pay", param, token);
  },
  umsH5({ orderId, type }) {
    let { token } = storage.get("userToken");
    return async.get(`/api/pay/umsH5/${orderId}/${type}`, {}, token);
  },
  /**
   * 取得课程分类
   * URL (/api/course/cateogry) METHOD GET
   * 接收参数 无
   * */
  getCategory: function (param) {
    return async.get("/api/course/category", param);
  },

  /**
   * 取得课程分类
   * URL (/api/course/cateogry) METHOD GET
   * 接收参数 无
   * */
  getPayResult: function (param) {
    return async.get(`/api/pay/result/${param.token}`, param);
  },

  getCourseCount: function (param) {
    let { token } = storage.get("userToken");
    return async.post(`/api/course/count`, param, token);
  },

  /**
   * 支付报名费
   * URL (/api/user/paysingup) METHOD GET
   * 接收参数 无
   * */
  paySingup: function (param) {
    let { token } = storage.get("userToken");
    return async.get(`/api/user/paysingup`, param, token);
  },

  /**
   * 直播列表
   * URL (/api/userlive/list) METHOD POST
   * 接收参数 无
   * */
  getLiveList: function (param) {
    let { token } = storage.get("userToken");
    return async.post(`/api/userlive/list`, param, token);
  },

  /**
   * 报名费用是否支付
   * URL (/api/user/getpayinfo) METHOD GET
   * 接收参数 无
   * */
  getSingupPayInfo: function (param) {
    return async.get(`/api/user/getpayinfo`, param);
  },

  getUserSign: function (param) {
    return async.get(`/api/usersign`, param);
  },
  saveUserSign: function (param) {
    return async.post(`/api/usersign`, param);
  },
  submitUserSign: function (param) {
    return async.post(`/api/usersign/submit`, param);
  },
  getUserSignPayinfo: function (param) {
    return async.get(`/api/usersign/getpayinfo`, param);
  },
  toPaySingUp: function (param) {
    return async.get(`/api/usersign/paysingup`, param);
  },


  /*H5支付*/
  getUnifiedOrder(param) {
    return async.post(`/api/pay/getUnifiedOrder`, param);
  }
};

import request from "./request";
import { getToken } from "./auth";
import { weixinAuth } from "./config";
const api = {
  /**
   * 登陆
   * URL (/api/login) METHOD POST
   * @param phone
   * @param captcha 手机验证码 在测试环境中 先调用 phone-captcha 可以使用 1111 做为验证码
   * */
  doLogin: function(param) {
    return request.post("/api/login", param);
  },

  /**
   * 用户基本信息
   * URL (/api/user) METHOD get
   * 无需参数，直接获取 ，注意要带上
   * */
  getUserInfo: function(param) {
    return request.get("/api/user", param || {});
  },

  /**
   * 保存用户基本资料
   * URL (/api/user) METHOD POST
   * 接收参数如下：
   * cn_name en_name sex birthday college edu_num idcard
   * email contacts_phone addr period idcard_front idcard_reverse edu degree entry_form avatar
   * */
  addUserInfo: function(param) {
    return request.post("/api/user", param);
  },

  /**
   * 提交用户基本资料
   * URL (/api/user) METHOD POST
   * 接收参数如下：
   * cn_name en_name sex birthday college edu_num idcard
   * email contacts_phone addr period idcard_front idcard_reverse edu degree entry_form avatar
   * */
  submitUserInfo: function(param) {
    return request.post("/api/user/submit", param);
  },

  /**
   * 取得已购课程
   * URL (/api/course/list) METHOD post
   * 无需参数，直接获取 ，注意要带上
   * */
  getCourseList: function(param) {
    return request.post("/api/course/list", param);
  },

  /**
   * 课程资料
   * URL (/api/course/information) METHOD post
   * 接收参数
   * pid 产品ID 必传 p 分页 必传 offset 每页显示的数量 默认为10
   * */
  getCourseInfo: function(param) {
    return request.post("/api/course/information", param);
  },

  /**
   * 取得课程计划
   * URL (/api/course/plan) METHOD post
   * 接收参数
   * pid 产品ID 必传 p 分页 必传 offset 每页显示的数量 默认为10
   * */
  getCoursePlan: function(param) {
    return request.post("/api/course/plan", param);
  },

  /**
   * 资源上传
   * URL (/api/file/upload) METHOD post
   * 接收参数
   * 上传名称为 file
   * */
  fileUpload: function(param) {
    return request.upload("/api/file/upload", param);
  },

  /**
   * 获取订单状态
   * URL (/api/get-pay-info) METHOD POST
   * 接收参数
   * product_id 产品列表的ID字段
   * */
  getPayInfo: function(param) {
    return request.post("/api/get-pay-info", param);
  },

  /**
   * 刷新订单金额
   * URL (/api/pay/refresh-price/{} ) METHOD GET
   * 接收参数
   *  直接拼在url后
   * 示例: /api/pay/refresh-price/1802055004745729
   * */
  refreshPrice: function(order) {
    return request.get(`/api/pay/refresh-price/${order}`, {});
  },

  /**
   * 订单下单
   * URL (/api/pay) METHOD POST
   * 接收参数
   * product_id 产品列表的ID字段 channel 支付渠道 wechat,alipay
   * */
  pay: function(param) {
    return request.post("/api/pay", param);
  },
  umsH5({ orderId, type }) {
    return request.get(`/api/pay/umsH5/${orderId}/${type}`, {});
  },
  /**
   * 取得课程分类
   * URL (/api/course/cateogry) METHOD GET
   * 接收参数 无
   * */
  getCategory: function(param) {
    return request.get("/api/course/category", param);
  },

  /**
   * 取得课程分类
   * URL (/api/course/cateogry) METHOD GET
   * 接收参数 无
   * */
  getPayResult: function(param) {
    return request.get(`/api/pay/result/${param.token}`);
  },

  getCourseCount: function(param) {
    return request.post(`/api/course/count`, param);
  },

  /**
   * 支付报名费
   * URL (/api/user/paysingup) METHOD GET
   * 接收参数 无
   * */
  paySingup: function(param) {
    return request.get(`/api/user/paysingup`, param);
  },

  /**
   * 直播列表
   * URL (/api/userlive/list) METHOD POST
   * 接收参数 无
   * */
  getLiveList: function(param) {
    return request.post(`/api/userlive/list`, param);
  },

  /**
   * 报名费用是否支付
   * URL (/api/user/getpayinfo) METHOD GET
   * 接收参数 无
   * */
  getSingupPayInfo: function(param) {
    return request.get(`/api/user/getpayinfo`, param);
  },

  getUserSign: function(param) {
    return request.get(`/api/usersign`, param);
  },
  saveUserSign: function(param) {
    return request.post(`/api/usersign`, param);
  },
  submitUserSign: function(param) {
    return request.post(`/api/usersign/submit`, param);
  },
  getUserSignPayinfo: function(param) {
    return request.get(`/api/usersign/getpayinfo`, param);
  },
  toPaySingUp: function(param) {
    return request.get(`/api/usersign/paysingup`, param);
  },

  /*H5支付*/

  getOrder(param) {
    return request.post(`/api/pay/get-order`, param);
  },

  payOrder(param) {
    return request.post(`/api/pay/order-pay`, param);
  },

  getUnifiedOrder(param) {
    return request.post(`/api/pay/getUnifiedOrder`, param);
  },

  // getweixinAuth(param) {
  //   return request.get(`${weixinAuth}/api/weixinauth`, param);
  // }
  getWeiXinConfig(param) {
    return request.post(`/api/getWeiXinConfig`, param);
  }
};

export function userLogin(params) {
  return request.post(`/api/user/login`, params);
}

export function userReset(params) {
  return request.post(`/api/user/reset`, params);
}

export function userRegister(params) {
  return request.post(`/api/user/reg`, params);
}

export function orderPay(params) {
  return request.post(`/api/pay/order-pay`, params);
}

export function getOrder(params) {
  return request.post(`/api/pay/get-order`, params);
}

/**
 * 取得登陆验证码
 * URL (/api/phone-captcha) METHOD POST
 * @param phone
 * */
export function getPhoneCaptcha(param) {
  return request.post("/api/phone-captcha", param);
}

/**
 * 产品列表
 * URL (/api/product/list) METHOD POST
 * 接收参数
 * p 分页 必传 offset 每页显示的数量 默认为10
 * */
export function getProductList(param) {
  return request.post("/api/product/list", param);
}

export function getOrderList(param) {
  return request.post(`/api/user/order-list`, param);
}

export function orderPaybyHaimi(data) {
  return request({
    url: `/api/pay/haimi-pay`,
    data,
    method: "post"
  });
}

export function getPayResult(param) {
  return request.get(`/api/pay/result/${param.token}`);
}

export default api;

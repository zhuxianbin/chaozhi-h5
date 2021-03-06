import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import api from "../utils/api";
import storage from "../utils/storage";
import tools from "../utils/tools";

const Login = "Login";
const getPhoneCaptcha = "getPhoneCaptcha";
const getCategory = "getCategory";
const getProductList = "getProductList";
const getPayInfo = "getPayInfo";
const refreshPrice = "refreshPrice";
const getPayResult = "getPayResult";
const pay = "pay";
const umsH5 = "umsH5";

const getCourseList = "getCourseList";
const getCourseInfo = "getCourseInfo";
const getCoursePlan = "getCoursePlan";

const getUserInfo = "getUserInfo";

const submitUserInfo = "submitUserInfo";
const addUserInfo = "addUserInfo";

const fileUpload = "fileUpload";

const getCourseCount = "getCourseCount";
const getLiveList = "getLiveList";

const paySingup = "paySingup";
const getSingupPayInfo = "getSingupPayInfo";
const getUserSign = "getUserSign";
const getUserSignPayinfo = "getUserSignPayinfo";

const getUnifiedOrder = "getUnifiedOrder";

export default new Vuex.Store({
  state: {
    category: [],
    userInfo: {
      user: {
        avatar_file: ""
      }
    },

    courseCount: 0
  },
  getters: {
    // theme: state => state.theme,
    // menu: state => state.menu,
  },
  actions: {
    [Login]({ commit }, params) {
      return api.doLogin(params);
    },
    [getPhoneCaptcha]({ commit }, params) {
      return api.getPhoneCaptcha(params);
    },
    [getCategory]({ commit }, params) {
      let ret = api.getCategory(params);
      ret.then(res => {
        commit(getCategory, res);
      });
      return ret;
    },
    [getProductList]({ commit }, params) {
      return api.getProductList(params);
    },
    [getPayInfo]({ commit }, params) {
      return api.getPayInfo(params);
    },
    [refreshPrice]({ commit }, params) {
      return api.refreshPrice(params);
    },
    [pay]({ commit }, params) {
      return api.pay(params);
    },
    [umsH5]({ commit }, params) {
      return api.umsH5(params);
    },
    [getCourseList]({ commit }, params) {
      return api.getCourseList(params);
    },
    [getCourseInfo]({ commit }, params) {
      return api.getCourseInfo(params);
    },
    [getCoursePlan]({ commit }, params) {
      return api.getCoursePlan(params);
    },
    [getUserInfo]({ commit }, params) {
      let ret = api.getUserInfo(params);
      ret.then(res => {
        commit(getUserInfo, res);
      });
      return ret;
    },
    [submitUserInfo]({ commit }, params) {
      return api.submitUserSign(params);
    },
    [addUserInfo]({ commit }, params) {
      return api.saveUserSign(params);
    },
    [fileUpload]({ commit }, params) {
      return api.fileUpload(params);
    },
    [getCourseCount]({ commit }, params) {
      api.getCourseCount(params).then(res => {
        commit(getCourseCount, res);
      });
    },
    [getLiveList]({ commit }, params) {
      return api.getLiveList(params);
    },
    [paySingup]({ commit }, params) {
      return api.toPaySingUp(params);
    },
    [getSingupPayInfo]({ commit }, params) {
      return api.getUserSignPayinfo(params);
    },
    [getUserSign]({ commit }, params) {
      return api.getUserSign(params);
    },
    [getPayResult]({ commit }, params) {
      return api.getPayResult(params);
    },
    [getUnifiedOrder]({ commit }, params) {
      return api.getUnifiedOrder(params);
    },
  },
  mutations: {
    [getCategory](state, { data, code }) {
      state.category = data;
    },
    [getUserInfo](state, res) {
      state.userInfo = res;
    },
    [getCourseCount](state, res) {
      state.courseCount = res.count;
    },
  }
});

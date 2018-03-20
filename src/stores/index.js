import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import api from "../utils/api";

const Login = "Login";
const getPhoneCaptcha = "getPhoneCaptcha";
const getCategory = "getCategory";
const getProductList = "getProductList";
const getPayInfo = "getPayInfo";
const refreshPrice = "refreshPrice";
const pay = "pay";
const umsH5 = "umsH5";

const getCourseList = "getCourseList";
const getCourseInfo = "getCourseInfo";
const getCoursePlan = "getCoursePlan";

const getUserInfo = "getUserInfo";

export default new Vuex.Store({
  state: {
    category: [],
    userInfo: {
      user: {}
    }
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
    }
  },
  mutations: {
    [getCategory](state, { data, code }) {
      state.category = data;
    },
    [getUserInfo](state, res) {
      state.userInfo = res;
    }
  }
});

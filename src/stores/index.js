import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import api from "../utils/api";

const Login = "Login";
const getPhoneCaptcha = "getPhoneCaptcha";
const getCategory = "getCategory";

export default new Vuex.Store({
  state: {
    category: []
    // menu: [],
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
        commit(getCategory,res);
      });
      return ret;
    }
  },
  mutations: {
    [getCategory](state, { data, code }) {
      state.category = data;
    }
    // [CHANGE_MENU](state, val) {
    //     state.menu = val;
    // }
  }
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    userRegister: null,
    localization: null,
    token: null,
    pago: false,
  }),
  mutations: {
    setUserRegister(state, data) {
      state.userRegister = data;
    },
    setUserLocalization(state, data) {
      state.userRegister = data;
    },
    setUserPay(state, data) {
      state.pago = data;
    },
  },
  actions: {},
  modules: {},
});

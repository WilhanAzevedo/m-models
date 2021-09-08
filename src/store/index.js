import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    userRegister: null,
    localization: null,
  }),
  mutations: {
    setUserRegister(state, data) {
      state.userRegister = data;
    },
    setUserLocalization(state, data) {
      state.userRegister = data;
    },
  },
  actions: {},
  modules: {},
});

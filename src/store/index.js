import Vue from 'vue';
import Vuex from 'vuex';
import DataService from '@/services/DataService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isExpanded: false,
    meta: {},
    loadingTimeout: null,
  },
  mutations: {
    SET_IS_EXPANDED(state, isExpanded) {
      state.isExpanded = isExpanded;
    },
    SET_PIC_METADATA(state, meta) {
      state.meta = meta;
    },
    CLEAR_LOADING_TIMEOUT(state) {
      clearTimeout(state.loadingTimeout);
      state.loadingTimeout = null;
    },
    SET_LOADING_TIMEOUT(state, timeout) {
      state.loadingTimeout = timeout;
      console.log(state.loadingTimeout);
    },
  },
  actions: {
    toggleCanvas({ commit }, isExpanded) {
      commit('SET_IS_EXPANDED', isExpanded);
    },
    async fetchPicMeta({ commit }, date) {
      const data = await DataService.getPicData(date);
      commit('SET_PIC_METADATA', data);
    },
    clearLoadingTimeout({ commit }) {
      commit('CLEAR_LOADING_TIMEOUT');
    },
    setLoadingTimeout({ commit }, timeout) {
      commit('SET_LOADING_TIMEOUT', timeout);
    },
  },
  modules: {
  },
});

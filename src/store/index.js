import Vue from 'vue';
import Vuex from 'vuex';
import DataService from '@/services/DataService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isExpanded: false,
    meta: {},
  },
  mutations: {
    SET_IS_EXPANDED(state, isExpanded) {
      state.isExpanded = isExpanded;
    },
    SET_PIC_METADATA(state, meta) {
      state.meta = meta;
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
  },
  modules: {
  },
});

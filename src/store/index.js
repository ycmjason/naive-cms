import Vue from 'vue';
import Vuex from 'vuex';

import pagesService from '@/services/pages.service';

Vue.use(Vuex);

const state = {
  pages: [],
  projects: [],
};

const mutations = {
  INIT_PAGES: (state, pages) => state.pages = pages,
};

const actions = {
  async fetchPages({ commit }){
    commit('INIT_PAGES', await pagesService.findAll());
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});

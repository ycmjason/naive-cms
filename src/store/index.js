import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  nav: {
    'Naive': '#!',
    'Home': '#home',
  },
  projects: []
};

const mutations = {
  INIT_PROJECTS: (state, projects) => state.projects = projects,
};

const actions = {
  async fetchProjects({ commit }){
    commit('INIT_PROJECTS', await projectService.findAll());
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});

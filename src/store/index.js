import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answers: [], // Store user answers here
  },
  mutations: {
    addAnswer(state, answer) {
      state.answers.push(answer);
    },
    removeLastAnswer(state) {
      state.answers.pop();
    },
    clearAnswers(state) {
      state.answers = [];
    },
  },
  actions: {
    saveAnswer({ commit }, answer) {
      commit('addAnswer', answer);
    },
    goBack({ commit }) {
      commit('removeLastAnswer');
    },
    clearAnswers({ commit }) {
      commit('clearAnswers');
    },
  },
  plugins: [
    createPersistedState({
      paths: ['answers'], // Specify which state properties to persist
    }),
  ],
});
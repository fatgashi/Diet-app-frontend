import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answers: [], // Store user answers here
    currentLang: localStorage.getItem('currentLang') || 'en',
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
    SET_LANGUAGE(state, newLang) {
      state.currentLang = newLang;
      localStorage.setItem('currentLang', newLang); // Save to localStorage
    }
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
    setLanguage({ commit }, newLang) {
      commit('SET_LANGUAGE', newLang);
    },
  },
  getters: {
    currentLang: state => state.currentLang
  },
  plugins: [
    createPersistedState({
      paths: ['answers'], // Specify which state properties to persist
    }),
  ],
});
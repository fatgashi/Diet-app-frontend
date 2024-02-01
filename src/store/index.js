import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answers: [], // Store user answers here
    bmi: 0,
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
    },
    setBMI(state, bmiValue){
      state.bmi = bmiValue
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
    setBMI({ commit }, newValue){
      commit('setBMI', newValue)
    }
  },
  getters: {
    currentLang: state => state.currentLang
  },
  plugins: [
    createPersistedState({
      paths: ['answers', 'bmi', 'currentLang'], // Specify which state properties to persist
    }),
  ],
});
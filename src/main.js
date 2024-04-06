import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';
import en from './translate/en';
import de from './translate/de';
import instance from './methods/axios.js';


Vue.use(VueI18n);

const messages = {
  en, //English translate
  de // German translate
};

Vue.prototype.$axios = instance;
Vue.config.productionTip = false

const i18n = new VueI18n({
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

new Vue({
  i18n,
  router,
  store,
  beforeCreate() {
    // Directly set i18n locale to the value from Vuex state
    this.$i18n.locale = this.$store.state.currentLang;
  },
  render: h => h(App),
}).$mount('#app')

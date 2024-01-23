import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';
import en from './translate/en';
import de from './translate/de';

Vue.use(VueI18n);

const messages = {
  en, //English translate
  de // German translate
};

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en', // set the default locale to English
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';
import en from './translate/en';
import de from './translate/de';
import instance from './methods/axios.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { getToken } from './config/localStorage.js';
import { getTokenExpiration, logout } from './config/userLogic.js';
import VueApexCharts from 'vue-apexcharts'


Vue.use(VueI18n);
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

const messages = {
  en, //English translate
  de // German translate
};

Vue.prototype.$setupSessionTimeout = function(){
    const token = getToken();
    if (token) {
        const expiresAt = getTokenExpiration(token);
        const timeout = expiresAt - Date.now();

        if (timeout > 0) {
            setTimeout(() => {
                logout();
            }, timeout);
        } else {
            logout();
        }
    }
};

Vue.use(Toast);
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
  created(){
    this.$setupSessionTimeout();
  },
  render: h => h(App),
}).$mount('#app')

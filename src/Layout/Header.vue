<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1 name" to="/home" id="logo">nutriplanwellness</router-link>
      </nav>
      <div class="navbar-nav">
              <!-- Example split danger button -->
              <div class="btn-group me-3" id="butonatlogin">
                <button
                class="btn"
                type="button"
                id="login"
                v-if="loggedIn"
                @click="signOut"
              >
                <i class="bi bi-box-arrow-right text-white"></i>
              </button>
              <button
                class="btn"
                type="button"
                id="login"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalToggle"
                v-else
              >
                <i class="bi bi-people text-white"></i>
              </button>
              <Login v-on:login= "isLoggedIn"/>
                <button
                  type="button"
                  class="btn dropdown-toggle dropdown-toggle-split"
                  id="bsep"
                  v-if="loggedIn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" id="menu-fix">
                  <li><router-link class="dropdown-item" v-if="user.role === 'admin'" id="dashboardlink" to="/dashboard">Dashboard</router-link></li>
                  <li><router-link class="dropdown-item" id="dashboardlink" to="/profile">Profile</router-link></li>
                </ul>
              </div>
              
            </div>
      <!-- <div class="dropdown me-3 choose-language">
        <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <span :class="{'fi fi-us': currentLang === 'en', 'fi fi-de': currentLang === 'de'}"></span>
        </div>
        <ul class="dropdown-menu">
          <li><div class="dropdown-item language" @click="setLanguage('en')"><span class="fi fi-us"></span> English</div></li>
          <li><div class="dropdown-item language" @click="setLanguage('de')"><span class="fi fi-de"></span> Deutsch</div></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
  import { isTokenAvaible, removeToken } from '../config/localStorage';
  import { getCurrentUser } from '../config/userLogic';
  import Login from "../components/Login.vue"



import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    Login
  },

  data() {
    return {
      loggedIn: false,
      user: [],
      error: "",

    };
  },
  methods: {
    ...mapActions(['setLanguage']),

    isLoggedIn() {
      this.loggedIn = isTokenAvaible();
    },

    async role(){
      this.user = await getCurrentUser();
    },

    async signOut() {
        try {
          this.$router.replace({path: '/home'});
          removeToken();
          this.loggedIn = false;
          
        } catch (err) {
          this.error = err.mesagge;
        }
    },
  },
  computed: {
    ...mapGetters(['currentLang']),

    checkLog(){
        return this.$store.state.logged
      },
  },
  watch: {
    currentLang(newLang) {
      this.$i18n.locale = newLang; // Update vue-i18n's locale reactively
    },
    checkLog(newValue){
        this.loggedIn = newValue;
        if(newValue === true){
          this.role();
        }
      }
  },
  mounted(){
    this.$i18n.locale = this.currentLang;
    this.isLoggedIn();
    if(this.loggedIn){
      this.role();
    }
  },
  
}
</script>

<style>

@media only screen and (max-width: 400px) {
  .name {
    display: none;
  }
}

#bsep{
  color: white;
  outline: none !important;
  box-shadow: none;
  -webkit-box-shadow: none;

}
.navbar {
    height: 7vh;
    font-family: "Poppins", sans-serif;
}

#logo {
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #004080;
}
#butonatlogin{
  padding: 0px;
  width:100px;
  margin-top: 5px;
  align-self:center;
  background-color: #004080;
}
.language {
  cursor: pointer;
}

.choose-language {
  cursor: pointer;
}

</style>
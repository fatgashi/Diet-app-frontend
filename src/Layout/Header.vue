<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1" to="/home" id="logo">nutriplanwellness</router-link>
      </nav>
      <div class="dropdown me-3 choose-language">
        <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <span :class="{'fi fi-us': currentLang === 'en', 'fi fi-de': currentLang === 'de'}"></span>
        </div>
        <ul class="dropdown-menu">
          <li><div class="dropdown-item language" @click="setLanguage('en')"><span class="fi fi-us"></span> English</div></li>
          <li><div class="dropdown-item language" @click="setLanguage('de')"><span class="fi fi-de"></span> Deutsch</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['setLanguage']),
  },
  computed: {
    ...mapGetters(['currentLang']),
  },
  watch: {
    currentLang(newLang) {
      this.$i18n.locale = newLang; // Update vue-i18n's locale reactively
    }
  },
  mounted(){
    this.$i18n.locale = this.currentLang;
  }
}
</script>

<style>

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

.language {
  cursor: pointer;
}

.choose-language {
  cursor: pointer;
}

</style>
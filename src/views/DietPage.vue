<template>
  <div class="main-container">
    <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1 name" to="" id="logo">nutriplanwellness</router-link>
    </nav>
    <div class="image-div mt-2">
      <div class="d-flex flex-column justify-content-center align-items-center h-100 text-white">
        <h1 class="text-center img-text">The Diet Type Chosen For You:</h1>
        <h1 class="text-center img-text">Dash Diet</h1>
      </div>
    </div>
    <div class="container">
      <div class="row-fluid gx-5">
        <div v-if="dietType && dietType.length > 0" class="row row-cols-1 row-cols-md-2 mt-3 mb-3 me-2 ms-2 d-flex justify-content-center">
          <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-center">
              <div class="card" id="card-s" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>
                  <p class="card-text">{{ dietType[0].description }}</p>
                </div>
              </div>
            </div>
            <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-center">
              <div class="card" id="card-s" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Benefits:</h5>
                  <p v-for="benefits in dietType[0].benefits" :key="benefits" class="card-text">✅ {{ benefits }}</p>
                </div>
              </div>
            </div>
            <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-center">
              <div class="card" id="card-s" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Ideal For:</h5>
                  <p v-for="ideal in dietType[0].idealFor" :key="ideal" class="card-text">👌 {{ ideal }}</p>
                </div>
              </div>
            </div>
            <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-center">
              <div class="card" id="card-s" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Restrictions:</h5>
                  <p v-for="restrictions in dietType[0].restrictions" :key="restrictions" class="card-text">❌ {{ restrictions }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <h1>Meal Plan For One Week!</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      photo: "",
      dietType: []
    }
  },
  async mounted(){
    document.body.style.overflow = 'auto';
    await this.$axios.get('/dietType/DASH Diet').then(res => {
      this.dietType =  res.data
      this.photo = require('../assets/' + res.data[0].photo);
      this.$el.style.setProperty('--background-image', `url(${this.photo})`);
    });
  },
}
</script>

<style scoped>
@media only screen and (max-width: 301px) {
  .name {
    display: none;
  }
  .navbar {
    display: flex;
    justify-content: center !important;
    align-items: center !important;
  }
}

.image-div {
  position: relative;
  width: 100%;
  height: 60vh;
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#card-s{
  border-right:2px solid whitesmoke;
  border-top:2px solid whitesmoke;
  border-bottom:2px solid whitesmoke;
  border-left:2px solid whitesmoke;
}

#rfluid {
  margin: 0 auto;
  max-width: 1200px;
  display: grid;
  margin-top: 10px;
  border-radius:12px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
}

.img-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.image-div::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;
}

</style>
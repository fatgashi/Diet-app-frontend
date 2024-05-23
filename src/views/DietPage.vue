<template>
  <div class="main-container">
    <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1 name" to="" id="logo">nutriplanwellness</router-link>
    </nav>
    <div v-if="prediction">
      <div class="image-div mt-2">
        <div class="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 class="text-center img-text text-white">The Diet Type Chosen For You:</h1>
          <h1 class="text-center img-text text-white">{{ dietType.type }}</h1>
          <h6 class="text-white img-text">Save your personalized diet plan and track your progress.</h6>
          <button
            class="btn btn-dark img-text d-flex justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalToggle3"
          >
          Register Now
          </button>
          <Register :dietType="dietType.type" />
        </div>
      </div>
      <div class="container">
        <div class="row-fluid gx-5">
          <div  class="row row-cols-1 row-cols-md-2 mt-3 mb-3 me-2 ms-2 d-flex justify-content-start">
            <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-start">
              <div class="card" id="card-s">
                <div class="card-body">
                  <h5 class="card-title">Description</h5>
                  <p class="card-text">{{ dietType.description }}</p>
                </div>
              </div>
            </div>
              <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-start">
                <div class="card" id="card-s">
                  <div class="card-body">
                    <h5 class="card-title">Benefits:</h5>
                    <div v-for="benefits in dietType.benefits" :key="benefits" class="card-text d-flex justify-content-start">
                      <span>✅</span>
                      <div class="ms-md-2">
                        <p>{{ benefits }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-start">
                <div class="card" id="card-s">
                  <div class="card-body">
                    <h5 class="card-title">Ideal For:</h5>
                    <div v-for="ideal in dietType.idealFor" :key="ideal" class="card-text d-flex justify-content-start">
                      <span>👌</span>
                      <div class="ms-md-2">
                        <p>{{ ideal }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-start">
                <div class="card" id="card-s">
                  <div class="card-body">
                    <h5 class="card-title">Restrictions:</h5>
                    <div v-for="restrictions in dietType.restrictions" :key="restrictions" class="card-text d-flex justify-content-start">
                      <span>❌</span>
                      <div class="ms-md-2">
                        <p>{{ restrictions }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5 mb-4">
            <h1>Meal Plan For One Week!</h1>
          </div>
          <div class="row-fluid gx-5">
            <div class="row row-cols-1 row-cols-md-2 mt-3 mb-3 me-2 ms-2 d-flex justify-content-start">
              <div v-for="meals in mealPlan.days" :key="meals._id" class="row m-0 mt-lg-2 mt-md-0 mb-4 d-flex justify-content-center align-items-start">
                <div class="card shadow" id="card-s" >
                  <div class="card-body">
                    <h5 class="card-title">{{meals.day}}</h5>
                    <div v-for="meal in meals.meals" :key="meal._id">
                      <h5 class="mt-3">{{ meal.name }}</h5>
                      <h6>Description: </h6>
                      <p>{{ meal.description }}.</p>
                      <h6>Preparation: </h6>
                      <p>{{ meal.preparation }}</p>
                      <h6>Ingredients: </h6>
                      <ol class="list-group list-group-numbered">
                        <li v-for="ingredients in meal.ingredients" :key="ingredients" class="list-group-item">{{ ingredients }}</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="text-center" v-else>
      <h1>Something went bad!</h1>
    </div>
    </div>
</template>

<script>
import Register from '../components/RegisterFromPrediction.vue';
export default {
  components: {
    Register
  },
  data(){
    return {
      photo: "",
      dietType: [],
      prediction: "",
      mealPlan: [],
      answers: [],
    }
  },
  methods: {
  },
  async mounted(){
    this.prediction = this.$store.state.dietType;
    document.body.style.overflow = 'auto';
    await this.$axios.get(`/dietType/${this.prediction.predicted_diet_type}`).then(res => {
      this.dietType =  res.data[0]
      this.photo = require('../assets/' + res.data[0].photo);
      this.$el.style.setProperty('--background-image', `url(${this.photo})`);
    });

    await this.$axios.get(`/mealPlan/${this.dietType._id}`).then(res => {
      this.mealPlan = res.data[0]
    })
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
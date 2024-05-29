<template>
    <div class="main-container">
        <div v-if="prediction">
            <div class="image-div mt-2">
                <div class="d-flex flex-column justify-content-center align-items-center h-100">
                    <h1 class="text-center img-text text-white">The Diet Type Chosen For You:</h1>
                    <h1 class="text-center img-text text-white">{{ dietType.type }}</h1>
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
                    <div v-for="(meals, index) in mealPlan.days" :key="meals._id" class="row m-0 mt-lg-2 mt-md-0 mb-4 d-flex justify-content-center align-items-start">
                        <div class="card shadow" id="card-s" >
                            <div class="card-body">
                                <h5 class="card-title fw-bolder">{{ index + 1 }}. {{meals.day}}</h5>
                                <div v-for="meal in meals.meals" :key="meal._id">
                                    <h5 class="mt-3 fw-bold">{{ meal.name }}</h5>
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
        <div v-else class="mt-4">
            <div class="d-flex flex-column">
                <div class="d-flex justify-content-end align-items-center">
                    <router-link to="/client-dashboard/recomplete-questionnaire" class="btn btn-success">Complete Questionnaire</router-link>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-3">
                    <h1 class="fw-bolder text-center">You haven't completed a questionnaire yet!</h1>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script>
import configuration from '../config/config';
  export default {
    data(){
      return {
        photo: "",
        dietType: [],
        prediction: "",
        mealPlan: [],
        error: '',
      }
    },
    methods: {
    },

    async created(){
        this.prediction = await this.$axios.get('/diet-assessment', configuration()).then(res => {
            return res.data[0]
        }).catch(err => {
            this.error = err.response.data.message
        });
        if(this.prediction){
            await this.$axios.get(`/dietType/${this.prediction.dietType}`).then(res => {
                this.dietType =  res.data[0]
                this.photo = require('../assets/' + res.data[0].photo);
                this.$el.style.setProperty('--background-image', `url(${this.photo})`);
            }).catch(err => {
                this.error = err.response.data.message
            });
      
            await this.$axios.get(`/mealPlan/${this.dietType._id}`).then(res => {
                this.mealPlan = res.data[0]
            }).catch(err => {
                this.error = err.response.data.message
            });
        }
    }
  }
</script>
  
<style scoped>
  
.image-div {
    position: relative;
    width: 100%;
    height: 60vh;
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
  
#card-s {
    color: #333; /* Dark grey text for readability */
    border-left: 5px solid #4CAF50; /* Green border on the left for a pop of color */
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#card-s h5 {
    color: #004080; /* Dark green for headings */
    margin-bottom: 5px;
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
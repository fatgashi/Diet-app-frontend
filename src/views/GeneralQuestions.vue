<template>
    <div class="main-container">
      <div class="d-flex justify-content-between align-items-center">
        <div v-if="currentQuestionIndex < 1">
            <router-link to="/home" class="ms-3" id="logo"><i class="bi bi-arrow-left fs-4"></i></router-link>
        </div>
        <div v-else>
            <button id="arrow-button" class="ms-3 border-0" @click="goBack"><i class="bi bi-arrow-left fs-4"></i></button>
        </div>
      </div>
      <div class="container">
          <div class="d-flex justify-content-center align-items-start" id="rfluid">
              <div class="d-flex flex-column justify-content-center w-100">
                  <h1 class="text-center mb-2">{{ currentQuestion.text }}</h1>
                  <p class="text-center" v-if="currentQuestion.extraText">{{ currentQuestion.extraText }}</p>
                  <div v-for="(choice, index) in currentQuestion.choices" @click="selectChoice(choice.answer)" :key="index">
                      <div class="card mb-3">
                          <div class="card-body" :class="{ 'selected': isSelected(choice.answer) }">
                              <input 
                                  type="radio" 
                                  :id="'choice' + index" 
                                  :value="choice.answer"
                                  v-model="selectedChoice"
                                  style="display: none;"
                              />
                            
                              <label id="label-answers" class="d-flex justify-content-between align-items-center" :for="'choice' + index" @click="selectChoice(choice.answer)">
                                  <div>
                                      {{ choice.answer }}
                                  </div>
                                  <div v-if="choice.emoji" style="font-size: 30px;">
                                      {{ choice.emoji }}
                                  </div>
                                  <div v-else>
                                      <img :src="choice.image" />
                                  </div>
                              </label>
                          </div>
                      </div>
                  </div>
                  <button @click="nextQuestion" class="next-button">Next Question</button>
              </div>
          </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import questions from '../data/generalQuestions.js';
  export default {
      data(){
          return {
              currentQuestionIndex: 1,
              selectedChoice: null,
              questionsNumber: 0,
          }
      },
      computed: {
          currentQuestion() {
              return questions[this.currentQuestionIndex];
          },
      },
      watch: {
          currentQuestionIndex(newIndex){
              if(newIndex === 0){
                  this.$router.push('/home');
              }
          }
      },
      methods: {
          nextQuestion() {
              if (this.selectedChoice !== null) {
                  // Save the user's choice if needed
                  this.$store.dispatch('saveAnswer', {
                      question: this.currentQuestion.text,
                      answer: this.selectedChoice,
                  });
                  
                this.$router.push('/questionnaire')
                  
              } else {
                  alert('Please select an answer before moving on.');
              }
          },
          goBack() {
              this.$store.dispatch('goBack');
              this.currentQuestionIndex--;
          },
          selectChoice(choice) {
              if (this.selectedChoice === choice) {
                  // If the same choice is clicked again, deselect it
                  this.selectedChoice = null;
              } else {
                  // Otherwise, select the clicked choice
                  this.selectedChoice = choice;
              }
          },
          isSelected(choice) {
              // Check if the current choice is selected
              return this.selectedChoice === choice;
          },
      },
      mounted(){
          this.questionsNumber = questions.length;
      }
  }
  </script>
  
  <style scoped>
  .selected {
    background-color: #004080 !important; /* Change the background color to indicate selection */
    color: white;
  }
  
  #label-answers{
      cursor: pointer;
  }
  
  #rfluid {
    max-width: 1200px;
    display: grid;
    height: 91vh;
    margin-top: 10vh;
  
  }
  
  .progress-bar{
      background-color: #004080 !important;
  }
  
  #progess-bar1{
      height: 2vh;
  }
  
  #arrow-button {
      background-color: white;
  }
  
  #logo {
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      color: black;
  }
  
  .card-body {
      cursor: pointer;
      background-color: rgb(242, 239, 238);
  }
  
  .next-button {
      background-color: #004080;
      border: none;
      border-radius: 1%;
      height: 6vh;
      color: white;
  }
  </style>
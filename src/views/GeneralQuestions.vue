<template>
    <div class="main-container">
        <div class="d-flex justify-content-between align-items-center mt-3">
            <div>
                <button id="arrow-button" class="ms-3 border-0" @click="goBack"><i class="bi bi-arrow-left fs-4"></i></button>
            </div>
            <div>
                <img src="../assets/main-logo.png" width="50" height="40" />
                <span class="name fw-bold text-muted">nutriplanwellness</span>
            </div>
            <span class="fw-bold text-muted me-3">{{ currentQuestionIndex }} / {{ 30 }}</span>
        </div>
        <div class="progress mx-4 mt-2" id="progress-bar1">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="progressValue" aria-valuemin="0" aria-valuemax="100" :style="{width: progressStyle}"></div>
        </div>
      <div class="container">
          <div class="d-flex justify-content-center align-items-start" id="rfluid">
              <div class="d-flex flex-column justify-content-center w-100">
                  <h1 class="text-center mb-2 fw-bolder">{{ currentQuestion.text[currentLang] }}</h1>
                  <p class="text-center" v-if="currentQuestion.extraText">{{ currentQuestion.extraText[currentLang] }}</p>
                  <div v-for="(choice, index) in currentQuestion.choices" @click.self="selectChoice(choice.answer)" :key="index">
                      <div class="card mb-3">
                          <div class="card-body">
                              <input 
                                  type="radio" 
                                  :id="'choice' + index" 
                                  :value="choice.answer"
                                  v-model="selectedChoice"
                                  style="display: none;"
                              />
                            
                              <label id="label-answers" class="d-flex justify-content-between align-items-center" :for="'choice' + index" @click="selectChoice(choice.answer)">
                                  <div class="fw-bold">
                                      {{ choice.answer[currentLang] }}
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
            currentLang(){
                return this.$store.state.currentLang;
            },
            progressValue() {
                const totalQuestions = 33 + 1;
                const answeredQuestions = this.$store.state.answers.length;
                const progress = (answeredQuestions / totalQuestions) * 100;

                return Math.round(progress); 
            },
            progressStyle() {
                return `${this.progressValue}%`;
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
                    this.saveAnswer(this.selectedChoice);
                    
                    this.$router.push('/questionnaire')
                    
                } else {
                    alert('Please select an answer before moving on.');
                }
            },
            goBack() {
                this.$store.dispatch('goBack');
                this.currentQuestionIndex--;
            },
            saveAnswer(answer) {
                // Save the user's choice or height input
                this.$store.dispatch('saveAnswer', {
                question: this.currentQuestion.text,
                answer: answer,
                });
            },
            moveToNextQuestion() {
                // Check if there are more questions
                if (this.currentQuestionIndex < this.genderQuestions.length - 1) {
                    this.currentQuestionIndex++;
                    this.selectedChoice = []; // Reset selected choice for the next question
                } else {
                    // Handle end of questionnaire
                    this.handleEndOfQuestionnaire();
                }
            },
            selectChoice(choice) {
                this.saveAnswer(choice);
                this.$router.push('/questionnaire')
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
    max-width: 1000px;
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

    .progress-bar{
        background-color: #004080 !important;
        }

    .progress{
        height: 1vh;
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
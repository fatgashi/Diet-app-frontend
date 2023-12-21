<template>
  <div class="main-container">
    <div class="d-flex justify-content-between align-items-center mt-3">
        <div v-if="currentQuestionIndex < 1">
            <router-link to="/home" class="ms-3" id="logo"><i class="bi bi-arrow-left fs-4"></i></router-link>
        </div>
        <div v-else>
            <button id="arrow-button" class="ms-3 border-0" @click="goBack"><i class="bi bi-arrow-left fs-4"></i></button>
        </div>
        <p class="me-3">{{ currentQuestionIndex + 1 }} / {{ questionsNumber }}</p>
    </div>
    <div class="progress mx-4 mt-1" id="progress-bar1">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="progressValue" aria-valuemin="0" aria-valuemax="100" :style="{width: progressStyle}"></div>
    </div>
    <div class="d-flex justify-content-center align-items-start" id="rfluid">
        <div class="d-flex flex-column justify-content-center w-100">
            <h1 class="text-center mb-5">{{ currentQuestion.text }}</h1>
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
                      
                        <label v-if="choice.image" id="label-answers" class="d-flex justify-content-between align-items-center" :for="'choice' + index" @click="selectChoice(choice.answer)">
                            {{ choice.answer }}
                            <img :src="choice.image"/>
                        </label>
                    </div>
                </div>
            </div>
            <button @click="nextQuestion" class="next-button">Next Question</button>
        </div>
    </div>
  </div>
</template>

<script>
import questions from '../data/questions.js';
export default {
    data(){
        return {
            currentQuestionIndex: 0,
            selectedChoice: null,
            questionsNumber: 0,
        }
    },
    computed: {
        currentQuestion() {
            return questions[this.currentQuestionIndex];
        },
        progressValue() {
            const totalQuestions = questions.length;
            const answeredQuestions = this.$store.state.answers.length;
            const progress = (answeredQuestions / totalQuestions) * 100;

            return Math.round(progress); 
        },
        progressStyle() {
            return `${this.progressValue}%`;
        },
    },
    methods: {
        nextQuestion() {
            if (this.selectedChoice !== null) {
                // Save the user's choice if needed
                this.$store.dispatch('saveAnswer', {
                    question: this.currentQuestion.text,
                    answer: this.selectedChoice,
                });
                
                if (this.currentQuestionIndex < questions.length - 1) {
                this.currentQuestionIndex++;
                this.selectedChoice = null; // Reset selected choice for the next question
                } else {
                // Handle end of questionnaire
                alert('End of questionnaire');
                }
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

        shouldAnswersBeClean() {
            const questionareStartedTime = localStorage.getItem('lastShownTimestamp');
            if (!questionareStartedTime) {
                this.updateLastShownTimestamp();
            }
    
            const currentTime = new Date().getTime();
            const timeDiff = currentTime - parseInt(questionareStartedTime, 10);
            const hoursElapsed = timeDiff / (1000 * 3600);
    
            return hoursElapsed >= 24;
        },

        updateLastShownTimestamp() {
            localStorage.setItem('questionareStartedTime', new Date().getTime().toString());
        },

        isSelected(choice) {
            // Check if the current choice is selected
            return this.selectedChoice === choice;
        },
    },
    mounted(){
        if(this.shouldAnswersBeClean()){
            this.$store.dispatch("clearAnswers");
        }
        this.updateLastShownTimestamp();
        if (this.$store.state.answers.length > 0) {
            this.currentQuestionIndex = this.$store.state.answers.length;
        }
        this.questionsNumber = questions.length;
        console.log(this.shouldAnswersBeClean());
    }
}
</script>

<style scoped>
.selected {
  background-color: #A8DF8E; /* Change the background color to indicate selection */
  color: white;
}
.main-container{
    background-color: #F3FDE8;
    
}

#label-answers{
    cursor: pointer;
}

#rfluid {
  max-width: 1200px;
  display: grid;
  height: 91vh;
  margin-top: 15vh;

}

.progress-bar{
    background-color: #C4C1A4 !important;
}

#progess-bar1{
    height: 2vh;
}

#arrow-button {
    background-color: #F3FDE8;
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
}

.next-button {
    background-color: #FFB534;
    border: none;
    border-radius: 1%;
    height: 6vh;
    color: white;
}
</style>
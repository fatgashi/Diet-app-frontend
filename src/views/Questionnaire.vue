<template>
  <div class="main-container">
    <div class="d-flex justify-content-between align-items-center">
        <div>
            <button id="arrow-button" class="ms-3 border-0" @click="goBack"><i class="bi bi-arrow-left fs-4"></i></button>
        </div>
        <p class="me-3">{{ currentQuestionIndex + 2 }} / {{ questionsNumber }}</p>
    </div>
    <div class="progress mx-4 mt-1" id="progress-bar1">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="progressValue" aria-valuemin="0" aria-valuemax="100" :style="{width: progressStyle}"></div>
    </div>
    <div class="container" v-if="currentQuestion">
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
                                <div v-if="choice.emoji" style="font-size: 20px;">
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
import maleQuestions from '../data/maleQuestions';
import femaleQuestions from '../data/femaleQuestions';
export default {
    data(){
        return {
            currentQuestionIndex: 0,
            selectedChoice: null,
            questionsNumber: 0,
            genderQuestions: [],
        }
    },
    computed: {
        currentQuestion() {
            return this.genderQuestions[this.currentQuestionIndex];
        },
        progressValue() {
            const totalQuestions = this.genderQuestions.length + 2;
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
            if(newIndex === -1){
                this.$router.push('/generalQuestions');
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
                
                if (this.currentQuestionIndex < this.genderQuestions.length - 1) {
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
        if(this.$store.state.answers.length < 2){
            this.$router.push('/home')
        }
        this.$store.state.answers[1].answer === 'Male' ? this.genderQuestions = maleQuestions : this.genderQuestions = femaleQuestions;
        if(this.shouldAnswersBeClean()){
            this.$store.dispatch("clearAnswers");
        }
        this.updateLastShownTimestamp();
        if (this.$store.state.answers.length > 0) {
            this.currentQuestionIndex = this.$store.state.answers.length - 2;
        }
        this.questionsNumber = this.genderQuestions.length + 2;
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
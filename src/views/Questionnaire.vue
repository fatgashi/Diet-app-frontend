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
                <h1 class="text-center mb-2 fw-bolder">{{ currentQuestion.text }}</h1>
                <p class="text-center" v-if="currentQuestion.extraText">{{ currentQuestion.extraText }}</p>
                <div class="questions scrollbar scrollbar-primary mt-2">
                    <div v-for="(choice, index) in currentQuestion.choices" @click="selectChoice(choice.answer)" :key="index">
                        <div class="card mb-3">
                            <div class="card-body pt-0 pb-0 ps-3 pe-3" :class="{ 'selected': isSelected(choice.answer) }">
                                <input 
                                    :type="currentQuestion.checkbox ? 'checkbox' : 'radio'" 
                                    :id="'choice' + index" 
                                    :value="choice.answer"
                                    v-model="selectedChoice"
                                    style="display: none;"
                                />
                              
                                <label id="label-answers" class="d-flex justify-content-between align-items-center" :for="'choice' + index" @click="selectChoice(choice.answer)">
                                    <div class="fw-bold">
                                        {{ choice.answer }}
                                    </div>
                                    <div v-if="choice.emoji" class="fs-2">
                                        {{ choice.emoji }}
                                    </div>
                                    <div v-else class="p-0 m-0">
                                        <img :src="getImagePath(choice.image)" width="90" height="100" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="nextQuestion" class="next-button fw-bold">Continue</button>
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
            selectedChoice: [],
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
            if (this.selectedChoice.length > 0) {
                // Save the user's choice if needed
                this.$store.dispatch('saveAnswer', {
                    question: this.currentQuestion.text,
                    answer: this.selectedChoice,
                });
                
                if (this.currentQuestionIndex < this.genderQuestions.length - 1) {
                this.currentQuestionIndex++;
                this.selectedChoice = []; // Reset selected choice for the next question
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
        getImagePath(image) {
            return require(`../assets/${image}`);
        },  
        selectChoice(choice) {
            // Check if this question has the condition applied
            if (this.currentQuestion.condition) {
                // If the first choice is the one being selected/deselected
                if (choice === this.currentQuestion.choices[0].answer) {
                        if (this.selectedChoice.includes(choice)) {
                        // If it's already selected, deselect it
                        this.selectedChoice = this.selectedChoice.filter(c => c !== choice);
                        } else {
                        // If it's not selected, make it the only selected choice
                        this.selectedChoice = [choice];
                        }
                } else {
                    // If any other choice is selected, remove the first choice if it's selected
                    this.selectedChoice = this.selectedChoice.filter(c => c !== this.currentQuestion.choices[0].answer);
                    // Then toggle the selected choice
                    const index = this.selectedChoice.indexOf(choice);
                    if (index === -1) {
                        this.selectedChoice.push(choice);
                    } else {
                        this.selectedChoice.splice(index, 1);
                    }
                }
            } else {
            // Logic for non-conditional questions
                if(this.currentQuestion.checkbox){
                    const index = this.selectedChoice.indexOf(choice);

                    if (index === -1) {
                        // If the choice is not already selected, add it to the array
                        this.selectedChoice.push(choice);
                    } 
                    else {
                        // If the choice is already selected, remove it from the array
                        this.selectedChoice.splice(index, 1);
                    }
                } else {
                    this.selectedChoice = this.selectedChoice === choice ? null : choice;
                }
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
            if (Array.isArray(this.selectedChoice)) {
                // If selectedChoice is an array, check if it includes the choice
                return this.selectedChoice.includes(choice);
            } else {
                // If selectedChoice is not an array (e.g., for radio buttons), 
                // check if it's equal to the choice
                return this.selectedChoice === choice;
            }
        }
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

.questions {
    max-height: 55vh;
    overflow: auto;
}

.scrollbar-primary::-webkit-scrollbar {
  width: 8px;
  background-color: #F5F5F5;
}

.scrollbar-primary::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #004080;
}

#label-answers{
    cursor: pointer;
}

#rfluid {
  max-width: 1000px;
  display: grid;
  height: 91vh;
  margin-top: 5vh;

}

.progress-bar{
    background-color: #004080 !important;
}

.progress{
    height: 1vh;
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
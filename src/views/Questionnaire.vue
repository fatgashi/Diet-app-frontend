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
            <span class="fw-bold text-muted me-3">{{ currentQuestionIndex + 2 }} / {{ questionsNumber }}</span>
    </div>
    <div class="progress mx-4 mt-2" id="progress-bar1">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="progressValue" aria-valuemin="0" aria-valuemax="100" :style="{width: progressStyle}"></div>
    </div>
    <div class="container" v-if="currentQuestion">
        <div class="d-flex justify-content-center align-items-start" id="rfluid">
            <div class="d-flex flex-column justify-content-center w-100">
                <h1 class="text-center mb-2 fw-bolder">{{ currentQuestion.text[currentLang] }}</h1>
                <p class="text-center" v-if="currentQuestion.extraText">{{ currentQuestion.extraText[currentLang] }}</p>
                <div v-if="currentQuestion.question === 'height'" class="d-flex flex-column justify-content-center align-items-center">

                    <div class="unit-toggle">
                        <button @click="useMetric = false" :class="{ active: !useMetric }" class="border-0">in</button>
                        <button @click="useMetric = true" :class="{ active: useMetric }" class="border-0">cm</button>
                    </div>

                    <div v-if="useMetric" class="mt-3">
                        <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userHeightCm"><span class="fw-bold">cm</span>
                        <p v-if="userHeightCm < 40 || userHeightCm > 250" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperText1') }}</p>
                        <div class="bmi-note mb-3">
                            <div class="p-3">
                                <span role="img" aria-label="Note">💡</span>
                                {{ $t('bmiNote.calculationNote') }}
                                <p>{{ $t('bmiNote.calculationDescription') }}</p>
                            </div>
                        </div>
                        <button :disabled="userHeightCm < 40 || userHeightCm > 250" @click="nextQuestionCm" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>
    
                    <!-- Inputs for imperial -->
                    <div v-else class="mt-3">
                        <input class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" type="number" v-model.number="userHeightFt" style="width: 45%;"><span class="fw-bold">ft</span>
                        <input class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" type="number" v-model.number="userHeightIn" style="width: 10vh;"><span class="fw-bold">in</span>
                        <p v-if="feetError" class="helper-text text-danger fw-bold text-center">{{$t('helpers.helperText2')}}</p>
                        <div class="bmi-note mb-3">
                            <div class="p-3">
                                <span role="img" aria-label="Note">💡</span>
                                {{ $t('calculations.calc1') }}
                                <p>{{ $t('calculations.calc2') }}</p>
                            </div>
                        </div>
                        <button :disabled="feetError" @click="nextQuestionFeet" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>

                </div>
                <div v-else-if="currentQuestion.question === 'weight' " class="d-flex flex-column justify-content-center align-items-center">
                    <div class="unit-toggle">
                        <button @click="toggleWeightUnit(false)" :class="{ active: !useKg }" class="border-0">lbs</button>
                        <button @click="toggleWeightUnit(true)" :class="{ active: useKg }" class="border-0">kg</button>
                    </div>

                    <div v-if="useKg" class="mt-3">
                        <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userWeightKg"><span class="fw-bold">kg</span>
                        <p v-if="userWeightKg < 30 || userWeightKg > 250" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperTextKg1') }}</p>
                        <div v-if="bmi && currentQuestion.extension" class="bmi-note mb-3">
                            <div class="p-3">
                                <span role="img" aria-label="Note">💡</span>
                                {{ $t('bmiNote.bmifirst') }} {{ bmi.toFixed(2) }}, {{ $t('bmiNote.bmisecond') }} {{ bmiCategory[currentLang] }}.
                            </div>
                        </div>
                        <button :disabled="userWeightKg < 30 || userWeightKg > 250" @click="nextQuestionKg" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>
                    
                    <div v-else>
                        <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userWeightLbs"><span class="fw-bold">lbs</span>
                        <p v-if="userWeightLbs < 66 || userWeightLbs > 552" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperTextKg2') }}</p>
                        <div class="bmi-note mb-3">
                            <div v-if="bmi && currentQuestion.extension" class="p-3">
                                <span role="img" aria-label="Note">💡</span>
                                Your BMI is {{ bmi.toFixed(2) }}, which is considered {{ bmiCategory[currentLang] }}
                            </div>
                        </div>
                        <button :disabled="userWeightLbs < 66 || userWeightLbs > 552" @click="nextQuestionLbs" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>
                </div>
                <div v-else>
                    <div class="questions scrollbar scrollbar-primary mt-2">
                        <div v-if="!currentQuestion.checkbox">
                            <div v-for="(choice, index) in currentQuestion.choices" @click.self="selectChoice(choice.answer)" :key="index">
                                <div class="card mb-3">
                                    <div class="card-body pt-0 pb-0 ps-3 pe-3" :class="{ 'selected': isSelected(choice.answer) }">
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
                        <div v-else>
                            <div v-for="(choice, index) in currentQuestion.choices" @click="selectChoice(choice.answer)" :key="index">
                                <div class="card mb-3">
                                    <div class="card-body pt-0 pb-0 ps-3 pe-3" :class="{ 'selected': isSelected(choice.answer) }">
                                        <input 
                                            type="checkbox"
                                            :id="'choice' + index" 
                                            :value="choice.answer"
                                            v-model="selectedChoice"
                                            style="display: none;"
                                        />
                                      
                                        <label id="label-answers" class="d-flex justify-content-between align-items-center" :for="'choice' + index" @click="selectChoice(choice.answer)">
                                            <div class="fw-bold">
                                                {{ choice.answer[currentLang] }}
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
                    </div>
                    <button v-if="currentQuestion.checkbox" @click="nextQuestion" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                </div>
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
            useMetric: true, // Toggle between metric and imperial
            useKg: true,
            userWeightKg: null,
            userWeightLbs: null,
            userHeightCm: null, // User's height in cm
            userHeightFt: null, // User's height in feet
            userHeightIn: null, // User's height in inches
        }
    },
    computed: {
        currentQuestion() {
            return this.genderQuestions[this.currentQuestionIndex];
        },
        currentLang(){
            return this.$store.state.currentLang;
        },
        bmi() {
            let heightInMeters;
            let weightInKg;
            let userHeightFeet;
            let feet;
            let inches;
            let cm;
            let answers = this.$store.state.answers;
            let userHeight = answers[answers.length - 1].answer;
            
            if(this.userWeightKg >= 30 && this.userWeightKg <= 250 || this.userWeightLbs >= 66 && this.userWeightLbs <= 552){
                if(userHeight.unit === "feet"){
                    userHeightFeet = true;
                    feet = userHeight.ft;
                    inches = userHeight.in;
                } else {
                    userHeightFeet = false;
                    cm = userHeight.cm;
                }
            }

            // Assuming you have a way to determine if the height and weight are in feet/inches and pounds or in metric units
            // For example, using flags like isHeightInFeet and isWeightInPounds or based on user's input

            if (userHeightFeet) {
                // Convert height from feet/inches to meters
                heightInMeters = (feet * 0.3048) + (inches * 0.0254);
            } else {
                // Convert height from centimeters to meters
                heightInMeters = cm / 100;
            }

            if (this.userWeightLbs != null) {
                // Convert weight from pounds to kilograms
                weightInKg = this.userWeightLbs * 0.453592;
            } else {
                // Weight is already in kilograms
                weightInKg = this.userWeightKg;
            }

            if (heightInMeters > 0 && weightInKg > 0) {
                // Calculate BMI
                return weightInKg / (heightInMeters * heightInMeters);
            }

            // Return null or 0 if height or weight is not provided
            return null;
        },
        bmiCategory() {
            if (this.bmi < 18.5) {
                return {en: 'Underweight. Focus on muscle toning and a balanced diet. Stay positive and try to keep your daily calorie consumption in the recommended range.', de: "Untergewicht. Konzentrieren Sie sich auf Muskelaufbau und eine ausgewogene Ernährung. Bleiben Sie positiv und versuchen Sie, Ihren täglichen Kalorienverbrauch im empfohlenen Bereich zu halten."};
            } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
                return {en: 'Normal weight. Great job! Continue with your balanced diet and regular exercise to maintain your health.', de: "Normalgewicht. Gut gemacht! Achten Sie weiterhin auf eine ausgewogene Ernährung und regelmäßige Bewegung, um Ihre Gesundheit zu erhalten."};
            } else if (this.bmi > 24.9 && this.bmi <= 29.9) {
                return {en: 'Overweight. Consider adopting a healthier diet and increasing your physical activity. Regular exercise and portion control can be beneficial.', de: "Übergewicht. Erwägen Sie eine gesündere Ernährung und mehr körperliche Aktivität. Regelmäßige Bewegung und Portionskontrolle können von Vorteil sein."};
            } else if (this.bmi > 29.9) {
                return {en: 'Obesity. It is advisable to consult with healthcare professionals to develop a safe and effective weight-loss plan. Focus on a healthy diet and regular exercise.', de: "Fettleibigkeit. Es ist ratsam, medizinisches Fachpersonal zu konsultieren, um einen sicheren und wirksamen Plan zur Gewichtsabnahme zu entwickeln. Konzentrieren Sie sich auf eine gesunde Ernährung und regelmäßige Bewegung."};
            } else {
                return {en: 'BMI not available. Please ensure all measurements are entered correctly.', de: "BMI nicht verfügbar. Bitte stellen Sie sicher, dass alle Maße korrekt eingegeben werden."};
            }
        },
        feetError(){
            const total = this.userHeightFt * 12 + this.userHeightIn;

            if(this.userHeightIn == null || this.userHeightIn.length == 0 || this.userHeightIn > 11 || total < 12 || total > 98){
                return true;
            }
            return false
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
        },
        currentLang(newValue){
            return this.$store.state.currentLang == newValue
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
                this.moveToNextQuestion();

            } else {
                alert('Please select an answer before moving on.');
            }
        },
        toggleWeightUnit(useKg) {
            this.useKg = useKg;
            if (useKg) {
                // If using kilograms, reset the pounds weight
                this.userWeightLbs = null;
            } else {
                // If using pounds, reset the kilograms weight
                this.userWeightKg = null;
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
                    this.saveAnswer(choice);
                    this.moveToNextQuestion();
                }
            }
        },
        nextQuestionFeet() {
            const answer = {answer: `${this.userHeightFt} ft ${this.userHeightIn} in`, unit: "feet", ft: this.userHeightFt, in: this.userHeightIn};
            this.saveAnswer(answer);
            this.moveToNextQuestion();
        },
        nextQuestionCm() {
            // Format the answer and save it
            const answer = {answer: `${this.userHeightCm} cm`, unit: "cm", cm: this.userHeightCm};
            this.saveAnswer(answer);
            this.moveToNextQuestion();
    
        },
        nextQuestionLbs(){
            const answer = `${this.userWeightLbs} lbs`;
            this.saveAnswer(answer);
            this.userWeightLbs = null;
            this.moveToNextQuestion();
        },
        nextQuestionKg(){
            const answer = `${this.userWeightKg} kg`;
            this.saveAnswer(answer);
            this.userWeightKg = null;
            this.moveToNextQuestion();
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

        saveAnswer(answer) {
            // Save the user's choice or height input
            this.$store.dispatch('saveAnswer', {
            question: this.currentQuestion.text,
            answer: answer,
            });
        },

        handleEndOfQuestionnaire() {
            alert('End of questionnaire');
            // Here could redirect the user or perform other actions
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
            }
            // } else {
            //     // If selectedChoice is not an array (e.g., for radio buttons), 
            //     // check if it's equal to the choice
            //     return this.selectedChoice === choice;
            // }
        }   
    },
    mounted(){
        if(this.$store.state.answers.length < 2){
            this.$router.push('/home')
        }
        this.$store.state.answers[1].answer.en === 'Male' ? this.genderQuestions = maleQuestions : this.genderQuestions = femaleQuestions;
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

.input-no-spinners::-webkit-outer-spin-button,
.input-no-spinners::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-no-spinners:focus {
  outline: none;
}

.input-no-spinners:focus::placeholder {
  color: transparent;
}

.input-no-spinners {
    width: 55%;
    font-size: 40px;
}

.helper-text {
    font-size: 13px;
}

.bmi-note {
    background-color: rgb(242, 239, 238);
    border-radius: 15px;
    max-width: 600px;
}

.unit-toggle button.active {
  /* styles for the active unit button */
  background-color: #004080;
  color: white;
}

.unit-toggle button {
    width: 50px;
    border-radius: 5px;
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
    width: 100%;
    border-radius: 1%;
    height: 6vh;
    color: white;
}

.next-button:disabled {
    opacity: 0.5;
}
</style>
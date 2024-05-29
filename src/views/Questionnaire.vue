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
                    <div class="influid">
                        <div class="unit-toggle text-center">
                            <button @click="useMetric = false" :class="{ active: !useMetric }" class="border-0">in</button>
                            <button @click="useMetric = true" :class="{ active: useMetric }" class="border-0">cm</button>
                        </div>
    
                        <div v-if="useMetric" class="mt-3">
                            <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userHeightCm"><span class="fw-bold">cm</span>
                            <p v-if="userHeightCm < 40 || userHeightCm > 250" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperText1') }}</p>
                            <div class="bmi-note mb-3">
                                <div class="p-2 d-flex justify-content-around">
                                    <span role="img" aria-label="Note">💡</span>
                                    <div>
                                        <span class="fw-bold">{{ $t('bmiNote.calculationNote') }}</span>
                                        <p>{{ $t('bmiNote.calculationDescription') }}</p>
                                    </div>
                                </div>
                            </div>
                            <button :disabled="userHeightCm < 40 || userHeightCm > 250" @click="nextQuestionCm" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                        </div>
        
                        <div v-else class="mt-3">
                            <input class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" type="number" v-model.number="userHeightFt" style="width: 45%;"><span class="fw-bold">ft</span>
                            <input class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" type="number" v-model.number="userHeightIn" style="width: 10vh;"><span class="fw-bold">in</span>
                            <p v-if="feetError" class="helper-text text-danger fw-bold text-center">{{$t('helpers.helperText2')}}</p>
                            <div class="bmi-note mb-3">
                                <div class="p-2 d-flex justify-content-around">
                                    <span role="img" aria-label="Note">💡</span>
                                    <div>
                                        <span class="fw-bold">{{ $t('bmiNote.calculationNote') }}</span>
                                        <p>{{ $t('bmiNote.calculationDescription') }}</p>
                                    </div>
                                </div>
                            </div>
                            <button :disabled="feetError" @click="nextQuestionFeet" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                        </div>
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
                        <div class="bmi-note mb-3">
                            <div v-if="bmi" class="bmi-note mb-3">
                                <div class="p-2 d-flex justify-content-around">
                                    <span role="img" aria-label="Note">💡</span>
                                    <div>
                                        {{ $t('bmiNote.bmifirst') }} {{ bmi.toFixed(2) }}, {{ $t('bmiNote.bmisecond') }} {{ bmiCategory[currentLang] }}.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button :disabled="userWeightKg < 30 || userWeightKg > 250" @click="nextQuestionKg" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>
                    
                    <div v-else class="mt-3">
                        <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userWeightLbs"><span class="fw-bold">lbs</span>
                        <p v-if="userWeightLbs < 66 || userWeightLbs > 552" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperTextKg2') }}</p>
                        <div class="bmi-note mb-3">
                            <div v-if="bmi" class="p-2 d-flex justify-content-around">
                                <span role="img" aria-label="Note">💡</span>
                                <div>
                                    {{ $t('bmiNote.bmifirst') }} {{ bmi.toFixed(2) }}, {{ $t('bmiNote.bmisecond') }} {{ bmiCategory[currentLang] }}.
                                </div>
                            </div>
                        </div>
                        <button :disabled="userWeightLbs < 66 || userWeightLbs > 552" @click="nextQuestionLbs" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>
                </div>
                <div v-else-if="currentQuestion.question === 'preferedWeight' " class="d-flex flex-column justify-content-center align-items-center">
                    <div class="unit-toggle">
                        <button @click="toggleWeightUnitPrefered(false)" :class="{ active: !useKg }" class="border-0">lbs</button>
                        <button @click="toggleWeightUnitPrefered(true)" :class="{ active: useKg }" class="border-0">kg</button>
                    </div>

                    <div v-if="useKg" class="mt-3">
                        <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userWeightPreferedKg"><span class="fw-bold">kg</span>
                        <p v-if="userWeightPreferedKg < 30 || userWeightPreferedKg > 250" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperTextKg1') }}</p>
                        <div class="bmi-note mb-3">
                            <div v-if="lossWeight" class="p-3">
                                <span class="fw-bold">{{ weightChangeFeedback.extraText[currentLang] }}</span>
                                <p>{{ weightChangeFeedback.feedback[currentLang] }}</p>
                            </div>
                        </div>
                        <button :disabled="userWeightPreferedKg < 30 || userWeightPreferedKg > 250" @click="nextQuestionPreferedKg" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>
                    
                    <div v-else class="mt-3">
                        <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userWeightPreferedLbs"><span class="fw-bold">lbs</span>
                        <p v-if="userWeightPreferedLbs < 66 || userWeightPreferedLbs > 552" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperTextKg2') }}</p>
                        <div class="bmi-note mb-3">
                            <div v-if="lossWeight" class="p-3">
                                <span class="fw-bold">{{ weightChangeFeedback.extraText[currentLang] }}</span>
                                <p>{{ weightChangeFeedback.feedback[currentLang] }}</p>
                            </div>
                        </div>
                        <button :disabled="userWeightPreferedLbs < 66 || userWeightPreferedLbs > 552" @click="nextQuestionPreferedLbs" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
                    </div>
                </div>
                <div v-else-if="currentQuestion.question === 'email' " class="d-flex flex-column justify-content-center align-items-center">
                    <div class="influid">
                        <div class="form-group mt-3 mb-3">
                            <i class="bi bi-envelope icon-env"></i>
                            <input
                                type="email"
                                v-model="email"
                                @blur="validateEmail"
                                :class="{'is-invalid': emailError, 'is-valid': !emailError && email.length > 0}"
                                :placeholder="$t('email.placeholder')"
                            />
                            <div v-if="emailError" class="invalid-feedback">
                                {{ $t('email.validEmail') }}
                            </div>
                            <div v-if="!emailError && email.length > 0" class="valid-feedback">
                                {{ $t('email.perfect') }}
                            </div>
                        </div>
                        <div class="email-note mb-3">
                            <div class="p-2 d-flex justify-content-around">
                                <div>
                                    <span role="img" class="fs-5" aria-label="Note">☝️</span>
                                </div>
                                <div>
                                    <span class="fw-bold">{{ $t('email.emailFirst') }}</span>
                                    <p>{{ $t('email.emailSecond') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-around align-items-center w-100">
                            <div>
                                <img src="../assets/lockImage.png" class="me-1" width="40" height="30" alt="lock">
                            </div>
                            <div>
                                <span class="fw-bold text-muted secure-text">{{ $t('email.emailThird') }} <router-link to="/privacy-policy">{{ $t('email.emailFourth') }}</router-link></span>
                            </div>
                        </div>
                        <button :disabled="emailError || email.length === 0" @click="nextQuestionAge" class="next-button fw-bold mt-3">{{ $t('buttons.continue') }}</button>
                    </div>
                </div>
                <div v-else-if="currentQuestion.question === 'age'" class="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <input type="number" class="input-no-spinners border-0 text-end fw-bolder" placeholder="0" v-model.number="userAge">
                        <p v-if="userAge < 16 || userAge > 99" class="helper-text text-danger fw-bold text-center">{{ $t('helpers.helperTextAge') }}</p>
                        <div class="bmi-note mb-3">
                            <div class="p-2 d-flex justify-content-around">
                                <span role="img" class="fs-5" aria-label="Note">☝️</span>
                                <div>
                                    <span class="fw-bold">{{ $t('bmiNote.ageDescription') }} </span>
                                    <p>{{ $t('bmiNote.ageDescription1') }}</p>
                                </div>
                            </div>
                        </div>
                        <button :disabled="userAge < 16 || userAge > 99" @click="nextQuestionAge" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
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
                    <button v-if="currentQuestion.checkbox" :disabled="selectedChoice.length === 0" @click="nextQuestion" class="next-button fw-bold">{{ $t('buttons.continue') }}</button>
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
            bmiValue: 0,
            email: '',
            emailError: false,
            userWeightKg: null,
            userWeightPreferedKg: null,
            userWeightLbs: null,
            userWeightPreferedLbs: null,
            userHeightCm: null, // User's height in cm
            userHeightFt: null, // User's height in feet
            userHeightIn: null, // User's height in inches
            userAge: null,
        }
    },
    computed: {
        currentQuestion() {
            return this.genderQuestions[this.currentQuestionIndex];
        },
        currentLang(){
            return this.$store.state.currentLang;
        },
        lossWeight() {
            let answer = this.$store.state.answers[29]?.answer; // Use optional chaining
            if (!answer) return null; // If answer is not defined, return null

            let weight = parseInt(answer.answer);
            if (isNaN(weight)) return null; // If weight is not a number, return null

            let initialWeightInKg = answer.unit === 'lbs' ? weight * 0.453592 : weight; // Convert to kg if needed
            let currentWeightInKg = this.userWeightPreferedKg ? this.userWeightPreferedKg : (this.userWeightPreferedLbs * 0.453592); // Convert to kg if needed

            if (this.userWeightPreferedKg >= 30 && this.userWeightPreferedKg <= 250 || this.userWeightPreferedLbs >= 66 && this.userWeightPreferedLbs <= 552) {
                let weightLoss = ((currentWeightInKg - initialWeightInKg) / initialWeightInKg) * 100;
                return weightLoss.toFixed(0);
            } else {
                return null;
            }
        },
        weightChangeFeedback() {
            const weightChange = this.lossWeight; // Assuming lossWeight returns a number
            const absWeight = Math.abs(this.lossWeight);

            if (weightChange >= -4 && weightChange <= 0) {
                return {
                    feedback: {
                        en: 'Maintaining a stable weight indicates a balanced lifestyle. Small fluctuations are normal and reflect everyday changes in water balance and other factors.',
                        de: 'Ein stabiles Gewicht zu halten, deutet auf einen ausgeglichenen Lebensstil hin. Kleine Schwankungen sind normal und spiegeln alltägliche Veränderungen im Wasserhaushalt und andere Faktoren wider.'
                    },
                    extraText: {
                        en: `EASY WIN: lose ${absWeight}% of your weight`,
                        de: `EINFACHER GEWINN: Verlieren Sie ${absWeight}% Ihres Gewichts`
                    }
                };
            } else if ((weightChange >= -9 && weightChange < -4)) {
                return {
                    feedback: {
                        en: 'A moderate change in weight can be a sign of positive lifestyle adjustments. It’s important to ensure these changes are sustainable and healthy.',
                        de: 'Eine moderate Gewichtsveränderung kann ein Zeichen für positive Anpassungen des Lebensstils sein. Es ist wichtig, sicherzustellen, dass diese Veränderungen nachhaltig und gesund sind.'
                    },
                    extraText: {
                        en: `REALISTIC TARGET: lose ${absWeight}% of your weight`,
                        de: `REALISTISCHES ZIEL: ${absWeight}% Ihres Gewichts verlieren`
                    }
                };
            } else if ((weightChange >= -19 && weightChange < -9)) {
                return {
                    feedback: {
                        en: 'Significant weight changes can have noticeable health impacts. For weight loss, this might mean improved cardiovascular health.',
                        de: 'Starke Gewichtsveränderungen können spürbare Auswirkungen auf die Gesundheit haben. Bei der Gewichtsabnahme könnte dies eine Verbesserung der Herz-Kreislauf-Gesundheit bedeuten.'
                    },
                    extraText: {
                        en: `HEALTH BENEFITS: lose ${absWeight}% of your weight`,
                        de: `GESUNDHEITLICHE VORTEILE: Verlieren Sie ${absWeight}% Ihres Gewichts`
                    }
                };
            } else if (weightChange < -19) {
                return {
                    feedback: {
                        en: 'In a new study by Mayo Clinic, overweight people who lose more than 20% of their body weight are almost 2½ times more likely to have good metabolic health as those who lose 5-10%.',
                        de: 'In einer neuen Studie der Mayo Clinic ist die Wahrscheinlichkeit einer guten Stoffwechselgesundheit bei übergewichtigen Menschen, die mehr als 20 % ihres Körpergewichts verlieren, fast 2½-mal höher als bei Menschen, die 5–10 % verlieren.'
                    },
                    extraText: {
                        en: `CHALLENGING GOAL: lose ${absWeight}% of your weight`,
                        de: `Anspruchsvolles Ziel: ${absWeight}% Ihres Gewichts verlieren`
                    }
                };
            } else {
                return {
                    feedback: {
                        en: 'Gaining weight in a healthy way can be beneficial for adding muscle mass and improving overall body strength. It can enhance physical appearance and contribute to better energy levels. ',
                        de: 'Ein gesunder Gewichtszuwachs kann vorteilhaft sein, um Muskelmasse aufzubauen und die allgemeine Körperkraft zu verbessern. Es kann das äußere Erscheinungsbild verbessern und zu einem besseren Energielevel beitragen.'
                    },
                    extraText: {
                        en: `Body Mass: gain ${absWeight}% of your weight`,
                        de: `Körpermasse: Nehmen Sie ${absWeight} Ihres Gewichts zu`
                    }
                };
            }
        },
        bmi() {
            let heightInMeters;
            let weightInKg;
            let userHeightFeet;
            let feet;
            let inches;
            let cm;
            let answers = this.$store.state.answers;
            let userHeight = answers[28]?.answer;
            
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
        email(newEmail) {
            this.validateEmail(newEmail);
        },
        currentQuestionIndex(newIndex){
            if(newIndex === -1){
                this.$router.push('/generalQuestions');
            }
        },
        currentLang(newValue){
            return this.$store.state.currentLang == newValue
        },
        bmi(newValue){
            if(newValue){
                this.bmiValue = newValue;
            }
        },
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
        validateEmail() {
            // eslint-disable-next-line
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.emailError = !re.test(this.email);
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
        toggleWeightUnitPrefered(useKg) {
            this.useKg = useKg;
            if (useKg) {
                // If using kilograms, reset the pounds weight
                this.userWeightPreferedLbs = null;
            } else {
                // If using pounds, reset the kilograms weight
                this.userWeightPreferedKg = null;
            }
        },
        goBack() {
            this.$store.dispatch('goBack');
            this.selectedChoice = [];
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
            const answer = {answer: `${this.userWeightLbs} lbs`, unit: 'lbs'};
            this.saveAnswer(answer);
            this.$store.dispatch('setBMI', this.bmiValue);
            this.userWeightLbs = null;
            this.moveToNextQuestion();
        },
        nextQuestionKg(){
            const answer = {answer: `${this.userWeightKg} kg`, unit: 'kg'};
            this.$store.dispatch('setBMI', this.bmiValue);
            this.saveAnswer(answer);
            this.userWeightKg = null;
            this.moveToNextQuestion();
        },
        nextQuestionPreferedLbs(){
            const answer = `${this.userWeightPreferedLbs} lbs`;
            this.saveAnswer(answer);
            this.userWeightPreferedLbs = null;
            this.moveToNextQuestion();
        },
        nextQuestionPreferedKg(){
            const answer = `${this.userWeightPreferedKg} kg`;
            this.saveAnswer(answer);
            this.userWeightKg = null;
            this.moveToNextQuestion();
        },
        nextQuestionAge(){
            const answer = `${this.userAge} years old!`;
            this.saveAnswer(answer);
            this.userAge = null;
            this.moveToNextQuestion();
        },
        moveToNextQuestion() {
            // Check if there are more questions
            if (this.currentQuestionIndex < this.genderQuestions.length - 1) {
                this.currentQuestionIndex++;
                this.selectedChoice = []; // Reset selected choice for the next question
                
            } else {
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

        async handleEndOfQuestionnaire() {
            // Here could redirect the user or perform other actions
            await this.$axios.post('/predictions', this.$store.state.answers).then(res => {
                this.$store.dispatch('setDietType', res.data);
            }).catch(err => {
                err.message
            });
            this.$router.push('/feedback-wellness');
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

@media only screen and (max-width: 301px) {
  .name {
    display: none;
  }
}
.selected {
  background-color: #004080 !important; /* Change the background color to indicate selection */
  color: white;
}

.input-no-spinners::-webkit-outer-spin-button,
.input-no-spinners::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.influid {
    max-width: 600px;
}

.form-group {
  position: relative;
}

input[type="email"] {
  width: 100%;
  padding: 0.5rem 2.2rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

input[type="email"].is-invalid {
  border-color: #e3342f;
  background-image: url('../assets/error.png');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 25px 25px;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #e3342f;
}

.icon-env {
    position: absolute;
    margin-top: 0.19rem;
    margin-left: 5px;
    font-size: 24px;
}

input[type="email"].is-invalid + .invalid-feedback {
  display: block;
}

input[type="email"].is-valid {
  border-color: #28a745; /* Green border for valid input */
  background-image: url('../assets/ok.webp');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 25px 25px;

}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #28a745; /* Green text for valid feedback */
}

/* Show the valid feedback message when input is valid */
input[type="email"].is-valid + .valid-feedback {
  display: block;
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

.email-note {
    background-color: rgb(242, 239, 238);
    border-radius: 15px;
    width: 100%;
}

.secure-text {
    font-size: 14px;
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
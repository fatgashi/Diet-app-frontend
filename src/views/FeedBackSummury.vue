<template>
  <div class="main-container">
    <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1" to="" id="logo">nutriplanwellness</router-link>
    </nav>
    <div class="container">
        <div class="d-flex justify-content-center align-items-start" id="rfluid">
            <div class="d-flex flex-column justify-content-center align-items-center w-100">
                <div>
                    <h3 class="text-center mb-2 fw-bolder">{{ $t('summary.title') }}</h3>
                </div>
                <div class="container-card mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">{{ $t('summary.bodyMass') }}</span>
                        <span>{{ $t('summary.averageNormal')  }}</span>
                    </div>
                    <div>
                        <div class="progress mt-5">
                            <div class="bmi-marker" :style="{ left: progressBarStyle.left }">
                                {{ $t('summary.you') }} - {{ bmiValue.toFixed(1) }}
                            </div>
                            <div class="progress-bar" role="progressbar" :style="{ width: progressBarStyle.width }" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex justify-content-around mt-2">
                            <span class="fw-bold">{{ $t('summary.underWeight') }}</span>
                            <span class="fw-bold">{{ $t('summary.normal') }}</span>
                            <span class="fw-bold">{{ $t('summary.overWeight') }}</span>
                            <span class="fw-bold">{{ $t('summary.obese') }}</span>
                        </div>
                    </div>
                </div>
                <div class="statistics shadow rounded mt-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <div class="d-flex justify-content-start align-items-center">
                                <div class="me-3">
                                    <i class="bi bi-person-walking fs-4"></i>
                                </div>
                                <div class="d-flex justify-content-center flex-column">
                                    <div class="text-muted mini-text">
                                        {{ $t('summary.lifestyle') }}
                                    </div>
                                    <div class="fw-bold">
                                        {{ activityLevel[currentLang] }}
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-start align-items-center mt-5">
                                <div class="me-3">
                                    <i class="bi bi-bar-chart-fill fs-4"></i>
                                </div>
                                <div class="d-flex justify-content-center flex-column">
                                    <div class="text-muted mini-text">
                                        {{ $t('summary.fasting') }}
                                    </div>
                                    <div class="fw-bold">
                                        {{ motivationLevel[currentLang] }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>   
                            <img :src="getBmiPhoto()" width="90" height="150" alt="BMI Category Image">
                        </div>
                    </div>
                </div>
                <div class="bmi-note mt-4">
                    <h6 class="fw-bold">{{ $t('summary.bmiTitle') }} {{ bmiValue.toFixed(1) }}</h6>
                    {{ bmiCategory[currentLang] }}
                </div>
                <button @click="nextQuestion" class="next-button mt-2 fw-bold">{{ $t('buttons.continue') }}</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            bmiValue: this.$store.state.bmi,
            activity: '',
            motivation: '',
            forward: false,
        }
    },
    computed: {
        progressBarStyle() {
            const bmi = parseFloat(this.bmiValue) || 0; // Fetch BMI
            const maxBmi = 40; // Adjust as needed
            const minBmi = 4; // Adjust as needed
            const widthPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
            
            // Ensure the percentage is between 0 and 100
            const sanitizedWidth = Math.min(Math.max(widthPercentage, 0), 100);
            
            return {
                width: `${sanitizedWidth}%`,
                left: `calc(${sanitizedWidth}% - 10px)` // Adjust the 10px if needed based on marker's width
            };
        },
        bmiCategory() {
            if (this.bmiValue < 18.5) {
                return {
                    de: 'Untergewicht kann mit einem geschwächten Immunsystem, Fruchtbarkeitsproblemen und einem erhöhten Osteoporoserisiko verbunden sein, was zu einer höheren Wahrscheinlichkeit von Knochenbrüchen führt.',
                    en: 'Being underweight can be associated with a weakened immune system, fertility issues, and an increased risk of osteoporosis, leading to a greater likelihood of bone fractures.'
                };
            } else if (this.bmiValue >= 18.5 && this.bmiValue <= 24.99) {
                return {
                    de: 'Dieser BMI-Bereich ist im Allgemeinen mit einem geringeren Risiko für gewichtsbedingte chronische Krankheiten verbunden. Für die allgemeine Gesundheit ist es jedoch wichtig, auf eine ausgewogene Ernährung und regelmäßige körperliche Aktivität zu achten.',
                    en: 'This BMI range is generally associated with a lower risk of chronic diseases related to weight. However, it\'s important to maintain a balanced diet and regular physical activity for overall health.'
                };
            } else if (this.bmiValue >= 25 && this.bmiValue <= 29.99) {
                return {
                    de: 'Übergewicht kann das Risiko erhöhen, an Erkrankungen wie Typ-2-Diabetes, Bluthochdruck, Herzerkrankungen und bestimmten Krebsarten zu erkranken.',
                    en: 'Being overweight can increase the risk of developing conditions such as type 2 diabetes, high blood pressure, heart disease, and certain types of cancer.'
                };
            } else if (this.bmiValue >= 30) {
                return {
                    de: 'Fettleibigkeit ist mit einem höheren Risiko schwerer Gesundheitsprobleme verbunden, darunter schwere Herz-Kreislauf-Erkrankungen, mehr Krebsarten, fortgeschrittener Typ-2-Diabetes und häufigere Komplikationen bei Vollnarkose und Operationen.',
                    en: 'Obesity is linked to a higher risk of severe health issues, including significant cardiovascular diseases, more types of cancer, advanced type 2 diabetes, and increased complications with general anesthesia and surgery.'
                };
            } else {
                return {
                    de: 'Der BMI-Wert liegt nicht im Standardbereich.',
                    en: 'BMI value is not in the standard range.'
                };
            }
        },
        currentLang(){
            return this.$store.state.currentLang;
        },
        motivationLevel() {
            const answerIndex = this.$store.state.answers[26]?.answer?.[this.currentLang];
            const motivationMapping = {
                [this.$t('motivation.option1')]: {en: 'Average', de: 'Durchschnitt'},
                [this.$t('motivation.option2')]: {en: 'Average', de: 'Durchschnitt'},
                [this.$t('motivation.option3')]: {en: 'High', de: 'Hoch'}
            };

           return motivationMapping[answerIndex] || 'Unknown';
        },
        activityLevel(){
            const answerIndex = this.$store.state.answers[18]?.answer?.[this.currentLang];

            const activityMapping = {
                [this.$t('activity.option1')]: {en: 'Active', de: 'Aktiv'},
                [this.$t('activity.option2')]: {en: 'Active', de: 'Aktiv'},
                [this.$t('activity.option3')]: {en: 'Energetic', de: 'Energisch'}
            };

            return activityMapping[answerIndex] || 'Unknown'
        },
    },
    beforeRouteLeave(to, from, next) {
        // Check if the navigation was a backward navigation
        if (to.path === '/questionnaire' && !this.forward) {
            if(this.$store.state.answers.length === 31){
                this.$store.dispatch("goBack");
            }
        }
        // Call next to proceed with the navigation
        next();
    },
    methods: {  
        getBmiPhoto() {
            if (this.bmiValue < 18.5) {
                if(this.$store.state.answers[1].answer.en === 'Male'){
                    return require('../assets/feedbackUnderWeightBodyTypeMan.png');
                } else {
                    return require('../assets/feedbackUnderWeightBodyTypeWoman.png');
                }
            } else if (this.bmiValue >= 18.5 && this.bmiValue <= 24.99) {
                if(this.$store.state.answers[1].answer.en === 'Male'){
                    return require('../assets/feedbackNormalBodyTypeMan.png');
                } else {
                    return require('../assets/feedbackNormalBodyTypeWoman.png');
                }
            } else if (this.bmiValue >= 25 && this.bmiValue <= 29.99) {
                if(this.$store.state.answers[1].answer.en === 'Male'){
                    return require('../assets/feedbackOverWeightBodyTypeMan.png');
                } else {
                    return require('../assets/feedbackOverWeightBodyTypeWoman.png');
                }
            } else if (this.bmiValue >= 30) {
                if(this.$store.state.answers[1].answer.en === 'Male'){
                    return require('../assets/feedbackObeseBodyTypeMan.png');
                } else {
                    return require('../assets/feedbackObeseBodyTypeWoman.png');
                }
            } else {
                return ''; // Or path to a default image
            }
        },
        nextQuestion(){
            this.forward = true
            this.$router.push('/progress')
        },
    },
    beforeDestroy() {
        document.body.style.overflow = 'hidden'; // or set it back to the default value
    },
    mounted(){
        this.getBmiPhoto();
        this.$i18n.locale = this.currentLang;
        document.body.style.overflow = 'auto';
    },
}
</script>

<style scoped>

#rfluid {
  max-width: 600px;
  display: grid;
  height: 93vh;
  margin-top: 2vh;
}

.progress {
    position: relative;
    height: 1vh;
    background: rgb(59,252,4);
    background: linear-gradient(90deg, rgba(59,252,4,1) 4%, rgba(245,242,6,1) 50%, rgba(247,9,9,1) 96%);
    overflow: visible;
}

.progress-bar {
    opacity: 0;
}

.mini-text {
    font-size: 12px;
    font-weight: 400;
}

.next-button {
    background-color: #004080;
    border: none;
    width: 100%;
    border-radius: 1%;
    height: 6vh;
    color: white;
}
.container-card {
    padding: 10px;
    width: 100%;
    background-color: rgb(242, 239, 238);
    border-radius: 10px;
}

.bmi-note {
    background-color: rgb(242, 239, 238);
    padding: 20px;
    border-radius: 10px;
    width: 100%;
}
.bmi-marker {
    position: absolute;
    top: calc(-100% - 32px); /* Adjust this so the marker appears above the progress bar */
    left: 0; /* Initial position, will be set dynamically */
    transform: translateX(-50%);
    background-color: #004080;
    padding: 2px 10px;
    border-radius: 10px;
    white-space: nowrap;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; /* Ensure it's above the progress bar */
}

.bmi-marker::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 45%;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
    border-color: #004080;
}

.statistics {
    width: 100%;
    padding: 20px;
}
</style>
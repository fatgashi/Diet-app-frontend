<template>
  <div>
    <Header/>
    <div class="container">
      <div class="d-flex justify-content-center align-items-start" id="rfluid">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="mb-4 text-center">
              <h2>{{ $t('headers.header2') }}</h2>
              <h4 class="text-muted">{{ $t('headers.header4') }}</h4>
              <h6>{{ $t('headers.header6') }}</h6>
            </div>
              <div class="row row-cols-2 row-cols-md-4 d-flex justify-content-center">
                <div class="row" v-for="(choice,index) in currentQuestion.choices" :key="index">
                  <div class="card" style="width: 18rem;" @click="selectChoice(choice.answer)">
                    <input 
                          type="radio" 
                          :id="'choice' + index" 
                          :value="choice.answer"
                          style="display: none;"
                      />
                    <img :src="getImagePath(choice.image)" class="card-img-top h-100" id="img-age" alt="...">
                    <button class="btn age-button">{{ choice.answer[currentLang] }}</button>
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
import Header from '../Layout/Header.vue'
export default {
  components: {
    Header
  },
  data(){
    return {
      currentQuestionIndex: 0,
      selectedChoice: null,
    }
  },
  computed: {
    currentQuestion() {
      return questions[this.currentQuestionIndex];
    },
    currentLang(){
      return this.$store.state.currentLang;
    }
  },
  methods: {
    selectChoice(choice) {
      this.selectedChoice = choice;

      this.$store.dispatch('saveAnswer', {
        question: this.currentQuestion.text,
        answer: this.selectedChoice,
      });

      this.$router.push('/generalQuestions')
    },
    getImagePath(image) {
      return require(`../assets/${image}`);
    },
  },
  mounted(){
    this.$store.dispatch("clearAnswers");
    this.$store.dispatch("clearPrediction")
  }
}
</script>

<style>

#rfluid {
  margin: 10vh auto auto auto;
  max-width: 1200px;
  display: grid;
  height: 93vh;

}

#img-age {
  cursor: pointer;
}

.age-button{
  background-color: #004080 !important;
  color: white !important;
}

.card {
  border: none !important;
}

</style>
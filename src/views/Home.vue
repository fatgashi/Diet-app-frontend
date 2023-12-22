<template>
  <div class="container">
        <div class="d-flex justify-content-center align-items-start" id="rfluid">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="mb-4 text-center">
                <h2>INTERMITTENT FASTING</h2>
                <h4 class="text-muted">CHOOSE YOUR AGE GROUP</h4>
                <h6>1-minute quiz</h6>
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
                      <img :src="getImagePath(choice.image)" class="card-img-top h-100" alt="...">
                      <button class="btn age-button">{{ choice.answer }}</button>
                    </div>
                  </div>
                </div>
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
    }
  },
  computed: {
    currentQuestion() {
      return questions[this.currentQuestionIndex];
    },
  },
  methods: {
    selectChoice(choice) {
      this.selectedChoice = choice;

      this.$store.dispatch('saveAnswer', {
        question: this.currentQuestion.text,
        answer: this.selectedChoice,
      });

      this.$router.push('/questionnaire')
    },
    getImagePath(image) {
      return require(`../assets/${image}`);
    },
  },
  mounted(){
    this.$store.dispatch("clearAnswers");
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

.age-button{
  background-color: #004080;
  color: white;
}

.card {
  border: none;
}

</style>
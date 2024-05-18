<template>
  <div>
    <div v-if="userData" class="row mt-4">
        <div class="col-sm-12 col-md-4">
        <div class="card" style="border-radius: 10px;">
            <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-muted">Your Height:</h6>
                    <h5 class="card-text" style="color: green;">{{ userData.answers[28].answer.answer }}</h5>
                    </div>
                    <div class="d-flex justify-content-center">
                    <img src="../../assets/height.png" height="40" width="40" />
                    </div>
            </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-4">
        <div class="card" style="border-radius: 10px;">
            <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-muted">Your Weight:</h6>
                    <h5 class="card-text" style="color: green;">{{ userData.answers[29].answer.answer }}</h5>
                    </div>
                    <div class="d-flex justify-content-center">
                    <img src="../../assets/weight.png" width="40" height="40" />

                    </div>
            </div>
            </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-4">
        <div class="card" style="border-radius: 10px;">
            <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="text-muted">Your BMI:</h6>
                    <h5 class="card-text" style="color: green;">{{ bmi.toFixed(2) }}</h5>
                    </div>
                    <div class="d-flex justify-content-center">
                    <img src="../../assets/bmi1.png" height="40" width="40"/>
                    </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import configuration from '../../config/config'
export default {
    data(){
        return {
            userData: null,
            bmi: null,
        }
    },
    async created(){
        this.userData = await this.$axios.get('/diet-assessment', configuration()).then(res => {
            return res.data[0]
        });
        const height_in_meters = this.userData.answers[28].answer.cm / 100;
        const kg = parseInt(this.userData.answers[29].answer.answer, 10)
        this.bmi = kg / (height_in_meters * height_in_meters)
    }
}
</script>

<style>
.card {
    border: 1px solid black !important;
}
</style>
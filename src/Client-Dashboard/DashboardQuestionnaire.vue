<template>
  <div v-if="userData" class="mt-4">
    <div class="d-flex justify-content-between align-items-center">
        <h3 class="fw-bolder">Your Answers:</h3>
        <div class="d-flex flex-column justify-content-center align-items-center" id="date-info">
            <h6 class="text-center">You took the questionnaire on:</h6>
            <p class="text-center">{{ dateFormat.toDateString() }}</p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <Tooltip class="me-2">
                <template #reference>
                    <i class="bi bi-info-circle"></i>
                </template>
                <template #tooltip>
                    Can be completed once a month!
                </template>
            </Tooltip>
            <div>
                <router-link to="/client-dashboard/recomplete-questionnaire" class="btn btn-success">Recomplete Questionnaire</router-link>
            </div>
        </div>
    </div>
    <div class="row-fluid gx-5">
        <div class="row row-cols-2 row-cols-md-4 mt-3 mb-3 me-2 ms-2 d-flex justify-content-start">
        <div v-for="(data, index) in userData.answers" :key="data._id" class="row m-0 mt-lg-2 mt-md-0 mb-4 d-flex justify-content-center align-items-start">
            <div class="card shadow" id="card-s" >
            <div class="card-body">
                <h5 class="mt-3 fw-bold">{{ index + 1 }}. {{ data.question.en }}</h5>
                <p v-if="data.answer.en">1. {{ data.answer.en }}.</p>
                <p v-else-if="typeof data.answer !== `object`">{{ data.answer }}</p>
                <ol v-else-if="data.answer.length > 0" class="list-group list-group-numbered">
                    <li v-for="answer in data.answer" :key="answer.en" class="list-group-item">
                        {{ answer.en }}
                    </li>
                </ol>
                <p v-else-if="data.answer.answer">{{ data.answer.answer }}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import configuration from '../config/config';
import Tooltip from '../components/Tooltip.vue';
export default {
    components: {
        Tooltip
    },
    data(){
        return {
            userData: null,
            dateFormat: null,
        }
    },
    async created(){
        this.userData = await this.$axios.get('/diet-assessment', configuration()).then(res => {
            return res.data[0]
        });

        this.dateFormat = new Date(this.userData.date);


    }
}
</script>

<style scoped>

@media only screen and (max-width: 500px) {
  #date-info {
    display: none !important;
  }
}


#card-s {
    color: #333; /* Dark grey text for readability */
    border-left: 5px solid #4CAF50; /* Green border on the left for a pop of color */
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#card-s h5 {
    color: #004080; /* Dark green for headings */
    margin-bottom: 5px;
}
</style>
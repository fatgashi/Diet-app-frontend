<template>
  <div class="mt-4">
    <div v-if="userData">
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
                    <button to="/client-dashboard/recomplete-questionnaire" :disabled="dateFormatBoolean()" @click="navigate" class="btn btn-success">Recomplete Questionnaire</button>
                </div>
            </div>
        </div>
        <div class="row gx-5">
            <div class="d-flex flex-column justify-content-center align-items-center d-sm-none d-block mt-3">
                <h6 class="text-center">You took the questionnaire on:</h6>
                <p class="text-center">{{ dateFormat.toDateString() }}</p>
            </div>
            <div class="row row-cols-2 row-cols-md-4 mt-3 mb-3 d-flex justify-content-center">
            <div v-for="(data, index) in userData.answers" :key="data._id" class="row m-0 mt-lg-2 mt-md-0 mb-4 d-flex justify-content-center align-items-start">
                <div class="card shadow" id="card-s" >
                <div class="card-body">
                    <h5 class="mt-3 fw-bold">{{ index + 1 }}. {{ data.question.en }}</h5>
                    <div class="mt-2">
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
    </div>
    <div v-else class="mt-4">
        <div class="d-flex flex-column">
            <div class="d-flex justify-content-end align-items-center">
                <router-link to="/client-dashboard/recomplete-questionnaire" class="btn btn-success">Complete Questionnaire</router-link>
            </div>
            <div class="d-flex justify-content-center align-items-center mt-3">
                <h1 class="fw-bolder">You haven't completed a questionnaire yet!</h1>
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
    methods: {
        dateFormatBoolean(){
            const lastDietDate = new Date(this.userData.date);
    
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            
            return lastDietDate >= oneMonthAgo;
        },
        navigate() {
            if (!this.dateFormatBoolean()) {
                this.$router.push('/client-dashboard/recomplete-questionnaire');
            }
        }
    },

    async created(){
        this.userData = await this.$axios.get('/diet-assessment', configuration()).then(res => {
            return res.data[0]
        });

        if(this.userData){
            this.dateFormat = new Date(this.userData.date);
            this.dateFormatBoolean();
        }


    }
}
</script>

<style scoped>

@media only screen and (max-width: 576px) {
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
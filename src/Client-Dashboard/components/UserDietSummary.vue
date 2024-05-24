<template>
  <div>
    <div v-if="userData" class="row mt-4">
        <div class="col-sm-12 col-md-4 mt-3">
            <div class="card shadow" id="card-userData" style="border-radius: 10px;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="fw-bold">Your Height:</h6>
                            <h5 class="card-text">{{ userData.answers[28].answer.answer }}</h5>
                        </div>
                        <div class="d-flex justify-content-center">
                            <img src="../../assets/free_icon_3.svg" height="64" width="64" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-4 mt-3">
            <div class="card shadow" id="card-userData" style="border-radius: 10px;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="fw-bold">Your Weight:</h6>
                            <h5 class="card-text">{{ userData.answers[29].answer.answer }}</h5>
                        </div>
                        <div class="d-flex justify-content-center">
                            <img src="../../assets/free_icon_4.svg" height="64" width="64" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-4 mt-3">
            <div class="card shadow" id="card-userData" style="border-radius: 10px;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="fw-bold">Your Goal:</h6>
                            <h5 class="card-text">{{ userData.answers[30].answer }}</h5>
                        </div>
                        <div class="d-flex justify-content-center">
                            <img src="../../assets/free_icon_5.svg" height="64" width="64" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-4 mt-3">
            <div class="card shadow" id="card-userData" style="border-radius: 10px;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="fw-bold">Your BMI:</h6>
                            <h5 class="card-text">{{ calculateBMI.toFixed(2) }}</h5>
                        </div>
                        <div class="d-flex justify-content-center">
                            <img src="../../assets/free_icon_2.svg" width="64" height="64" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-4 mt-3">
            <div class="card shadow" id="card-userData" style="border-radius: 10px;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="fw-bold">Your Diet:</h6>
                            <h5 class="card-text">{{ userData.dietType }}</h5>
                        </div>
                        <div class="d-flex justify-content-center">
                            <img src="../../assets/free_icon_1.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-4" id="chart">
        <apexchart type="line" height="450" :options="chartOptions" :series="series"></apexchart>
    </div>
    <div class="mt-5">
        <h2 class="fw-bolder" style="color: #004080;">Meal Plan For Today</h2>
        <h4 class="fw-bold">{{ todayDate }}</h4>
        <div class="row-fluid gx-5">
          <div class="row row-cols-1 row-cols-md-3 mt-3 mb-3 me-2 ms-2 d-flex justify-content-start">
            <div v-for="(meals, index) in mealPlan" :key="meals._id" class="row m-0 mt-lg-2 mt-md-0 mb-4 d-flex justify-content-center align-items-start">
              <div class="card shadow" id="card-s" >
                <div class="card-body">

                    <h5 class="mt-3 fw-bold">{{ index + 1}}. {{ meals.name }}</h5>
                    <h6>Description: </h6>
                    <p>{{ meals.description }}.</p>
                    <h6>Preparation: </h6>
                    <p>{{ meals.preparation }}</p>
                    <h6>Ingredients: </h6>
                    <ol class="list-group list-group-numbered">
                      <li v-for="ingredients in meals.ingredients" :key="ingredients" class="list-group-item">{{ ingredients }}</li>
                    </ol>

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
            mealPlan: null,
            userDataAssessment: null,
            weightThisMonth: 0,
            weightLastMonth: 0,
            goalThisMonth: 0,
            goalLastMonth: 0,
            bmiThisMonth: 0,
            bmiLastMonth: 0,
            dateLastMonth: "",
            dateThisMonth: "",
            chartOptions: {
                chart: {
                    height: 350,
                    width: 600,
                    type: 'line',
                },
                plotOptions: {
                    line: {
                        isSlopeChart: true,
                    },
                },
                tooltip: {
                    followCursor: true,
                    intersect: false,
                    shared: true,
                },
                dataLabels: {
                    background: {
                        enabled: true,
                    },
                    formatter(val, opts) {
                        const seriesName = opts.w.config.series[opts.seriesIndex].name
                        return val !== null ? seriesName : ''
                    },
                },
                yaxis: {
                    show: true,
                    labels: {
                        show: true,
                    },
                },
                xaxis: {
                    position: 'bottom',
                },
                legend: {
                    show: true,
                    position: 'top',
                    horizontalAlign: 'left',
                },
                stroke: {
                    width: [5, 5, 3],
                    dashArray: [0, 0, 5],
                    curve: 'smooth',
                }
            },
        }
    },
    computed: {
        calculateBMI(){
            const height_in_meters = this.userData.answers[28].answer.cm / 100;
            const kg = parseInt(this.userData.answers[29].answer.answer, 10)
            return kg / (height_in_meters * height_in_meters);
        },

        todayDate(){
            const today = new Date().getDay();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return daysOfWeek[today];
        },

        series() {
        return [
            {
            name: 'Weight',
            data: [
                {
                    x: this.dateLastMonth,
                    y: this.weightLastMonth,
                },
                {
                    x: this.dateThisMonth,
                    y: this.weightThisMonth,
                },
            ],
            },
            {
            name: 'BMI',
            data: [
                {
                    x: this.dateLastMonth,
                    y: this.bmiLastMonth,
                },
                {
                    x: this.dateThisMonth,
                    y: this.bmiThisMonth,
                },
            ],
            },
            {
            name: 'Your Goal',
            data: [
                {
                    x: this.dateLastMonth,
                    y: this.goalLastMonth,
                },
                {
                    x: this.dateThisMonth,
                    y: this.goalThisMonth,
                },
            ],
            },
        ]
        },
    },
    methods: {
        calculateBMIForMonths(position){
            const height_in_meters = this.userDataAssessment[position].answers[28].answer.cm / 100;
            const kg = parseInt(this.userDataAssessment[position].answers[29].answer.answer, 10)
            return kg / (height_in_meters * height_in_meters);
        },

        dietAssessment(){
            this.weightThisMonth = parseInt(this.userDataAssessment[0].answers[29].answer.answer, 10);
            this.weightLastMonth = parseInt(this.userDataAssessment[1].answers[29].answer.answer, 10);
            this.goalThisMonth = parseInt(this.userDataAssessment[0].answers[30].answer, 10);
            this.goalLastMonth = parseInt(this.userDataAssessment[1].answers[30].answer, 10);
            this.bmiThisMonth = this.calculateBMIForMonths(0).toFixed(2);
            this.bmiLastMonth = this.calculateBMIForMonths(1).toFixed(2);
            this.dateThisMonth = new Date(this.userDataAssessment[0].date).toDateString();
            this.dateLastMonth = new Date(this.userDataAssessment[1].date).toDateString();
        }
    },
    async created(){
        this.userData = await this.$axios.get('/diet-assessment', configuration()).then(res => {
            return res.data[0]
        });

        this.userDataAssessment = await this.$axios.get('/diet-assessment/getTwoLastAssessment', configuration()).then(res => {
            return res.data;
        });

        this.dietAssessment();


        this.mealPlan = await this.$axios.get('/mealPlan/getMealPlanByUser', configuration()).then(res => {
            return res.data
        })
        
    }
}
</script>

<style scoped>
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

#card-userData {
    background-color: #004080;
    color: white;
}
</style>
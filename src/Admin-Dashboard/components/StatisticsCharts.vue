<template>
  <div class="row mt-4">
    <div class="row row-cols-1 row-cols-md-2 mt-3 mb-3 d-flex justify-content-center">
        <div class="row m-0 mt-lg-2 mt-md-0 mb-4 d-flex justify-content-center align-items-center" id="chart1">
            <apexchart type="donut"  :options="chartOptions1" :series="series1"></apexchart>
        </div>
        <div class="row m-0 mt-lg-2 mt-md-0 mb-4 d-flex justify-content-center align-items-center" id="chart2">
            <apexchart type="pie"  :options="chartOptions2" :series="series2"></apexchart>
        </div>
    </div>
  </div>
</template>

<script>
import configuration from '../../config/config';


export default {
    data(){
        return {
            countClints: 0,
            countAdmin: 0,
            countSusClient: 0,
            countNonSusClient: 0,
            chartOptions1: {
                colors: ['#004080', '#114232'],
                chart: {
                    type: 'donut',
                },
                labels: ['Clients', 'Admins'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        
                        legend: {
                        position: 'bottom'
                        }
                    }
                }]
          },
          chartOptions2: {
            colors: ['#6c757d', '#dc3545'],
            chart: {
              type: 'pie',
            },
            labels: ['Non Suspended', 'Suspended'],
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        }
    },
    computed: {
        series1(){
            return [this.countClints, this.countAdmin]
        },
        
        series2(){
            return [this.countNonSusClient, this.countSusClient]
        }
    },

    async created(){
        await this.$axios.get('/statistics/countUsers', configuration()).then(res => {
            this.countClints = res.data.countClients;
            this.countAdmin = res.data.countAdmin
        })

        await this.$axios.get('/statistics/countSuspendedUsers', configuration()).then(res => {
            this.countNonSusClient = res.data.countNonSusUsers;
            this.countSusClient = res.data.countSusUsers;
        })
    }
}
</script>

<style>

</style>
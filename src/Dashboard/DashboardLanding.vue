<template>
  <div class="container bg-white  shadow rounded" id="landing-wrapper">
    <div class="container-fluid">
        <div id="wrapper" class="container-fluid d-flex align-items-center justify-content-center">
          <div class="content-area container-fluid">
            <div class="container-fluid">
              <div class="main">
                ASD
                <!-- <div class="row sparkboxes mt-4">
                  <div class="col-md-6">
                    <div id="chart">
                      <apexchart type="bar" :options="chart1.chartOptions" :series="chart1.series"></apexchart>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div id="chart">
                      <apexchart type="donut" :options="chart2.chartOptions" :series="chart2.series"></apexchart>
                    </div>
                  </div>
                  <div class="col-md-6 pt-4">
                    <div id="chart">
                      <apexchart type="radialBar" :options="chart3.chartOptions" :series="chart3.series"></apexchart>
                    </div>
                  </div>
                  <div class="col-md-6 pt-4">
                    <div id="chart">
                      <apexchart type="line" :options="chart4.chartOptions" :series="chart4.series"></apexchart>
                    </div>
                  </div>
                </div> -->

                <!-- <div class="row mt-4">
                  <div class="col-md-5">
                    <div class="box  mt-4">
                      <div id="radialBarBottom"></div>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="box  mt-4">
                      <div id="line-adwords" class=""></div>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-5">
                    <div class="box  mt-4">
                      <div id="barchart"></div>
                    </div>
                  </div>

                  </div> -->
                </div>
              </div>
            </div>
      </div>
    </div>
    </div>


</template>

<script>
// import configuration from '../config/config';
// import axios from 'axios'
// import VueApexCharts from "apexcharts";
export default {
    components:{
      // apexchart: VueApexCharts
    },
    data(){
      return {

      }
    },

    async created(){

    }

}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#landing-wrapper {
  min-height: 80vh;
}
.content-area {
  max-width: 1280px;
  margin: 0 auto;
}

.box {
  padding: 25px 20px;
}

.shadow {
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
}
.sparkboxes .box {
  padding-top: 10px;
  padding-bottom: 10px;
  text-shadow: 0 1px 1px 1px #666;
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
  position: relative;
  border-radius: 5px;
}

.sparkboxes .box .details {
  color: #fff;
  transform: scale(0.7) translate(-22px, 20px);
}
.sparkboxes strong {
  position: relative;
  z-index: 3;
  top: -8px;
  color: #fff;
}


.sparkboxes .box1 {
  background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
}

.sparkboxes .box2 {
  background-image: linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%);
}

.sparkboxes .box3 {
  background-image: linear-gradient( 135deg, #FFD3A5 10%, #FD6585 100%);
}

.sparkboxes .box4 {
  background-image: linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%);
}

</style>
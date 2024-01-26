<template>
  <div class="main-container">
    <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1" to="/home" id="logo">nutriplanwellness</router-link>
    </nav>
    <div class="container">
        <div class="d-flex justify-content-center align-items-start" id="rfluid">
            <div class="d-flex flex-column justify-content-center align-items-center w-100">
                <div>
                    <h1 class="text-center mb-2 fw-bolder">Summery of your overall wellness</h1>
                </div>
                <div class="container-card mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">Body Mass Index (BMI)</span>
                        <span>Normal - 21.5</span>
                    </div>
                    <div>
                        <div class="progress mt-5">
                            <div class="bmi-marker" :style="{ left: progressBarStyle.left }">
                                You - {{ bmiValue.toFixed(1) }}
                            </div>
                            <div class="progress-bar" role="progressbar" :style="{ width: progressBarStyle.width }" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="d-flex justify-content-around mt-2">
                            <span class="fw-bold">Underweight</span>
                            <span class="fw-bold">Normal</span>
                            <span class="fw-bold">Overweight</span>
                            <span class="fw-bold">Obese</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            bmiValue: this.$store.state.bmi
        }
    },
    computed: {
        progressBarStyle() {
        const bmi = parseFloat(this.bmiValue) || 0; // Fetch BMI
        const maxBmi = 40; // Adjust as needed
        const minBmi = 10; // Adjust as needed
        const widthPercentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
        
        // Ensure the percentage is between 0 and 100
        const sanitizedWidth = Math.min(Math.max(widthPercentage, 0), 100);
        
        return {
            width: `${sanitizedWidth}%`,
            left: `calc(${sanitizedWidth}% - 10px)` // Adjust the 10px if needed based on marker's width
        };
    }
    }
}
</script>

<style scoped>

#rfluid {
  max-width: 800px;
  display: grid;
  height: 91vh;
  margin-top: 5vh;
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

.container-card {
    padding: 10px;
    width: 100%;
    background-color: rgb(242, 239, 238);
    border-radius: 10px;
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
</style>
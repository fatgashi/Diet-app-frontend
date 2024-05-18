<template>
  <div class="main-container">
    <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1" to="" id="logo">nutriplanwellness</router-link>
    </nav>
    <div class="container">
      <div class="d-flex justify-content-center" id="rfluid">
        <div class="d-flex flex-column align-items-center">
          <div>
            <svg width="250" height="250" viewBox="0 0 250 250" class="circular-progress" :style="`--progress: ${progress}`">
              <circle class="bg" :cx="halfSize" :cy="halfSize" :r="radius"></circle>
              <circle class="fg" :cx="halfSize" :cy="halfSize" :r="radius" :style="foregroundStyle"></circle>
              <text :x="halfSize" :y="halfSize" class="progress-text">{{ displayProgress }}%</text>
            </svg>
          </div>
          <div>
            <h5>Creating your fasting plan</h5>
          </div>
          <!-- <div class="mt-5 fw-bolder">
            <h1 style="color: #004080;">8+ million users</h1>
          </div>
          <div>
            <h5>have chosen our app</h5>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0 // This will be dynamically updated
    };
  },
  watch: {
    progress(newValue){
      if(newValue === 100){
        this.$router.push("/diet-type")
      }
    }
  },
  computed: {
    halfSize() {
      return 125;
    },
    radius() {
      return 100; 
    },
    displayProgress() {
      return Math.round(this.progress);
    },
    foregroundStyle() {
      return {
        strokeDasharray: `${this.strokeDash} ${this.circumference - this.strokeDash}`,
        transform: 'rotate(-90deg)',
        transformOrigin: `${this.halfSize}px ${this.halfSize}px`
      };
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    strokeDash() {
      return (this.progress / 100) * this.circumference;
    }
  },
  mounted() {
    this.animateProgress();
  },
  methods: {
    animateProgress() {
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 1;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }
  }
}
</script>

<style>
#rfluid {
  max-width: 1000px;
  height: 91vh;
  margin-top: 5vh;
}

.circular-progress {
  --size: 250px;
  --half-size: 125px; 
  --stroke-width: 30px;
  --radius: 100px; 
  --circumference: calc(2 * 3.1416 * var(--radius));
  --dash: calc((var(--progress) / 100) * var(--circumference));
}

.circular-progress circle {
  stroke-width: var(--stroke-width);
  fill: none;
  stroke-linecap: round;
}

.circular-progress circle.bg {
  stroke: #ddd;
}

.circular-progress circle.fg {
  stroke: #004080;
}

.circular-progress .progress-text {
  fill: #333;
  font-weight: bold;
  font-size: 30px;
  text-anchor: middle;
  alignment-baseline: middle;
  dominant-baseline: middle;
}
</style>
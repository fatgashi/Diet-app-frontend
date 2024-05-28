<template>
  <div class="container bg-white  shadow rounded" id="landing-wrapper">
    <div class="container-fluid">
        <div id="wrapper" class="d-flex align-items-center justify-content-center">
          <div class="content-area">
              <div class="main">
                <router-view></router-view>
              </div>
            </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

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
  width: 100%;
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
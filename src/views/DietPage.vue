<template>
  <div class="main-container">
    <nav class="navbar d-flex justify-content-start align-items-center">
          <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
          <router-link class="ms-1" to="" id="logo">nutriplanwellness</router-link>
    </nav>
    <img src="../assets/zoneDietPhoto.jpg" class="image mt-2" />
    <div class="container">
        hi
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        document.body.style.overflow = 'auto';
    },
}
</script>

<style>
.image {
    width: 100%;
    height: 600px;
}
</style>
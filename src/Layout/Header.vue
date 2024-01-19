<template>
  <div>
    <nav class="navbar d-flex justify-content-start align-items-center">
        <img class="ms-3" src="../assets/main-logo.png" width="50" height="40" />
        <router-link class="ms-1" to="/home" id="logo">nutriplanwellness</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.navbar {
    height: 7vh;
    font-family: "Poppins", sans-serif;
}

#logo {
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #004080;
}

</style>
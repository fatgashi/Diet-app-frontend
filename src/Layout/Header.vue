<template>
  <div>
    <nav class="navbar" style="background-color: #A8DF8E;">
        <router-link to="/home" class="text-white ms-3" id="logo">Diet</router-link>
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
}

</style>
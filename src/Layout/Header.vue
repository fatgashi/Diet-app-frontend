<template>
  <div>
    <nav class="navbar">
        <router-link to="/home" class="ms-3" id="logo">Diet</router-link>
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
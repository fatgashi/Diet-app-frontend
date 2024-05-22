<template>
  <DashboardSidebar />
</template>

<script>
import DashboardSidebar from "./DashboardSidebar.vue";
// import DashboardContent from "./DashboardContent.vue";
export default {
  components: {
    DashboardSidebar,
    // DashboardContent,
  },
  mounted() {
    setTimeout(() => {
      document.body.style.overflow = 'auto';

    }, 1000);
  },
  beforeDestroy(){
    document.body.style.overflow = 'hidden';
  }
};
</script>

<style>

</style>
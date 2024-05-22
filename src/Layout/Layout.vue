<template>
    <div>
        <!-- <div class="Header">
            <Header/>
        </div> -->
        <div class="Main">
        <Content/>
        </div>
        <!-- <div class="Footer">
        <Footer> </Footer>
        </div> -->
    </div>
</template>

<script>
import Content from './Content.vue'
// import Footer from './Footer.vue'
// import Header from './Header.vue'

export default {
    name: "LeyOut",
    components: {
        // Header,
        Content,
        // Footer,
    },
    mounted(){
      window.scrollTo(0, 0);
    }
}
</script>

<style>
@media only screen and (max-height: 650px) {
  body {
    overflow: auto !important;
  }
}

@media only screen and (max-width: 800px) {
  body {
    overflow: auto !important;
  }
}
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
/* .Main {
    background-color: #F5F5F5;
} */
</style>
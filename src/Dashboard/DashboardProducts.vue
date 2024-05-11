<template>
  <div class="container bg-white shadow rounded" id="products-wrapper">
    <div
      class="
        container-fluid
        d-flex
        align-items-center
        mt-4
        justify-content-between
      "
    >
      <h3 class="fs-4 ms-4 text-start">
        <span id="products-text">Books</span>
      </h3>
      <button
        class="
          btn btn-warning
          me-4
          fw-semibold
          text-end
          d-flex
          align-items-center
          "
          data-bs-toggle="modal" data-bs-target="#staticBackdrop"
      >
        Add Book
      </button>
      <AddProducts/>
    </div>
    <div class="row row-cols-2 row-cols-md-4 mt-5 mb-3 me-2 ms-2 d-flex justify-content-center">
      
      <div
        class="row m-0 mt-lg-2 mt-md-0 mb-2 d-flex justify-content-center align-items-start"
          v-for="book in displayedData"
          :key="book._id"
          id="row-style"
      >
        <div
          class="card"
          id="card-s"
          style="width: 16rem"
        >
            <img :src="book.photoUrl" class="card-img-top h-50" alt="Image"/>
          <div class="card-body">
            <h5 class="card-title">
                <router-link class="card-links" :to="{name: 'ProductPage', params: { id: book._id}}">{{book.title}}</router-link>
              </h5>
            <strong class="cmimi-css">€{{ book.price }}</strong>
            <p class="card-text h-20">
            <!-- {{ book.pershkrim }} -->
            </p>
            <router-link :to="{name: 'ProductPage', params: { id: book._id}}" class="btn btn-dark mt-auto align-self-start" id="btn-css">
              Checkout
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <pagination
        :data="books"
        :perPage="itemsPerPage"
        :records="books.length"
        v-model="currentPage"
      ></pagination>
    </div>
    </div>
</template>

<script>
import AddProducts from './DashboardComponents/AddProducts.vue';
// import axios from 'axios';
// import { useToast } from "vue-toastification";
export default {
  components: {
    AddProducts
  },
  data() {
      return {
        itemsPerPage: 12,
        currentPage: 1, 
      };
  },
  computed: {
    displayedData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.books.slice(startIndex, endIndex);
    },

    books(){
      return this.$store.state.books;
    }
  },
  async mounted(){
    await this.$store.dispatch('fetchBooks');
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:#353535
}
#products-wrapper {
  min-height: 80vh;
}
#products-text {
  font-weight: 700;
  border-bottom: 3px solid #ffd447;
}
#rounded-style {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.border-name {
  border-bottom: 3px solid white;
}
.border-styles {
  border-bottom: 2px solid white;
}
@media only screen and (max-width: 991px) {
  .card-title{
    font-size: 15px !important;
  }
}

.card-title{
  font-family: "Poppins", sans-serif;
}
#card-s{
  border-right:1px solid whitesmoke;
  border-top:none;;
  border-bottom:1px solid whitesmoke;;
  border-left:none;;
}

.card:hover img {
  transform: scale(1.03);
}
.card img {
  transition: transform 0.6s ease-in-out;
  object-fit: cover;
  align-self: center;
  max-width:140px; 
  border-radius: 12px;
}
.cmimi-css{
  color:orange;
  font-family: "Comfortaa", cursive;
}
#btn-css{
  border:none;
  font-family: "Roboto", sans-serif;

}
#btn-css:hover,#btn-css:focus{
  color:black;
  background-color:white;

}
.card-links{
  text-decoration:none;
  color:black;
}
.card-links:hover{
  color:black;
}

</style>


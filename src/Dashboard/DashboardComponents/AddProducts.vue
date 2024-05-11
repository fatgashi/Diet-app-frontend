<template>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Product</h5>
            <button
              type="button"
              id="closebutton"
              class="btn-close btn-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="AddBook" class="text-white">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control bg-secondary text-white"
                  id="inputText1"
                  aria-describedby="textHelp"
                  placeholder="Title"
                  v-model="title"
                  autocomplete="off"
                  required
                />
                <label for="inputText1">Title</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  type="text"
                  class="form-control bg-secondary text-white"
                  id="inputText2"
                  aria-describedby="textHelp"
                  placeholder="Description"
                  autocomplete="off"
                  v-model="description"
                  
                  required
                ></textarea>
                <label for="inputText2">Description</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control bg-secondary text-white"
                  id="inputText3"
                  aria-describedby="textHelp"
                  placeholder="PhotoUrl"
                  autocomplete="off"
                  v-model="photoUrl"
                  required
                />
                <label for="inputText3">PhotoUrl</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control bg-secondary text-white"
                  id="inputText6"
                  aria-describedby="textHelp"
                  placeholder="Original Price"
                  autocomplete="off"
                  v-model.number="originalPrice"
                  required
                  step="any"
                />
                <label for="inputText4">Original Price</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control bg-secondary text-white"
                  id="inputText4"
                  aria-describedby="textHelp"
                  placeholder="Price"
                  autocomplete="off"
                  v-model="price"
                  required
                  step="any"
                />
                <label for="inputText4">Price</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control bg-secondary text-white"
                  id="inputText5"
                  aria-describedby="textHelp"
                  placeholder="Author Name"
                  autocomplete="off"
                  v-model="author"
                  required
                />
                <label for="inputText5">Author</label>
              </div>
              <div class="mb-3">
                <input
                class="form-control bg-secondary text-white"
                  type="file"
                  ref="fileInput"
                  id="formFile"
                  accept="application/pdf"
                />
              </div>
          <button type="submit" class="btn btn-warning " data-bs-dismiss="modal">Create</button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getCurrentUser } from '@/methods/userLogic';
  import configuration from '@/methods/config';
  export default {
    name: "EditProducts",
    data(){
      return {
        books: [],
        id: "",
        title: "",
        description: "",
        price: 0.0,
        photoUrl: "",
        author: "",
        originalPrice: 0.0
      }
    },
    methods: {
      async AddBook(){
        try {
          const config = configuration();
          const formData = new FormData();
          formData.append('title', this.title);
          formData.append('description', this.description);
          formData.append('photoUrl', this.photoUrl);
          formData.append('price', this.price);
          formData.append('originalPrice', this.originalPrice);
          formData.append('author', this.author);
          formData.append('pdfFiles', this.$refs.fileInput.files[0]);
          const user = await getCurrentUser();
          if(user){
            const response = await this.$axios.post(`/books/addBook`, formData, config).then(res => {
              return res.data;
            });

  
            await this.$store.dispatch('fetchBooks');

            this.$toast.success(response.message);


  
          }
          
          
        } catch(err){
          this.$toast.error(err.response.data.message);
        }
      }
    },
  };
  </script>
  
  <style>
  
  </style>
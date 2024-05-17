<template>
<div class="modal fade" ref="myModal" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content  ">
      <div class="modal-header" id="modalheader">
        <h5 class="modal-title " id="exampleModalToggleLabel2">Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
       <form @submit.prevent="register">

            <div class=" form-floating mb-3">
                <input type="text" class="form-control  " id="inputRegisterName" placeholder="Name" autocomplete="off" v-model="name"  required />
                <label for="inputRegisterEmail">Name</label>
            </div>
            <div class=" form-floating mb-3">
                <input type="text" class="form-control  " id="inputRegisterSurname" placeholder="Surname" autocomplete="off" v-model="surname"  required />
                <label for="inputRegisterEmail">Surname</label>
            </div>
            <div class=" form-floating mb-3">
                <input type="text" class="form-control  " id="inputRegisterUsername" placeholder="Username" autocomplete="off" v-model="username"  required />
                <label for="inputRegisterEmail">Username</label>
            </div>
            <div class=" form-floating mb-3">
                <input type="email" class="form-control  " id="inputRegisterEmail" placeholder="Email" autocomplete="off"  v-model="email"  required />
                <label for="inputRegisterEmail">Email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control  " id="inputRegisterPassword" placeholder="Password" v-model="password"  required />
                <label for="inputRegisterPassword">Password</label>
            </div>
            <button type="submit" style="background-color: #004080" class="btn text-white">Register</button>
        </form>
      </div>
      <div class="modal-footer" id="modalfooter">
        <button class="btn text-white" style="background-color: #004080"  data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to Login</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { Modal } from 'bootstrap';

export default {
    name: "RegisterModal",
    data(){
      return {
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        modal: null,
      }
    },

    methods: {
      async register(){
        try {
          await this.$axios.post(`/user/register`, {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            username: this.username
          }).then(res => {

            this.$toast.success(res.data.message);
          })

          this.modal.hide();

          this.name = "";
          this.surname = "";
          this.username = "";
          this.email = "";
          this.password = "";
            
        } catch (err){
          const keys = Object.keys(err.response.data);
          
          var firstError = keys[0];
          this.$toast.error(err.response.data[firstError]);
          
        }

        }
    },

    mounted(){
      // eslint-disable-next-line
      this.modal = new Modal(this.$refs.myModal);
    }
}
</script>

<style scoped>
.modal-dialog{
  font-family: "Roboto", sans-serif;
}
  #modalheader{
    border:none !important;
  }
  #modalfooter{
    border:none !important;
    justify-content:start;
  }
  #exampleModalToggleLabel2{
    border-bottom:1px solid black;
  }
</style>
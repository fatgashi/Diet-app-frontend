<template>
    <div class="modal fade" ref="myModal" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content  ">
          <div class="modal-header" id="modalheader">
            <h5 class="modal-title " id="exampleModalToggleLabel2">Register</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
           <form @submit.prevent="register">
    
                <div class=" form-floating mb-3">
                    <input type="text" class="form-control  " id="inputRegisterName" placeholder="Name" minlength="2" autocomplete="off" v-model="name"  required />
                    <label for="inputRegisterEmail">Name</label>
                </div>
                <div class=" form-floating mb-3">
                    <input type="text" class="form-control" id="inputRegisterSurname" minlength="3" placeholder="Surname" autocomplete="off" v-model="surname"  required />
                    <label for="inputRegisterEmail">Surname</label>
                </div>
                <div class=" form-floating mb-3">
                    <input type="text" class="form-control" id="inputRegisterUsername" minlength="4" placeholder="Username" autocomplete="off" v-model="username"  required />
                    <label for="inputRegisterEmail">Username</label>
                </div>
                <div class=" form-floating mb-3">
                    <input type="email" class="form-control" id="inputRegisterEmail" placeholder="Email" autocomplete="off"  v-model="email"  required />
                    <label for="inputRegisterEmail">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="inputRegisterPassword" minlength="8" placeholder="Password" v-model="password"  required />
                    <label for="inputRegisterPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="inputRegisterRePassword" minlength="8" placeholder="Confirm Password" v-model="confirmPassword" required />
                    <label for="inputRegisterPassword">Confirm Password</label>
                </div>
              <div id="emailHelp" class="form-text mb-3">Your data are secure with us!</div>
                <button type="submit" style="background-color: #004080" class="btn text-white">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
    
<script>
  import { Modal } from 'bootstrap';

export default {
  name: "RegisterPredictionModal",
  props: ["dietType"],
    data(){
      return {
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        modal: null,
        answersArray: []
      }
    },

methods: {
  async register(){
    if (this.password !== this.confirmPassword) {
        this.$toast.error('Passwords do not match.');
        return;
    }
    try {
      let response = await this.$axios.post(`/user/register`, {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        username: this.username,
        answers: this.$store.state.answers,
        dietType: this.dietType
      }).then(res => {
        this.$toast.success(res.data.message);
        return res.data;
      })
      this.$store.dispatch('updateToken', response.token);
      this.$store.dispatch('updateLogged', true);
      this.$emit('login');
      this.$setupSessionTimeout();
      this.$router.replace({path: '/client-dashboard'});

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
      this.modal = new Modal(this.$refs.myModal);
    }
}
</script>
    
    <style>
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
        border-bottom:1px solid orange;
      }
    </style>
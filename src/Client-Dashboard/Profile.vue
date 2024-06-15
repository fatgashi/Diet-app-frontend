<template>
    <div class="mt-5">
        <h1 class="fw-bolder">Profile</h1>
        <div class="text-start">
            <p class="fw-bold">Update your profile!</p>
            <p class="text-muted"><span class="text-warning">Warning:</span> You can update your profile only once a month!</p>
        </div>
        <form @submit.prevent="updateProfile">
            <div class="row">
                <div class="row mt-lg-2 mt-md-0 d-flex justify-content-center align-items-start">
                    <div class="row row-cols-1 row-cols-md-2 mt-1 mb-1 d-flex justify-content-center">
                        <div class="form-floating mt-1">
                            <input type="text" class="form-control" id="floatingInput1" v-model="name" placeholder="Name">
                            <label for="floatingInput1">Name</label>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="text" class="form-control" id="floatingPassword1" v-model="surname" placeholder="Surname">
                            <label for="floatingPassword1">Surname</label>
                        </div>
                    </div>
                </div>
                <div class="row mt-lg-2 mt-md-0 d-flex justify-content-center align-items-start">
                    <div class="row row-cols-1 row-cols-md-2 mt-1 d-flex justify-content-center">
                        <div class="form-floating mt-1">
                            <input type="text" class="form-control" id="floatingUsername" v-model="username" placeholder="Username">
                            <label for="floatingUsername">UserName</label>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="email" class="form-control" id="floatingEmail" v-model="email" placeholder="Email">
                            <label for="floatingEmail">Email address</label>
                        </div>
                    </div>
                </div>
                <div class="row mt-lg-2 mt-md-0 d-flex justify-content-center align-items-start">
                    <div class="row row-cols-1 row-cols-md-2 mt-1 mb-3 d-flex justify-content-center">
                        <div class="form-floating mt-1">
                            <input type="text" disabled class="form-control" v-model="createdAtDate" id="floatingCreated" placeholder="Created">
                            <label for="floatingCreated">Account Created At</label>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="text" class="form-control" disabled id="floatingUpdated" v-model="updatedAtDate" placeholder="Updated">
                            <label for="floatingUpdated">Updated At</label>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-5 mt-3">
                    <input type="submit" class="btn btn-success" value="Update Profile">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import configuration from '../config/config';

export default {
    data(){
        return {
            name: "",
            surname: "",
            username: "",
            email: "",
            createdAt: "",
            updatedAt: ""
        }
    },
    methods: {
        async updateProfile(){
            await this.$axios.post("/user/updateProfile", {
                name: this.name,
                surname: this.surname,
                email: this.email,
                username: this.username
            }, configuration()).then(res => {
                this.$toast.success(res.data.message)
            }).catch(err => {
                this.$toast.error(err.response.data.message)
            })
        }
    },
    computed: {
        createdAtDate(){
            const created = new Date(this.createdAt)
            return created.toLocaleString();
        },
        updatedAtDate(){
            const updated = new Date(this.updatedAt);            
            return updated.toLocaleString();
        }
    },
    async mounted(){
        await this.$axios.get("/user/profile", configuration()).then(res => {
            this.name = res.data.name;
            this.surname = res.data.surname;
            this.username = res.data.username;
            this.email = res.data.email;
            this.createdAt = res.data.createdAt;
            this.updatedAt = res.data.updatedAt;
        }).catch(err =>{
            return err.message
        })
    }
}
</script>

<style scoped>
.form-floating>label {
    left: auto !important;
}
</style>
<template>
<div>
    <h1 class="fw-bolder">User List</h1>
    <div class="unit-toggle d-flex">
      <button class="border-0 btn" :class="{ active: desc }" @click="sortBy('createdAt', 'desc'), desc = true">Sort by Latest</button>
      <button class="border-0 btn" :class="{ active: !desc }" @click="sortBy('createdAt', 'asc'), desc = false">Sort by Oldest</button>
    </div>

    <div class="table-responsive mt-4 mb-4"> 
    <table class="table table-dark table-hover caption-top">
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users.users" :key="user._id">
                <td>{{user.name}}</td>
                <td>{{user.surname}}</td>
                <td>{{user.email}}</td>
                <td><button type="button" class="btn btn-warning btn-sm">Edit</button> </td>
            </tr>

       
        </tbody>
    </table>
    <!-- <EditUsers :uid="id"/> -->

    <pagination
      :value="paginationData.current_page"
      @input="fetchUsers"
      :perPage="paginationData.per_page"
      :records="paginationData.total"
    ></pagination>
  </div>
  </div>
</template>

<script>
import Pagination from 'vue-pagination-2';
import configuration from '../config/config';

export default {
  components: {
    Pagination
  },
  data() {
    return {
      users: [],
      sort: 'createdAt:desc',
      limit: 10,
      desc: true,
      paginationData: {
        total: 0,
        per_page: 10,
        current_page: 1,
        last_page: 1,
        from: 1,
        to: 10
      }
    };
  },
  methods: {
    async fetchUsers(page = 1) {
      const skip = (page - 1) * this.limit;
      await this.$axios.get(`/user/getUsers?sort=${this.sort}&limit=${this.limit}&skip=${skip}`, configuration())
        .then(data => {
          this.users = data.data;
          
          this.paginationData.total = data.data.total; // Total number of users
          this.paginationData.current_page = page;
          this.paginationData.last_page = Math.ceil(data.data.total / this.limit);
        });
    },
    sortBy(field, order) {
      this.sort = `${field}:${order}`;
      this.fetchUsers();
    }
  },
  async created() {
    await this.fetchUsers();
  }
};

</script>

<style>

.unit-toggle button.active {
  /* styles for the active unit button */
  background-color: #004080;
  color: white;
}

</style>
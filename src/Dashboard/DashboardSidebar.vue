<template>
  <div class="container-fluid m-0 p-0 d-flex menu-opener  " :class="{ toggled: opened }" id="wrapper">
    <!-- Sidebar -->
    <div class="sidebar-bg bg-dark" id="sidebar-wrapper">
      <div class="sidebar-heading text-start text-white fw-bold pb-0 p-4">
        <router-link to="/home" class="navbar-brand"><span class="fs-2 d-none d-sm-inline" id="logospan">Dental Library</span>
        </router-link>
        <hr />
      </div>
      <div class="list-group list-group-flush my-3 text-white">
        <router-link to="/dashboard" class="
            list-group-item list-group-item-action
            bg-transparent
            fw-bold
            d-flex
            align-items-center
          ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-speedometer2 me-2" viewBox="0 0 16 16">
            <path
              d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
            <path fill-rule="evenodd"
              d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
          </svg>

          <span>Dashboard</span>
        </router-link>
        <router-link to="/dashboard/messages" class="
            list-group-item list-group-item-action
            bg-transparent
            fw-bold
            d-flex
            align-items-center
          ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-boxes me-2"
            viewBox="0 0 16 16">
            <path
              d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
          </svg>

          <span>Messages</span>
        </router-link>
        <router-link to="/dashboard/products" class="
            list-group-item list-group-item-action
            bg-transparent
            fw-bold
            d-flex
            align-items-center
          ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam me-2"
            viewBox="0 0 16 16">
            <path
              d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
          </svg>
          <span>Products</span>
        </router-link>
        <!-- <router-link to="/customers" class="
            list-group-item list-group-item-action
            bg-transparent
            fw-bold
            d-flex
            align-items-center
            disabled
          ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people me-2"
            viewBox="0 0 16 16">
            <path
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>

          <span>Customers</span>
        </router-link> -->
        <!-- <router-link class="
            list-group-item list-group-item-action
            bg-transparent
            fw-bold
            d-flex
            align-items-center
            menu-closer
          " to="/users">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person me-2"
            viewBox="0 0 16 16">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          <span>Users</span>
        </router-link> -->
        <!-- <router-link class="
            list-group-item list-group-item-action
            bg-transparent
            fw-bold
            d-flex
            align-items-center
            menu-closer
          " to="/warehouses">
          <svg xmlns="http://www.w3.org/2000/svg" class="bi me-2" fill="currentColor" viewBox="0 0 640 512" width="16"
            height="16"> -->
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <!-- <path
              d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z" />
          </svg>
          <span>Warehouses</span>
        </router-link> -->
        <!-- <router-link class="
            list-group-item list-group-item-action
            bg-transparent
            fw-bold
            d-flex
            align-items-center
            menu-closer
          " to="/roles">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person me-2"
            viewBox="0 0 16 16">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          <span>Roles</span>
        </router-link> -->
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper" class="bg-light">
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-4 px-4">
        <div class="d-flex align-items-center">
          <button class="btn outline-0 border-0" @click="toggleSidebar()">
            <i class="fas fa-align-left fs-4 me-3"></i>
          </button>
          <h2 class="fs-4 fw-light m-0">Dashboard</h2>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown dropstart">
              <a class="nav-link dropdown-toggle second-text m-2" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user me-2"></i><span class="fw-bolder text-warning">{{ user.name }}</span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link to="/home" class="dropdown-item">Home</router-link></li>
                <!-- <li><a class="dropdown-item" href="#">Settings</a></li> -->
                <li><button class="dropdown-item" @click="signOut">Logout</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid px-4 bg-light">
        <div class="row g-3 my-2 bg-white">
          <DashboardContent />
        </div>
      </div>
    </div>
  </div>
  <!-- /#page-content-wrapper -->
</template>

<script>
import DashboardContent from "./DashboardContent.vue";
import {  getCurrentUser } from '@/config/userLogic';
import { removeToken } from '@/config/localStorage';

export default {
  components: {
    DashboardContent,
  },
  data() {
    return {
      opened: false,
      user: [],
    };
  },

  methods: {
    toggleSidebar() {
      this.opened = !this.opened;
    },
    async signOut() {
        try {
          await this.$axios.post(`/users/logout`);
          this.$router.replace({path: '/home'});
          removeToken();
          this.loggedIn = false;
          
        } catch (err) {
          this.error = err.mesagge;
        }
      },
    async getUser(){
      this.user = await getCurrentUser();
    }
  },
  async mounted(){
    this.getUser();
  },
};
</script>

<style scoped>
#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}
#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}
#sidebar-wrapper .list-group {
  width: 15rem;
}
#page-content-wrapper {
  min-width: 100vw;
}
#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}
#menu-toggle {
  cursor: pointer;
}
.list-group-item {
  border: none;
  padding: 20px 30px;
  color:white;
}
.list-group-item:hover{
  color:antiquewhite;
}
.active {
  background-color: #ffd447 !important;
  color: white !important;
}

.active:hover {
  color: #353535 !important;
  transition: all 0.55s;
}

@media (min-width: 970px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
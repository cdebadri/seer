<template>
<div>
    <nav class="navbar navbar-expand-sm theme-dark navbar-dark justify-content-center">
  <ul class="navbar-nav">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Tracking</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/exceptions">Exceptions</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/people">People</router-link>
    </li>
    <!-- <li class="nav-item">
      <router-link class="nav-link" to="/messages">Messages</router-link>
    </li> -->
    <li>
      <!-- <Button icon="pi pi-arrow-right" :click="visibleLeft = true" class="p-mr-2" /> -->
      <Button label="Register" icon="pi pi-arrow-right" @click="openNav" class="p-mr-2" />
          </li>
  </ul>
</nav>
<div id="mySidenav" class="sidenav">
  <Register/>
</div>

    </div>
</template>

<script>
import Register from '@/components/Register.vue';
import Button from 'primevue/button';

export default {
  components: {
    Register,
    Button,
  },
  data() {
    return {
      visibleLeft: false,
    };
  },
  methods: {
    openNav() {
      document.getElementById('mySidenav').style.width = '100%';
      document.getElementById('mySidenav').style.backgroundColor = 'rgba(0,0,0,0.4)';
    },
  },
};
</script>
<style scoped>
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 3000; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
/* On smaller screens, where height is less than 450px */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
}
</style>

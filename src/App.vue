<template>
  <div id="app">
    <div id="nav">
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin:0;
  overflow-x: hidden;
}

/* #nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}*/
.nav-item {
  width: 100px;
}
#nav a.router-link-exact-active {
  color: white;
}
</style>

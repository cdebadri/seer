<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
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
  margin: 0;
  overflow-x: hidden;
}
body{
  font: small-caps bold Georgia, serif !important;
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
.page {
  margin: 0 !important;
}
.theme-dark {
  background: linear-gradient(125deg,
  rgba(1,182,230),
  rgba(99,228,23));
  /* background: linear-gradient(
    125deg,
    rgba(181, 4, 196, 0.9948354341736695) 0%,
    rgba(1, 182, 230, 0.9976365546218487) 100%
  ); */
}
.theme-light {
  background: linear-gradient(
    125deg,
    rgba(1, 182, 230, 0.4),
    rgba(99, 228, 23, 0.4)
  );
}
.ui-slider-track {
  height: 10px !important;
}
.ui-rangeslider .ui-rangeslider-sliders .ui-slider-track:first-child {
  height: 10px;
}
.ui-slider-track .ui-btn.ui-slider-handle {
  border-radius: 50%;
  position: absolute;
    z-index: 1;
    top: 50%;
    width: 15px;
    height: 15px;
    /* margin: -15px 0 0 -15px; */
    margin-top: -6px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -7px;
    outline: 0;
    outline-color: initial;
    outline-style: initial;
    outline-width: 0px;
    padding: 0;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
}
.ui-rangeslider .ui-rangeslider-sliders {
    position: relative;
    overflow: visible;
    height: 30px;
    margin: 0 68px;
    margin-top: -40px;
    margin-right: 6px;
    margin-bottom: 0px;
    margin-left: 6px;
}
.ui-page-theme-a .ui-btn.ui-btn-active, html .ui-bar-a .ui-btn.ui-btn-active, html
.ui-body-a .ui-btn.ui-btn-active, html body .ui-group-theme-a .ui-btn.ui-btn-active,
html head+body .ui-btn.ui-btn-a.ui-btn-active, .ui-page-theme-a .ui-checkbox-on:after,
html .ui-bar-a .ui-checkbox-on:after, html .ui-body-a .ui-checkbox-on:after,
html body .ui-group-theme-a .ui-checkbox-on:after, .ui-btn.ui-checkbox-on.ui-btn-a:after,
.ui-page-theme-a .ui-flipswitch-active, html .ui-bar-a .ui-flipswitch-active,
html .ui-body-a .ui-flipswitch-active, html body .ui-group-theme-a .ui-flipswitch-active,
html body .ui-flipswitch.ui-bar-a.ui-flipswitch-active, .ui-page-theme-a .ui-slider-track
.ui-btn-active, html .ui-bar-a .ui-slider-track .ui-btn-active, html .ui-body-a
.ui-slider-track .ui-btn-active, html body .ui-group-theme-a .ui-slider-track
.ui-btn-active, html body div.ui-slider-track.ui-body-a .ui-btn-active {
    background: linear-gradient(125deg,
  rgba(1,182,230),
  rgba(99,228,23));
    border-color: #38c;
    color: #fff;
    text-shadow: 0 1px 0 #059;
}
.ui-overlay-a, .ui-page-theme-a, .ui-page-theme-a .ui-panel-wrapper {
  background-color: white;
}
[data-role="page"] {
  min-height: 10px !important;
}
.font {
  font: small-caps bold 40px/50px Georgia, serif;
}
</style>

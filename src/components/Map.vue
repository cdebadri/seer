<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      tileLayer: [],
    };
  },
  mounted() {
    this.initMap();
    this.initTileLayers();
  },
  methods: {
    initMap() {
      this.map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 10,
      });
    },
    initTileLayers() {
      this.tileLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ).addTo(this.map);
    },
  },
};
</script>

<style>
#map {
  height: 50vh;
  width: 100%;
}
</style>

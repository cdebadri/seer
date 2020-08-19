<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';
import redMarker from '@/assets/map_marker_red.png';
import blueMarker from '@/assets/map_marker_blue.png';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      tileLayer: [],
    };
  },
  props: {
    markers: {
      default: [],
    },
    center: {
      default: [51.505, -0.09],
    },
    zoom: {
      default: 10,
    },
    triggerOnClick: {
      type: Function,
    },
  },
  mounted() {
    this.initMap();
    this.initTileLayers();

    if (this.markers.length > 0) {
      this.addMarkers();
    }
  },
  methods: {
    initMap() {
      this.map = L.map('map', {
        center: this.center,
        zoom: this.zoom,
        minZoom: 5,
      });
    },
    initTileLayers() {
      this.tileLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ).addTo(this.map);
    },
    addMarkers() {
      this.markers.forEach((marker, index) => {
        const icon = L.icon({
          iconUrl: marker.critical ? blueMarker : redMarker,
          iconSize: [30, 50],
        });

        const currentMarker = L.marker(marker.coordinates, { icon, title: `${marker.name}` })
          .bindPopup(`
            <div><b>Name:</b>${marker.name}</div>
            <div><b>RegistrationID:</b>${marker.registrationId}</div>
          `)
          .addTo(this.map)
          .on('click', () => this.triggerOnClick(marker.registrationId));

        if (marker.isSelected) {
          currentMarker.openPopup();
        }
      });
    },
  },
};
</script>

<style>
#map {
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
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
      default: function () { return [51.505, -0.09] },
    },
    zoom: {
      default: 10,
    },
    triggerOnClick: {
      type: Function,
    },
    deselect: {
      type: Function,
    },
  },
  watch: {
    markers() {
      if (this.markers.length > 0) {
        this.addMarkers();
        this.center = this.markers[0];
      }
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
        maxZoom: 5,
      });
    },
    initTileLayers() {
      this.tileLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ).addTo(this.map);
    },
    addMarkers() {
      const bounds = L.latLngBounds();
      this.markers.forEach((marker) => {
        const icon = L.icon({
          iconUrl: marker.critical ? blueMarker : redMarker,
          iconSize: [30, 50],
        });

        const currentMarker = L.marker(
          marker.coordinates,
          {
            icon,
            title: `${marker.name}`,
          },
          {
            autoClose: false,
            keepInView: true,
          },
        )
          .bindPopup(
            `
            <div><b>Name:</b>${marker.name}</div>
            <div><b>email:</b>${marker.email}</div>
          `,
            {
              closeOnClick: false,
            },
          )
          .on('click', () => {
            this.triggerOnClick(marker.email);
          })
          .addTo(this.map);

        if (marker.isSelected) {
          currentMarker.openPopup();
          /**
           * as lealfet fires a popupclose event after every click event.
           * cannot use popupclose for that
           * */

          currentMarker._popup._closeButton.onclick = this.deselect;
        }
        bounds.extend(marker.coordinates);
      });

      this.map.fitBounds(bounds);
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

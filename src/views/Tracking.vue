<template>
  <div v-if="loaded">
    <div class="row">
      <div class="col-4 p-shadow-4 fullscreen">
        <div
          class="card theme-light"
          v-for="people in trackingInfo"
          :key="people.registrationId"
          v-bind:class="{selected: people.isSelected}"
          v-on:click="() => selectPerson(people.registrationId)"
        >
          <div class="card-title">{{ people.registrationId }}</div>
          <div class="card-text">
            <div>{{ people.name }}</div>
          </div>
        </div>
      </div>
      <div class="col-8 p-shadow-4 fullscreen">
        <Map :markers="trackingInfo" :triggerOnClick="selectPerson" :deselect="deSelectMarkers" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="fullscreen">
      <progress-spinner />
    </div>
  </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';
import Map from '@/components/Map.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    Map,
    ProgressSpinner,
  },
  computed: {
    ...mapState({
      loaded: (state) => state.loaded,
      trackingInfo: (state) => state.tracking.trackingInfo,
    }),
  },
  methods: {
    ...mapActions('tracking', ['getPeopleInformation', 'selectPerson']),
    ...mapMutations('tracking', ['deSelectMarkers']),
  },
  mounted() {
    this.getPeopleInformation();
  },
};
</script>

<style scoped>
.row {
  margin: 5px;
  padding: 5px;
}
.fullscreen {
  height: 80vh;
}
.selected {
  background-color: blueviolet;
  color: antiquewhite;
}
</style>

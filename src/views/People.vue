<template>
  <div v-if="loaded" class="row page">
    <div id="register" class="col-2 p-0">
      <PeopleSearch/>
    </div>
    <div v-if="currentperson !== ''" class="col-4">
      <div class="p-shadow-4">
        <PeopleProfile/>
        </div>
      </div>
    <div v-if="currentperson !== ''" class="col-6">
      <div  class="p-shadow-4">
        <div class="row">
          <SearchBar
            :value="mapSearchValue"
            :updateValue="updateValue"
          />
        </div>
        <div class="">
          <div class="col" style="height:50vh;">
            <Map :markers="markers" />
          </div>
        </div>
        <div style="height:28vh">
          <Charts/>
        </div>
      </div>
    </div>
    <div v-if="currentperson === ''" class="col-10" style="color:grey">
      <h3 class="p-3 pt-5 mt-5">Select a person to see details</h3>
      <i class="fa fa-search fa-10x" aria-hidden="true"></i>
      </div>
  </div>
  <div v-else>
    <div class="fullscreen">
      <progress-spinner />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PeopleSearch from '@/components/PeopleSearch.vue';
import PeopleProfile from '@/components/PeopleProfile.vue';
import Map from '@/components/Map.vue';
import Charts from '@/components/Charts.vue';
import SearchBar from '@/components/SearchBar.vue';
import { mapState, mapMutations,mapActions } from 'vuex';
import ProgressSpinner from 'primevue/progressspinner';
import _ from 'lodash';

export default {
  name: 'People',
  components: {
    PeopleSearch, Map, Charts, SearchBar, PeopleProfile, ProgressSpinner
  },
  computed: {
    ...mapState({
      mapSearchValue: (state) => state.tracking.mapSearchValue,
      currentperson: (state) => state.people.currentperson,
      loaded: (state) => state.people.loaded,
    }),
  },
  methods: {
    ...mapMutations([
      'updateMapSearchValue',
    ]),
    ...mapActions(['getAllPeople']),
    updateValue(value) {
      this.updateMapSearchValue(value);
    },
  },
  mounted() {
    this.getAllPeople();
  },
  watch: {
    currentperson() {
      if(this.currentperson && _.has(this.currentperson, 'tracking.locations')) {
        this.markers = this.currentperson.tracking.locations.map(item => ({
          coordinates: [Number(item.latitude), Number(item.longitude)],
          critical: false
        }));
      }
    }
  },
  data() {
    return {
      markers: [],
    };
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
</style>

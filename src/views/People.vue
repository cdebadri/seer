<template>
  <div class="row page">
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
</template>

<script>
// @ is an alias to /src
import PeopleSearch from '@/components/PeopleSearch.vue';
import PeopleProfile from '@/components/PeopleProfile.vue';
import Map from '@/components/Map.vue';
import Charts from '@/components/Charts.vue';
import SearchBar from '@/components/SearchBar.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'People',
  components: {
    PeopleSearch, Map, Charts, SearchBar, PeopleProfile,
  },
  computed: {
    ...mapState({
      mapSearchValue: (state) => state.tracking.mapSearchValue,
      currentperson: (state) => state.people.currentperson,
    }),
  },
  methods: {
    ...mapMutations([
      'updateMapSearchValue',
    ]),
    updateValue(value) {
      this.updateMapSearchValue(value);
    },
  },
  data() {
    return {
      markers: [
        {
          coordinates: [51.510, -0.08],
          critical: false,
        },
        {
          coordinates: [51.530, -0.06],
          critical: true,
        },
      ],
    };
  },
};

</script>

<style scoped>
.row {
  margin: 5px;
  padding: 5px;
}
</style>

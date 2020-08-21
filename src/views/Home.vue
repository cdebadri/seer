<template>
  <div class="row">
    <div class="col-4">
      <Register/>
    </div>
    <div class="col-8">
      <div class="p-shadow-4">
        <div class="row">
          <SearchBar
            :value="mapSearchValue"
            :updateValue="updateValue"
          />
        </div>
        <div class="row">
          <div class="col" style="height:50vh;">
            <Map />
          </div>
        </div>
        <div class="row" style="height:50vh">
          <Charts/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue';
import Map from '@/components/Map.vue';
import Charts from '@/components/Charts.vue';
import SearchBar from '@/components/SearchBar.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    Register, Map, Charts, SearchBar,
  },
  computed: {
    ...mapState([
      'mapSearchValue',
    ]),
  },
  methods: {
    ...mapMutations([
      'updateMapSearchValue',
    ]),
    updateValue(value) {
      this.updateMapSearchValue(value);
    },
  },
};
</script>

<style scoped>
.row {
  margin: 5px;
  padding: 5px;
}
</style>

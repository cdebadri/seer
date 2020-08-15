<template>
  <div class="row">
    <div class="col-4 bg-info">
      <Register/>
    </div>
    <div class="col">
      <div class="row bg-warning" style="height:350px">
        <Map/>
      </div>
      <div class="row bg-success" style="height:2000px">
        <Charts/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue';
import Map from '@/components/Map.vue';
import Charts from '@/components/Charts.vue';

export default {
  name: 'Home',
  components: {
    Register, Map, Charts,
  },
};
</script>

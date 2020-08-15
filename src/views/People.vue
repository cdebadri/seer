<template>
  <div class="row" style="height:550px">
    <div class="col-3">
      <PeopleSearch style="background-color: white; height:100%" />
    </div>
    <div class="col">
      <PeopleProfile />
    </div>
  </div>
</template>
<script>
import PeopleSearch from '@/components/PeopleSearch.vue';
import PeopleProfile from '@/components/PeopleProfile.vue';

export default {
  name: 'People',
  components: {
    PeopleSearch,
    PeopleProfile,
  },
};
</script>

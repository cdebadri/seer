<template>
  <div class="card" style="text-align:left; font-weight:bold">
    <h4 class="theme-light p-4">Personal Details</h4>
    <div class="p-2">
    <div>Name: {{ getCurrentPerson.name}}</div>
    <div>Email: {{ getCurrentPerson.email}}</div>
    <div>Contact Number: {{ getCurrentPerson.phone}}</div>
    <div>Current age: {{ getCurrentPerson.age}}</div>
    </div>

    <h4 class="theme-light p-4">Address</h4>
    <div class="p-2">{{ getCurrentPerson.address}}</div>

    <h4 class="theme-light p-4">Symptoms</h4>
    <div  class="p-2">
    <div v-for="i in getCurrentPerson.symptoms" :key="i.msg">{{ i}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      getCurrentPerson: (state) => state.people.currentperson,
    }),
  },
};
</script>

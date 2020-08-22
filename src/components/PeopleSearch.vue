<template>
  <div>
    <div class="input-group md-form form-sm form-1 p-2 pt-4 shadow">
      <input
        class="form-control my-0 py-1 amber-border"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="input-group-append">
        <span class="input-group-text amber lighten-3" id="basic-text1">
          <i class="fas fa-search text-grey" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <br />
    <div id="list" style="height: 450px;overflow: auto;">
      <div
        id="listbox"
        v-for="people in getPeopleList" :key="people.msg"
        v-on:click="activePerson(people)"
        class="row m-1 p-3 theme-light">
        <h5>{{people.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PeopleSearch',
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  computed: {
    ...mapState({
      getPeopleList: (state) => state.people.people,
    }),
  },
  methods: {
    ...mapActions(['activePerson']),
  },
};
</script>

<style scoped>
.input-group.md-form.form-sm.form-1 input {
  border: 1px solid #ffca28;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.input-group.md-form.form-sm.form-1 input.amber-border {
  border: 1px solid #ffca28;
}
.input-group-text {
  background-color: #ffca28;
  border: #ffca28;
}
#listbox {
  height: 100px;
  width: 100%;
  color: black;
  border-radius:10px;
}
#list :hover {
  background-color: blueviolet;
}
</style>

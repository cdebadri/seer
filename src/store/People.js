import * as api from '../api';
import _ from 'lodash';

export default {
  state: {
    people: [],
    currentperson: {},
    loaded: false,
  },
  mutations: {
    SET_ACTIVE_PERSON(state, currentperson) {
      state.currentperson = currentperson;
    },
    startAPIcall(state) {
      state.loaded = false;
    }
  },
  actions: {
    activePerson(context, currentperson) {
      context.commit('SET_ACTIVE_PERSON', currentperson);
    },
    async getAllPeople({ commit, state }) {
      let data = await api.getPeopleInformation();
      data = await data.json();
      const sanitizedData = [];
      data.forEach(item => {
        if(_.has(item, 'tracking.locations')) {
          sanitizedData.push(item);
        }
      })
      state.people = sanitizedData;
      state.loaded = true;
      
      if(data.length > 0) {
        commit('SET_ACTIVE_PERSON', data[0])
      }
    }
  },
  getters: {
  },
};

import * as api from '../api';

export default {
  state: () => ({
    trackingInfo: [],
    loaded: false,
    searchRadius: 10,
    searchTerm: '',
    error: null,
  }),
  mutations: {
    deSelectMarker(state) {
      state.trackingInfo = state.trackingInfo.map((people) => ({
        ...people,
        isSelected: false,
      }));
    },
    selectMarker({ state, commit }, registrationId) {
      commit('deSelectMarker');
      state.trackingInfo = state.trackingInfo.map((people) => ({
        ...people,
        isSelected: people.registrationId === registrationId,
      }));
    },
    setTrackingInfo(state, { data, error }) {
      state.trackingInfo = data;
      state.loaded = data.length > 0;
      state.error = error;
    },
    updateSearch(state, { searchRadius, searchTerm }) {
      state.searchTerm = searchTerm;
      state.searchRadius = searchRadius;
    },
  },
  actions: {
    getPeopleInformation({ commit }) {
      try {
        let data = api.getPeopleInformation();

        data = data.map((people) => ({
          ...people,
          isSelected: false,
        }));
        commit('setTrackingInfo', { data, error: null });
      } catch (error) {
        commit('setTrackingInfo', { data: [], error });
      }
    },
  },
};

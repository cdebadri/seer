/* eslint-disable no-param-reassign */
import * as api from '../api';

export default {
  namespaced: true,
  state: () => ({
    trackingInfo: [],
    searchRadius: 10,
    searchTerm: '',
  }),
  mutations: {
    deSelectMarkers(state) {
      const trackingInfo = state.trackingInfo.map((people) => ({
        ...people,
        isSelected: false,
      }));

      state.trackingInfo = trackingInfo;
    },
    selectMarker(state, registrationId) {
      const trackingInfo = state.trackingInfo.map((people) => ({
        ...people,
        isSelected: people.registrationId === registrationId,
      }));

      state.trackingInfo = trackingInfo;
    },
    setTrackingInfo(state, { data }) {
      state.trackingInfo = data;
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

        commit('setTrackingInfo', { data });
        commit('pageLoaded', { startPolling: true, error: false }, { root: true });
      } catch (error) {
        commit('setTrackingInfo', { data: [] });
        commit('pageLoaded', { startPolling: false, error: true }, { root: true });
      }
    },
    selectPerson({ commit }, registrationId) {
      commit('deSelectMarkers');
      commit('selectMarker', registrationId);
    },
  },
};

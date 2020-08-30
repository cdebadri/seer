/* eslint-disable no-param-reassign */
import * as api from '../api';

export default {
  namespaced: true,
  state: () => ({
    trackingInfo: [],
    searchRadius: 10,
    searchTerm: '',
    startPolling: false,
    loaded: false,
    error: false,
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
    pageLoaded(state, { startPolling, error, loaded }) {
      state.startPolling = startPolling;
      state.loaded = loaded || startPolling;
      state.error = error;
    },
  },
  actions: {
    getPeopleInformation({ commit, dispatch, state }) {
      commit('pageLoaded', { startPolling: state.startPolling, error: false, loaded: false });

      try {
        let data = api.getPeopleInformation();
        data = data.map((people) => ({
          ...people,
          isSelected: false,
        }));

        commit('setTrackingInfo', { data });
        commit('pageLoaded', { startPolling: true, error: false, loaded: true });

        // needed for polling
        dispatch('keepPolling', 'tracking/getPeopleInformation', { root: true });
      } catch (error) {
        commit('setTrackingInfo', { data: [] });
        commit('pageLoaded', { startPolling: false, error: true, loaded: false });
      }
    },
    selectPerson({ commit }, registrationId) {
      commit('deSelectMarkers');
      commit('selectMarker', registrationId);
    },
  },
};

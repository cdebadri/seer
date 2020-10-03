/* eslint-disable no-param-reassign */
import * as api from '../api';
import _ from 'lodash';

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
    selectMarker(state, email) {
      const trackingInfo = state.trackingInfo.map((people) => ({
        ...people,
        isSelected: people.email === email,
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
    async getPeopleInformation({ commit, dispatch, state }) {
      commit('pageLoaded', { startPolling: state.startPolling, error: false, loaded: false });
      try {
        let data = await api.getPeopleInformation();
        data = await data.json();
        const sanitizedData = [];
        
        data.forEach((people) => {
          if(_.has(people, 'tracking.locations')) {
            const recentLocation = people.tracking.locations.slice(-1)[0];
            const coordinates = [Number(recentLocation.latitude), Number(recentLocation.longitude)]
            
            sanitizedData.push({
              ...people,
              coordinates,
              isSelected: false
            });
          }
        });

        commit('setTrackingInfo', { data: sanitizedData });
        commit('pageLoaded', { startPolling: true, error: false, loaded: true });

        // needed for polling
        dispatch('keepPolling', 'tracking/getPeopleInformation', { root: true });
      } catch (error) {
        commit('setTrackingInfo', { data: [] });
        commit('pageLoaded', { startPolling: false, error: true, loaded: false });
      }
    },
    selectPerson({ commit }, email) {
      commit('deSelectMarkers');
      commit('selectMarker', email);
    },
  },
};

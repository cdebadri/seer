import Vue from 'vue'
import Vuex from 'vuex'
import home from './Home'
import people from './People'
import tracking from './Tracking'
import CONSTANTS from '../constants';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaded: false,
    error: false,
    polledItems: [],
  },
  mutations: {
    pageLoaded(state, { startPolling, error }) {
      state.loaded = !error || startPolling || state.loaded;
      state.error = error;
    },
    addPolledItem(state, item) {
      state.polledItems.push(item);
    },
    removePolledItem(state, itemId) {
      const item = state.polledItems.find((polledItem) => polledItem.id === itemId);
      clearInterval(item.timeoutHandler);
      state.polledItems = state.polledItems.filter((polledItem) => polledItem.id !== itemId);
    },
  },
  actions: {
    keepPolling({ commit, state, dispatch }, itemId) {
      const itemFound = state.polledItems.find((item) => item.id === itemId);

      if (!itemFound) {
        const timeoutHandler = setInterval(dispatch, CONSTANTS.POLLING_INTERVAL[itemId], itemId);
        commit('addPolledItem', { id: itemId, timeoutHandler });
      }
    },
    movingFromTab({ commit }, { tabName, itemId }) {
      commit('removePolledItem', `${tabName}/${itemId}`);
      commit(`${tabName}/pageLoaded`, { loaded: false, startPolling: false, error: false });
    },
  },
  modules: {
    home,
    tracking,
    people,
  }
})

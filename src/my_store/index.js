import { createStore } from 'vuex';
import home from './Home';
import tracking from './Tracking';
import people from './People';

export default createStore({
  state: {
    loaded: false,
    error: false,
  },
  mutations: {
    pageLoaded(state, { startPolling, error }) {
      state.loaded = !error || startPolling || state.loaded;
      state.error = error;
    },
  },
  actions: {
  },
  modules: {
    home,
    tracking,
    people,
  },
});

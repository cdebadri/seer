export default {
  state: () => ({
    mapSearchValue: '',
  }),
  mutations: {
    updateMapSearchValue(state, value) {
      state.mapSearchValue = value;
    },
  },
};

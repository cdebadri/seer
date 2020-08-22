export default {
  state: {
    people: [
      {
        name: 'Pim',
        age: '40',
        email: 'pim@gmail.com',
        phone: '1213141516',
        address: 'India',
        symptoms: ['Fever', 'Dry cough', 'Difficulty breathing', 'Runny nose'],
      },
      {
        name: 'Joe',
        age: '50',
        email: 'joe@gmail.com',
        phone: '1213141517',
        address: 'India',
        symptoms: ['Fever', 'Dry cough', 'Difficulty breathing', 'Runny nose'],
      },
      {
        name: 'Mark',
        age: '46',
        email: 'mark@gmail.com',
        phone: '1213141518',
        address: 'India',
        symptoms: ['Fever', 'Dry cough', 'Difficulty breathing', 'Runny nose'],
      },
    ],
    currentperson: '',
  },
  mutations: {
    SET_ACTIVE_PERSON(state, currentperson) {
      state.currentperson = currentperson;
    },
  },
  actions: {
    activePerson(context, currentperson) {
      context.commit('SET_ACTIVE_PERSON', currentperson);
    },
  },
  getters: {
  },
};

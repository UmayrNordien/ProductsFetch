import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
  },


  getters: {
    countries(state) {
      return state.countries;
    },
  },


  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
  },


  actions: {
    async fetchAllCountries(context) {
      try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        context.commit("setCountries", data);
      } catch (err) {
        return console.error(err);
      }
    },
  },


  modules: {
  }
});

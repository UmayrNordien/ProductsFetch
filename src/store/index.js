import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: null
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
    fetchAllCountries(context) {
      return fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setCountries", data.countries);
        })
        .catch((err) => console.error(err));
    },
  },
});

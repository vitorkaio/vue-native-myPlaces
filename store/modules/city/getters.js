const getters = {
  loading(state) {
    return state.load;
  },
  error(state) {
    return state.error;
  },
  getCity(state) {
    return state.city;
  },
}

export default getters;
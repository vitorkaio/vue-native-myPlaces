const mutations = {
  INSERT_CITY(state, payload) {
    state.cities = [... state.cities, payload];
  },
}

export default mutations;
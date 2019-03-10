const mutations = {
  REQUEST_CITY(state) {
    state.load = true;
    state.error = false;
  },
  SUCESS_CITY(state, payload) {
    state.city = payload;
    state.load = false;
    state.error = false;
  },
  ERROR_CITY(state) {
    state.city = null;
    state.load = false;
    state.error = true;
  },
  RESET_CITY(state) {
    state.city = null;
    state.load = false;
    state.error = false;
  }
}

export default mutations;
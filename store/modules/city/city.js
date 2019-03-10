import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const city = {
  namespaced: true,
  state: {
    city: null,
    load: false,
    error: false,
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default city;
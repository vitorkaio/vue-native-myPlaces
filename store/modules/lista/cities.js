import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const cities = {
  namespaced: true,
  state: {
    cities: [],
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default cities;
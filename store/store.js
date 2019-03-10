import Vue from 'vue-native-core';
import Vuex from 'vuex';

import city from './modules/city/city';
import cities from './modules/lista/cities';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    city,
    cities
  }
});

export default store;
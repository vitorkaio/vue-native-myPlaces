import CityService from './../../../services/cityService';

/* eslint-disable */

const actions = {

  async REQUEST_CITY(context, city) {
    context.commit('REQUEST_CITY');

    // Acessa o store.
    // console.log(context.state.load);

    const res = await CityService.getCity(city);

    // alert(res);
    
    if(res !== null) {
      context.commit('SUCESS_CITY', res);
    }
    else {
      context.commit('ERROR_CITY');
    }
  },

  RESET_CITY(context) {
    context.commit('RESET_CITY');
  }
  
}

export default actions;
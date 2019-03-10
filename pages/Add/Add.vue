<template>
  <AddWrapper class="add">
    <Navbar title="Adicionar" :goBackHandler="goBack"/>
    <AddMainWrapper>
      <Card />
      <MapWrapper>
        <Map :latitude="lat" :longitude="lon" />
      </MapWrapper>
      <Button v-if="getCityDisabled" width="100%" :height="60" title="Adicionar Cidade" :addCity="changePos" />
    </AddMainWrapper>
  </AddWrapper>
</template>

<script>
import Navbar from './../../components/navbar/Navbar.vue';
import Map from './../../components/map/Map.vue';
import Card from './../../components/ui/card/Card.vue';
import Button from './../../components/ui/button/Button.vue';

import { AddWrapper, AddMainWrapper, MapWrapper } from './AddStyled';
import store from './../../store/store';


export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Navbar,
    AddWrapper,
    AddMainWrapper,
    MapWrapper,
    Button,
    Map,
    Card
  },
  data() {
    return {
      latitude: -21.2264,
      longitude: -43.7742
    }
  },
  computed: {
    lat() {
      console.log('lat: ', store.getters['city/getCity']);
      return store.getters['city/getCity'] === null ? this.latitude : parseFloat(store.getters['city/getCity'].lat);
    },
    lon() {
      return store.getters['city/getCity'] === null ? this.longitude : parseFloat(store.getters['city/getCity'].lon);
    },
    getCityDisabled() {
      return store.getters['city/getCity'] === null ? false : true;
    }
  },
  beforeDestroy() {
    store.dispatch('city/RESET_CITY');
  },
  methods: {
    goBack() {
      this.navigation.goBack()
    },
    changePos() {
      const city = store.getters['city/getCity'];
      if(city !== null) {
        store.dispatch('cities/INSERT_CITY', city);
        this.goBack();
      }
    }
  }
}
</script>

<style scoped>
</style>

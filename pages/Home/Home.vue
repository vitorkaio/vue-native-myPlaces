<template>
  <HomeWrapper class="home">
    <Navbar title="Cidades"/>
    <template v-if="cities.length !== 0">
      <HomeContentWrapper>
        <scroll-view :style="{padding: 10}">
          <Cities :cities="cities" :info="navigateToInfo"/>
        </scroll-view>
        <view><text></text></view>
      </HomeContentWrapper>
    </template>
    <template v-else>
      <HomeEmptyWrapper>
        <text>Nenhuma Cidade adicionada</text>
      </HomeEmptyWrapper>
    </template>
    <ButtonMapWrapper :on-press="navigateToAdd">
      <text><Icon name="md-map" :size="30" color="white" /></text>
    </ButtonMapWrapper>
  </HomeWrapper>
</template>

<script>
import store from './../../store/store';
import Navbar from './../../components/navbar/Navbar.vue';
import Cities from './../../components/cities/Cities.vue';
import Icon from "react-native-vector-icons/Ionicons";

import { HomeWrapper, HomeEmptyWrapper, HomeContentWrapper, ButtonMapWrapper } from './HomeStyled';

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  components: {
    Navbar,
    Cities,
    HomeWrapper,
    HomeEmptyWrapper,
    HomeContentWrapper,
    ButtonMapWrapper,
    Icon
  },
  computed: {
    cities() {
      return store.getters['cities/getCities'];
    }
  },
  methods: {
    navigateToAdd() {
      this.navigation.navigate("Add");
    },
    navigateToInfo(city) {
      this.navigation.navigate("Info", {city: city});
    }
  }
}
</script>

<style scoped>
  .home {
    flex: 1;
    background-color: whitesmoke;
  }

</style>

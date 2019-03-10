<template>
  <CardWrapper class="cardWrapper">
    <CityWrapper placeholder="Barbacena, MG" class="cityWrapper" :on-submit-editing="searchCity"
      v-model="city" 
    />
    <IconWrapper class="iconWrapper" :on-press="searchCity">
      <text>
        <Icon v-if="load" name="md-code-download" :size="30" :color="primaryColor" />
        <Icon v-else name="md-search" :size="30" :color="primaryColor" />
      </text>
    </IconWrapper>
  </CardWrapper>
</template>

<script>
import Icon from "react-native-vector-icons/Ionicons";
import { CardWrapper, CityWrapper, IconWrapper, PrimaryColor } from './CardStyled';
import store from './../../../store/store';

export default {
  components: {
    Icon,
    CardWrapper,
    CityWrapper,
    IconWrapper,
    PrimaryColor,
  },
  data() {
    return {
      city: "",
      primaryColor: PrimaryColor
    }
  },
  computed: {
    load() {
      return store.getters['city/loading'];
    },
  },
  methods: {
    searchCity() {
      if(this.city.length !== 0)
        store.dispatch('city/REQUEST_CITY', this.city);
      // alert(this.city);
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <view>
    <CityCardWrapper v-for="(city, i) in cities" :key="i" :on-press="() => info(city)">
      <CityNameWrapper>{{ city.display_name | getName}}</CityNameWrapper>
    </CityCardWrapper>
  </view>
</template>

<script>
import { CityCardWrapper, CityNameWrapper } from './CitiesStyled';

export default {
  props: {
    cities: Array,
    info: Function
  },
  components: {
    CityCardWrapper,
    CityNameWrapper
  },
  filters: {
    getName(val) {
      return val.split(',')[0];
    }
  },
}
</script>

<style>

</style>

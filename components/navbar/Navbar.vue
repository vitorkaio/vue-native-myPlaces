<template>
  <NavbarWrapper class="navbar" :back="goBackHandler === undefined ? false : true" >
    <template v-if="goBackHandler !== undefined">
      <touchable-opacity :on-press="goBackHandler">
        <text><Icon name="md-arrow-back" :size="30" :color="primaryColor" /></text>
      </touchable-opacity>
    </template>
    <NavbarTitleWrapper class="navbar-title">{{ title }}</NavbarTitleWrapper>
    <view></view>
  </NavbarWrapper>
</template>

<script>
import Icon from "react-native-vector-icons/Ionicons";
import { primaryColor } from './../ui/styles';
import { NavbarWrapper, NavbarTitleWrapper } from './NavbarStyled';

export default {
  props: {
    title: String,
    goBackHandler: Function,
  },
  components: {
    Icon,
    NavbarWrapper,
    NavbarTitleWrapper
  },
  data() {
    return {
      primaryColor: primaryColor,
    }
  }
}
</script>

<style scoped>
</style>

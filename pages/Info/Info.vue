<template>
  <view>
    <Navbar title="Info" :goBackHandler="goBack"/>
    <text>{{ navigation.state.params.city.display_name }}</text>
  </view>
</template>

<script>
import Navbar from './../../components/navbar/Navbar.vue';

export default {
   props: {
    navigation: {
      type: Object
    }
  },
  mounted() {
    console.log(this.navigation);
  },
  components: {
    Navbar
  },
  methods: {
    goBack() {
      this.navigation.goBack()
    },
  }
}
</script>

<style>

</style>

<template>
  <app-navigation></app-navigation>
</template>

<script>
import { StackNavigator } from "vue-native-router";
import Home from './pages/Home/Home.vue';
import Info from './pages/Info/Info.vue';
import Add from './pages/Add/Add.vue';

const AppNavigation = StackNavigator(
  {
    Main: {
      screen: Home,
      navigationOptions: {
       header: null,
      }
    },
    Add: {
      screen: Add,
      navigationOptions: {
       header: null,
      }
    },
    Info: {
      screen: Info,
      navigationOptions: {
       header: null,
      }
    },
  },
  {
    initialRouteName: 'Main',
  }
);
export default {
  components: { AppNavigation }
}

</script>
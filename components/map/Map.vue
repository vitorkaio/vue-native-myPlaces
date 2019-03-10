<template>
  <MapView
    :provider="PROVIDER_GOOGLE"
    :style="{width: '100%', height: '100%'}"
    :region="{
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }"
  >
    <Marker
      :coordinate="{latitude: latitude, longitude: longitude}"
      title="Aqui"
      description="Teste"
    />
  </MapView>
</template>

<script>
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export default {
  props: ['latitude', 'longitude'],
  components: {
    MapView,
    Marker,
  },
  data() {
    return {
      PROVIDER_GOOGLE: PROVIDER_GOOGLE,
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <weather />
    <jour />
    <slider />
    <GoogleMap />
    <router-view/>
  </div>
</template>

<script>
import slider from "./components/slider";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import weather from "./components/weather";




export default {
  name: 'App',
  components: {
    slider,
    GoogleMap,
    jour,
    weather
  },
}







</script>

<style>
@import "assets/css/style-reset.css";



</style>

<template>
  <div id="app">

        <weather/>
        <jour/>

    <div class="col">

    </div>
    <GoogleMap/>
    <tomtom />

    <router-view/>

  </div>
</template>

<script>
import slider from "./components/slider";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import weather from "./components/weather";
import slidertest from "./components/slidertest";
import tomtom from "./components/tomtom";


export default {
  name: 'App',
  components: {

    GoogleMap,
    jour,
    weather,
    tomtom

  },
}


console.log("592".toHHMMSS());

</script>

<style>

@import "assets/css/style-reset.css";


</style>

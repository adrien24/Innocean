<template>
  <div id="app">

        <weather/>
        <jour/>

    <div class="col">
        <slider/>
        <slidertest/>
    </div>
    <GoogleMap/>

    <router-view/>

  </div>
</template>

<script>
import slider from "./components/slider";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import weather from "./components/weather";
import slidertest from "./components/slidertest";


export default {
  name: 'App',
  components: {
    slider,
    GoogleMap,
    jour,
    weather,
    slidertest
  },
}


</script>

<style>

@import "assets/css/style-reset.css";

.col{display: }

</style>

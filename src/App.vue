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




</script>

<style>

@import "assets/css/style-reset.css";
#app > div:nth-child(4) > div:nth-child(4){
  display: none;
}

</style>

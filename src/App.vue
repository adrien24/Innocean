<template>
  <div id="app">

        <weather/>
        <jour/>

    <div class="col">

    </div>

    <GoogleMap/>
    <tomtom />
    <anniversaire />
    <Twitter />

  </div>
</template>

<script>
import slider from "./components/slider";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import weather from "./components/weather";
import slidertest from "./components/slidertest";
import tomtom from "./components/tomtom";
import anniversaire from "./components/anniversaire";
import Twitter from "./components/Twitter";


export default {
  name: 'App',
  components: {

    GoogleMap,
    jour,
    weather,
    tomtom,
    anniversaire,
    Twitter

  },
}




</script>

<style>

@import "assets/css/style-reset.css";
#app > div:nth-child(4) > div:nth-child(4){
  display: none;
  opacity: 0;
}

.timeline-Tweet-actions{
  display: none
}


#app{
  width: 100%;
  height: 100vh;
  background:linear-gradient(181deg, rgba(255, 255, 0, 1) 0%, rgba(0, 188, 212, 1) 50%, rgba(238, 130, 238, 1) 100%) no-repeat;
  background-size: auto;
}

</style>

<template>
  <div id="app">

    <jour/>
    <div class="all">
      <div class="col1">
        <Twitter/>
        <anniversaire/>
      </div>

      <div class="col2">
        <GoogleMap/>
      </div>

      <div class="col3">
        <motdujour />
        <slider />
      </div>
    </div>

  </div>

</template>

<script>
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import slider from "./components/slider";
import anniversaire from "./components/anniversaire";
import Twitter from "./components/Twitter";
import motdujour from "./components/motdujour";


export default {
  name: 'App',
  components: {
    slider,
    GoogleMap,
    jour,
    anniversaire,
    Twitter,
    motdujour
  },
}


</script>

<style>

@import "assets/css/style-reset.css";

#app > div:nth-child(4) > div:nth-child(4) {
  display: none;
  opacity: 0;
}



.all{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;
  margin-top: 40px;
}

.col1, .col2, .col3{
  width: 500px;
}



#app {
  width: 100%;
  height: 100vh;
  background: conic-gradient(from 236deg at 50% 50%, rgba(255, 252, 247, 1) 0%, rgba(255, 242, 221, 1) 100%) no-repeat;
  background-size: auto;
}

#app > div.all > div.col3 > div.slider > div > div > div > div > div:nth-child(1) > div > div{
  height: 400px!important;
}

</style>

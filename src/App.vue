<template>
  <div id="app">
    <slider />
    <img src="https://source.unsplash.com/random" width="100px" height="100px">

    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>
    <jour />





    <router-view/>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import slider from "./components/slider";



export default {
  name: 'App',
  components: {
    GoogleMap,
    jour,
    slider
  },
}




</script>

<style>
@import "assets/css/style-reset.css";



</style>

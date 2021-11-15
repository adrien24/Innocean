<template>
  <div id="app">
    <slider />
    <img src="https://source.unsplash.com/random" width="100px" height="100px">
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>

    <FooterP/>
    <jour />




    <router-view/>
  </div>
</template>

<script>
import slider from "./components/slider";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'




export default {
  name: 'App',
  components: {
    slider,
    GoogleMap,
    jour
  },
}







</script>

<style>
@import "assets/css/style-reset.css";



</style>

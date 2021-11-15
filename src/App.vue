<template>
  <div id="app">

    <img src="https://source.unsplash.com/random" width="100px" height="100px">
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>
<<<<<<< Updated upstream
=======

   
>>>>>>> Stashed changes
    <FooterP/>
    <jour />



    <router-view/>
  </div>
</template>

<script>

import FooterP from "./components/FooterP";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'




export default {
  name: 'App',
  components: {
    FooterP,
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    GoogleMap,
    jour
  },








}


</script>

<style>
@import "assets/css/style-reset.css";




</style>

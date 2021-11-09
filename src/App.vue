<template>
  <div id="app">

    <img src="https://source.unsplash.com/random" width="100px" height="100px">
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>



    <Marque/>

    <transition
      name="fade"
      mode="out-in"
    >


    <router-view/>

    </transition>
    <FooterP/>

  </div>
</template>

<script>

import FooterP from "./components/FooterP";
import Marque from "./components/Marquee";


export default {
  name: 'App',
  components: {
    FooterP,
    Marque
  },





}


</script>

<style>




</style>

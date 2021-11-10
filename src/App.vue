<template>
  <div id="app">

    <img src="https://source.unsplash.com/random" width="100px" height="100px">

    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>

    <Marque/>
    <FooterP/>
    <jour />
    <p>{{currentDate()}}</p>


    <router-view/>
  </div>
</template>

<script>

import FooterP from "./components/FooterP";
import Marque from "./components/Marquee";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import moment from 'moment'



export default {
  name: 'App',
  components: {
    FooterP,
    Marque,
    GoogleMap,
    jour
  },



  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}/${current.getHours()}/${current.getMinutes()}/${current.getSeconds()}`;
      return date;
    },
      refresh() {
      this.date = setInterval(() => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}/${current.getHours()}/${current.getMinutes()}/${current.getSeconds()}`;
        return date;
         }, 1000);
      }

  },

    created () {
  this.refresh()
    }






}


</script>

<style>
@import "assets/css/style-reset.css";




</style>

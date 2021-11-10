<template>
  <div id="app">

    <img src="https://source.unsplash.com/random" width="100px" height="100px">

    <router-link to="/">Accueil</router-link>
    <router-link to="/about">About</router-link>

    <Marque/>
    <FooterP/>
    <jour />
    <p>{{message}}</p>


    <router-view/>
  </div>
</template>

<script>

import FooterP from "./components/FooterP";
import Marque from "./components/Marquee";
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import moment from 'moment'
import Vue from "vue";



export default {
  name: 'App',
  components: {
    FooterP,
    Marque,
    GoogleMap,
    jour
  },




}
new Vue({
  el: '#app',
  data: {
    message:""
  },
  methods:{
    testFunction: function () {
      var v = this;
      setInterval(function () {
        v.message = new Date().toLocaleTimeString();
      }, 1000);
    }
  },
  mounted () {
    this.testFunction()
  }
});



</script>

<style>
@import "assets/css/style-reset.css";




</style>

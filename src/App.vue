<template>

  <div id="app">
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>
  </div>

</template>

<script>
import GoogleMap from './components/GoogleMap.vue'
import jour from './components/jour'
import slider from "./components/slider";
import anniversaire from "./components/anniversaire";
import Twitter from "./components/Twitter";
import motdujour from "./components/motdujour";
import Accueil from "./pages/Accueil";
import heure from "./pages/heure";


//setTimeout((function() {
//window.location.reload();
//}), 600000);

export default {
  name: 'App',
  components: {
    slider,
    GoogleMap,
    jour,
    anniversaire,
    Twitter,
    motdujour,
    Accueil,
  },

  mounted() {
    this.myInterval()
    this.myHours()
  },

  methods:{
    myHours(){
      let date = new Date();
      let minutes = date.getMinutes();
      let secondes = date.getSeconds();
      if (minutes === 59 && secondes === 50) {
        setTimeout(() => this.$router.push({path: '/heure'}), 0);
      }else if (minutes === 0){
        setTimeout(() => this.$router.push({path: '/'}), 30000);

      }
    },

    myInterval(){
      setInterval(this.myHours, 1000)
    }
  }

}


// Changement couleur en fonction de l'heure


</script>

<style>
@import "assets/css/app.css";

html {
  overflow-y: hidden;
  overflow-x: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);


}


.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;

}

</style>

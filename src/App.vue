<template>
  <div id="app">

    <jour/>
    <div class="all">
      <div class="col1">
        <Twitter/>

      </div>

      <div class="col2">
        <GoogleMap/>
      </div>

      <div class="col3">
        <motdujour />
        <anniversaire/>
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
  },
}


</script>

<style>

@import "assets/css/style-reset.css";



.all{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  flex-grow: 1;
  margin-top: 40px;
}

.col1, .col2, .col3{
  width: 26%;
}

html{

  width: 100%;
  height: 100vh;
}

#app::after{
  content: '';
  position: fixed;
  border-radius: 50%;
  top: -100%;
  left: -50%;
  width: 200%;
  height: 300%;
  background: conic-gradient(from 236deg at 50% 50%, rgba(255, 252, 247, 1) 0%, rgba(255, 242, 221, 1) 100%) no-repeat;
  background-size: auto;
  z-index: -10;
  animation: rotate 120s linear infinite;

}
@keyframes rotate {
  0%{transform: rotate(0deg)}
  50%{transform: rotate(180deg)}
  100%{ transform: rotate(360deg);}
}


#app::before{
  content: '';
  position: fixed;
  transform: translate(-50%, -50%);
  top: 100%;
  left: 0;
  z-index: -1;
  width: 1500px;
  height: 1500px;
  border-radius: 50%;
  border: solid 1px rgba(223, 83, 31, 0.50);
  animation: cercle 20s infinite linear;
}

@keyframes cercle {
  0%{transform: translate(-50%, -50%);}
  50%{transform: translate(-30%, -60%);}
  100%{transform: translate(-50%, -50%);}

}


</style>

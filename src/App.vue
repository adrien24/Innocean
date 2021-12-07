<template>

  <div id="app">
    <jour/>
    <div class="all">
      <div class="col1" id="col1">
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
  // Changement couleur en fonction de l'heure
  var interval = setInterval(function () { myFunction(); }, 1000);
  function myFunction () {
    let date = new Date();
    let heure = date.getHours();
    if( heure >= 7 && heure < 19){
      var body = document.body;
      body.className = " fondjour";
      const dark = document.getElementById("nuit");
      dark.style.display = "none";
    }else {
      var body = document.body;
      body.className = " fondnuit";
      document.getElementById('barre').className = "barrenuit";
      document.getElementById('mot').className = "motnuit";
      document.getElementById('bloc').className = "blocnuit";
      document.getElementById('twitter').className = "traficnuit";
      document.getElementById('anniv').className = "anniversairenuit";
      document.getElementById('joure').className = "twitter-timeline jour";
      document.getElementById('sliderjour').className = "slidernuit";
      const blue = document.getElementById("joure");
      blue.style.display = "none";
    }
    console.log('Executed');
  }

</script>

<style>
  @import "assets/css/app.css";
</style>

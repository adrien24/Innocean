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
    console.log(heure)
    if( heure >= 7 && heure < 9){
      var body = document.body;
      body.className = " fondjour";
    }
    else {
      var body = document.body;
      body.className = " fondnuit";
      document.getElementById('barre').className = "barrenuit";
      document.getElementById('mot').className = "motnuit";
      document.getElementById('bloc').className = "blocnuit";
      document.getElementById('twitter').className = "traficnuit";
      document.getElementById('anniv').className = "anniversairenuit";
      document.getElementById('sliderjour').className = "slidernuit";
    }
    console.log('Executed');
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

  body{
    width: 100%;
    height: 100vh;
    background: linear-gradient(-45deg, #fffff4, #fedcc3, #ffe0af);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }

  .fondjour{
    background: linear-gradient(-45deg, #fffff4, #fedcc3, #ffe0af);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  /* CSS THEME SOMBRE*/
  .fondnuit{
    background: linear-gradient(-45deg, #0f1011, #212224, #56575d);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }

  .barrenuit{
    font-family: 'Montserrat', sans-serif;
    width: 86.5%;
    height: 80px;
    border-radius: 10px;
    color: #DEDEDE;
    background-color: rgba(54, 54, 54, 0.8) ;
    border: solid 1px rgba(222, 222, 222, 0.2);
    box-shadow: 30px 10px 75px 1px rgba(0, 0, 0, 0.59);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
  }

  .barrenuit img{
    filter: invert(1);
  }

  .blocnuit {
    font-family: 'Montserrat', sans-serif;
    height: auto;
    background-color: rgba(54, 54, 54, 0.8) ;
    border-radius: 10px;
    border: solid 1px rgba(222, 222, 222, 0.2);
    box-shadow: 30px 10px 75px 1px rgba(0, 0, 0, 0.59);
    color: #DEDEDE;
    font-size: 20px;
    padding: 10px;
  }

  .anniversairenuit{
    font-family: "Montserrat", sans-serif;
    margin-top: 20px;
    height: auto;
    background-color: rgba(54, 54, 54, 0.8) ;
    border-radius: 10px;
    border: solid 1px rgba(222, 222, 222, 0.2);
    box-shadow: 30px 10px 75px 1px rgba(0, 0, 0, 0.59);
    color: #DEDEDE;
    font-size: 20px ;
    padding: 10px;
    width: 95%;
  }

  .traficnuit{
    font-family: 'Montserrat', sans-serif;
    width: 95%;
    margin-left: 5%;
    background-color: rgba(54, 54, 54, 0.8) ;
    border-radius: 10px;
    border: solid 1px rgba(222, 222, 222, 0.2);
    box-shadow: 30px 10px 75px 1px rgba(0, 0, 0, 0.59);
    color: #DEDEDE;
    font-size: 20px ;
    padding: 10px;
  }

  .motnuit{
    font-family: 'Montserrat', sans-serif;
    padding: 15px 0;
    height: auto;
    background-color: rgba(54, 54, 54, 0.8) ;
    border-radius: 10px;
    border: solid 1px rgba(222, 222, 222, 0.2);
    box-shadow: 30px 10px 75px 1px rgba(0, 0, 0, 0.59);
    color: #DEDEDE;
    font-size: 20px ;
    width: 95%;
  }

  .slidernuit{
    margin-top: 20px;
    border-radius: 10px;
    width: 95%;
    border: solid 1px rgba(222, 222, 222, 0.2);
    box-shadow: 30px 10px 75px 1px rgba(0, 0, 0, 0.59);
  }
  /* FIN CSS THEME SOMBRE*/

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

<template v-if="myFunction">

  <div class="Accueil">
    <jour/>
    <div class="all">
      <div class="col1" id="col1">
       <twitter/>
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
import slider from "../components/slider";
import GoogleMap from "../components/GoogleMap";
import jour from "../components/jour";
import anniversaire from "../components/anniversaire";
import motdujour from "../components/motdujour";
import Twitter from "../components/Twitter";

export default {
  name: 'Accueil',

  components: {
    Twitter,
    slider,
    GoogleMap,
    jour,
    anniversaire,
    motdujour,
  },




  created(){

      setTimeout(() => this.$router.push({path: '/meteo'}), 600000);


    },


}



</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>







</style>

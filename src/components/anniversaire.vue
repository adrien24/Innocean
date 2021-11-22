<template>
  <div id="anniversaire">
    {{resultat[0].name}} {{resultat[0].date}}<br />
    {{resultat[1].name}} {{resultat[1].date}}<br />
    {{resultat[2].name}} {{resultat[2].date}}<br />
  </div>
</template>

<script>
import anniv from "../assets/js/anniv";


export default {
  name: "anniversaire",

  data() {
    return {
      timestamp: "",
      resultat: anniv.splice(indexday,maxday),

    }
  },


}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

today = dd + mm ;

var indexday = anniv.map(function(e) { return e.id; }).indexOf(today);

var maxday = 6;




</script>

<style scoped>

</style>

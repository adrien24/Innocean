<template>
  <div id="motdujour">
    <div class="bloc" id="mot">
      <h2>MOT DU JOUR</h2>
      <div class="trafic_container">
        <hr>
        <p>« {{ resultat.fr }} »</p>
        <p>« {{ resultat.co }} »</p>
        <p>« {{ resultat.latin }} »</p>
      </div>
    </div>
  </div>
</template>

<script>
import inventaire from "../assets/js/inventaire";

export default {
  name: "motdujour",

  data() {
    return {
      resultat: inventaire.find(word => word.id === today),
    }
  }
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

today = dd + mm;

</script>

<style scoped>

</style>

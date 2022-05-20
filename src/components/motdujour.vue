<template>
  <div id="motdujour" class="Pbloc fond">
    <div id="mot">
      <h2>MOT DU JOUR</h2>
      <div class="mot_container gras" v-if="motdujour">
        <hr>
        <p v-if="motdujour">{{ this.resultat.fr }}</p>
        <p v-if="motdujour">{{ this.resultat.co }}</p>
        <p v-if="motdujour">{{ this.resultat.latin }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "motdujour",

  data() {
    return {
      motdujour: '',
      resultat: '',
    }
  },

  mounted() {
    setTimeout(this.todays, 1000);
    this.CallAPIJour();
  },

  methods:{
    CallAPIJour(){
      axios
        .get('https://6ooontrv.directus.app/items/Mot_Du_Jour?limit=365')
        .then(response => (this.motdujour = response.data))
    },

    todays(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    today = dd + mm;
    this.resultat = this.motdujour.data.find(word => word.Jour === today);
    }
  }
}



</script>

<style scoped>

</style>

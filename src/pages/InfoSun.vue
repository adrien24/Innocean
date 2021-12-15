<template>
  <div id="infosun">


        <div v-for="(jour, key) in jour" :key="key">
          <p v-for="value in jour" :key="value.id">{{ value.Information_du_jour }}</p>
        </div>

        <div v-for="(semaine, key) in semaine" :key="'A' + key">
          <p v-for="value in semaine" :key="value.id">{{ value.Information_de_la_semaine }}</p>
        </div>

        <div v-for="(important, key) in important" :key="'B' + key">
          <p v-for="value in semaine" :key="value.id">{{ value.Information_importantes }}</p>
        </div>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InfoSun",

  data() {
    return {
      jour: [],
      semaine: [],
    }
  },

  mounted() {
    this.callapiJ();
    this.callapiS();
    this.callapiI();
  },

  methods: {
    callapiJ() {
      axios
        .get('http://localhost:8055/items/Information_du_jour')
        .then(response => (this.jour = response.data))
    },
    callapiS() {
      axios
        .get('http://localhost:8055/items/Information_de_la_semaine')
        .then(response => (this.semaine = response.data))
    },
    callapiI() {
      axios
        .get('http://localhost:8055/items/Information_importantes')
        .then(response => (this.important = response.data))
    },
  },
}


</script>

<style scoped>

</style>

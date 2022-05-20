<template>

  <div class="sliderjour" id="sliderjour">
     <siema ref="siema"
            @init="init"
            @change="change"
            :loop="true"
            :autoplay="true"
            :autoplay-duration="3000"
            class="slider-container siema" id="nb" v-for="(slider, key) in slider" :key="'D' + key">
        <div v-for="agence in slider" v-bind:key="'7' + agence.id">
          <img class="slider" :src="'https://6ooontrv.directus.app/assets/'+ agence.Image"/>
        </div>
      </siema>
  </div>

</template>

<script>

import axios from "axios";


export default {
  name: "slidertest",

  data() {
    return {
      slider: [],
    }
  },


  mounted() {
    this.callapiI();
  },

  methods: {
    callapiI() {
      axios
        .get('https://6ooontrv.directus.app/items/Slider')
        .then(response => (this.slider = response.data))

    },

    init() {
    },

    change() {
    },
  },


}











</script>

<style scoped>

</style>

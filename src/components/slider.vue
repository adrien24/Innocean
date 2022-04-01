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
          <img class="slider" :src="'http://192.168.70.183:8055/assets/'+ agence.Image"/>
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
    setInterval(this.slider, 1000)
    this.callapiI();
  },

  methods: {
    callapiI() {
      axios
        .get('http://192.168.70.183:8055/items/Slider')
        .then(response => (this.slider = response.data))
        setTimeout(this.callapiI, 20000);
    },

    init() {
    },

    change() {
    },
  },


}


  // Methods








</script>

<style scoped>

</style>

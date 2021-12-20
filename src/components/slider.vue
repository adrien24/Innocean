<template>

  <div class="sliderjour" id="sliderjour">
    <div class="swiffy-slider slider-nav-autoplay" data-slider-nav-autoplay-interval="10000">
      <ul class="slider-container" id="nb" >
        <li v-for="agence in images" ><img  class="slider" :src="agence.pathLong"/></li>

      </ul>
    </div>
  </div>

</template>

<script>



export default {
  name: "slidertest",

  data() {
    return {
      images: [],
    }
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({pathLong: r(key), pathShort: key})));

    },
  },

  mounted() {
    this.importAll(require.context('../assets/img/slider', true, /\.webp$/));
    this.swiffyslider.init(this.methods = document.body);
  }
}


  // Methods








</script>

<style scoped>

</style>

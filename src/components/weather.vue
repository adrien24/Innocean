<template>
<div id="weather">


<div v-if="info">
  <h2><span>Temperature:</span> {{ Math.round(info.current.temp) }}°C</h2>
  <h2><span>Temperature:</span> {{ info.current.weather[0].description }} </h2>
  <img v-bind:src="'https://web.innocean.app/rocket/adrien/image_innocean/' + info.current.weather[0].icon + '.svg'">
</div>

</div>


</template>

<script>


import axios from "axios";

export default {
  data() {
    return {
      info: null
    }
  },

  mounted() {
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=053f63f3644c351cb877b735a83a84e8&lang=fr&units=metric')
      .then(response => (this.info = response.data))
  }
}

</script>

<style scoped>

h2{
  font-size: 15px;
  line-height: normal;
  margin: 0;

}

img{
  width: 100px;
}


</style>

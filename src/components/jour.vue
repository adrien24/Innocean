<template>

  <div id="jour">
    <div class="barre">

      <div class="gauche" v-if="info">
        <div v-if="info"><img class="change-size-svg" v-if="info"
                               v-bind:src="'https://web.innocean.app/rocket/adrien/innocean/img/meteo/' + info.current.weather[0].icon + '.svg'">
         </div>
         <p v-if="info" class="gras">{{ Math.round(info.current.temp) }}°C&nbsp;</p>
         <p v-if="info"> {{ info.current.weather[0].description }}</p>
      </div>

      <div class="centre" style="padding-left: 8%">
        <h1>INNOCEAN</h1>
      </div>

      <div class="droite" v-if="heure">
        <div id="date"><p>{{ dayjs().format('dddd DD MMMM') }}</p>
        </div>
        <div class="respheure"><span class="gras">{{ dayjs().format('HH : mm : ss', 'fr') }}</span></div>
      </div>

    </div>
  </div>

</template>

<script>
import axios from "axios";

const dayjs = require("dayjs");
require('dayjs/locale/fr')
dayjs.locale('fr')

export default {

  data() {
    return {
      heure: "",
      info: null,
    }
  },

  created() {
    setInterval(this.getNow, 1000);
  },

  mounted() {
    this.callWeather();
    this.intervalFetchData();
    },

  methods: {
    getNow: function () {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = ' ' + time;
      this.heure = dateTime;
    },

    callWeather() {
      axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=053f63f3644c351cb877b735a83a84e8&lang=fr&units=metric')
        .then(response => (this.info = response.data))
    },

    intervalFetchData: function () {
      setInterval(() => {
        this.callWeather();
        this.info = info
      }, 3600000);
    }
  }
}


</script>

<style scoped>

</style>

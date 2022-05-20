<template>

  <div id="jour">
    <div class="barre" >

      <div class="gauche" v-if="info">
        <div v-if="info"><img class="change-size-svg"
                              v-bind:src="'https://web.innocean.app/rocket/adrien/innocean/img/meteo/' + info.current.weather[0].icon + '.svg'">
        </div>
        <p class="gras">{{ Math.round(info.current.temp) }}°C&nbsp;</p>
        <p> {{ info.current.weather[0].description }}</p>
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
import {isEmpty} from "lodash"

const dayjs = require("dayjs");
require('dayjs/locale/fr')
dayjs.locale('fr')


export default {

  data() {
    return {
      heure: "",
      info: '',
      temp: '',
      logo: '',
      weather: '',
    }
  },

  created() {
    setInterval(this.getNow, 1000);
    this.callWeather();
  },

  methods: {
    getNow: function () {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = ' ' + time;
      this.heure = dateTime;
    },

    callWeather() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 19 && hours > 8) {
        axios
          .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=5905fcba07fbe528093032c320577407&lang=fr&units=metric')
          .then(response => (this.info = response.data));
          localStorage.setItem('letemp', this.info.current.temp)
      }

    },
  },
}


</script>

<style scoped>

</style>

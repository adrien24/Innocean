<template>
  <div id="meteo">
    <h1 style="text-align: center;">METEO</h1>
    <div class="container">

      <div class="day">
        <h2>{{ dayjs().add(1, 'day').format('dddd') }}</h2>
        <hr>
        <div class="temp">
          <img class="change-size-svg" v-if="info"
               v-bind:src="'https://web.innocean.app/rocket/adrien/innocean/img/meteo/' + info.daily[1].weather[0].icon + '.svg'">

          <p v-if="info">{{ info.daily[1].weather[0].description }}<br/>
            <span v-if="info">{{ Math.round(info.daily[1].temp.min) }}°C - {{ Math.round(info.daily[1].temp.max) }}°C</span></p>
        </div>
      </div>

      <div class="day">
        <h2>{{ dayjs().add(2, 'day').format('dddd') }}</h2>
        <hr>
        <div class="temp">
          <img class="change-size-svg" v-if="info"
               v-bind:src="'https://web.innocean.app/rocket/adrien/innocean/img/meteo/' + info.daily[2].weather[0].icon + '.svg'">

          <p v-if="info">{{ info.daily[2].weather[0].description }}<br/>
            <span v-if="info">{{ Math.round(info.daily[2].temp.min) }}°C - {{ Math.round(info.daily[2].temp.max) }}°C</span></p>
        </div>
      </div>

      <div class="day">
        <h2>{{ dayjs().add(3, 'day').format('dddd') }}</h2>
        <hr>
        <div class="temp">
          <img class="change-size-svg" v-if="info"
               v-bind:src="'https://web.innocean.app/rocket/adrien/innocean/img/meteo/' + info.daily[3].weather[0].icon + '.svg'">

          <p v-if="info">{{ info.daily[3].weather[0].description }}<br/>
            <span v-if="info">{{ Math.round(info.daily[3].temp.min) }}°C - {{ Math.round(info.daily[3].temp.max) }}°C</span></p>
        </div>
      </div>

      <div class="day">
        <h2>{{ dayjs().add(4, 'day').format('dddd') }}</h2>
        <hr>
        <div class="temp">
          <img class="change-size-svg" v-if="info"
               v-bind:src="'https://web.innocean.app/rocket/adrien/innocean/img/meteo/' + info.daily[4].weather[0].icon + '.svg'">

          <p v-if="info">{{ info.daily[4].weather[0].description }}<br/>
            <span v-if="info">{{ Math.round(info.daily[4].temp.min) }}°C - {{ Math.round(info.daily[4].temp.max) }}°C</span></p>
        </div>
      </div>

    </div>
  </div>

</template>

<script>

import axios from "axios";

const dayjs = require("dayjs");
require('dayjs/locale/fr')
dayjs.locale('fr')
var weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)

export default {
  name: "Meteo",

  data() {
    return {
      info: null,
    }
  },

  created() {
    setInterval(this.getNow, 1000);
    setInterval(() => {
      this.callWether();
      this.info = info
    }, 3600000);
    setTimeout(() => this.$router.push({path: '/Infopage'}), 60000);
  },

  mounted() {
    this.callWeather();
    /*this.callWeather2();*/
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
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&lang=fr&units=metric&exclude=current,minutely,hourly,alerts&appid=053f63f3644c351cb877b735a83a84e8')
        .then(response => (this.info = response.data))
    },
    /*callWeather2() {
      axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&lang=fr&units=metric&exclude=current,minutely,hourly,alerts&appid=5905fcba07fbe528093032c320577407')
        .then(response => (this.info = response.data))
    },*/
  },
}

</script>


<style scoped>

</style>

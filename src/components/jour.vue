<template>

  <div id="jour">
    <div class="barre">
      <div class="gauche">
        <div v-if="info"><img class="change-size"
                              v-bind:src="'https://web.innocean.app/rocket/adrien/image_innocean/' + info.current.weather[0].icon + '.svg'">
        </div>
        <p v-if="info" class="gras">{{ Math.round(info.current.temp) }}°C&nbsp;</p>
        <p v-if="info"> {{ info.current.weather[0].description }}</p>
      </div>
      <div class="centre" style="padding-left: 8%">
        <h1>INNOCEAN</h1>
      </div>
      <div class="droite" v-if="heure">

        <div id="date">{{
            dayjs().format('dddd DD MMMM')
          }}
        </div>
        <div style="width: 190px"><span class="gras">{{ dayjs().format('HH : mm : ss', 'fr') }}</span></div>
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

  methods: {
    getNow: function () {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = ' ' + time;
      this.heure = dateTime;
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

</style>

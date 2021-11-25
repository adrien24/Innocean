<template>

  <div id="jour">

    <div class="barre">
      <div class="gauche">
        <div v-if="info"><img class="change-color" v-bind:src="'https://web.innocean.app/rocket/adrien/image_innocean/' + info.current.weather[0].icon + '.svg'">
        </div>
        <div v-if="info"><span class="gras">{{ Math.round(info.current.temp) }}°C</span></div>
        <div v-if="info">{{ info.current.weather[0].description }}</div>
      </div>
      <div class="centre">
        <div><span class="gras">INNOCEAN</span></div>
      </div>
      <div class="droite" v-if="timestamp">
        <div>{{ moment().format('dddd LLL') }}</div>
        <div style="width: 150px"><span class="gras">{{ moment().format('LT') }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import langofmoment from "../assets/js/momentlang";

export default {

  data() {
    return {
      timestamp: "",
      info: null
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
      this.timestamp = dateTime;
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

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&display=swap');

body {
  margin: 0;
}

.barre {
  font-family: 'Montserrat', sans-serif;
  width: 86.5%;
  height: 80px;
  background-color: #FFFCF7;
  border-radius: 10px;
  border: solid 1px rgba(223, 83, 31, 0.40);
  box-shadow: 30px 10px 75px 1px rgba(223, 83, 31, 0.30);
  color: rgba(223, 83, 31, 1);
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
}

.barre div {
  display: flex;
  align-items: center;
  margin: 5px;
}

.gras {
  font-weight: bold;
  font-size: 35px;
}

.change-color {
  width: 50px;
  fill: #F05921;
}


</style>

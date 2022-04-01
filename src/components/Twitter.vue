<template>

  <div class="Gbloc fond" id="twitter">
    <h2>TRAFIC</h2>
    <div class="trafic_container" >
      <hr>
      <div v-if="myFunction()" id="light">
        <TwitterFeed
          src="https://twitter.com/my_innobot/lists/1463433822901608450?ref_src=twsrc%5Etfw"
          data-chrome="transparent nofooter noheader" data-theme="light"></TwitterFeed>
      </div>


      <div v-else id="dark">
        <TwitterFeed src="https://twitter.com/my_innobot/lists/1463433822901608450?ref_src=twsrc%5Etfw"
                     data-chrome="transparent nofooter noheader" data-theme="dark"></TwitterFeed>
      </div>

    </div>
  </div>

</template>

<script>
import {isEmpty} from "lodash"
import axios from "axios";

export default {
  name: "Twitter",

  data() {
    return {
      info: [],

    }
  },

  mounted() {
    setInterval(this.myFunction, 1000)
  },

  created() {
    /*this.callWeather()*/
    this.callWeather2()
  },

  methods: {
    myFunction() {
      if (!isEmpty(this.info)) {
        return this.info.current.dt >= this.info.current.sunrise && this.info.current.dt < this.info.current.sunset;
      }else if(isEmpty(this.info)){
        return this.info.current.dt >= this.info.current.sunrise && this.info.current.dt < this.info.current.sunset;
      }else{
        return this.info.current.dt <= this.info.current.sunrise && this.info.current.dt > this.info.current.sunset;
      }
    },

    /*callWeather() {
      axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=053f63f3644c351cb877b735a83a84e8&lang=fr&units=metric')
        .then(response => (this.info = response.data))
    },*/
    callWeather2() {
      axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=5905fcba07fbe528093032c320577407&lang=fr&units=metric')
        .then(response => (this.info = response.data))
    }
  }
}

</script>

<style scoped>

#dark, #light {
  width: 90%;
}

</style>

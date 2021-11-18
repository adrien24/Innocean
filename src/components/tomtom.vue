<template>
  <div id="tomtom">
 <div class="havas" v-if="info">
    <span> Innocean > Havas : {{time}}</span>
    <span>{{Math.round((info.routes[0].summary.lengthInMeters * 0.001) * 10) / 10}} km</span>
 </div>
    <div class="innocean" v-if="info2">
      <span> Havas > Innocean : {{time2}}</span>
      <span>{{Math.round((info2.routes[0].summary.lengthInMeters * 0.001) * 10) / 10}} km</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";



export default {
  data() {
    return {
      info: null,
      info2: null
    }
  },



  mounted() {
    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.88060000087292,2.244597658280074/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.info = response.data))

    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.88060000087292,2.244597658280074:48.898017800974586,2.279446246633403/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.info2 = response.data))
  },



  computed: {
    time() {
      const sec_num = parseInt(this.info.routes[0].summary.travelTimeInSeconds, 10);
      let hours   = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = `0${hours}`;}
      if (minutes < 10) {minutes = `0${minutes}`;}
      if (seconds < 10) {seconds = `0${seconds}`;}
      return `${hours}h ${minutes}min ${seconds}sec`;
    },

    time2() {
      const sec_num = parseInt(this.info2.routes[0].summary.travelTimeInSeconds, 10);
      let hours   = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = `0${hours}`;}
      if (minutes < 10) {minutes = `0${minutes}`;}
      if (seconds < 10) {seconds = `0${seconds}`;}
      return `${hours}h ${minutes}min ${seconds}sec`;
    }
  }


}

</script>

<style scoped>

</style>

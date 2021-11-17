<template>
  <div id="tomtom" v-if="info">

    <span>{{info.routes[0].summary.travelTimeInSeconds.toHHMMSS()}}</span>
    <span>{{Math.floor(info.routes[0].summary.lengthInMeters * 0.001)}} km</span>

  </div>
</template>

<script>
import axios from "axios";
String.prototype.toHHMMSS = function () {
  const sec_num = parseInt(this, 10); // don't forget the second param
  let hours   = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = `0${hours}`;}
  if (minutes < 10) {minutes = `0${minutes}`;}
  if (seconds < 10) {seconds = `0${seconds}`;}
  return `${hours}:${minutes}:${seconds}`;
}

export default {
  data() {
    return {
      info: null,
    }
  },
  mounted() {
    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.88060000087292,2.244597658280074/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.info = response.data))
  }
}






</script>

<style scoped>
#app > div:nth-child(4) > div:nth-child(4) > div{
  display: none;
}
</style>

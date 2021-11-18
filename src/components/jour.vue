<template>

  <div id="jour">


    <span>{{moment().format('Do MMMM YYYY')}}{{ timestamp }}</span>


  </div>

</template>

<script>
import axios from "axios";

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

  mounted() {
    axios
      .get('https://www.web.innocean.app/rocket/adrien/mot.json')
      .then(response => (this.info = response.data))
  },

  methods: {
    getNow: function() {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = ' '+ time;
      this.timestamp = dateTime;
    }
  }
}

</script>


<style scoped>

</style>

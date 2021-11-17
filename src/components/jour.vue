<template>

  <div id="jour">


    <span>{{moment().format('Do MMMM YYYY')}}{{ timestamp }}</span>


  </div>

</template>

<script>
export default {

  data() {
    return {
      timestamp: ""
    }
  },
  created() {
    setInterval(this.getNow, 1000);
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

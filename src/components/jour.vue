<template>

  <div id="jour">

  </div>

</template>

<script>


import Vue from "vue";

export default {
  name: "jour",
}

new Vue({
  el: '#app',
  data: {
    message:""
  },
  methods:{
    testFunction: function () {
      var v = this;
      setInterval(function () {
        v.message = new Date().toLocaleTimeString();
      }, 1000);
    }
  },
  mounted () {
    this.testFunction()
  }
});

</script>


<style scoped>

</style>

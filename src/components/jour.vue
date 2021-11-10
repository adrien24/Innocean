<template>
  <div id="jour">



    {{moment().format('MMMM Do YYYY, h:mm:ss a')}}



  </div>
</template>

<script>

import moment from 'moment'


export default {
  name: "jour",

  methods: {
    moment: function () {
      return moment();
    }
  },

}



</script>


<style scoped>

</style>

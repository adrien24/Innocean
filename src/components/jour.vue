<template>

  <div id="jour">
    {{currentDateTime()}}
  </div>

</template>

<script>

import moment from 'moment'

export default {
  name: "jour",

  methods: {
    currentDateTime() {
      return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  },
}

</script>


<style scoped>

</style>

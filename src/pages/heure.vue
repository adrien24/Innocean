<template>
  <div id="heure">

    <div class="heure" v-if="heure" style=" display: flex; width: fit-content; margin-left: 23%">

      <h1>{{ dayjs().format('HH', 'fr') }}</h1>

      <h1 style="width: fit-content">&nbsp;{{ dayjs().format(': mm :', 'fr') }}&nbsp;</h1>

      <h1>{{ dayjs().format('ss', 'fr') }}</h1>
    </div>

  </div>
</template>

<script>
const dayjs = require("dayjs");
require('dayjs/locale/fr')
dayjs.locale('fr')

export default {
  name: "heure",

  data(){
    return{
      heure: '',
    }
  },

  created() {
    this.getNow()
    setInterval(this.getNow, 1000);
  },

  methods: {
    getNow: function () {
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = ' ' + time;
      this.heure = dateTime;

    },
  }
}

</script>

<style scoped>

h1{
  font-size: var(--heure);
}

</style>

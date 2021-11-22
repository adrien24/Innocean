<template>

  <div id="jour">


    <span>{{moment().format('Do MMMM YYYY')}}{{ timestamp }}</span>
<br/>
    <div class="motdujour" style="text-align: center">
    <span>Le mot du jour : <br/>« {{resultat.fr}} » <br/> « {{resultat.co}} » <br/> « {{resultat.latin}} »</span>
  </div>

  </div>

</template>

<script>




import inventaire from "../assets/js/inventaire";

export default {

  data() {
    return {
      timestamp: "",
      resultat: inventaire.find( word => word.id === today),
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


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  today = dd + mm;
//document.write(today);
  console.log(today);

</script>


<style scoped>

</style>

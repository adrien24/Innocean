<template>

  <div id="app" v-if="myFunction">
    <info-important />
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>

    </div>

</template>

<script>
import axios from "axios";
import infoImportant from "./components/infoImportant";



export default {

  components:{
    infoImportant
  },

  data() {
    return {
      info: null,

    }
  },


  mounted() {
    this.myHours();
    this.callWeather();
    this.callWeather2();
    setInterval(this.myFunction, 1000)
    setInterval(this.myHours, 1000)

  },



  methods: {

    myHours() {
      let date = new Date();
      let minutes = date.getMinutes();
      let secondes = date.getSeconds();
      if (minutes === 59 && secondes === 50) {
        setTimeout(() => this.$router.push({path: '/heure'}), 0);
      } else if (minutes === 0) {
        setTimeout(() => this.$router.push({path: '/'}), 30000);
      }
    },


    myFunction() {


      if(this.info.current.dt === this.info.current.sunset){
        window.location.reload(true)
      }

      if (this.info.current.dt >= this.info.current.sunrise && this.info.current.dt < this.info.current.sunset) {

          const theme = document.getElementById('app')
          theme.setAttribute('data-theme','lightMode')

      } else {
        const theme = document.getElementById('app')
        theme.setAttribute('data-theme','darkMode')
        document.getElementById("nb").style.filter = "grayscale(100%)";
      }
    },


  callWeather(){
      axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=053f63f3644c351cb877b735a83a84e8&lang=fr&units=metric')
        .then(response => (this.info = response.data))

    },
    callWeather2() {
      axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=5905fcba07fbe528093032c320577407&lang=fr&units=metric')
        .then(response => (this.info = response.data))
    },
  }
}



</script>

<style>
@import "assets/css/app.css";

html {
  overflow-y: hidden;
  overflow-x: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}


.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}

</style>

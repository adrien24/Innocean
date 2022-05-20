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
    setInterval(this.myFunction, 1000)
    setInterval(this.myHours, 1000)
    this.callWeather()
    setInterval(this.callapiI, 10000);
    this.intervalFetchData();
    setInterval(this.callapiS,120000);
  },



  methods: {

    callapiI() {

      axios
        .get('http://192.168.70.183:8055/items/Information?filter[Tag][_eq]=Important')
        .then(response => (this.important = response.data))

    },

    callapiS() {
      axios
        .get('http://192.168.70.183:8055/items/Slider')
        .then(response => (this.slider = response.data))
      setTimeout(this.callapiI, 20000);
    },

    myHours() {
      let date = new Date();
      let minutes = date.getMinutes();
      let secondes = date.getSeconds();
      if (minutes === 59 && secondes === 50) {
        setTimeout(() => this.$router.push({path: '/heure'}).catch(err => {}), 0);
      } else if (minutes === 0 && secondes === 0) {
        setTimeout(() => this.$router.push({path: '/'}).catch(err => {}), 30000);
      }
    },
    callHavas: function () {
      axios
        .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.880589206580616,2.244400876233613/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
        .then(response => (this.havas = response.data))
    },
    callKia: function () {
      axios
        .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.887380083145864,2.1652471948053527/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
        .then(response => (this.kia = response.data))
    },
    callHyundai: function () {
      axios
        .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.90558099727266,2.238146178011094/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
        .then(response => (this.hyundai = response.data))
    },

    intervalFetchData: function () {
      setInterval(() => {
        this.callHavas();
        this.callKia();
        this.callHyundai();
      }, 1200000);
    },


    myFunction() {
      const theme = document.getElementById('app')
      theme.setAttribute('data-theme','lightMode')

      if (this.info.current.dt >= this.info.current.sunrise && this.info.current.dt < this.info.current.sunset) {
        const theme = document.getElementById('app')
        theme.setAttribute('data-theme','lightMode')
      } else if (this.info.current.dt <= this.info.current.sunrise && this.info.current.dt > this.info.current.sunset) {
        const theme = document.getElementById('app')
        theme.setAttribute('data-theme','darkMode')
        document.getElementById("nb").style.filter = "grayscale(100%)";
      }else{
        const theme = document.getElementById('app')
        theme.setAttribute('data-theme','lightMode')
      }


      if(this.info.current.dt === this.info.current.sunset){
        window.location.reload(true)
      }



    },


    callWeather() {
      let date = new Date();
      let hours = date.getHours();
      if(hours < 19 && hours > 8){
      axios
        .get('https://api.openweathermap.org/data/2.5/onecall?lat=48.89510058767381&lon=2.287797034214823&appid=5905fcba07fbe528093032c320577407&lang=fr&units=metric')
        .then(response => (this.info = response.data))
      }
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

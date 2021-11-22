<template>
  <div>


    <div class="bloc">
      <span style="font-weight: bold;">TRAFIC ROUTIER</span>
      <div class="bloc_container">
        <hr color="#df531f" style="width: 90%; margin: 0; margin-bottom: 10px;">
        <div class="ombre">
          <GmapMap
            :center='center'
            :zoom='12'
            style='width:100%;  height: 420px;'
            scaleControl="false"
            zoomControl="false"
            disableDefaultUI="true"
            ref="roadmap"

            :options="{ mapId: 'a133224cece007d1' }"/>
          <div data-udata-dataset="579e32e088ee386754d73ff6"></div>
        </div>

        <div class="trajet">


          <div class="hyundai"><h2>INNOCEAN à Hyundai</h2>
            <span class="gras" v-if="hyundai">{{ time3 }} </span>
          </div>

          <div class="kia"><h2>INNOCEAN à KIA</h2>
            <span class="gras" v-if="kia">{{ time2 }} </span>
          </div>
          <div class="havas">
            <h2>INNOCEAN à HAVAS</h2>
            <span class="gras" v-if="havas">{{ time }} </span></div>

        </div>
      </div>
    </div>


  </div>

</template>

<script>
import axios from "axios";


export default {
  name: "GooglemMap",
  data() {
    return {
      center: {lat: 48.862778212782736, lng: 2.3410531301259785},
      havas: null,
      kia: null,
      hyundai: null,
      InnoceanP: {lat:48.88060000087292,lng:2.244597658280074}
    }
  },



  mounted() {
    this.geolocate();
    this.$refs.roadmap.$mapPromise.then(map => {

      const trafficLayer = new google.maps.TrafficLayer()
      trafficLayer.setMap(map)
    })
    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.88060000087292,2.244597658280074:48.898017800974586,2.279446246633403/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.havas = response.data))

    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.88060000087292,2.244597658280074:48.887380083145864,2.1652471948053527/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.kia = response.data))

    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.88060000087292,2.244597658280074:48.90558099727266,2.238146178011094/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.hyundai = response.data))
    this.initMap()
    this.setMarker(this.InnoceanP, "A")
  },

  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

      });
    },


  },

  computed: {
    time() {
      const sec_num = parseInt(this.havas.routes[0].summary.travelTimeInSeconds, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${hours}h ${minutes} min ${seconds} sec`;
    },

    time2() {
      const sec_num = parseInt(this.kia.routes[0].summary.travelTimeInSeconds, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${hours}h ${minutes} min ${seconds} sec`;
    },


    time3() {
      const sec_num = parseInt(this.hyundai.routes[0].summary.travelTimeInSeconds, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${hours}h ${minutes} min ${seconds} sec`;
    },
    setMarker(Points, Label){
      const marker = new google.maps.Marker({
        position: Points,
        map:this.map,
        label:{
          text:Label,
          color:'#FFF'
        }
      });
    }



  },
}




</script>

<style scoped>

body {
  margin: 0;
}

.bloc {
  font-family: 'Montserrat', sans-serif;
  width: 500px;
  height: auto;
  background-color: #FFFCF7;
  border-radius: 10px;
  border: solid 1px rgba(223, 83, 31, 0.40);
  box-shadow: 30px 10px 75px 1px rgba(223, 83, 31, 0.30);
  color: rgba(223, 83, 31, 1);
  font-size: 20px;
  padding: 10px;

}

.trajet {
  text-align: center;
  margin: 15px 0 !important;

}

.trajet div {
  padding-top: 20px;
}

.bloc div {
  margin-top: 5px;
}

.gras {
  font-weight: bold;
  font-size: 35px;
}

.ombre {
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.04);
}

</style>

<template>

  <div>
    <div class="bloc" id="bloc">
      <span style="font-weight: bold;">TRAFIC ROUTIER</span>
      <div class="bloc_container">
        <hr  style="margin: 0; margin-bottom: 10px;">
        <div class="ombre">
          <GmapMap
            :center='center'
            :zoom='12'
            style='width:100%;  height: 420px;'
            ref="roadmap"

            :options="{ mapId: 'a133224cece007d1', streetViewControl: false, mapTypeControl: false, scaleControl: false,
            zoomControl: false, disableDefaultUI: true, keyboardShortcuts: false, }">

            <gmap-custom-marker :marker="InnoceanM">
              <img src="../assets/img/innocean-dot.png" alt="dot" style="width: 30px">
            </gmap-custom-marker>
            <gmap-custom-marker :marker="HavasM">
              <img src="../assets/img/havas-dot.png" alt="dot" style="width: 30px">
            </gmap-custom-marker>
            <gmap-custom-marker :marker="KiaM">
              <img src="../assets/img/kia-dot.png" alt="dot" style="width: 30px">
            </gmap-custom-marker>
            <gmap-custom-marker :marker="HyundaiM">
              <img src="../assets/img/hyundai-dot.png" alt="dot" style="width: 30px">
            </gmap-custom-marker>


          </GmapMap>


          <div data-udata-dataset="579e32e088ee386754d73ff6"></div>
        </div>

        <div class="trajet">


          <div class="hyundai" id="hyundaicolor">
            INNOCEAN à Hyundai  <span id="info"></span>
            <div class="circulation">
              <span class="gras" v-if="hyundai">{{ time3 }} </span>

            </div>

          </div>

          <div class="kia">
            INNOCEAN à KIA <span id="info2"></span>
            <div class="circulation">
              <span class="gras" v-if="kia">{{ time2 }} </span>
            </div>
          </div>

          <div class="havas">
            INNOCEAN à HAVAS <span id="info3"></span>
            <div class="circulation">
              <span class="gras" v-if="havas">{{ time }} </span>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>

</template>

<script>
import axios from "axios";
import GmapCustomMarker from 'vue2-gmap-custom-marker';


export default {
  name: "GoogleMap",
  components: {
    'gmap-custom-marker': GmapCustomMarker
  },
  data() {
    return {
      center: {lat: 48.89174573005072, lng: 2.2171737851586393},
      havas: null,
      kia: null,
      hyundai: null,
      InnoceanM: {lat: 48.898017800974586, lng: 2.279446246633403},
      HavasM: {lat: 48.880589206580616, lng: 2.244400876233613},
      KiaM: {lat: 48.887380083145864, lng: 2.1652471948053527},
      HyundaiM: {lat: 48.90558099727266, lng: 2.238146178011094},

    }
  },

  mounted() {
    this.geolocate();
    this.$refs.roadmap.$mapPromise.then(map => {

      const trafficLayer = new google.maps.TrafficLayer()
      trafficLayer.setMap(map)
    })
    this.$refs.roadmap.$mapPromise.then((map) => {
      map.panTo({lat: 48.89174573005072, lng: 2.2171737851586393})
    })
    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.880589206580616,2.244400876233613/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.havas = response.data))

    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.887380083145864,2.1652471948053527/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.kia = response.data))

    axios
      .get('https://api.tomtom.com/routing/1/calculateRoute/48.898017800974586,2.279446246633403:48.90558099727266,2.238146178011094/json?key=mmj9TrjzwQ6DRXc7jhczdus9kLXN9S3e')
      .then(response => (this.hyundai = response.data))



  },


  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: 48.89174573005072,
          lng: 2.2171737851586393,
        };

      });
    },
  },


  computed: {


    time: function () {
      setInterval(function () { this.time(); }, 1000)
      const sec_num = parseInt(this.havas.routes[0].summary.travelTimeInSeconds, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours >= 1) {
        hours = `0${hours} h`;
      }

      if (hours < 1) {
        hours = ''
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (minutes >= 0 && minutes < 16) {
        const havas = document.getElementById("info3");
        havas.textContent = "(Trafic fluide)";

      }
      else if (minutes >= 16 && minutes < 18) {
        const havas = document.getElementById("info3");
        havas.textContent = "(Trafic modéré)";

      }
      else {
        const havas = document.getElementById("info3");
        havas.textContent = "(Trafic important)";
      }

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }


      return `${hours} ${minutes} min ${seconds} sec`;

    },

    time2() {
      const sec_num = parseInt(this.kia.routes[0].summary.travelTimeInSeconds, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours >= 1) {
        hours = `0${hours} h`;
      }

      if (hours < 1) {
        hours = ''
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (minutes >= 0 && minutes < 16) {
        const kia = document.getElementById("info2");
        kia.textContent = "(Trafic fluide)";

      }
      else if (minutes >= 16 && minutes < 18) {
        const kia = document.getElementById("info2");
        kia.textContent = "(Trafic modéré)";

      }
      else {
        const kia = document.getElementById("info2");
        kia.textContent = "(Trafic important)";
      }

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }


      return `${hours} ${minutes} min ${seconds} sec`;
    },


    time3() {
      const sec_num = parseInt(this.hyundai.routes[0].summary.travelTimeInSeconds, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours >= 1) {
        hours = `0${hours} h`;
      }

      if (hours < 1) {
        hours = ''
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (minutes >= 0 && minutes < 16) {
        const hyundai = document.getElementById("info");
        hyundai.textContent = "(Trafic fluide)";

      }
      else if (minutes >= 16 && minutes < 18) {
        const hyundai = document.getElementById("info");
        hyundai.textContent = "(Trafic modéré)";

      }
      else {
        const hyundai = document.getElementById("info");
        hyundai.textContent = "(Trafic important)";
      }

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${hours} ${minutes} min ${seconds} sec`;
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
  padding-top: 10px;
}

.bloc div {
  margin-top: 5px;
}

.blocnuit div{
  margin-top: 5px;
}

.gras {
  font-weight: bold;
  font-size: 35px;
}

.ombre {
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.04);
}

.circulation {
  display: flex;
  align-items: baseline;
  justify-content: center;
}


#info, #info2, #info3{
  font-size: 14px;
  font-style: italic;
}
</style>

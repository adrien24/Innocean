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

            :options="{ mapId: 'a133224cece007d1' }">


            <GmapMarker
              :key="index"
              v-for="(m, index) in getMarkers()"
              :position="m.position"
              :clickable="false"
              :draggable="false"
              :icon="m.icon"
            />


          </GmapMap>


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
  name: "GoogleMap",
  data() {
    return {
      center: {lat: 48.89174573005072, lng: 2.2171737851586393},
      havas: null,
      kia: null,
      hyundai: null,
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

    getMarkers() {
      // generating markers for site map
      var markers = [];
      // remove this after lat long received from api.
      const tempLatLong = [
        {lat: 48.898017800974586, lng: 2.279446246633403, case: 1},
        {lat: 48.88060000087292, lng: 2.244597658280074, type: "case2"},
        {lat: 48.887380083145864, lng: 2.1652471948053527},
        {lat: 48.90558099727266, lng: 2.238146178011094}
      ];
      for (let i = 0; i < tempLatLong.length; i++) {
        markers.push({
          position: tempLatLong[i],
          icon: this.getSiteIcon(2)    // if you want to show different as per the condition.
        });
      }
      return markers;
    },
    getSiteIcon(status) {
      try {
        switch (status) {
          case 1:
            return ("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
            break;
          case 2:
            return ("http://maps.google.com/mapfiles/ms/icons/yellow-dot.png");
            break;
          case 3:
            return ("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
            break;
          case 4:
            return ("http://maps.google.com/mapfiles/ms/icons/yellow-dot.png");
            break;
          default:
            return ("http://maps.google.com/mapfiles/ms/icons/purple-dot.png");
        }
      } catch (e) {
        return null;
      }
    },


  },

  computed: {
    time: function () {
      const sec_num = parseInt(this.havas.routes[0].summary.travelTimeInSeconds, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      let seconds = sec_num - (hours * 3600) - (minutes * 60);

      if (hours >= 1) {
        hours = `0${hours} h`;
      }

      if (hours < 1){
        hours = ''
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
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

      if (hours < 1){
        hours = ''
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
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

      if (hours < 1){
        hours = ''
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
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

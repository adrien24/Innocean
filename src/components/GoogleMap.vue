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
            ref="roadmap"

            :options="{ mapId: 'a133224cece007d1', streetViewControl: false, mapTypeControl: false, scaleControl: false,
            zoomControl: false, disableDefaultUI: true, keyboardShortcuts: false, }">

            <gmap-custom-marker :marker="InnoceanM">
              <img src="../assets/img/innocean-dot.png" style="width: 30px">
            </gmap-custom-marker>
            <gmap-custom-marker :marker="HavasM">
              <img src="../assets/img/havas-dot.png" style="width: 30px">
            </gmap-custom-marker>
            <gmap-custom-marker :marker="KiaM">
              <img src="../assets/img/kia-dot.png" style="width: 30px">
            </gmap-custom-marker>
            <gmap-custom-marker :marker="HyundaiM">
              <img src="../assets/img/hyundai-dot.png" style="width: 30px">
            </gmap-custom-marker>


          </GmapMap>


          <div data-udata-dataset="579e32e088ee386754d73ff6"></div>
        </div>

        <div class="trajet">


          <div class="hyundai" id="hyundaicolor"><h2>INNOCEAN à Hyundai</h2>
            <span class="gras" v-if="hyundai">{{ time3 }} </span>
          </div>

          <div class="kia"><h2>INNOCEAN à KIA</h2>
            <span class="gras" v-if="kia">{{ time2 }} </span>
          </div>
          <div class="havas">
            <h2>INNOCEAN à HAVAS</h2>
            <span class="gras" v-if="havas">{{ time }} </span></div>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px"
               viewBox="0 0 511 511" style="enable-background:new 0 0 511 511; width: 10%" xml:space="preserve">              <g>
	<path class="st0" d="M160,307.5h133.5c14.2,0,27.5-7.6,34.8-19.7l14.5-24.2c2.3-3.8,1-8.7-2.7-11c-3.8-2.3-8.7-1-11,2.7l-14.5,24.2
		c-4.4,7.4-12.5,11.9-21.1,11.9H160c-4.4,0-8,3.6-8,8S155.6,307.5,160,307.5z"/>
            <path class="st0" d="M504,323.6v-24.1c0-48.5-39.5-88-88-88h-44.2c-12.4-9.7-62.9-48-91.8-48h-54c-11,0-21.9,1.7-32.4,4.9
		c-0.2,0.1-0.4,0.1-0.6,0.2l-73.7,29.7c-11.1,3.4-22.6,5.2-34.2,5.2H58.7c-0.4-0.8-0.9-1.5-1.5-2.2l-7.8-7.8
		C58,189.9,64,181.4,64,171.5v-8c0-4.4-3.6-8-8-8H8c-4.4,0-8,3.6-8,8v8c0,13.3,10.8,24,24,24h4.6l8,8H30c-12.1,0-22,9.9-22,22v66
		c0,18.5,13.3,34.1,33.9,39.7c10.1,14.7,27,24.3,46.1,24.3c15.2,0,29-6.1,39.1-16h249.7c10.1,9.9,23.9,16,39.1,16s29-6.1,39.1-16
		H503c4.4,0,8-3.6,8-8C511,327.4,507.9,324.1,504,323.6z M16,171.5h32c0,4.4-3.6,8-8,8H24C19.6,179.5,16,175.9,16,171.5z
		 M356.3,219.8c-3.6,2.5-6.2,5.2-8.1,7.3l-151-14.5c7.1-12.7,21.7-33.1,42.8-33.1h40C298.9,179.5,336.3,204.7,356.3,219.8z
		 M24,291.5v-66c0-3.3,2.7-6,6-6h55.2c13.3,0,26.5-2,39.2-6c0.2-0.1,0.4-0.1,0.6-0.2l73.4-29.6c-2,2.1-4,4.4-5.9,6.9
		c-9.8,12.8-14.8,25.4-15,26c-0.9,2.3-0.7,5,0.6,7.1c1.3,2.1,3.6,3.5,6.1,3.8l167,16c0.3,0,0.6,0,0.8,0c2.9,0,5.6-1.5,6.9-4.2
		c0.6-0.9,7.4-11.9,25-11.9h32c39.7,0,72,32.3,72,72v24h-21.4c3.5-7.3,5.4-15.4,5.4-24c0-30.9-25.1-56-56-56s-56,25.1-56,56
		c0,8.6,1.9,16.7,5.4,24H138.6c3.5-7.3,5.4-15.4,5.4-24c0-30.9-25.1-56-56-56s-56,25.1-56,56c0,3.3,0.3,6.6,0.9,9.7
		C27.2,304.6,24,298.4,24,291.5z M48,299.5c0-22.1,17.9-40,40-40s40,17.9,40,40s-17.9,40-40,40S48,321.6,48,299.5z M416,339.5
		c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S438.1,339.5,416,339.5z"/>
            <path class="st0" d="M112,291.5c-4.4,0-8,3.6-8,8c0,8.8-7.2,16-16,16s-16-7.2-16-16s7.2-16,16-16c4.4,0,8-3.6,8-8s-3.6-8-8-8
		c-17.6,0-32,14.4-32,32s14.4,32,32,32s32-14.4,32-32C120,295.1,116.4,291.5,112,291.5z"/>
            <path class="st0" d="M440,291.5c-4.4,0-8,3.6-8,8c0,8.8-7.2,16-16,16s-16-7.2-16-16s7.2-16,16-16c4.4,0,8-3.6,8-8s-3.6-8-8-8
		c-17.6,0-32,14.4-32,32s14.4,32,32,32s32-14.4,32-32C448,295.1,444.4,291.5,440,291.5z"/>
</g>
</svg>

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

      if (minutes >= 0 && minutes < 13) {
        const havas = document.querySelector('svg');
        havas.style.fill = 'green';


      } else if (minutes >= 13 && minutes < 16) {
        const havas = document.querySelector('.havas');
        havas.style.fill = 'orange';

      } else if (minutes >= 16) {
        const havas = document.querySelector('.havas');
        havas.style.fill = 'red';

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

      if (minutes >= 0 && minutes < 13) {
        const kia = document.querySelector('.kia');
        kia.style.borderBottom = '3px solid green';
      } else if (minutes >= 13 && minutes < 16) {
        const kia = document.querySelector('.kia');
        kia.style.borderBottom = '3px solid orange';
      } else if (minutes >= 16) {
        const kia = document.querySelector('.kia');
        kia.style.borderBottom = '3px solid red';
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

      if (minutes >= 0 && minutes < 12) {
        const hyundai = document.querySelector('.hyundai');
        hyundai.style.borderBottom = '3px solid green';
      } else if (minutes >= 12 && minutes < 16) {
        const hyundai = document.querySelector('.hyundai');
        hyundai.style.borderBottom = '3px solid orange';
      } else {
        const hyundai = document.querySelector('.hyundai');
        hyundai.style.borderBottom = '3px solid red';
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


{
  display: none
;
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

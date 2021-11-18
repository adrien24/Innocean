<template>
  <div>
    <div>

    </div>
    <br/>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:20%;  height: 420px;'
      scaleControl="false"
      zoomControl="false"
      disableDefaultUI="true"
      ref="roadmap"

      :options="{ mapId: 'a133224cece007d1' }"/>
    <div data-udata-dataset="579e32e088ee386754d73ff6"></div>

  </div>

</template>

<script>
export default {
  name: "GooglemMap",
  data() {
    return {
      center: { lat: 48.862778212782736, lng: 2.3410531301259785 },
    }
  },

  mounted() {
    this.geolocate();
    this.$refs.roadmap.$mapPromise.then(map => {

      const trafficLayer = new google.maps.TrafficLayer()
      trafficLayer.setMap(map)
    })
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
  }
}

</script>

<style scoped>



</style>

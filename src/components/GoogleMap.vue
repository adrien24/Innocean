<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
    </div>
    <br/>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:50%;  height: 800px;'
      ref="roadmap"
      map-type-id="roadmap"
      scaleControl="false"
      zoomControl="false"

    />

    <div id="map"></div>

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
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },





}
</script>

<style scoped>



</style>

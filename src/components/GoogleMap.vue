<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
    </div>
    <br/>
    <GmapMap
      :center='center'
      :zoom='18'
      style='width:100%;  height: 400px;'
    />
  </div>
</template>

<script>
export default {
  name: "GooglemMap",
  data() {
    return {
      center: { lat: 48.89818002318181, lng: 2.279285313977385 },
    }
  },

  mounted() {
    this.geolocate();
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

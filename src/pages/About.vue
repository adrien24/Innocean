<template>

  <div class="Accueil">
    <router-link to="/"></router-link>
    <h1>lolololololo</h1>
  </div>

</template>

<script>

export default {
  name: 'Accueil',

  created() {
    setTimeout(() => this.$router.push({path: '/'}), 5000);
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

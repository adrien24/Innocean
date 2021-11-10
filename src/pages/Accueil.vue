<template>

  <div class="Accueil">
    <router-link id="change" onclick="changer" to="/about">lala</router-link>
  </div>

</template>

<script>
export default {
  name: 'Accueil',

  created(){
    setTimeout( () => this.$router.push({ path: '/about'}), 5000);
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





</style>

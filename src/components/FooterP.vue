<template>
  <div class="footerP">

    <img src="https://source.unsplash.com/random" width="100px" height="100px">
  </div>
</template>

<script>

export default {
  name: "FooterP",

  created(){
    setTimeout( () => this.img.push(0), 1000);
  }


}
</script>

<style scoped>


</style>

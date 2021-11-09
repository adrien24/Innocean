<template>
  <div class="footerP">
    <component-to-re-render :key="componentKey"/>
    <img src="https://source.unsplash.com/random" width="100px" height="100px">
  </div>
</template>

<script>

export default {
  name: "FooterP",

  data ( )  {
    return  {
      componentKey :  0 ,
    } ;
  } ,
  méthodes:{
    setTimeout(forceRerender(){
      this.componentKey  +=  1 ;
    }
  }


}
</script>

<style scoped>


</style>

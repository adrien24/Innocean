<template>

  <div class="slider">
    <slither-slider :options="{fullscreen:true, autoplay : true, loop : true ,secondsOnSlide: 10,controls: false, dots: false,  }">
      <!-- Slide 1 -->
      <div>
        <img src="../assets/img/nicolas1.jpg">
      </div>

      <!-- Slide 2 -->
      <div>
        <img src="../assets/img/alex.jpg">
      </div>

      <!-- Slide 3 -->
      <div>
        <img src="../assets/img/nicolas2.jpg">
      </div>
      <div>
        <img src="../assets/img/thomas.jpg">
      </div>
    </slither-slider>
  </div>



</template>

<script>




  export default {
    name: "slidertest"}
</script>

<style scoped>
img {

  width: 100%;

}


.slider{
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  border: solid 1px rgba(223,83,31,0.40);
  box-shadow: 30px 10px 75px 1px rgba(223,83,31,0.30);
  color: rgba(223,83,31,1);
  font-size: 20px ;
  padding: 10px;
  height: 350px;
  margin-top: 20px;
}


</style>

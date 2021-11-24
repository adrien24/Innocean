<template>

  <div class="slider">
    <slither-slider :options="{fullscreenOffset:false, autoplay : true, loop : true ,secondsOnSlide: 10,controls: false, dots: false,  }">
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



}




img{
  border-radius: 10px;
  border: solid 1px rgba(223,83,31,0.40);
  box-shadow: 5px 10px 30px 1px rgba(223,83,31,0.30);
  margin-top: 20px;
  width: 95%;
}

slither-slider div{

}

.slider {
  width: 100%;
}




</style>

<template>

  <div class="sliderjour" id="sliderjour">
    <slither-slider :options="{fullscreenOffset:false, autoplay : true, loop : true ,secondsOnSlide: 5,controls: false, dots: false,  }">
      <div>
        <img class="slider" src="../assets/img/slider/nicolas1.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/alex.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/nicolas2.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/thomas.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/anais.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/groupe.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/eric.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/DSC_4581.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/julien.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/julienkia.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/martine.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/paul.jpg">
      </div>
      <div>
        <img class="slider" src="../assets/img/slider/zoe.jpg">
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




.slider{
  border-radius: 10px;
  width: 100%;
}

.sliderjour {
  margin-top: 20px;
  border-radius: 10px;
  width: 95%;
  border: solid 1px rgba(223,83,31,0.40);
  box-shadow: 5px 10px 30px 1px rgba(223,83,31,0.30);

}




</style>

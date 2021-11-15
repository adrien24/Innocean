<template>
 <div id="slider">
   <image-slider>
     <img :src="images[currentNumber % images.length]" />
   </image-slider>
 </div>
</template>

<script>
export default {
  el: 'image-slider',
  data() {
    return {
      images: ['https://images.unsplash.com/photo-1636957300326-018067481e5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4000&q=80', 'https://images.unsplash.com/photo-1636879306739-77844ac19500?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80'],
      currentNumber: 0,
      timer: null
    }
  },

  mounted: function () {
    this.startRotation();
  },

  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 2000);
    },


    next: function () {
      this.currentNumber += 1
    }
  }
}
</script>


<style scoped>

#slider > image-slider > img{
  width: 250px;
}

</style>

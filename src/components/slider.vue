<template>
 <div id="slider">
   <div>

     <img :src="images[currentNumber % images.length]" />

   </div>
 </div>
</template>

<script>
export default {

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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

#slider > div > img{
  width: 250px;
  height: 350px;
}

</style>

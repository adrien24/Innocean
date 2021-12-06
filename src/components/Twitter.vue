
<template>
  <div class="trafic" id="twitter">
    <span style="font-weight: bold; margin-left: 5%;">TRAFIC</span>
    <div class="trafic_container">
      <hr style="width: 90%; margin: 0; margin-bottom: 10px;">

      <a class="twitter-timeline"  href="https://twitter.com/my_innobot/lists/1463433822901608450" data-chrome="noheader nofooter transparent noscrollbar"  data-height="720" data-width="400" data-theme="dark"></a>

    </div>
  </div>


</template>

<script>
export default {
  name: "Twitter"
}


</script>

<style scoped>

body{
  margin: 0;
}

.trafic{
  font-family: 'Montserrat', sans-serif;
  width: 95%;
  margin-left: 5%;
  background-color: rgba(255, 252, 247, 1);
  border-radius: 10px;
  border: solid 1px rgba(223,83,31,0.40);
  box-shadow: 30px 10px 75px 1px rgba(223,83,31,0.30);
  color: rgba(223,83,31,1);
  font-size: 20px ;
  padding: 10px;
}



.trafic_container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trafic div{
  margin-bottom: 5px;
  margin-top: 5px;
}

.traficnuit div{
  margin-bottom: 5px;
  margin-top: 5px;
}






</style>

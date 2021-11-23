<template>
  <div class="trafic">
    <span style="font-weight: bold; margin-left: 5%;">TRAFIC</span>
    <div class="trafic_container">
      <hr color="#df531f" style="width: 90%; margin: 0; margin-bottom: 10px;">

          <a class="twitter-timeline" href="https://twitter.com/Ligne3_RATP" data-width="400" data-chrome="nofooter noheader noscrollbar transparent" data-tweet-limit="2"
             ></a>



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
  height: auto;
  background-color: #FFFCF7;
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

.ombre{
  box-shadow: 6px 6px 10px 0px rgba(0,0,0,0.04);
}

iframe{
  width: 500px; height: 700px
}



</style>

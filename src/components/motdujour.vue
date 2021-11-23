<template>
  <div id="motdujour">
    <div class="trafic">
      <span style="font-weight: bold; margin-left: 5%;">MOT DU JOUR</span>
      <div class="trafic_container">
        <hr color="#df531f" style="width: 90%; margin: 0; margin-bottom: 10px;">
        <div>« {{ resultat.fr }} »</div>
        <div>« {{ resultat.co }} »</div>
        <div>« {{ resultat.latin }} »</div>
      </div>
    </div>
  </div>
</template>

<script>
import inventaire from "../assets/js/inventaire";

export default {
  name: "motdujour",

  data() {
    return {
      resultat: inventaire.find(word => word.id === today),
    }
  }
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

today = dd + mm;

</script>

<style scoped>
body{
  margin: 0;
}

.trafic{
  font-family: 'Montserrat', sans-serif;
  padding: 15px 0;
  height: auto;
  background-color: #FFFCF7;
  border-radius: 10px;
  border: solid 1px rgba(223,83,31,0.40);
  box-shadow: 30px 10px 75px 1px rgba(223,83,31,0.30);
  color: rgba(223,83,31,1);
  font-size: 20px ;


}

.trafic_container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trafic div{
  margin-top: 5px;
}
</style>

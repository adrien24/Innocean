<template>


  <div class="anniversaire">
    <span style="font-weight: bold; margin-left: 5%;">ANNIVERSAIRE</span>
    <div class="trafic_container">
      <hr color="#df531f" style="width: 90%; margin: 0; margin-bottom: 10px;">
      <div class="bloc_container_scnd">
        <div><span style="font-weight: bold; font-size: 20px;">{{resultat[0].name}}</span></div>
        <div>{{resultat[0].date}}</div>
      </div>
      <div class="bloc_container_scnd">
        <div><span style="font-weight: bold; font-size: 20px;">{{resultat[1].name}}</span></div>
        <div>{{resultat[1].date}}</div>
      </div>
      <div class="bloc_container_scnd">
        <div><span style="font-weight: bold; font-size: 20px;">{{resultat[2].name}}</span></div>
        <div>{{resultat[2].date}}</div>
      </div>
    </div>
  </div>

</template>

<script>
import anniversaire from "../assets/js/anniv";


export default {
  name: "anniversaire",

  data() {
    return {
      timestamp: "",
      resultat: anniversaire.splice(indexday,maxday),

    }
  },


}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

today = dd + mm ;

var indexday = anniversaire.map(function(e) { return e.id; }).indexOf(today);

var maxday = 6;




</script>

<style scoped>
body{
  margin: 0;
}

.anniversaire{
  font-family: 'Montserrat', sans-serif;
  margin-top: 20px;
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

.bloc_container_scnd{
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.trafic div{
  margin-top: 5px;
}
</style>

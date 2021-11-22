<template>
  <div id="anniversaire">
{{resultat}}
  </div>
</template>

<script>
import anniversaire from "../assets/js/anniv";


export default {
  name: "anniversaire",

  data() {
    return {
      timestamp: "",
      resultat: anniv.splice(indexday,maxday),

    }
  },
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

today = dd + mm ;
//document.write(today);
console.log(today);

const anniv = [
  {id: "1611", name: "Jean"},
  {id: "1711", name: "Martine"},
  {id: "1811", name: "Adrien"},
  {id: "1911", name: "Louis"},
  {id: "2011", name: "Julien"},
  {id: "2111", name: "Sun"},
  {id: "2211", name: "Pierre"},
  {id: "2311", name: "Nico"},
  {id: "2411", name: "JB"}
];


// on récupère l'index de la date du jour :
var indexday = anniv.map(function(e) { return e.id; }).indexOf(today);
console.log(indexday);

// on veut les 5 anniv qui suivent la date du jour
var maxday = 8;
console.log(maxday);

//on affiche le tableau avec les 5 anniv
console.log(anniv.splice(indexday,maxday));

</script>

<style scoped>

</style>

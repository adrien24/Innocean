<template>

  <div id="anniversaire" class="Pbloc fond">
    <div id="anniv">
      <h2>ANNIVERSAIRE</h2>
      <div class="anniv_container">
        <hr>
        <div class="bloc_container_scnd" style="width: 90%;">
          <ul id="demo" style="width: 100%;">
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import anniversaire from "../assets/js/anniv";

export default {
  name: "anniversaire",

}

const fmt = md => md.split('-').map(p => `0${p}`.slice(-2)).join('-');
const now = new Date();
const year = new Date().getFullYear();
const nww = fmt(`${now.getMonth() + 1}-${now.getDate()}`);
const nw = new Date(`${year}-${nww}`).getTime();


const ordered = anniversaire.map(({date: d, name}) => ({
  date: d, name, d: `${d < nww ? (year + 1) : year}-${d}`
})).map(({
  d, ...rest
  }) => ({
  ...rest, d, ...{
  t: new Date(d).getTime()
  }
})).sort((a, b) => (a.t - nw) - (b.t - nw)).map(({
  date,
  name
  }) => ({
  date,
  name
}));

console.log(ordered);
const nextanniv = ordered.slice(0, 5);
console.log(nextanniv);

var months = ["Janvier", "Fevrirer", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

let text = "";
nextanniv.forEach(myFunctionAnniv);
window.onload = function () {
  document.getElementById("demo").innerHTML = text;
}

function myFunctionAnniv(item, index) {
  let annivMonth = Number((item.date).split("-")[0]) - 1;
  text += "<div style='display: flex; justify-content: space-between'>" + "<p>" + item.name + "</p>" + ' ' + "<p style='font-weight: bold'>" + (item.date).split("-")[1] + ' ' + months[annivMonth] + "</p>" + "</div>";
}

</script>

<style scoped>

</style>

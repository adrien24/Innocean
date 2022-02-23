<template>

  <div id="anniversaire" class="Pbloc fond">
    <div id="anniv">
      <h2>ANNIVERSAIRES</h2>
      <div class="anniv_container">
        <hr>
        <div class="bloc_container_frst">
          <div id="annivDay"></div>
        </div>
        <div class="bloc_container_scnd" style="width: 90%;">
          <ul id="anniversairary" style="width: 100%;">
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import anniversaire from "../assets/js/anniv";
import dayjs from "dayjs";

var calendar = require('dayjs/plugin/calendar')
dayjs.extend(calendar)

export default {
  name: "anniversaire",
  mounted() {
    setTimeout(window.onload, 1000)

    window.onload = function () {
      document.getElementById("annivDay").innerHTML = text1;
      document.getElementById("anniversairary").innerHTML = text;
    }
  }
}


const fmt = md => md.split('-').map(p => `0${p}`.slice(-2)).join('-');
const now = new Date();
const day = new Date().getDay();
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

const nextanniv = ordered.slice(0, 5);
const nowanniv = ordered.slice(0, 5);


var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];


let text = "";
let text1 = "";

nextanniv.forEach(myFunctionAnniv);
nowanniv.forEach(myAnniv);

function myFunctionAnniv(item, index) {
  let annivMonth = Number((item.date).split("-")[0]) - 1;
  if (nww === item.date) {
    return false;
  } else {
    text += "<dl class='anniv_place'>" + "<dt>" + item.name + "</dt>" + ' ' + "<dd>" + (item.date).split("-")[1] + ' ' + months[annivMonth] + "</dd>" + "</dl>";
  }
}

function getMonday(d) {
  var today = new Date();
  var day = today.getDay() || 7; // Get current day number, converting Sun. to 7
  if (day !== 1)                // Only manipulate the date if it isn't Mon.
    today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1
  //   multiplied by negative 24

}

function myAnniv(item, index) {
  let annivMonth = Number((item.date).split("-")[0]) - 1;

  if (nww === item.date) {
    text1 += "<h2 style='text-align: center'>" + "Joyeux anniversaire à" + "</h2>" + "<dl class='anniv_day_place' style='text-align: center'>" + "<span>" + item.name + "</span>" + "<span>" + '&nbsp;et&nbsp;' + "</span>" + "</dl>";
  }
}


</script>

<style scoped>

</style>

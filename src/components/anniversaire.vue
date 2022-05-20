<template>

  <div id="anniversaire" class="Pbloc fond">
    <div id="anniv">
      <h2>ANNIVERSAIRES</h2>
      <div class="anniv_container">
        <hr>
        <div class="bloc_container_frst">
          <div id="annivDay">
            <dl class='anniv_place gras'>
              <dt>

              </dt>
            </dl>
          </div>
        </div>
        <div class="bloc_container_scnd gras" style="width: 90%;">
          <ul id="anniversairary" style="width: 100%;">
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import dayjs from "dayjs";
import axios from "axios";

var calendar = require('dayjs/plugin/calendar')
dayjs.extend(calendar)

export default {
  name: "anniversaire",

  data(){
    return{
     anniversaire: [],
     resultat: '',
    }
  },


  mounted() {

  },

  created() {
    setTimeout(this.init, 1000)
    setTimeout(this.CallAPIAnniv, 2000)
    this.CallAPIAnniv();
    this.getMonday();
    setTimeout(window.onload, 1000)
  },

  methods: {

    CallAPIAnniv() {
      axios
        .get('https://6ooontrv.directus.app/items/Anniversaire')
        .then(response => (this.anniversaire = response.data))




    },

    init(){
      this.fmt = md => md.split('-').map(p => `0${p}`.slice(-2)).join('-');
      this.now = new Date();
      this.year = new Date().getFullYear();
      this.nww = this.fmt(`${this.now.getMonth() + 1}-${this.now.getDate()}`);
      this.nw = new Date(`${this.year}-${this.nww}`).getTime();


      const ordered = this.anniversaire.data.map(({Date: d, Prenom}) => ({
        Date: d, Prenom, d: `${d < this.nww ? (this.year + 1) : this.year}-${d}`
      })).map(({
                 d, ...rest
               }) => ({
        ...rest, d, ...{
          t: new Date(d).getTime()
        }
      })).sort((a, b) => (a.t - this.nw) - (b.t - this.nw)).map(({
                                                         Date,
                                                         Prenom
                                                       }) => ({
        Date,
        Prenom
      }));

      this.nextanniv = ordered.slice(0, 5);

      this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

      for (let i = 0; i < this.nextanniv.length; i++) {
        this.annivMonth = Number((this.nextanniv[i].Date).split("-")[0]) - 1;
        if (this.nww === this.nextanniv[i].Date) {
          this.nowanniversary = "<h2 style='text-align: center'>" + "Joyeux anniversaire à" + "</h2>" + "<dl class='anniv_day_place' style='text-align: center'>" + "<span>" + this.nextanniv[0].Prenom + "</span>" + "<span>" + '&nbsp;et&nbsp;' + "</span>" + "</dl>";
          this.resultat += "<dl class='anniv_place'>" + "<dt class='gras'>" + this.nextanniv[i].Prenom + "</dt>" + ' ' + "<dd>" + (this.nextanniv[i].Date).split("-")[1] + ' ' + this.months[this.annivMonth] +"</dd>" + "</dl>";
          document.getElementById("annivDay").innerHTML = this.nowanniversary;
        } else {
          this.resultat += "<dl class='anniv_place'>" + "<dt class='gras'>" + this.nextanniv[i].Prenom + "</dt>" + ' ' + "<dd>" + (this.nextanniv[i].Date).split("-")[1] + ' ' + this.months[this.annivMonth] + "</dd>" + "</dl>";
          document.getElementById("anniversairary").innerHTML = this.resultat;
        }
      }
    },

    getMonday(d) {
      let today = new Date();
      let day = today.getDay() || 7; // Get current day number, converting Sun. to 7
      if (day !== 1)                // Only manipulate the date if it isn't Mon.
        today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1
      //   multiplied by negative 24
    },
  }
}


</script>

<style scoped>

</style>

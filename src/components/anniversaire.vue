<template>

  <div id="anniversaire" class="Pbloc fond">
    <div id="anniv">
      <h2>ANNIVERSAIRES</h2>
      <div class="anniv_container">
        <hr>
        <div class="bloc_container_frst">
          <div id="annivDay">
            <dl class='anniv_place'>
              <dt>
                {{ this.resultat}}
              </dt>
            </dl>
          </div>
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

import dayjs from "dayjs";
import axios from "axios";

var calendar = require('dayjs/plugin/calendar')
dayjs.extend(calendar)

export default {
  name: "anniversaire",

  data(){
    return{
     anniversaire: [],
      resultat: null,
    }
  },


  mounted() {
    setTimeout(window.onload, 1000)
    this.CallAPIAnniv();
    this.getMonday();
    setTimeout(this.myFunctionAnniv, 5000)
    setTimeout(this.init, 5000)
    setTimeout(this.myAnniv, 5000)
  },

  methods: {

    CallAPIAnniv() {
      axios
        .get('http://192.168.70.183:8055/items/Anniversaires')
        .then(response => (this.anniversaire = response.data))
      setTimeout(this.CallAPIAnniv, 2000)



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
      this.nextanniv.forEach(this.myFunctionAnniv);
      this.nowanniv = ordered.slice(0, 5);
      this.nowanniv.forEach(this.myAnniv);



      this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];



      this.text = "";
      this.text1 = "";
    },

    myFunctionAnniv(item, index) {


      let annivMonth = Number((item.Date).split("-")[0]) - 1;
      if (this.nww === item.Date) {
        console.log(item.Date)

        return false;
      } else {
        for (let i = 0; i < this.nextanniv.length; i++) {
          console.log(this.nextanniv)
          this.resultat = this.nextanniv
          /*this.text += "<dl class='anniv_place'>" + "<dt>" + this.nextanniv[i].Date + "</dt>" + ' ' + "<dd>" + this.nextanniv[i].Prenom + ' ' + this.months[annivMonth] + "</dd>" + "</dl>";*/
        }
      }

      document.getElementById("anniversairary").innerHTML = this.text;
    },

    getMonday(d) {
      let today = new Date();
      let day = today.getDay() || 7; // Get current day number, converting Sun. to 7
      if (day !== 1)                // Only manipulate the date if it isn't Mon.
        today.setHours(-24 * (day - 1));   // Set the hours to day number minus 1
      //   multiplied by negative 24
    },

    myAnniv(item, index) {
      if (this.nww === item.Date) {
        /*this.text1 += "<h2 style='text-align: center'>" + "Joyeux anniversaire à" + "</h2>" + "<dl class='anniv_day_place' style='text-align: center'>" + "<span>" + item.Prenom + "</span>" + "<span>" + '&nbsp;et&nbsp;' + "</span>" + "</dl>";*/
      }
      document.getElementById("annivDay").innerHTML = this.text1;

    }

  }
}


</script>

<style scoped>

</style>

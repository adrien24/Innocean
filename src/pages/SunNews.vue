<template>
  <div id="infosun">

    <div class="sunews" style="display: flex; justify-content: space-around">
      <div class="Pbloc fond">
        <h2>Messages du jour</h2>
        <hr>
        <div class="message trafic_container">
          <div v-for="(jour, key) in jour" :key="key">
            <div class="message__value" v-for="value in jour" v-bind:key="'5' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')">
              <h3 :v-if="deleteJ(value.id)">{{ value.Titre }}</h3>
              <p>{{ value.Commentaire }}</p>
              <img v-if="value.Image != null" :src="'http://192.168.70.77:8055/assets/' + value.Image"/>
              <hr>
             </div>
          </div>
        </div>
      </div>


      <div class="Pbloc fond">
        <h2>Messages de la <br/>semaine</h2>
        <hr>
        <div class="message trafic_container">
          <div v-for="(semaine, key) in semaine" :key="'A' + key">
            <div class="message__value" v-for="value in semaine" v-bind:key="'5' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')">
              <h3 :v-if="deleteS(value.id)">{{ value.Titre }}</h3>
              <p>{{ value.Commentaire }}</p>
              <img v-if="value.Image != null" :src="'http://192.168.70.77:8055/assets/' + value.Image"/>
              <hr>
            </div>
          </div>
        </div>
      </div>


      <div class="Pbloc fond">
        <h2>Messages Important</h2>
        <hr>
        <div class="message trafic_container">
          <div v-for="(important, key) in important" :key="'B' + key">
            <div class="message__value" v-for="value in important" v-bind:key="'5' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')">
              <h3 :v-if="deleteI(value.id)">{{ value.Titre }}</h3>
              <p>{{ value.Commentaire }}</p>
              <img v-if="value.Image != null" :src="'http://192.168.70.77:8055/assets/' + value.Image"/>
              <hr>
            </div>
          </div>
        </div>
      </div>


      <div class="Pbloc fond">
        <h2>Messages du jour Important</h2>
        <hr>
        <div class="message trafic_container">
          <div v-for="(Ijour, key) in Ijour" :key="'C' + key">
            <div class="message__value" v-for="value in Ijour" v-bind:key="'6' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')">
              <h3 :v-if="deleteIj(value.id)">{{ value.Titre }}</h3>
              <p>{{ value.Commentaire }}</p>
              <img v-if="value.Image != null" :src="'http://192.168.70.77:8055/assets/' + value.Image"/>
              <hr>
            </div>
          </div>
        </div>
      </div>


        <div class="Pbloc fond">
          <h2>Message important de la semaine</h2>
          <hr>
          <div class="message trafic_container">
            <div v-for="(Isemaine, key) in Isemaine" :key="'D' + key">
              <div class="message__value" v-for="value in Isemaine" v-bind:key="'7' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')">
                <h3 :v-if="deleteIs(value.id)">{{ value.Titre }}</h3>
                <p>{{ value.Commentaire }} </p>
                <img v-if="value.Image != null" :src="'http://192.168.70.77:8055/assets/' + value.Image"/>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

const dayjs = require("dayjs");
require('dayjs/locale/fr')
dayjs.locale('fr')


export default {
  name: "InfoSun",

  data() {
    return {
      jour: [],
      semaine: [],
      important: [],
      Ijour: [],
      Isemaine: [],
    }
  },

  created() {

    setInterval(this.getNow, 1000)
    setInterval(() => {
      this.callapiJ();
      this.callapiS();
      this.callapiI();
      this.callapiIj();
      this.callapiIs();
      this.callapiI();
      this.deleteI()
    }, 120000);
    setTimeout(() => this.$router.push({path: '/'}), 120000);

  },

  mounted() {
    this.callapiJ();
    this.callapiS();
    this.callapiIj();
    this.callapiIs();
    this.callapiI();
  },

  methods: {

    callapiJ() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Jour')
        .then(response => (this.jour = response.data))
    },
    callapiS() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Semaine')
        .then(response => (this.semaine = response.data))
    },


    callapiIj() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Jour Important')
        .then(response => (this.Ijour = response.data))
    },

    callapiIs() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Semaine Important')
        .then(response => (this.Isemaine = response.data))
    },



    deleteIs: function () {
      for (let i = 0; i < this.Isemaine.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss') > this.Isemaine.data[i].Date_de_fin) {
          axios
            .delete("http://192.168.70.77:8055/items/Informations/" + this.Isemaine.data[i].id)
            .then(() => {
              this.callapiI();
            })
        }
      }
    },

    deleteS: function () {
      for (let i = 0; i < this.semaine.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss') > this.semaine.data[i].Date_de_fin) {
          axios
            .delete("http://192.168.70.77:8055/items/Informations/" + this.semaine.data[i].id)
            .then(() => {
              this.callapiIj();
            })
        }
      }
    },

    deleteIj: function () {
      for (let i = 0; i < this.Ijour.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss') > this.Ijour.data[i].Date_de_fin) {
          axios
            .delete("http://192.168.70.77:8055/items/Informations/" + this.Ijour.data[i].id)
            .then(() => {
              this.callapiIj();
            })
        }
      }
    },

    deleteJ: function () {
      for (let i = 0; i < this.jour.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss') > this.jour.data[i].Date_de_fin) {
          axios
            .delete("http://192.168.70.77:8055/items/Informations/" + this.jour.data[i].id)
            .then(() => {
              this.callapiIj();
            })
        }
      }
    }
  },
}


</script>

<style scoped>

.sunews {
  margin-left: 2%;
}

.Pbloc {
  margin-right: 2%;
  padding-top: 2% !important;
  max-height: 90%;
}

h3, p {
  margin-left: 6%;
  text-align: left;
}

h3 {
  font-size: 2rem;
}

p {
  padding-top: 4%;
}

.message > div > div > hr {
  margin: 10% auto 0 auto;
}

.Pbloc > hr {
  margin: 2% auto 5% auto;

}

.message__value {
  text-align: center;
  width: 350px;
}

.message__value > img {
  padding-top: 4%;
  width: 90%;
}

</style>

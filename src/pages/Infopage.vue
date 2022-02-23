<template>
  <div id="infopage">
    <div class="liste">
      <h1>Informations</h1>
      <ul>
        <li v-if="this.important.data[0].Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')" :v-if="deleteI(this.important.data[0].id)">
            <h2>{{ this.important.data[0].Titre }}</h2>
            <p>{{ this.important.data[0].Commentaire }} </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "Infopage",

  data() {
    return {
      important: [],
      semaine: [],
    }
  },


  mounted() {
    this.callapiI();
    this.callapiS();
  },

  methods: {
    callapiI() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Important')
        .then(response => (this.important = response.data))
    },

    callapiS() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Semaine')
        .then(response => (this.semaine = response.data))
    },

    deleteI: function () {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr') >= this.important.data[0].Date_de_fin) {
          axios
            .delete("http://192.168.70.77:8055/items/Informations/" + this.important.data[0].id)
            .then(() => {
              this.callapiJ();
            })
      }
    },
  },

  created() {
    setTimeout(() => this.$router.push({path: '/'}), 300000);
  }
}


</script>

<style scoped>

.liste{
 width: 80%;
 margin: 2% auto;
}


h1{
  padding: 2% 2%;
  background-color: #e75520;
  color: #FFFFFF;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

h2{
  text-align: center;
  font-size: 2rem;
}


ul{
  text-align: left;
  height: 70vh;
  background-color: #FFFFFF;
  padding: 12.5% 2% 0 2%;

}

li{
  background-color: #FDF5F2;
  padding: 2% 1% 1% 1%;
  height: 30vh;
  border-radius: 15px;
}


li > p{
  padding-top: 3%;
  font-size: 1.5rem;
}


h2{
  margin: 0;
}

</style>

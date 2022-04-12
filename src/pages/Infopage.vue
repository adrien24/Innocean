<template>
  <div id="infopage">
    <div class="liste">
      <h1>Informations</h1>
      <ul>
        <li v-if="this.important.data[0].Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')" :v-if="deleteI(this.important.data[0].id)">
          <h2>{{ this.important.data[this.important.data.length - 1].Titre }}</h2>
          <p>{{ this.important.data[this.important.data.length - 1].Commentaire }} </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import {isEmpty} from "lodash"

export default {
  name: "Infopage",

  data() {
    return {
      important: [],
    }
  },

  mounted() {
    setTimeout(this.verif, 101);
    setInterval(this.verif, 36000)
    setInterval(this.important, 1000)
  },



  methods: {
    callapiI() {

      axios
        .get('http://192.168.70.183:8055/items/Information?filter[Tag][_eq]=Important')
        .then(response => (this.important = response.data))
      setTimeout(this.callapiI, 10000);
    },


    deleteI: function () {
      for (let i = 0; i < this.important.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr') >= this.important.data[i].Date_de_fin) {
          axios
            .delete("http://192.168.70.183:8055/items/Information/" + this.important.data[i].id)
            .then(() => {
              this.callapiI();
            })
        }
      }
    },

    verif(){
      if (isEmpty(this.important.data)) {
        setTimeout(() => this.$router.push({path: '/'}), 0);
      }else{
          if (this.important.data[this.important.data.length - 1].status === 'published'){
          }else{
            setTimeout(() => this.$router.push({path: '/'}), 0);
          }
      }
    },
  },

  created() {
    setTimeout(() => this.$router.push({path: '/'}).catch(err => {}), 60000);
    this.callapiI();
  },


}


</script>

<style scoped>

.liste {
  width: 80%;
  margin: 4.1% auto;
}


h1 {
  padding: 2% 2%;
  background-color: #e75520;
  color: #FFFFFF;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

h2 {
  text-align: center;
  font-size: 3rem;
}


ul {
  text-align: left;
  height: 70vh;
  background-color: #FFFFFF;
  padding: 12.5% 2% 0 2%;

}

li {
  background-color: #FDF5F2;
  padding: 2% 1% 1% 1%;
  height: 30vh;
  border-radius: 15px;
}


li > p {
  padding-top: 3%;
  font-size: 2rem;
}


h2 {
  margin: 0;
}

</style>

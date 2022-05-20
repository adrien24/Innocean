<template>
  <div id="infopage">
    <div class="liste">

      <div class="info" style="width: 1000px;">
      <ul>
        <li v-if="this.important.data[0].Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')" :v-if="deleteI(this.important.data[0].id)">
          <h2>{{ this.important.data[this.important.data.length - 1].Titre }}</h2>
          <p>{{ this.important.data[this.important.data.length - 1].Commentaire }} </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
      </ul>

      <div class="imageinfo">
        <img :src="'http://192.168.70.183:8055/assets/' + this.important.data[this.important.data.length - 1].image">
      </div>
      </div>
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
    }
  },





  methods: {
    callapiI() {
      axios
        .get('https://6ooontrv.directus.app/items/Information?filter[Tag][_eq]=Important')
        .then(response => (this.important = response.data))

    },


    deleteI: function () {
      for (let i = 0; i < this.important.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr') >= this.important.data[i].Date_de_fin) {
          axios
            .delete("https://6ooontrv.directus.app/items/Information/" + this.important.data[i].id)
            .then(() => {
              this.callapiI();
            })
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

.info{
  display: flex;
  width: 50%;
}



.imageinfo{
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: center
}

.imageinfo img{
  width: 1000px
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
  border-radius: 20px;
  text-align: left;
  height: 80vh;
  background-color: #FFFFFF;
  padding: 7% 2% 0 2%;
  width: 100%;

}

li {
  text-align: left;
  padding: 2% 1% 1% 4%;
  height: 70vh;
  border-radius: 15px;
}


li > p {
  padding-top: 3%;
  padding-right: 2%;
  font-size: 2rem;
  font-weight: 800;
  width: 600px
}


h2 {
  text-align: left;
  margin: 0;
}

</style>

<template>
<div id="infoImportant">
  <div class="bas">
    <dl>
      <dt>Infos</dt>
      <dd style="display: flex">
        <marquee-text :duration="15" v-for="(important, key) in important" :key="'D' + key">
          <div v-for="value in important" v-bind:key="'7' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')" :v-if="deleteI()">
              &nbsp;<span>Nouvelle info :&nbsp;</span><p>{{ value.Commentaire }} </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
      </marquee-text>
      </dd>
    </dl>
  </div>
</div>





</template>

<script>
import axios from "axios";
import dayjs from "dayjs";



export default {
  name: "infoImportant",

  data() {
    return {
      important: [],
    }
  },


  mounted() {
    this.callapiI();
    this.verif();
  },

  methods: {
    callapiI() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Important')
        .then(response => (this.important = response.data))
    },



  deleteI: function () {
    for (let i = 0; i < this.important.data.length; i++) {
      if (dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr') >= this.important.data[i].Date_de_fin) {
        axios
          .delete("http://192.168.70.77:8055/items/Informations/" + this.important.data[i].id)
          .then(() => {
            this.callapiJ();
          })
      }
    }
  },

  verif: function () {
      console.log(this.important.data[0].id)

      let marquee = document.getElementsByClassName('marquee')
      if (value.Commentaire) {
        console.log('oui')

        console.log(value.Commentaire)

      }else{
        console.log('non')
      }
    }

    },

}
</script>

<style scoped>

.bas {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: lightgrey;
}

span{
  color: #e75520;
  font-size: 1.5rem;
}
p{
  padding-right: 20px;
  font-size: 1.5rem;
}

dl{
  display: flex;
  color: #FFFFFF;
  width: 100%;

}
dt{
  padding: 13px 22px 0 20px;
  background-color: #E6551F;
}

dd{
  padding: 11px 20px 0 20px;
  width: 100%;
  background-color: #F6BA9A;
}

.marquee-text-text{
  display: flex;
}

.marquee-text-text > div{
  display: flex;
}




</style>

<template>
<div id="infoImportant">

  <div class="bas">
    <dl>
      <dt>Infos</dt>
      <dd style="display: flex">
        <marquee-text :duration="15" v-for="(semaine, key) in semaine" :key="'D' + key">
          <div v-for="value in semaine" v-bind:key="'7' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')" :v-if="deleteS()">
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
      semaine: [],
    }
  },

  mounted() {
    this.callapiS();
  },


  methods: {

    callapiS() {
      axios
        .get('http://192.168.70.77:8055/items/Informations?filter[Tag][_eq]=Semaine')
        .then(response => (this.semaine = response.data))
    },

    deleteS: function () {
      for (let i = 0; i < this.semaine.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr') >= this.semaine.data[i].Date_de_fin) {
          axios
            .delete("http://192.168.70.77:8055/items/Informations/" + this.semaine.data[i].id)
            .then(() => {
              this.callapiJ();
            })
        }
      }
    },
  }
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

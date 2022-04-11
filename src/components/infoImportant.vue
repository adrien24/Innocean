<template>
<div id="infoImportant">

  <div class="bas">
    <dl>
      <dt>Infos</dt>
      <dd style="display: flex" v-if="information">
        <marquee-text :duration="15" v-for="(information, key) in information" :key="'D' + key" >
          <div  v-for="value in information" v-bind:key="'7' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')" :v-if="deleteI()" :class="value.status">
              &nbsp;<span>{{ value.Titre }}&nbsp;:&nbsp;</span><p v-if="value">{{ value.Commentaire }} </p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
import {isEmpty} from "lodash";

export default {
  name: "infoImportant",

  data() {
    return {
      information: [],
    }
  },



  mounted() {
    this.callapiI();
    setInterval(this.verif, 30000);

  },


  methods: {

    callapiI() {
      axios
        .get('http://192.168.70.183:8055/items/Information?filter[Tag][_eq]=Information')
        .then(response => (this.information = response.data))
        setTimeout(this.callapiI, 10000);
    },

   verif(){

      if (isEmpty(this.information.data)) {
        document.querySelector('.bas').style.display = "none"
      }else{
        for (let i = 0; i < this.information.data.length; i++) {
          if (this.information.data[i].status === 'published') {
            let published = document.querySelectorAll('.published')
            for (let i = 0; i < published.length; i++) {
              published[i].style.display = 'flex';
            }
          } else if (this.information.data[i].status === 'draft') {
            let Draft = document.querySelectorAll('.draft')
            for (let i = 0; i < Draft.length; i++) {
              Draft[i].style.display = 'none';
            }
          }
        }
      }
    },

    deleteI: function () {

      for (let i = 0; i < this.information.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr') >= this.information.data[i].Date_de_fin) {

          axios
            .delete("http://192.168.70.183:8055/items/Information/" + this.information.data[i].id)
            .then(() => {
              this.callapiI();
            })
        }
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

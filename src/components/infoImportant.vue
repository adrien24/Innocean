<template>
  <div id="infoImportant">

    <div class="bas">
    <dl>
      <dt>Infos</dt>
      <dd style="display: flex" v-if="information">
        <marquee :duration="15" v-for="(information, key) in information" :key="'D' + key" >
        <div class="flex">
          <div  v-for="value in information" v-bind:key="'7' + value.id" v-if="value.Date_de_debut <= dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr')" :v-if="deleteI()" :class="value.status">
              &nbsp;<span>{{ value.Titre }}</span>&nbsp;:&nbsp;<p v-if="value">{{ value.Commentaire }} </p>
          </div>
          </div>
      </marquee>
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
    setInterval(this.verif, 5000);
  },
  methods: {
    callapiI() {
      axios
        .get('https://6ooontrv.directus.app/items/Information?filter[Tag][_eq]=Information&filter[status][_eq]=published')
        .then(response => (this.information = response.data))
        setTimeout(this.callapiI, 10000);
    },
    verif(){
      if (isEmpty(this.information.data)) {
        document.querySelector('.bas').style.display = "none"
      }else{
        document.querySelector('.bas').style.display = "flex"
      }
    },
    deleteI: function () {
      for (let i = 0; i < this.information.data.length; i++) {
        if (dayjs().format('YYYY-MM-DDTHH:mm:ss', 'fr') >= this.information.data[i].Date_de_fin) {
          axios
            .delete("https://6ooontrv.directus.app/items/Information/" + this.information.data[i].id)
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

.show {
  display: flex !important;
}

.remove {
  display: none !important;
}

.flex{
  display: flex;
}

.published{
  display: flex;
}

.draft{
  display: none;
}

.bas {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
}

.published{
  display: flex;
  align-items: center;
}

span {
  color: #FFFFFF;
  background-color: #E6551F;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 0 5% 0 5%;
  margin-left: 3%;
}

p {
  padding-right: 20px;
  font-size: 1.5rem;
}

dl {
  display: flex;
  color: #FFFFFF;
  width: 100%;
  height: 70px;

}

dt {
  padding: 0px 22px 0 20px;
  background-color: #E6551F;
  font-weight: 800;
  display: flex;
  align-items: center;
  height: 70px;
  color: #FFFFFF;
  font-size: 1.6rem;
  text-transform: uppercase;
}

dd {
  width: 100%;
  background-color: #F6BA9A;
}

marquee {
  display: flex;
  color: #0f1011;
  align-self: center;
  font-size: 1.7rem;
}

.marquee > div {
  display: flex;
}


</style>

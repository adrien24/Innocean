import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import SlitherSlider from 'slither-slider';
import dayjs from "dayjs";




Vue.use(SlitherSlider)
Vue.prototype.dayjs = dayjs
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyClfxKXXv0Db2A4VcRd_Ta2yI1MuHuc9HA',
    libraries: 'places',
  },
  installComponents: true

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})

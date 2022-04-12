import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../pages/Accueil";
import Meteo from "../pages/Meteo";
import heure from "../pages/heure";
import Infopage from "../pages/Infopage";




Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {path: '/',name: 'Accueil',component: Accueil},
    {path: '/meteo',name: 'Meteo',component: Meteo},
    {path: '/heure',name: 'heure',component: heure},
    {path: '/Infopage',name: 'Infopage',component: Infopage},

  ]
})



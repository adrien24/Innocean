import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../pages/Accueil";
import About from "../pages/About";
import Meteo from "../pages/Meteo";
import heure from "../pages/heure";
import InfoSun from "../pages/InfoSun";




Vue.use(Router)



export default new Router({
  routes: [
    {path: '/',name: 'Accueil',component: Accueil},
    {path: '/about',name: 'About',component: About},
    {path: '/meteo',name: 'Meteo',component: Meteo},
    {path: '/heure',name: 'heure',component: heure},
    {path: '/InfoSun',name: 'InfoSun',component: InfoSun},

  ]
})



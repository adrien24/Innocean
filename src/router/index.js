import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../pages/Accueil";
import About from "../pages/About";



Vue.use(Router)



export default new Router({
  routes: [
    {path: '/',name: 'Accueil',component: Accueil},
    {path: '/about',name: 'About',component: About},
  ]
})



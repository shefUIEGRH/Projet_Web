import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles'
import Avis from './views/Avis'
import Login from './views/Login'
import Conseils from './views/Conseils'
import Modifier from './views/Modifier'
import Nouveau from './views/Nouveau'
import Lire from './views/Lire'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/avis',
      name: 'avis',
      component: Avis
    },
    {
      path: '/conseils',
      name: 'conseils',
      component: Conseils    
    },
    {
      path: '/modifier',
      name: 'modifier',
      component: Modifier
    },
    {
      path: '/new',
      name: 'nouveau',
      component: Nouveau
    },
    {
      path: '/read',
      name: 'lire',
      component: Lire

    }

  ]
})

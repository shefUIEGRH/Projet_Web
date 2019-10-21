import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles'
import Avis from './views/Avis'
import Login from './views/Login'

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
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles'
import Avis from './views/Avis'
import Login from './components/Login'
import Conseils from './views/Conseils'
import Modifier from './views/Modifier'
import Nouveau from './views/Nouveau'
import Lire from './views/Lire'
import store from './store/store'
Vue.use(Router)

let router = new Router({
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
      component: Articles,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/avis',
      name: 'avis',
      component: Avis
    },
    {
      path: '/conseils',
      name: 'conseils',
      component: Conseils,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/modifier',
      name: 'modifier',
      component: Modifier,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/new',
      name: 'nouveau',
      component: Nouveau,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/read',
      name: 'lire',
      component: Lire,
      meta: {
        requiresAuth: true
      },

    }

  ]
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
export default router
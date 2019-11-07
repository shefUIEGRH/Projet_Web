<template>
  <v-app class="grey lighten-4">
    <Navbar>
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span> -->
    </Navbar>
  </v-app>
</template>


<script>

// import Navbar from './components/Navbar'
// export default {
//   components: { Navbar },
//   name: 'App',
//   data () {
//     return {
//     }
//   }
// }
import Navbar from './components/Navbar'
// import store from './store/store'

  export default {
    components: { Navbar },
    name: 'App',
    computed : {
      isLoggedIn : function(){ return this.store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
      created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function () {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.store.dispatch(logout)
          }
          throw err
        })
      })
    }
  },
    
  }
</script>

<template>
 <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-8">
              <form class="login" @submit.prevent="login">
                <h1>Sign in</h1>
                <label>User : </label>
                <input required v-model="user" type="user" placeholder="Name"/>
                <label>Password : </label>
                <input required v-model="password" type="password" placeholder="Password"/>
                <hr/>
                <button type="submit">Login</button>
              </form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import router from "../router"
// import axios from "axios"
import store from '../store/store'
// import Vuex from 'vuex'


export default {
    data(){
      return {
        user : "",
        password : ""
      }
    },
  methods: {
      login: function () {
        let user = this.user 
        let password = this.password
        store.dispatch('login', { user, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
}

</script>
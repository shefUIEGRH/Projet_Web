<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="username"
                    name="username"
                    prepend-icon="dmi-account_box"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="dmi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="login(username, password)">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import router from "../router"
import axios from "axios"
import store from '../store/account'
import Vuex from 'vuex'

export default {
  store: store,
  
  data: () => ({
    connected: Vuex.mapGetters(['connected']),
    username: "",
    password: "",
  }),
  methods: {
        login: function (username, password) {
          console.log("log in process")
          axios.post("http://localhost:4000/api/login", {username, password} )
            .then((response) => {
                this.message = response.data.message
                if (this.message === "connected") {
                  store.commit('login', store)
                  router.push("/home")
                }
            })
            .catch((errors) => {
                alert(errors.response.data.message)
                console.log(errors)
                console.log("Cannot log in")
            })
        },
      logout: function () {
          if (this.connected) {
            axios.get("http://localhost:4000/api/logout")
              .then((response) => {
                  this.message = response.data.message
                  store.commit('logout', store)
              })
              .catch((errors) => {
                  console.log(errors)
                  console.log("Cannot log out")
              })
          }else{
            console.log("Cannot log out, you're not connected")
          }
        }
    }
}

</script>

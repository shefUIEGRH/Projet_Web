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
                    v-model="username" label="username" name="username" prepend-icon="dmi-account_box" type="text">
                  </v-text-field>

                  <v-text-field
                    v-model="password" label="Password" name="password" prepend-icon="dmi-lock" type="password">
                  </v-text-field>
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
    export default {
        name: 'Login',
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login: function (username, password) {
              console.log(username)
              console.log(password)
              axios.post("http://localhost:4000/api/login", {username, password} )    
                .then((response) => {    
                    console.log("Logged in")    
                    router.push("/home")    
                })    
                .catch((errors) => {    
                    console.log("Cannot log in")    
                })    
            }
        }
    }
</script>

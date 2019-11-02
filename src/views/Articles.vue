<template>
    <div class="text--primary">
        <v-container fluid>
            <v-row xs-12 md-6 class="justify-center">
              <v-hover>
                <template v-slot="{hover}">
                  <v-card class="mx-10 my-5 pa-4" max-width="600" :elevation="hover ? 24 : 6" style="cursor: pointer" height="750px">
                    <v-img src="https://image.noelshack.com/fichiers/2019/42/7/1571590402-payage.jpg" class="white--text align-end" height="550px">
                      <v-card-title class="headline" display-3>Ecrire un article !</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div class="subtitle">Faites-nous rêver en partageant votre expérience</div>
                    </v-card-text>
                    <br/>
                    <v-row class="justify-center">
                    <v-card-actions >
                      <v-btn v-for="link in links" :key="link.text" router :to="link.route" color="indigo" text x-large>
                        {{link.text}}
                      </v-btn>
                    </v-card-actions>
                    </v-row>

                  </v-card>
                </template>
              </v-hover>
      
              <v-hover>
                <template v-slot="{hover}">
                  <v-card class="mx-10 my-5 pa-4" max-width="600" :elevation="hover ? 24 : 6" style="cursor: pointer">
                    <v-img src="https://image.noelshack.com/fichiers/2019/42/7/1571590406-paysage-bis.jpg" class="white--text align-end" height="550px">
                      <v-card-title class="headline" display-3>Voir tous les articles !</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div class="subtitle">Venez découvrir les endroits superbes</div>
                    </v-card-text>
                    <br/>
                    <v-card-actions class="justify-center" >
                      <v-btn block color="indigo" text x-large>
                        <router-link to="/read" id="btn">
                        Let's GO 
                        </router-link>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-hover>

            </v-row>
        </v-container>  
    </div>
</template>


<script>
export default {
  data() {
    return {
      links: [
        {text: 'Conseils ?', route: '/conseils'},
        {text: 'Nouvel article !', route: '/new'},
      ]
    }
  }
}
</script>

<style>

  .subtitle{
    font-size: 20px;
  }

  #btn {
    text-decoration: none;
    color: #3131BB;
  }

</style>



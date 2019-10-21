<template>
    <div class="text--primary">
        <v-container fluid>
            <v-row xs-12 md-6 class="justify-center">
              <v-hover>
                <template v-slot="{hover}">
                  <v-card class="mx-10 my-5 pa-4" max-width="500" :elevation="hover ? 24 : 6" style="cursor: pointer">
                    <v-img src="https://image.noelshack.com/fichiers/2019/42/7/1571590402-payage.jpg" class="white--text align-end" height="450px">
                      <v-card-title>Ecrire un article !</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Faites-nous rêver en partageant votre expérience</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="indigo" text>
                        Conseils ?
                      </v-btn>
        
                      <v-btn color="indigo" text>
                        Modifier un article
                      </v-btn>

                      <v-btn color="indigo" text>
                        Nouvel article !
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-hover>
      
              <v-hover>
                <template v-slot="{hover}">
                  <v-card class="mx-10 my-5 pa-4" max-width="500" :elevation="hover ? 24 : 6" style="cursor: pointer">
                    <v-img src="https://image.noelshack.com/fichiers/2019/42/7/1571590406-paysage-bis.jpg" class="white--text align-end" height="450px">
                      <v-card-title>Voir tous les articles !</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Venez découvrir les endroits superbes</div>
                    </v-card-text>

                    <v-card-actions class="justify-center">
                      <v-btn color="indigo" text center>
                        Let's GO !
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
  
</script>





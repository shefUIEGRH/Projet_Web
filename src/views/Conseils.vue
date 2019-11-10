<template>
  <v-container fluid>
    <div class="justify-center">
      <h1>Comment rédiger un article ?</h1>
    </div>
 
  <br>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">Trouver un titre accrocheur !</v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="#F0F8FF" class="mb-12" height="150px">
          <br>
          <v-card-text>Un bon titre est essentiel pour accrocher l'internaute et l'inciter à lire votre article. Ce titre va refléter votre contenu et va le mettre en valeur.</v-card-text>
          <v-card-text>Il faut susciter l'intérêt du lecteur pour lui donner envie d'aller plus loin ! N'hésitez pas à mettre de l'émotion dans vos titre.</v-card-text> 
        </v-card>
        <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Décrivez au mieux le pays
        <medium>Donnez envie d'y aller !</medium>
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="#F0F8FF" class="mb-12" height="150px">
        <br>
        <v-card-text>Racontez-nous : les caractéristiques du pays, les moeurs, la culture, les plats typiques, les monuments à visiter, les lieux incontournables ...</v-card-text>
        <v-card-text>Confiez nous vos expériences personnelles ainsi que vos annecdotes sur votre voyage !!</v-card-text>
        </v-card>

        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn text @click="e6 = 1">Retour</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Quels sont les conseils que vous pouvez donner ?</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="#F0F8FF" class="mb-12" height="150px">
          <br>
          <v-card-text>Quel est l'équipement nécessaire et indispensable pour partir ?</v-card-text>
          <v-card-text>Quel est le budget de ce voyage ?</v-card-text>
        </v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn text @click="e6 = 2">Retour</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 4" step="4">N'oubliez pas de rajouter une belle photo !!</v-stepper-step>

      <v-stepper-content step="4">
        <v-card class="mb-12" height="auto">
          <v-img src="https://image.noelshack.com/fichiers/2019/44/7/1572815933-paysage-ter.jpg"></v-img>
        </v-card>
        <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
        <v-btn text @click="e6 = 3">Retour</v-btn>
      </v-stepper-content>

      <v-stepper-step step="5">Signez et datez votre oeuvre</v-stepper-step>

      <v-stepper-content step="5">
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn text @click="e6 = 4">Retour</v-btn>
      </v-stepper-content>

  </v-stepper>
   </v-container>
</template>


<script>
  export default {
    data () {
      return {
        e6: 1,
      }
    },
  }
</script>
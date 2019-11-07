<template>
  <v-container fluid>
    <div class="modifier">
      <h1>Nos Articles !</h1>
    </div>

    <!-- Search Bar -->
    <v-layout justify-center align-center>
      <v-flex xs6>
        <v-text-field v-model="recherche" label="Search" append-icon="mdi-magnify"></v-text-field>
      </v-flex>
    </v-layout>

    <!-- Article -->
    <br>
    <v-row xs-12 md-6>
      
      <v-card class="espace mx-auto justify-center" v-for="(article, i) of filteredArticle" :key="article.title" max-width="400">
        <v-img :src="article.src" height="200px"></v-img>
        <v-card-title class="justify-center">{{article.title}}</v-card-title>
              
        <v-card-actions>
          <v-btn text>Modifier</v-btn>

          <!-- J'aime -->
          <v-btn @click="aime(i)" icon>
            <v-icon color="red">mdi-heart</v-icon>
          </v-btn>

          <div>{{articles[i].count}}</div>

          <!-- Commentaires -->
          <v-btn icon>
            <v-icon color="indigo">mdi-bookmark</v-icon>
          </v-btn>

          <!-- Share -->
          <v-menu offset-x>
            <template v-slot:activator="{on}">
              <v-btn icon v-on="on">
                <v-icon color="green">mdi-share-variant</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(reseau) in reseaux" :key="reseau.name"> 
                <network network="reseau.name">
                  <v-icon v-bind:style="{'color': reseau.color}">{{reseau.icon}}</v-icon>
                </network>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn icon @click="test(i)">
            <v-icon>{{articles[i].visible ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon>
          </v-btn>


        </v-card-actions>

        <v-expand-transition>
          <div v-show="articles[i].visible">
            <v-divider></v-divider>
            <v-card-text>{{article.text}}</v-card-text>
          
          <v-divider></v-divider>
          <v-footer>
            {{article.auteur}}
          </v-footer>
          </div>
        </v-expand-transition>
      </v-card>
      
        
    </v-row>
                        
  </v-container>
</template>

<script>
  import Vuex from 'vuex'
  // import store from '../store/account'
  export default {
    props: {
    value: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
    data() {
      return {
        recherche: '',
        reseaux: [
          {name: "Facebook", icon: "mdi mdi-facebook", color: "navy", show: false},
          {name: "Twitter", icon: "mdi mdi-twitter", color: "dodgerblue", show: false},
          {name: "Google +", icon: "mdi mdi-google-plus", color: "red", show: false},
          {name: "WhatsApp", icon: "mdi mdi-whatsapp", color: "green", show: false},
          {name: "Linkedin", icon: "mdi mdi-linkedin", color: "royalblue", show: false},
          {name: "Pinterest", icon: "mdi mdi-pinterest", color: "orangered", show: false}

      ],
      active: false
      }
    },

    methods: {
      test(index){
        this.articles[index].visible = !this.articles[index].visible;
      },
      share(index){
        this.reseaux[index].show = !this.reseaux[index].show;
      },
      aime(index){
        this.articles[index].count++;
      },
      
    },
    computed: { 
      ...Vuex.mapGetters(['articles']),
      filteredArticle: function(){
       return this.articles.filter((article) => {
            return article.title.toUpperCase().match(this.recherche.toUpperCase());
            // return article.title.match(this.recherche);
        });
      } 

    }
  };
</script>

<style>

  h1{
    text-align: center;
  }

  .espace{
      margin: 10px;
  }

  ol{
    list-style: none;
    margin-left: -10px;
    padding-left: -10px;
  }
</style>

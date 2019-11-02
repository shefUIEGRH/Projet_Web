<template>
  <v-container fluid>
    <div class="modifier">
      <h1>Nos Articles !</h1>
    </div>

    <!-- Search Bar -->
    <v-layout justify-center align-center>
      <v-flex xs6>
        <v-text-field v-model="recherche" @keyup="updateData();" label="Search" append-icon="mdi-magnify"></v-text-field>
      </v-flex>

      <!-- Filtre -->
      <v-flex xs1>
          <v-menu v-model="filtre.menu" :close-on-content-click="false" :nudge-width="200">
            <v-btn slot="activator" icon> <v-icon>mdi-filter-outline</v-icon> </v-btn>

            <v-card class="filtre">
              <v-card-title class="subheading">Filtres</v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <!-- Thèmes -->
                <v-list-tile-content>
                  <v-list-tile-title>Thèmes</v-list-tile-title>
                  <v-list-tile-action>
                    <v-item-group multiple v-model="filtre.content.themes">
                      <v-item>
                        <v-chip slot-scope="{active,toggle}" :selected="active" @click="toggle" :color="active ? 'primary' : ''" :text-color="active ? 'white' : ''">
                          Continents
                        </v-chip>
                      </v-item>
                      <v-item>
                        <v-chip slot-scope="{active,toggle}" :selected="active" @click="toggle" :color="active ? 'primary' : ''" :text-color="active ? 'white' : ''">
                          Pays
                        </v-chip>
                      </v-item>
                      <v-item>
                        <v-chip slot-scope="{active,toggle}" :selected="active" @click="toggle" :color="active ? 'primary' : ''" :text-color="active ? 'white' : ''">
                          Villes
                        </v-chip>
                      </v-item>
                    </v-item-group>
                  </v-list-tile-action>
                </v-list-tile-content>
                <!-- Auteur -->
                <v-list-tile-content>
                  <v-list-tile-title>Auteur</v-list-tile-title>
                  <v-list-tile-action>
                    <v-text-field v-model="filtre.content.auteur" label="Nom" append-icon="mdi-magnify" type="string"></v-text-field>
                  </v-list-tile-action>
                </v-list-tile-content>
    
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="primary" flat @click="saveFilters(true);">Annuler</v-btn>
                <v-btn color="primary" @click="saveFilters(false);">Enregistrer</v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-flex>
    </v-layout>

    <!-- Article -->
    <br>
    <v-row xs-12 md-6>
      
      <v-card class="espace mx-auto" v-for="(article, i) of articles" :key="article.title" max-width="400">
        <v-img :src="article.src" height="200px"></v-img>
        <v-card-title class="justify-center">{{article.title}}</v-card-title>
              
        <v-card-actions>
          <v-btn text>Modifier</v-btn>

          <v-btn icon>
            <v-icon color="red">mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="indigo">mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon color="green">mdi-share-variant</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="test(i)">
            <v-icon>{{articles[i].visible ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="articles[i].visible">
            <v-divider></v-divider>
            <v-card-text>{{article.text}}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
        
    </v-row>
                        
  </v-container>
</template>

<script>
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
        show: false,
        recherche: '',
        updating: false,
        filtre: {
          menu: false,
          content: {
            theme: [0, 1],
            auteur: ''
          }
        },
        posts: this.value,
        articles: [
        {title: 'La France', src: 'https://image.noelshack.com/fichiers/2019/42/7/1571590402-payage.jpg', text: 'test, blablabla', visible: false},
        {title: 'La Chine', src: 'https://image.noelshack.com/fichiers/2019/42/7/1571590406-paysage-bis.jpg', text: 'test bis, blablabla', visible: false},
      ]
      };
    },
    methods: {
      test(index){
        this.articles[index].visible = !this.articles[index].visible;
      },

      saveFilters(sauvegarde){
        try{
          if(sauvegarde)
            this.filtre.content = {
              theme: [0, 1],
              auteur: ''
            };
            this.filtre.menu = false;
            this.updateData(this.filtre.content);
        } catch (err) {
            console.log(`ERROR!: ${err}`)
        }
      },

      async updateData(){
        this.updating = true;
        var posts = this.posts;

        if(this.filtre.content){
          posts = posts.filter(({th, /*aut*/}) => {
            try {
              var condition = [];
              condition.push(this.filtre.content.theme.includes(th));
              
             /* if(this.filtre.content.auteur !== '')
                condition.push(auteur.numero)...
                );*/
                return condition.every(Boolean);
            } catch (err) {
                console.log(`ERROR!: ${err}`)
            }
          });
        }

        if(this.recherche !== ''){
          const mot = this.recherche.toLowerCase();

          var p = posts.filtre(({ code, material}) => 
            code.toLowerCase().includes(mot) || material.toLowerCase().includes(mot)
          );
          posts = p;
        }
        this.posts = posts;
        this.updating = false;
      }
    }
  };
</script>

<style scoped>

  h1{
    text-align: center;
  }

  .espace{
      margin: 10px;
  }
</style>

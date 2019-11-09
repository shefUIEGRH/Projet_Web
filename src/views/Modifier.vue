<template>
  <v-container fuild>
    <div v-for="(article, i) of articles" :key="i">
      <v-row class="mb-1" no-gutters>
        <v-col cols="3">
          <v-card class="espace" max-width="400">
            <v-img :src="article.src" height="200px"></v-img>
            <v-card-title class="justify-center">{{article.title}}</v-card-title>

            <v-card-actions>
              <!-- J'aime -->
              <v-btn @click="aime(i)" icon>
                <v-icon color="red">mdi-heart</v-icon>
              </v-btn>

              <div>{{articles[i].count}}</div>

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
                <v-footer>{{article.author}}</v-footer>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="9">
          <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(comment, i) of articles.avis" :key="i">
              ew
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    test(index) {
      this.articles[index].visible = !this.articles[index].visible;
    },
    aime(index) {
      this.articles[index].count++;
    }
  },
  computed: {
    ...Vuex.mapGetters(["articles"]),
  }
};
</script>



articles: [
      {title: 'La France', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721350-france.jpg', text: 'test, blablabla', author: "admin", visible: false, count: 0, avis: [{name: 'admin', avis: "", note: 3, img: 'https://image.noelshack.com/fichiers/2019/42/7/1571590402-payage.jpg'},{name: 'admin', avis: "", note: 3}]},
      {title: 'La Chine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721338-chine.jpg', text: 'test bis, blablabla', author: "admin", visible: false, count: 0, avis: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
      {title: 'Les Etats-Unis', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721375-usa.jpg', text: 'test ter, blablabla', author: "admin", visible: false, count: 0, avis: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
      {title: 'L\'Egypte', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721342-egypte.jpg', text: 'test 4, blablabla', author: "admin", visible: false, count: 0, avis: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
      {title: 'La Nouvelle Zélande', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721943-nz.jpg', text: 'test 5, blablabla', author: "admin", visible: false, count: 0, avis: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
      {title: 'L\'Argentine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721333-argentine.jpg', text: 'test 6, blablabla', author: "admin", visible: false, count: 0, avis: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
    ],
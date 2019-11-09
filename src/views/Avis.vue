<template>
  <v-container fluid>
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
          <v-carousel cycle height="327" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item class="espace" v-for="(comment, index) in article.comments" :key="index" src="https://image.freepik.com/free-vector/geometric-grey-background_1055-3147.jpg">
              {{comment.name}} : {{comment.avis}} <v-rating v-model="comment.note" ></v-rating>
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

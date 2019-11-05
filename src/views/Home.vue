<template>
  <v-container fluid>
    <v-carousel cycle height="810" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(image,i) in images" :key="i" :src="image.src">
        <v-row align="top" justify="center"> 
            <div class="display-3 couleur">{{image.title}}</div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
    
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          {src: 'https://image.noelshack.com/fichiers/2019/45/2/1572950388-home-4.jpg', title: 'Bienvenue !'},
          {src: 'https://image.noelshack.com/fichiers/2019/45/2/1572960256-home-2.jpg', title: 'Prêt à voyager dans notre univers ?'},
          {src: 'https://image.noelshack.com/fichiers/2019/45/2/1572957195-home-1.jpg', title: 'Vers l\'infini et l\'au delà...'},
          {src:'https://image.noelshack.com/fichiers/2019/45/2/1572956947-home-3-2.jpg', title: 'Venez découvrir le monde qui vous entoure !'},
        ],
      }
    },
  }
  
</script>

<style>

.couleur{
  color: white;
  margin-top: 40px;
  font-size: 100em;
  font-weight: bold;
}

</style>
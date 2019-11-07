<template>
  <v-card class="mx-10 my-5 pa-4" max-width="600" style="cursor: pointer" height="550px">

    <form>
      <v-text-field
        outlined
        v-model="name"
        :error-messages="nameErrors"
        :counter="15"
        label="Article name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="author"
        :error-messages="authorErrors"
        :counter="10"
        label="Author"
        required
        @input="$v.author.$touch()"
        @blur="$v.author.$touch()"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="image"
        :error-messages="imageErrors"
        label="Image"
        required
        @input="$v.image.$touch()"
        @blur="$v.image.$touch()"
      ></v-text-field>
      <v-textarea
          outlined
          v-model="description"
          :error-messages="descriptionErrors"
          label="description"
          required
          @input="$v.description.$touch()"
          @blur="$v.description.$touch()"
      ></v-textarea>



      <v-btn class="mr-4" @click="submit">Ajouter</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-card>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'
  import router from "../router";
  import store from '../store/store'
  

  // import ArticlesVue from './Articles.vue'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(15) },
      author: { required, maxLength: maxLength(10) },
      image: { required },
      description: { required },
    },

    data: () => ({
      name: '',
      author: '',
      image: '',
      description: '',
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 15 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      authorErrors () {
        const errors = []
        if (!this.$v.author.$dirty) return errors
        !this.$v.author.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.author.required && errors.push('Author name is required.')
        return errors
      },
      imageErrors () {
        const errors = []
        if (!this.$v.image.$dirty) return errors
        !this.$v.image.required && errors.push('Image name is required.')
        return errors
      },
      descriptionErrors () {
        const errors = []
        if (!this.$v.description.$dirty) return errors
        !this.$v.description.required && errors.push('Description is required')
        return errors
      },  
    },

    methods: {
      submit () {
        if (this.name && this.author && this.description) {
          this.$v.$touch()
          let payload = {
            title: this.name, 
            src: this.image, 
            text: this.description
          }
          store.commit('add_articles',payload )
          router.push("/read")
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.image = ''
        this.author = ''
        this.description = ''
      },

    },
  }
</script>

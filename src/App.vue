<template>
  <v-app class="grey lighten-4">
    <Navbar>
      <router-view></router-view>
    </Navbar>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>
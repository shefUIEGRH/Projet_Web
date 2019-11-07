<template>
  <v-app class="grey lighten-4">
    <Navbar>
      <router-view></router-view>
    </Navbar>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
// import Nouveau from './views/Nouveau'
// import Lire from './views/Lire'
export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
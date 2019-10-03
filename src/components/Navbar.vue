<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Voyage Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="Sign ? In() : Out()">
        <span>{{msg}}</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <div id="app">
        <router-view/>
      </div>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      msg: "Sign In",
      links: [
        {icon: 'mdi-home', text: 'Home', route: '/'},
        {icon: 'mdi-comment', text: 'Articles', route: '/articles'},
        {icon: 'mdi-map', text: 'Avis', route: '/avis'},
      ],
      Sign: false,
      drawer: false
    }
  },
  methods: {
    In() {
      this.msg = 'Sign In';
      this.Sign = !this.Sign;
    },
    Out() {
      this.msg = 'Sign Out';
      this.Sign = !this.Sign;
    },
  }
}
</script>

<style>
</style>
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/articles'

Vue.config.productionTip = false

Vue.use(Vuex)
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')


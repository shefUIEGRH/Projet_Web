import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(Vuex)
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')


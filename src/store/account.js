import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  connected: false,
}

const mutation = {
  login: state =>{
    state.connected = true
  },
  logout: state =>{
    state.connected = false
  },
}

const getters = {
    connected: state => state.connected
}

export default new Vuex.Store({
    state: state,
    
    mutations: mutation,
    
    getters: getters,
    
    action: { },

    strict: false
})
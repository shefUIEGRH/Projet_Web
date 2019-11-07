import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    articles: [
      {title: 'La France', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721350-france.jpg', text: 'test, blablabla', visible: false, count: 0},
      {title: 'La Chine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721338-chine.jpg', text: 'test bis, blablabla', visible: false, count: 0},
      {title: 'Les Etats-Unis', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721375-usa.jpg', text: 'test ter, blablabla', visible: false, count: 0},
      {title: 'L\'Egypte', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721342-egypte.jpg', text: 'test 4, blablabla', visible: false, count: 0},
      {title: 'La Nouvelle Zélande', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721943-nz.jpg', text: 'test 5, blablabla', visible: false, count: 0},
      {title: 'L\'Argentine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721333-argentine.jpg', text: 'test 6, blablabla', visible: false, count: 0},
    ]
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
    add_articles: (state, payload) =>{

      state.articles.push({
        title: payload.title,
        src: payload.src,
        text: payload.text,
        visible: false,
        count: 0,
      })
    },
  },
  getters : {
    isLoggedIn: state => state.token,
    authStatus: state => state.status,
    articles: state => state.articles,
  },

  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://localhost:4000/api/login', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.username
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          
          resolve(resp)
        })
        .catch(err => {
          alert(err.response.data.message)
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
})
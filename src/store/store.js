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
      {title: 'La France', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721350-france.jpg', text: 'C\'est un bel hexagone qui regroupe différents paysages, de la montagne à la mer en passant par la campagne et les villes ! On y mange bien : du bon saucisson et de bons fromages … Il y a une diversité incroyable de lieux à visiter c\'est super ! Il y a en pour tous les goûts. Evidemment ne pas oublier la star de Paris, la Tour Eiffel ! \n Niveau budget cela dépend des activités voulues mais c\'est un budget assez conséquent en général !\n' +
      'Equipement : Appareil photo.', author: "Amelie Bokmart", visible: false, count: 0, comments: [{name: 'admin', avis: "trop cool la france , Woaw", note: 5},{name: 'admin', avis: "", note: 2}]},
      {title: 'La Chine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721338-chine.jpg', text: 'Plus grand pays d\'Asie orientale avec trois espaces maritimes et ses plus d\'1 milliards d\'habitants. Le climat est rude et beaucoup de chinois sont encore ruraux. Cependant la Chine a des grandes métropoles mondiales. A ne pas manquer : Shanghai et la cité interdite de Pékin !\n' +
      'Prenez des forces et entre deux ou trois nems et nouilles allez parcourir la grande Muraille de Chi', author: "Jean Dupont", visible: false, count: 0, comments: [{name: 'admin', avis: "", note: 2},{name: 'admin', avis: "", note: 3}]},
      {title: 'Les Etats-Unis', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721375-usa.jpg', text: 'C\'est un très grand pays qu\'on ne peut pas tout visiter en une seule fois. Petit conseil : faites un road trip !! La cote Ouest avec LA, San Francisco, les Grands Canyons et allez dépenser votre argent au Casino de Las Vegas ! La cote Est avec la capitale Washington et l\'incontournable New York !!' +
      ' Equipement : de quoi Alimenter vos réseaux sociaux et pleins de dollars à dépenser ! N\'oubliez pas de faire le visa !', author: "Béatrice Lacailles", visible: false, count: 0, comments: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
      {title: 'L\'Egypte', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721342-egypte.jpg', text: 'Une des 7 merveilles du monde antique est présente ici ! En effet les pyramides d\'Egypte n\'attendent plus que vous … Monter à chameaux et en avant dans le désert ! Faites une étape au Caire, sur le Nil et n\'oubliez pas de faire un coucou au phare d\'Alexandrie !' +
      ' Budget moyen, Voyage qui en vaut le détour ! attention aux tempêtes de sable !', author: "Roger Toupet", visible: false, count: 0, comments: [{name: 'admin', avis: "", note: 5},{name: 'admin', avis: "", note: 4}]},
      {title: 'La Nouvelle Zélande', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721943-nz.jpg', text: 'Bienvenue au pays du Seigneur des Anneaux ! Paysages sauvages à perte de vue, faune et flore réunie ! C\'est un lieu idéal pour se couper du monde, se détendre et profiter de la nature !!' +
      ' Equipement : une carte, insecticides, jumelles…', author: "Martine Monroche", visible: false, count: 0, comments: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
      {title: 'L\'Argentine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721333-argentine.jpg', text: 'Lancez-vous dans l\'aventure ! l\'Argentine est pleine de surprises !! Parcs nationaux, cascades, théâtres … Une excursion incroyable à ne pas manquer ! Accueil chaleureux en dégustant un provoleta… que du bonheur !', author: "Quentin Azert", visible: false, count: 0, comments: [{name: 'admin', avis: "", note: 3},{name: 'admin', avis: "", note: 3}]},
    ],
    
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
    add_avis: (state, payload) =>{
      state.avis.push({
        name: payload.name,
        avis: payload.avis,
      
      })
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
    suppr_articles: (state, index) =>{
      state.articles.splice(index, 1)
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
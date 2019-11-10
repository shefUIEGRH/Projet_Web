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
      'Equipement : Appareil photo.', author: "Amelie Bokmart", visible: false, count: 0, comments: [{name: 'Liftu', avis: "Trop cool la france , Woaw !!", note: 5},{name: 'Alaké', avis: " Cher mais superbes paysages ! Je recommande !", note: 3},{name: 'Yrla', avis: "Pollution, embouteillages, trop de monde, déçu...", note: 1}]},
      {title: 'La Chine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721338-chine.jpg', text: 'Plus grand pays d\'Asie orientale avec trois espaces maritimes et ses plus d\'1 milliards d\'habitants. Le climat est rude et beaucoup de chinois sont encore ruraux. Cependant la Chine a des grandes métropoles mondiales. A ne pas manquer : Shanghai et la cité interdite de Pékin !\n' +
      'Prenez des forces et entre deux ou trois nems et nouilles allez parcourir la grande Muraille de Chi', author: "Jean Dupont", visible: false, count: 0, comments: [{name: 'Newlot', avis: "Trop de monde avec leurs masques, rues bondées et Etat strict.", note: 2},{name: 'Anakin', avis: "Villes très propres. Pays bien développé et moderne !", note: 4}]},
      {title: 'Les Etats-Unis', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721375-usa.jpg', text: 'C\'est un très grand pays qu\'on ne peut pas tout visiter en une seule fois. Petit conseil : faites un road trip !! La cote Ouest avec LA, San Francisco, les Grands Canyons et allez dépenser votre argent au Casino de Las Vegas ! La cote Est avec la capitale Washington et l\'incontournable New York !!' +
      ' Equipement : de quoi Alimenter vos réseaux sociaux et pleins de dollars à dépenser ! N\'oubliez pas de faire le visa !', author: "Béatrice Lacailles", visible: false, count: 0, comments: [{name: 'K4L', avis: "Super road trip ! Paysages diverses et magnifiques, avec une météo top ! Je compte y retourner!", note: 5},{name: 'Philemon', avis: "Un super voyage de noces concocté sur mesure par une conseillère à notre écoute. Nous avons apprécié l'accueil dans l'agence et l'ensemble des prestations proposées lors de notre voyage et quelques petites attentions qui font toute la différence. Un grand merci !!!", note: 4}]},
      {title: 'L\'Egypte', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721342-egypte.jpg', text: 'Une des 7 merveilles du monde antique est présente ici ! En effet les pyramides d\'Egypte n\'attendent plus que vous … Monter à chameaux et en avant dans le désert ! Faites une étape au Caire, sur le Nil et n\'oubliez pas de faire un coucou au phare d\'Alexandrie !' +
      ' Budget moyen, Voyage qui en vaut le détour ! attention aux tempêtes de sable !', author: "Roger Toupet", visible: false, count: 0, comments: [{name: 'Simona', avis: "Croisière exceptionnelle sur le Steam Ship Sudan. Ce merveilleux bateau est ravissant, les cabines sont très confortables et le personnel particulièrement attentionné.", note: 5},{name: 'admin', avis: "Pays dangereux, il fait trop chaud et il y  des vols !! La ville du Caire est très sale, la rue est la poubelle, je suis choquée !", note: 1},{name: 'Léna', avis: "Un voyage essentiel. C’est maintenant qu’il faut y aller ! 5000 ans d’Histoire qui ont construit le Monde et notre civilisation.", note: 4}]},
      {title: 'La Nouvelle Zélande', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721943-nz.jpg', text: 'Bienvenue au pays du Seigneur des Anneaux ! Paysages sauvages à perte de vue, faune et flore réunie ! C\'est un lieu idéal pour se couper du monde, se détendre et profiter de la nature !!' +
      ' Equipement : une carte, insecticides, jumelles…', author: "Martine Monroche", visible: false, count: 0, comments: [{name: 'Xoda', avis: "Nous sommes globalement satisfaits de notre voyage. Les prestations étaient bonnes dans l'ensemble et nous avons apprécié l'environnement", note: 3},{name: 'modix', avis: "Nous avons effectuer un voyage magnifique ! La qualité des logements, des véhicules et des propositions du carnet de voyage ont été de qualité", note: 3}]},
      {title: 'L\'Argentine', src: 'https://image.noelshack.com/fichiers/2019/44/6/1572721333-argentine.jpg', text: 'Lancez-vous dans l\'aventure ! l\'Argentine est pleine de surprises !! Parcs nationaux, cascades, théâtres … Une excursion incroyable à ne pas manquer ! Accueil chaleureux en dégustant un provoleta… que du bonheur !', author: "Quentin Azert", visible: false, count: 0, comments: [{name: 'miam12', avis: "Voyage en Argentine fabuleux. De nombreuses découvertes et de nombreuses rencontres avec des gens passionnés et donc passionnant. Voyage personnalisé avec de multiples intentions qui nous ont été données témoignant que contrairement a certains organismes de voyage nous sommes blendes voyageurs du mondes et non pas des numéros.", note: 3},{name: 'Anne-Catherine', avis: "Paysages époustouflants, Argentins joyeux et toujours là pour nous aider, nourriture exceptionnellement bonne et très copieuse, et le tango un vrai spectacle à ne pas manquer.", note: 3}]},
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
        axios({url: '/api/login', data: user, method: 'POST' })
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
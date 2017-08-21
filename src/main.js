import * as firebase from 'firebase'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import AlertCmp from './components/Shared/Alert.vue'
import CfdCmp from './components/Shared/cfd_chart'
import DateFilter from './filters/date'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(Vuetify)
// Global components
Vue.component('alert-box', AlertCmp)
Vue.component('line-chart', CfdCmp)
// Global filter
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCUGCAOSl0qAcgV65gkNVrErbUxPXCX50w',
      authDomain: 'vue-project-d6451.firebaseapp.com',
      databaseURL: 'https://vue-project-d6451.firebaseio.com',
      projectId: 'vue-project-d6451',
      storageBucket: 'vue-project-d6451.appspot.com',
      messagingSenderId: '547265143735'
    })
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        const newUser = {
          id: user.uid
        }
        vm.$store.dispatch('setUser', newUser)
      } else {
        // vm.$router.push('/sign_in')
      }
    })
  }
})

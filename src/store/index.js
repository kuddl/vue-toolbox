import Vue from 'vue'
import Vuex from 'vuex'

import Navigation from './modules/Navigation'
import Meetups from './modules/Meetups'
import User from './modules/User'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    navigation: Navigation,
    meetups: Meetups,
    user: User
  }
})

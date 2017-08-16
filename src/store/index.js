import Vue from 'vue'
import Vuex from 'vuex'

import Navigation from './modules/Navigation'
import Meetups from './modules/Meetups'
import User from './modules/User'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    navigation: Navigation,
    meetups: Meetups,
    user: User
  },
  state: {
    error: null,
    loading: null
  },
  getters: {
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    }
  },
  actions: {
    clearError ({ commit }) {
      commit('clearError')
    }
  },
  mutations: {
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    clearError (state) {
      state.error = null
    }
  }
})

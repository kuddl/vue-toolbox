import Vue from 'vue'
import Vuex from 'vuex'

import Navigation from './modules/Navigation'
import Cfd from './modules/Cfd'
import User from './modules/User'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    navigation: Navigation,
    cfd: Cfd,
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
    clearError (state) {
      state.error = null
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  }
})

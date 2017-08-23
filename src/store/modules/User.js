import * as firebase from 'firebase'

const state = {
  user: null
}
const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}
const actions = {
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  },
  autoLogin ({ commit }, payload) {
    commit('setUser', payload)
  },
  signUserUp ({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
      user => {
        const newUser = {
          id: user.uid
        }
        commit('setLoading', false)
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
      )
  },
  signUserIn ({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
      user => {
        const newUser = {
          id: user.uid
        }
        commit('setLoading', false)
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
      )
  },
  logoutUser ({ commit }) {
    firebase.auth().signOut()
      .then(() => commit('setUser', null))
      .catch(
      error => {
        console.log(error)
      }
      )
  }
}
const getters = {
  user (state) {
    return state.user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

const state = {
  navigation: [
    { hideOnLoggedIn: false, title: 'Broz', uri: '/broz', icon: 'fingerprint' },
    { hideOnLoggedIn: false, title: 'Fox', uri: '/fox', icon: 'toys' },
    { hideOnLoggedIn: true, title: 'Sign In', uri: '/sign_in', icon: 'lock_open' },
    { hideOnLoggedIn: true, title: 'Register', uri: '/register', icon: 'face' }
  ]
}

const actions = {}
const mutations = {}

const getters = {
  navigation (state) {
    return state.navigation
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

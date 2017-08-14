const state = {
  navigation: [
    { showOnLoggedIn: true, title: 'Broz', uri: '/broz', icon: 'search' },
    { showOnLoggedIn: true, title: 'Fox', uri: '/fox', icon: 'favorite' },
    { title: 'Sign In', uri: '/sign_in', icon: 'more_vert' },
    { title: 'Register', uri: '/register', icon: 'more_vert' },
    { showOnLoggedIn: true, title: 'Logout', uri: '/', icon: 'favorite' }
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

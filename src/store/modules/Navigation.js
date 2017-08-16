const state = {
  navigation: [
    { title: 'Broz', uri: '/broz', icon: 'search' },
    { title: 'Fox', uri: '/fox', icon: 'favorite' },
    { hideOnLoggedIn: true, title: 'Sign In', uri: '/sign_in', icon: 'more_vert' },
    { hideOnLoggedIn: true, title: 'Register', uri: '/register', icon: 'more_vert' },
    { hideOnLoggedIn: false, title: 'Logout', uri: '/sign_out', icon: 'favorite' }
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

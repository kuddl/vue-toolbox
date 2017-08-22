import { store } from '../store'

export default (from, to, next) => {
  if (store.getters.user) {
    next()
  } else {
    next('/sign_in')
  }
}

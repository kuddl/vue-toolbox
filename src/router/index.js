import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Broz from '@/components/Broz/Broz.vue'
import Fox from '@/components/Fox/Fox.vue'
import SignIn from '@/components/Auth/SignIn.vue'
import Register from '@/components/Auth/Register.vue'
import AuthGuard from './auth_guard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/broz',
      name: 'Broz',
      component: Broz,
      beforeEnter: AuthGuard
    },
    {
      path: '/fox',
      name: 'Fox',
      component: Fox
    },
    {
      path: '/sign_in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
import Note from '@/components/Note'
import Profile from '@/components/Profile'

import Auth from '@/components/Auth/index'
import Signin from '@/components/Auth/Signin'
import EmailSignin from '@/components/Auth/EmailSignin'
import Signup from '@/components/Auth/Signup'

import { auth } from '@/firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/note',
      component: Note,
      beforeEnter: (to, from, next) => {
        if (auth.currentUser === null) {
          next('/')
        }
        next()
      }
    },
    {
      path: '/profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        if (auth.currentUser === null) {
          next('/')
        }
        next()
      }
    },
    {
      path: '/auth',
      component: Auth,
      children: [
        {
          path: '',
          component: Signin
        },
        {
          path: 'signup',
          component: Signup
        },
        {
          path: 'signin',
          component: EmailSignin
        }
      ]
    }
  ]
})

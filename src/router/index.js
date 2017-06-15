import Vue from 'vue'
import Router from 'vue-router'
import Note from '@/components/Note'
import Auth from '@/components/Auth/index'
import Signin from '@/components/Auth/Signin'
import EmailSignin from '@/components/Auth/EmailSignin'
import Signup from '@/components/Auth/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/note',
      component: Note
    },
    {
      path: '/',
      component: Auth,
      children: [
        {
          path: '/',
          component: Signin
        },
        {
          path: '/signup',
          component: Signup
        },
        {
          path: '/signin',
          component: EmailSignin
        }
      ]
    }
  ]
})

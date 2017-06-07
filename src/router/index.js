import Vue from 'vue'
import Router from 'vue-router'
import Note from '@/components/Note'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Note
    },
    {
      path: '/note',
      component: Note
    },
    {
      path: '/auth',
      component: Auth
    }
  ]
})

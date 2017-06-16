import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import { auth } from '@/firebase'
import VeeValidate from 'vee-validate'

Vue.use(VueFire)
Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$router.push('/note')
      } else {
        this.$router.push('/auth')
      }
    })
  }
})

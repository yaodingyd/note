import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // var displayName = user.displayName
        // var email = user.email
        // var emailVerified = user.emailVerified
        // var photoURL = user.photoURL
        // var isAnonymous = user.isAnonymous
        // var uid = user.uid
        // var providerData = user.providerData
        console.log(user)
        this.$router.push('/')
        // ...
      } else {
        // User is signed out.
        // ...
        this.$router.push('/')
      }
    })
  }
})

<template>
  <div>
    <button @click="signIn">Sign In</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    signIn () {
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken
        console.log(result)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

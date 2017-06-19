<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="has-text-centered notification is-primary">
          <h1 class="title">
            Sign In
          </h1>
          <button class="button is-danger block" @click="googleSignin">Google Sign In</button>
          <button class="button is-warning block" @click="emailSignin">Email Sign In</button>
        </div>
      </div>
    </div>
    <div class="has-text-centered">
      <router-link to="/auth/signup">Want to use an Email account? Sign Up</router-link>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    googleSignin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken
        console.log(result)
      }).catch(function (error) {
        console.log(error)
      })
    },
    emailSignin () {
      this.$router.push('/auth/signin')
    }
  }
}
</script>

<style scoped>
  button {
    display: block;
    margin: 0 auto;
    width: 10rem;
  }
</style>

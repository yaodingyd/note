<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="has-text-centered notification is-primary">
          <h1 class="title">
            Sign Up
          </h1>

          <div class="field">
            <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="example@gmail.com" v-model="email">
              <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
              <span class="icon is-small is-right"><i class="fa fa-warning"></i></span>
            </p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="password" v-model="password">
              <span class="icon is-small is-left"><i class="fa fa-key"></i></span>
              <span class="icon is-small is-right"><i class="fa fa-warning"></i></span>
            </p>
          </div>





          <div class="field is-grouped">
            <p class="control">
              <button class="button is-info is-inverted" @click="signUp">Submit</button>
            </p>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from '@/firebase'
// import router from 'vue-router'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      auth.createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode + errorMessage)
      })
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

  footer {
    position: fixed;
    bottom: 0;
  }
</style>


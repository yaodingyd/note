<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="notification is-primary">
          <h1 class="title">
            Email Sign In
          </h1>

          <div class="field">
            <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="example@gmail.com" v-model="email" v-validate="'required|email'" name="email">
              <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
              <span v-show="errors.has('email')" class="icon is-small is-right"><i class="fa fa-warning error-input"></i></span>
            </p>
            <p v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="password" v-model="password" v-validate="'required|min:6'" name="password">
              <span class="icon is-small is-left"><i class="fa fa-key"></i></span>
              <span v-show="errors.has('password')" class="icon is-small is-right"><i class="fa fa-warning error-input"></i></span>
            </p>
            <p v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</p>
          </div>

          <div class="field submit">
              <button class="button is-danger is-fullwidth" @click="signIn" :disabled="disabled">Submit</button>
              <p v-show="firebaseError" class="help is-danger">{{ firebaseError }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from '@/firebase'

export default {
  data () {
    return {
      email: '',
      password: '',
      firebaseError: ''
    }
  },
  computed: {
    pristine () {
      const fields = this.fields
      return Object.keys(fields).some((key) => {
        return fields[key].pristine
      })
    },
    disabled () {
      return this.errors.any() || this.pristine
    }
  },
  methods: {
    signIn () {
      auth.signInWithEmailAndPassword(this.email, this.password).catch(error => {
        this.firebaseError = error.message
      })
    }
  }
}
</script>

<style scoped>

</style>

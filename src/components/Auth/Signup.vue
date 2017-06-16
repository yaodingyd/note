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
              <input class="input" type="text" placeholder="example@gmail.com" v-model="email" v-validate="'required|email'" name="email">
              <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
              <span v-show="errors.has('email')" class="icon is-small is-right"><i class="fa fa-warning error-input"></i></span>
            </p>
            <p v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="password" v-model="password" v-validate="'min:6'" name="password">
              <span class="icon is-small is-left"><i class="fa fa-key"></i></span>
              <span v-show="errors.has('password')" class="icon is-small is-right"><i class="fa fa-warning error-input"></i></span>
            </p>
            <p v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</p>
          </div>

          <div class="field">
            <label class="label">Password Confirm</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="password" v-validate="'confirmed:password'" v-model="passwordConfirm" name="password_confirm">
              <span class="icon is-small is-left"><i class="fa fa-legal"></i></span>
              <span v-show="errors.has('password_confirm')" class="icon is-small is-right"><i class="fa fa-warning error-input"></i></span>
            </p>
            <p v-show="errors.has('password_confirm')" class="help is-danger">{{ errors.first('password_confirm') }}</p>
          </div>

          <div class="field submit">
              <button class="button is-danger is-fullwidth" @click="signUp" :disabled="disabled">Submit</button>
              <p v-show="firebaseError" class="help is-danger">{{ firebaseError }}</p>
          </div>

        </div>
      </div>

      <div class="has-text-centered">
        <router-link to="/auth">Already has an account? Sign in.</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from '@/firebase'
import { Validator } from 'vee-validate'

const dictionary = {
  en: {
    messages: {
      confirmed: () => 'Password does not match the confirm password.'
    }
  }
}

Validator.updateDictionary(dictionary)

export default {
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
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
    signUp () {
      auth.createUserWithEmailAndPassword(this.email, this.password).catch(error => {
        this.firebaseError = error.message
      })
    }
  }
}
</script>

<style scoped>
  .submit {
    margin-top: 2rem;
  }

  .error-input{
    color: crimson;
  }
</style>

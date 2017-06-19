<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item is-brand">Note</a>
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Note
        </h1>
        <h2 class="subtitle">
          A note app build with Vue, Bulma and Firebase
        </h2>
        <p>Realtime editing, save on the fly</p>
        <div class="sign-in">
          <span class="tag is-info is-medium">
            <router-link to="/auth">Sign In</router-link>
          </span>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container has-text-centered">
        YD 2017
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from '@/firebase'

export default {
  methods: {
    logOut () {
      auth.signOut()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

.is-brand {
  font-family: 'Indie Flower', cursive;
  font-size: 2rem;
}

.sign-in {
  margin-top: 2rem;
}
</style>


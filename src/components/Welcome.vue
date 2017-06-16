<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">Note</a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-active">
              Home
            </a>
            <a class="nav-item">
              Examples
            </a>
            <a class="nav-item">
              Documentation
            </a>
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
          Made with Vue and Bulma
        </h2>
        <button class="button is-danger is-inverted is-outlined" @click="logOut">Log out</button>
        <div>
          <router-link to="/auth">Sign In</router-link>
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

</style>


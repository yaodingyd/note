<template>
  <div class="note-page-container">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item is-brand">Note</a>
        </div>

        <div class="nav-center">
          <span class="nav-item">
            <button class="button is-success is-outlined" @click="openModal">Add note</button>
          </span>
        </div>

        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item">
            <router-link to="/profile">Profile</router-link>
          </a>
          <span class="nav-item">
            <button class="button is-inverted is-outlined" @click="signout">Log Out</button>
          </span>
        </div>
      </div>
    </header>

    <modal :visible="visible" @modalClose="closeModal" @modalSave="addItem">
      <div class="notification is-info">
        <div class="field">
          <label class="label">Title</label>
          <p class="control">
            <input class="input" type="text" v-model.trim="title">
          </p>
        </div>

        <div class="field">
          <label class="label">Text</label>
          <p class="control">
            <textarea class="input add-note"  v-model.trim="body"></textarea>
          </p>
        </div>
      </div>
    </modal>

    <section class="hero is-primary note-hero" v-if="notes.length === 0">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Want to add some notes?
          </h1>
          <h2 class="subtitle">
            Click "Add Note" button
          </h2>
        </div>
      </div>
    </section>

    <div class="note-container">
      <article class="message note" v-for="(item, index) in notes">
        <div class="message-header">
          <input class="note-title" @input="updateItemTitle(item, $event.target.value)" v-model="item.title">
          <button class="delete"  @click="removeItem(item)"></button>
        </div>
        <textarea class="message-body" @input="updateItemBody(item, $event.target.value)" v-model="item.body">
        </textarea>
      </article>
    </div>

  </div>
</template>

<script>
import { db, auth } from '@/firebase'
import modal from './Modal'

export default {
  components: {
    modal
  },

  data () {
    return {
      item: '',
      title: '',
      body: '',
      visible: false
    }
  },

  firebase () {
    return {
      notes: db.ref(auth.currentUser.uid) // change to user id
    }
  },

  methods: {
    addItem () {
      if (this.title && this.body) {
        this.$firebaseRefs.notes.push({
          title: this.title,
          body: this.body
        })
      }
      this.title = ''
      this.body = ''
      this.visible = false
    },

    updateItemBody (item, text) {
      this.$firebaseRefs.notes.child(item['.key']).child('body').set(text)
    },

    updateItemTitle (item, text) {
      this.$firebaseRefs.notes.child(item['.key']).child('title').set(text)
    },

    removeItem (item) {
      this.$firebaseRefs.notes.child(item['.key']).remove()
    },

    signout () {
      auth.signOut()
    },

    openModal () {
      this.visible = true
    },

    closeModal () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
textarea {
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  resize: none;
}

.add-note {
  border-color: #b5b5b5;
  background: #fff;
  min-height: 100px;
}

.note-page-container{
  height: 100vh;
}

.note-container {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}

.note {
  flex: 0 0 30%;
}

.note-title {
  border: none;
  background: transparent;
  color: #fff;
}

.note-hero {
  margin-top: 3rem;
}

.message-body {
  min-height: 200px;
}
</style>

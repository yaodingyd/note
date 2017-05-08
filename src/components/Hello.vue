<template>
  <div>
    <input v-model.trim="item" @keyup.enter="addItem">
    <button @click="addItem">Add note</button>
    <hr>
    <ul>
      <li v-for="item in notes">
        <input :value="item.name" @input="updateItem(item, $event.target.value)" class="uneditable" @click="makeInputEditable($event.target)" @blur="makeInputUneditable($event.target)" >
        <button @click="removeItem(item)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import db from '@/db'

export default {
  name: 'hello',
  data () {
    return {
      item: ''
    }
  },
  firebase: function () {
    return {
      notes: db.ref('notes')
    }
  },
  methods: {
    addItem () {
      if (this.item) {
        this.$firebaseRefs.notes.push({
          name: this.item
        })
      }
      this.item = ''
    },
    updateItem (item, text) {
      this.$firebaseRefs.notes.child(item['.key']).child('name').set(text)
    },
    removeItem (item) {
      this.$firebaseRefs.notes.child(item['.key']).remove()
    },
    makeInputEditable (element) {
      element.className = 'editable'
    },
    makeInputUneditable (element) {
      element.className = 'uneditable'
    }
  }
}
</script>

<style scoped>
  .uneditable {
    border: none;
  }
  .editable {
    border: 1px solid #000;
  }
</style>

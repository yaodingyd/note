<template>
  <div class="modal is-active" v-show="show">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-success" @click="save">{{ saveText }}</a>
        <a class="button" @click="close">{{ cancelText }}</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Create new note'
    },

    saveText: {
      type: String,
      default: 'Save'
    },

    cancelText: {
      type: String,
      default: 'Cancel'
    },

    visible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    save () {
      this.$emit('modalSave')
    },

    close () {
      this.show = false
      this.$emit('modalClose')
    }
  },

  watch: {
    visible (val) {
      this.show = val
    }
  }

}
</script>

<style>

</style>

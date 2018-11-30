<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <EditForm />
  </div>
</template>


<script>
  import store from 'store.js'
  import EditForm from './components/EditForm.vue'
  export default {
    name: 'app',
    commponents: {
      EditForm
    },
    computed: {
      // sync local message and store message
      message() {
        return this.$store.getters.message
      }
    }
  }
</script>
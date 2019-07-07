<template>
  <div id="app">
    <div>{{moduleB.b}}</div>
    <Control></Control>
  </div>
</template>

<script>
import Control from './Control.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Control
  },
  computed: {
    ...mapState(['moduleB']),
  }
}
</script>

<style lang="scss">
</style>

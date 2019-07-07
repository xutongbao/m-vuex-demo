<template>
  <div id="app">
    <div>{{count}}</div>
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
    ...mapState(['count']),
  }
}
</script>

<style lang="scss">
</style>

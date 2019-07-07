<template>
  <div id="app">
    <div>{{moduleA.count}}, {{moduleB.count}}</div>
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
    ...mapState(['moduleA', 'moduleB']),
  },
}
</script>

<style lang="scss">
</style>

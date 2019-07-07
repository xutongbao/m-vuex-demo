<template>
  <div id="app">
    <div>{{a.count}}, {{b.count}}</div>
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
    ...mapState(['a', 'b'])
  },
}
</script>

<style lang="scss">
</style>

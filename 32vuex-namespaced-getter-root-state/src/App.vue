<template>
  <div id="app">
    <div>{{moduleASumWithRootCount}}, {{moduleBSumWithRootCount}}</div>
    <Control></Control>
  </div>
</template>

<script>
import Control from './Control.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Control
  },
  computed: {
    ...mapGetters({
      'moduleASumWithRootCount': 'moduleA/sumWithRootCount', 
      'moduleBSumWithRootCount': 'moduleB/sumWithRootCount'
    }),
  },
}
</script>

<style lang="scss">
</style>

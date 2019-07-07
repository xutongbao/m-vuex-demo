<template>
  <div id="app">
    <div>{{moduleA.moduleAChildModule.moduleAChildModuleCount}}</div>
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
    ...mapState(['moduleA']),
  },
}
</script>

<style lang="scss">
</style>

<template>
  <div id="app">
    <div>{{count}}, {{count2}}</div>
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
    ...mapState({
      count: state => state.moduleA.moduleAChildModule.count
    }),    
    ...mapState('moduleA/moduleAChildModule', {
      count2: state => state.count
    }),
  }
}
</script>

<style lang="scss">
</style>
